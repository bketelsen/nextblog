import { getAllImages, getAllPostsFrontmatter, getPostByID } from '@/lib/apollo'

import CustomLink from '@/components/Link'
import Image from 'next/image'
import PageTitle from '@/components/PageTitle'
import PostLayout from '@/layouts/PostLayout'
import Pre from '@/components/Pre'
import ReactMarkdown from 'react-markdown'
import codeTitles from '@/lib/remark-code-title'
import fs from 'fs'
import generateRss from '@/lib/generate-rss'

const visit = require('unist-util-visit')

const DEFAULT_LAYOUT = 'PostLayout'
var imageMap = {}

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
  const allImages = await getAllImages()
  for (const img of allImages) {
    imageMap[img.id] = img
  }
  const allPosts = await getAllPostsFrontmatter()

  const postIndex = allPosts.findIndex((post) => post.id === params.slug.join('/'))
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getPostByID(params.slug.join('/'))

  // rss
  const rss = generateRss(allPosts)
  fs.writeFileSync('./public/feed.xml', rss)

  return { props: { post, images: imageMap, prev, next } }
}

export default function Blog({ post, images, prev, next }) {
  const { body } = post

  return (
    <>
      {post.draft !== true ? (
        <PostLayout post={post} next={next} prev={prev}>
          <div className="wrapper">
            <ReactMarkdown
              components={{
                // eslint-disable-next-line react/display-name
                p: ({ node, children }) => {
                  if (node.children[0].tagName === 'img') {
                    const image = node.children[0]
                    const { src } = image.properties
                    if (src.startsWith('/')) {
                      const id = src.replace('/static/images/', '').split('.', 1)[0]
                      const i = images[id]
                      return (
                        <div className="image">
                          <Image src={src} alt={i.alt || id} width={i.width} height={i.height} />
                        </div>
                      )
                    }
                  }
                  // Return default child if it's not an image
                  return <p>{children}</p>
                },
              }}
              rehypePlugins={rehypePlugins}
              remarkPlugins={remarkPlugins}
            >
              {post.body}
            </ReactMarkdown>
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
