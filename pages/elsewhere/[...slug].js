import { formatSlug, processMDX } from '@/lib/mdx'
import { getAppearance, getAppearances } from '@/lib/queries'

import ElsewhereContent from '@/components/ElsewhereContent'
import { ElsewhereSEO } from '@/components/SEO'
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
  const posts = await getAppearances()
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
  const allPosts = await getAppearances()
  const postIndex = allPosts.findIndex((post) => formatSlug(post.id) === params.slug.join('/'))
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getAppearance(params.slug.join('/'))
  const processed = await processMDX(post)

  // rss

  const rss = generateRss(allPosts, 'elsewhere')
  fs.writeFileSync('./public/feed.xml', rss)

  return { props: { post: processed, prev, next }, revalidate: 60 }
}
export default Post
