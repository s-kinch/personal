import { useEffect } from 'react'
import Link from 'next/link'
import Head from '@components/head'
import Layout from '@components/Layout'
import fonts from '@utils/fonts'

const Index = () => {
    useEffect(() => {
        fonts()
    }, [])
    return (
        <div className="index blog">
            <Head>
                <title>Sinclair Kinch</title>
            </Head>
            <h1>hi!</h1>
            <ul>
                <li>
                    <Link href="/blog">crossword blog</Link>
                </li>
                <li>
                    <Link href="/lettercounty">lettercounty</Link>
                </li>
            </ul>
        </div>
    )
}

export default Index
