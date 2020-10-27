import { Fragment } from 'react'
import Link from 'next/link'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
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

const Post = ({ slug, date, title, tags, body }) => {
    return (
        <div className="post">
            <h3>
                {date &&
                    new Date(date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
            </h3>
            <h2>
                <Link href={`/blog/${slug}`}>
                    <a>{title}</a>
                </Link>
            </h2>

            <div>{documentToReactComponents(body, options)}</div>
            <div className="tags">{tags && tags.join(', ')}</div>
        </div>
    )
}

export default Post
