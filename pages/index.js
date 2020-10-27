import Head from '@components/head'
import Layout from '@components/Layout'
import Post from '@components/Post'
import { fetchBlogPosts } from '@utils/contentfulPosts'

const Index = ({ posts }) => (
    <Layout>
        <Head>
            <title>Sinclair Kinch</title>
        </Head>
        <div className="posts">
            {posts.map((p) => {
                return <Post key={p.slug} {...p} />
            })}
        </div>
    </Layout>
)

export async function getStaticProps() {
    const res = await fetchBlogPosts()
    const posts = await res.map((p) => {
        return p.fields
    })

    return {
        props: {
            posts,
        },
    }
}

export default Index
