import { Fragment, useEffect, useRef } from 'react'
import Link from 'next/link'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import ReactHtmlParser, {
    processNodes,
    convertNodeToElement,
} from 'react-html-parser'

const Post = ({ slug, date, title, tags, body }) => {
    const iframeRef = useRef()
    useEffect(() => {
        if (iframeRef.current) {
            console.log('here')
            iframeRef.current.focus()
        }
    }, [])

    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
                return (
                    <p>
                        {children.map((c, i) =>
                            c.slice(0, 7) !== '<iframe' ? (
                                <Fragment key={i}>{c}</Fragment>
                            ) : (
                                <span
                                    key={i}
                                    ref={iframeRef}
                                    className="puzzleme"
                                    dangerouslySetInnerHTML={{ __html: c }}
                                />
                            )
                        )}
                    </p>
                )
            },
        },
    }

    return (
        <div className="post">
            <h2>
                {/* <Link href={`/blog/${slug}`}>
                <a> */}
                {title}
                {/* </a>
                </Link> */}
            </h2>
            {date && (
                <h3>
                    {new Date(date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </h3>
            )}
            <div>{documentToReactComponents(body, options)}</div>
            <div className="tags">{tags && tags.join(', ')}</div>
        </div>
    )
}

export default Post
