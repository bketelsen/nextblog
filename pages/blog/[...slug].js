import fs from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import PageTitle from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'
import { getAllPostsFrontmatter, getPostByID } from '@/lib/apollo'
import PostLayout from '@/layouts/PostLayout'

const DEFAULT_LAYOUT = 'PostLayout'

export async function getStaticPaths() {
  const posts = await getAllPostsFrontmatter()
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.id.split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllPostsFrontmatter()
  const postIndex = allPosts.findIndex((post) => post.id === params.slug.join('/'))
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getPostByID(params.slug.join('/'))

  // rss
  const rss = generateRss(allPosts)
  fs.writeFileSync('./public/feed.xml', rss)
  const mdxSource = await serialize(post.body)

  return { props: { post, mdxSource, prev, next } }
}

export default function Blog({ post, mdxSource, prev, next }) {
  const { body } = post

  return (
    <>
      {post.draft !== true ? (
        <PostLayout post={post} next={next} prev={prev}>
          <div className="wrapper">
            <MDXRemote {...mdxSource} />
          </div>
        </PostLayout>
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}
