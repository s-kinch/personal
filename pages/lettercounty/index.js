import { useEffect, useState, useRef } from 'react'
import {
    backArrowIcon,
    clipboardIcon,
    forwardArrowIcon,
} from '../../utils/icons'
import copyToClipboard from '../../utils/copyToClipboard'

function App() {
    const textRef = useRef()

    const [copyToast, setCopyToast] = useState(null)

    const [stackIndex, setStackIndex] = useState(0)
    const [stack, setStack] = useState([
        {
            lines: [''],
            selectionStart: { line: 0, char: 0 },
            selectionEnd: { line: 0, char: 0 },
        },
    ])

    const [minHeight, setMinHeight] = useState(0)
    useEffect(() => {
        setMinHeight(window.innerHeight)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setMinHeight(window.innerHeight)
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleCopyToClipboard = () => {
        const text = stack[stackIndex].lines.join('\n')
        if (text.length === 0) {
            setCopyToast('nothing to copy!')
        } else {
            const copied = copyToClipboard(text)
            setCopyToast(copied ? 'copied to clipboard' : 'copy failed :(')
        }
        setTimeout(() => {
            setCopyToast(null)
        }, 1500)
    }

    const undo = () => {
        if (stackIndex > 0) {
            setStackIndex(stackIndex - 1)
        }
    }

    const redo = () => {
        if (stack.length - 1 > stackIndex) {
            setStackIndex(stackIndex + 1)
        }
    }

    useEffect(() => {
        const undoAndRedoOnKeyEvents = (event) => {
            if (
                (event.ctrlKey && event.key === 'y') ||
                (event.shiftKey && event.metaKey && event.key) === 'z'
            ) {
                event.preventDefault()
                redo()
            } else if ((event.ctrlKey || event.metaKey) && event.key === 'z') {
                event.preventDefault()
                undo()
            }
        }
        document.addEventListener('keydown', undoAndRedoOnKeyEvents)

        return () => {
            document.removeEventListener('keydown', undoAndRedoOnKeyEvents)
        }
    }, [stackIndex])

    const handleChange = (e) => {
        const { value, selectionStart: start, selectionEnd: end } = e.target

        const currentLines = value.split('\n')

        const lineLengths = currentLines.map((line) => line.length)
        const lineLengthsCumulative = lineLengths.reduce((acc, length, i) => {
            if (i === 0) return [length + 1]
            return [...acc, length + 1 + acc[i - 1]]
        }, [])

        const wordsAndMaxLength = currentLines.reduce(
            (acc, line) => {
                const word = line.split(/[^a-zA-Z]+/).join('')
                const length = word.length
                return {
                    ...acc,
                    lines: [...acc.lines, word],
                    max: Math.max(acc.max, length),
                }
            },
            {
                max: 0,
                lines: [],
            }
        )

        let selectionStart, selectionEnd

        for (let i = 0; i < lineLengthsCumulative.length; i++) {
            const wordLength = wordsAndMaxLength.lines[i].length

            if (
                (i === 0 || lineLengthsCumulative[i - 1] < start) &&
                lineLengthsCumulative[i] >= start
            ) {
                const isSelectionWithinWord =
                    start - (lineLengthsCumulative[i - 1] || 0) <= wordLength

                const isNewLineStarted =
                    start === (lineLengthsCumulative[i] || 0)

                if (!isNewLineStarted) {
                    if (isSelectionWithinWord) {
                        selectionStart = {
                            line: i,
                            char: start - (lineLengthsCumulative[i - 1] || 0),
                        }
                    } else {
                        selectionStart = {
                            line: i,
                            char: wordLength,
                        }
                    }
                } else {
                    selectionStart = {
                        line: i + 1,
                        char: 0,
                    }
                }
            }

            if (
                (i === 0 || lineLengthsCumulative[i - 1] < end) &&
                lineLengthsCumulative[i] >= end
            ) {
                const isSelectionWithinWord =
                    end - (lineLengthsCumulative[i - 1] || 0) <= wordLength

                const isNewLineStarted = end === (lineLengthsCumulative[i] || 0)

                if (!isNewLineStarted) {
                    if (isSelectionWithinWord) {
                        selectionEnd = {
                            line: i,
                            char: end - (lineLengthsCumulative[i - 1] || 0),
                        }
                    } else {
                        selectionEnd = {
                            line: i,
                            char: wordLength,
                        }
                    }
                } else {
                    selectionEnd = {
                        line: i + 1,
                        char: 0,
                    }
                }
            }
        }

        const newLines = wordsAndMaxLength.lines.map((line) => {
            const numSpaces = wordsAndMaxLength.max + 1 - line.length
            const spaces = new Array(numSpaces).fill(' ')
            if (line.length === 0) return line
            return `${line}${spaces.join('')}(${line.length})`
        })

        setStack([
            ...stack.slice(0, stackIndex + 1),
            {
                lines: newLines,
                selectionStart,
                selectionEnd,
            },
        ])
        setStackIndex(stackIndex + 1)
    }

    useEffect(() => {
        const { lines, selectionStart, selectionEnd } = stack[stackIndex]

        const startPadding = lines
            .slice(0, selectionStart.line)
            .reduce((acc, curr) => acc + curr.length + 1, 0)
        const endPadding = lines
            .slice(0, selectionEnd.line)
            .reduce((acc, curr) => acc + curr.length + 1, 0)

        textRef.current.setSelectionRange(
            startPadding + selectionStart.char,
            endPadding + selectionEnd.char
        )
    }, [stackIndex, textRef])

    return (
        <div className="lettercounty" style={{ minHeight: minHeight }}>
            <header className="App-header">
                <span>{copyToast || 'lettercounty'}</span>
                <div className="buttons-container">
                    <div
                        id="undoContainer"
                        className={`button-container ${
                            stackIndex === 0 ? 'disabled' : ''
                        }`}
                        onClick={undo}
                        title="Undo"
                    >
                        {backArrowIcon}
                    </div>

                    <div
                        id="redoContainer"
                        className={`button-container ${
                            stackIndex === stack.length - 1 ? 'disabled' : ''
                        }`}
                        onClick={redo}
                        title="Redo"
                    >
                        {forwardArrowIcon}
                    </div>

                    <div
                        id="contentPasteContainer"
                        className="button-container"
                        onClick={handleCopyToClipboard}
                        title="Copy to clipboard"
                    >
                        {clipboardIcon}
                    </div>
                </div>
            </header>
            <textarea
                type="text"
                id="my-good-textarea"
                className="my-good-textarea"
                value={stack[stackIndex].lines.join('\n')}
                onChange={handleChange}
                ref={textRef}
                tabIndex="0"
                autoFocus
                spellCheck={false}
            />
        </div>
    )
}

export default App
