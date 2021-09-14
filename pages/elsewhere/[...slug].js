import { formatSlug, getAllFilesFrontMatter, getFileBySlug } from '@/lib/mdx'

import ElsewhereContent from '@/components/ElsewhereContent'
import { ElsewhereSEO } from '@/components/SEO'
import { flattenAppearance } from '@/lib/flatten'
import fs from 'fs'
import generateRss from '@/lib/generate-rss'
import siteMetadata from '@/data/siteMetadata'

function Post({ post }) {
  const { id } = post
  const slug = id

  return (
    <div>
      <ElsewhereSEO url={`${siteMetadata.siteUrl}/elsewhere/${slug}`} {...post} />
      <ElsewhereContent post={post} />
    </div>
  )
}

export async function getStaticPaths() {
  const posts = await getAllFilesFrontMatter('appearances.json')
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
  const allPosts = await getAllFilesFrontMatter('appearances.json')
  const postIndex = allPosts.findIndex((post) => formatSlug(post.id) === params.slug.join('/'))
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getFileBySlug('appearances', params.slug.join('/'))
  const flatPost = await flattenAppearance(post)
  // rss

  const rss = generateRss(allPosts, 'elsewhere')
  fs.writeFileSync('./public/elsewhere/feed.xml', rss)

  return { props: { post: flatPost, prev, next }, revalidate: 60 }
}

export default Post
