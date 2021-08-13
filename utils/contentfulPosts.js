const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
    space,
    accessToken,
})

export async function fetchBlogPosts() {
    const entries = await client.getEntries({
        content_type: 'blogPost',
        order: '-fields.date',
    })
    if (entries.items) return entries.items
    console.log(`Error getting blog posts.`)
}

export async function fetchBlogPost({ slug }) {
    const entries = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': slug,
    })
    if (entries.items) return entries.items
    console.log(`Error getting blog posts.`)
}
