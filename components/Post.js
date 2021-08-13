import { useState } from 'react'
import Link from 'next/link'
import {
    BLOCKS,
    MARKS,
    // INLINES,
} from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Bold = ({ children }) => <span className="bold">{children}</span>
// const Text = ({ children }) => <p className="align-center">{children}</p>

const Post = ({ slug, date, title, tags, body, puz, appletEmbed, fold }) => {
    const [puzzOpen, setPuzzOpen] = useState(false)

    const foldIndex = body?.content?.findIndex(
        ({ nodeType }) => nodeType === 'hr'
    )

    const options = {
        renderMark: {
            [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
        },
        renderNode: {
            [BLOCKS.HR]: (node) => {
                // Don't show 'read more' if it's allll under the fold
                return fold && foldIndex > 0 ? (
                    <p>
                        <Link href={`/blog/${slug}`}>
                            <a>read more</a>
                        </Link>
                    </p>
                ) : null
            },
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const { title, description, file } = node.data.target.fields
                const mimeType = file.contentType
                const mimeGroup = mimeType.split('/')[0]

                switch (mimeGroup) {
                    case 'image':
                        return (
                            <img
                                title={title || null}
                                alt={description || null}
                                src={file.url}
                            />
                        )
                    case 'application':
                        return (
                            <a alt={description || null} href={file.url}>
                                {title || file.details.fileName}
                            </a>
                        )
                    default:
                        return (
                            <span
                                style={{
                                    backgroundColor: 'red',
                                    color: 'white',
                                }}
                            >
                                {' '}
                                {mimeType} embedded asset{' '}
                            </span>
                        )
                }
            },
        },
    }

    console.log({ body })

    return (
        <div className="post">
            <h2>
                {fold ? (
                    <Link href={`/blog/${slug}`}>
                        <a>{title}</a>
                    </Link>
                ) : (
                    title
                )}
            </h2>
            {date && (
                <h3>
                    {new Date(date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                    {tags &&
                        tags.map((tag, i) => (
                            <span className="tag" key={i}>
                                {tag}
                            </span>
                        ))}
                </h3>
            )}
            <div className="post-body">
                {body &&
                    documentToReactComponents(
                        fold
                            ? {
                                  ...body,
                                  content:
                                      foldIndex > -1
                                          ? body.content.slice(0, foldIndex + 1)
                                          : body.content,
                              }
                            : body,
                        options
                    )}
            </div>
            <div className="puzzbuttons">
                {fold && appletEmbed && (
                    <button
                        className="puzzbutton"
                        onClick={() => {
                            setPuzzOpen(!puzzOpen)
                        }}
                    >
                        {puzzOpen ? 'close' : 'play'}
                    </button>
                )}
                {puz?.fields?.file?.url && (
                    <a href={`https:${puz.fields.file.url}`} download>
                        <button className="puzzbutton">.puz</button>
                    </a>
                )}
                {appletEmbed && (
                    <span
                        className={`puzzleme ${
                            puzzOpen ? 'puzzOpen' : 'puzzClosed'
                        }`}
                        {...((!fold || puzzOpen) && {
                            dangerouslySetInnerHTML: {
                                __html: appletEmbed,
                            },
                        })}
                    />
                )}
            </div>
        </div>
    )
}

export default Post
