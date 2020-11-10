import { Fragment, useState } from 'react'
import Link from 'next/link'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import ReactHtmlParser, {
//     processNodes,
//     convertNodeToElement,
// } from 'react-html-parser'

const Post = ({ slug, date, title, tags, body, fold }) => {
    const [puzzOpen, setPuzzOpen] = useState(false)

    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
                return (
                    <p>
                        {children.map((c, i) =>
                            c.slice(0, 7) !== '<iframe' ? (
                                <Fragment key={i}>{c}</Fragment>
                            ) : (
                                <Fragment key={i}>
                                    {fold && (
                                        <button
                                            className="puzzbutton"
                                            onClick={() => {
                                                setPuzzOpen(!puzzOpen)
                                            }}
                                        >
                                            {puzzOpen ? 'close' : 'play'}
                                        </button>
                                    )}
                                    <span
                                        className={`puzzleme ${
                                            puzzOpen ? 'puzzOpen' : 'puzzClosed'
                                        }`}
                                        {...((!fold || puzzOpen) && {
                                            dangerouslySetInnerHTML: {
                                                __html: c,
                                            },
                                        })}
                                    />
                                </Fragment>
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
                </h3>
            )}
            <div>{documentToReactComponents(body, options)}</div>
            <div className="tags">{tags && tags.join(', ')}</div>
        </div>
    )
}

export default Post
