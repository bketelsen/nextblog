import { formatSlug, processMDX } from '@/lib/mdx'
import { getArticle, getArticles } from '@/lib/queries'

import { BlogSEO } from '@/components/SEO'
import PostContent from '@/components/PostContent'
import fs from 'fs'
import generateRss from '@/lib/generate-rss'
import siteMetadata from '@/data/siteMetadata'

function Post({ post }) {
  const { id } = post
  const slug = id

  return (
    <div>
      <BlogSEO url={`${siteMetadata.siteUrl}/articles/${slug}`} {...post} />
      <PostContent post={post} />
    </div>
  )
}

export async function getStaticPaths() {
  const posts = await getArticles()
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
  const allPosts = await getArticles()
  const postIndex = allPosts.findIndex((post) => formatSlug(post.id) === params.slug.join('/'))
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getArticle(params.slug.join('/'))
  const processed = await processMDX(post)
  // rss

  const rss = generateRss(allPosts, 'articles')
  fs.writeFileSync('./public/feed.xml', rss)

  return { props: { post: processed, prev, next }, revalidate: 60 }
}

export default Post
