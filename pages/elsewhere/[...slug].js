import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'

import { BlogSEO } from '@/components/SEO'
import PostContent from '@/components/PostContent'
import fs from 'fs'
import generateRss from '@/lib/generate-rss'
import siteMetadata from '@/data/siteMetadata'

function Post({ post }) {
  // console.log('post', post)
  const { frontMatter } = post
  const { slug } = frontMatter

  return (
    <div>
      <BlogSEO url={`${siteMetadata.siteUrl}/elsewhere/${slug}`} {...frontMatter} />
      <PostContent post={post} />
    </div>
  )
}

export async function getStaticPaths() {
  const posts = getFiles('elsewhere')
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('elsewhere')
  const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === params.slug.join('/'))
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getFileBySlug('elsewhere', params.slug.join('/'))
  /*const authorList = post.frontMatter.authors || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author])
    return authorResults.frontMatter
  })
  const authorDetails = await Promise.all(authorPromise)
*/
  // rss
  const rss = generateRss(allPosts, 'elsewhere')
  fs.writeFileSync('./public/elsewhere/feed.xml', rss)

  return { props: { post, prev, next } }
}

export default Post
