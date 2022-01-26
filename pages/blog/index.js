import { useEffect } from 'react'
import Head from '@components/head'
import Layout from '@components/Layout'
import Post from '@components/Post'
import fonts from '@utils/fonts'
import { fetchBlogPosts } from '@utils/contentfulPosts'

const Index = ({ posts }) => {
    useEffect(() => {
        fonts()
    }, [])
    return (
        <div className="blog">
            <Layout>
                <Head>
                    <title>Sinclair Kinch</title>
                </Head>
                <div className="posts">
                    {posts.map((p) => {
                        return <Post key={p.slug} {...p} fold />
                    })}
                </div>
            </Layout>
        </div>
    )
}

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
