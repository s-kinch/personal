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

    // console.log({ body })

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
                {documentToReactComponents(body, options)}
            </div>
        </div>
    )
}

export default Post
