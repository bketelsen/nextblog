import { formatSlug, getAllFilesFrontMatter, getFileBySlug } from '@/lib/mdx'

import { BlogSEO } from '@/components/SEO'
import PostContent from '@/components/PostContent'
import { flattenArticle } from '@/lib/flatten'
import fs from 'fs'
import generateRss from '@/lib/generate-rss'
import siteMetadata from '@/data/siteMetadata'

function Post({ post }) {
  const { id } = post
  const slug = id

  return (
    <div>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${slug}`} {...post} />
      <PostContent post={post} />
    </div>
  )
}

export async function getStaticPaths() {
  const posts = await getAllFilesFrontMatter('articles.json')
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p.id).split('/'),
      },
    })),
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('articles.json')
  const postIndex = allPosts.findIndex((post) => formatSlug(post.id) === params.slug.join('/'))
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getFileBySlug('articles', params.slug.join('/'))
  const flatPost = await flattenArticle(post)
  // rss

  const rss = generateRss(allPosts, 'articles')
  fs.writeFileSync('./public/feed.xml', rss)

  return { props: { post: flatPost, prev, next }, revalidate: 60 }
}

export default Post
