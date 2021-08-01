import { getAllPostsFrontmatter, getPostByID } from '@/lib/apollo'

import CustomLink from '@/components/Link'
import { MDXRemote } from 'next-mdx-remote'
import PageTitle from '@/components/PageTitle'
import PostLayout from '@/layouts/PostLayout'
import Pre from '@/components/Pre'
import codeTitles from '@/lib/remark-code-title'
import fs from 'fs'
import generateRss from '@/lib/generate-rss'
import { serialize } from 'next-mdx-remote/serialize'

const visit = require('unist-util-visit')

const DEFAULT_LAYOUT = 'PostLayout'

export const MDXComponents = {
  a: CustomLink,
  pre: Pre,
}

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
  const mdxSource = await serialize(post.body, {
    mdxOptions: {
      remarkPlugins: remarkPlugins,
      rehypePlugins: rehypePlugins,
    },
  })

  return { props: { post, mdxSource, prev, next } }
}

export default function Blog({ post, mdxSource, prev, next }) {
  const { body } = post

  return (
    <>
      {post.draft !== true ? (
        <PostLayout post={post} next={next} prev={prev}>
          <div className="wrapper">
            <MDXRemote {...mdxSource} components={MDXComponents} />
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
const rehypePlugins = [
  [require('rehype-prism-plus'), { ignoreMissing: true }],
  () => {
    return (tree) => {
      visit(tree, 'element', (node, index, parent) => {
        let [token, type] = node.properties.className || []
        if (token === 'token') {
          node.properties.className = [tokenClassNames[type]]
        }
      })
    }
  },
]
const remarkPlugins = [
  require('remark-slug'),
  require('remark-autolink-headings'),
  require('remark-gfm'),
  codeTitles,
  [require('remark-footnotes'), { inlineNotes: true }],
  require('remark-math'),
]
const tokenClassNames = {
  tag: 'text-code-red',
  'attr-name': 'text-code-yellow',
  'attr-value': 'text-code-green',
  deleted: 'text-code-red',
  inserted: 'text-code-green',
  punctuation: 'text-code-white',
  keyword: 'text-code-purple',
  string: 'text-code-green',
  function: 'text-code-blue',
  boolean: 'text-code-red',
  comment: 'text-gray-400 italic',
}
