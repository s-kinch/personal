import Head from '@components/head'
import Layout from '@components/Layout'
import Post from '@components/Post'
import { fetchBlogPosts, fetchBlogPost } from '@utils/contentfulPosts'

export default function Slug({ post }) {
    return (
        <Layout>
            <Head>
                <title>{post.fields.title}</title>
            </Head>
            <Post {...post.fields} />
        </Layout>
    )
}

export async function getStaticProps(context) {
    // Fetch all results where `fields.slug` is equal to the `slug` param
    const result = await fetchBlogPost({ slug: context.params.slug })

    // Since `slug` was set to be a unique field, we can be confident that
    // the only result in the query is the correct post.
    const post = result.pop()

    // If nothing was found, return an empty object for props, or else there would
    // be an error when Next tries to serialize an `undefined` value to JSON.
    if (!post) {
        return { props: {} }
    }

    // Return the post as props
    return {
        props: {
            post,
        },
    }
}

export async function getStaticPaths() {
    // Query Contentful for all blog posts in the space
    const posts = await fetchBlogPosts()

    // Map the result of that query to a list of slugs.
    // This will give Next the list of all blog post pages that need to be
    // rendered at build time.
    const paths = posts.map(({ fields: { slug } }) => ({ params: { slug } }))

    return {
        paths,
        fallback: false,
    }
}
