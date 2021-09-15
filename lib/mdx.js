import { bundleMDX } from 'mdx-bundler'
import { fetchAPI } from './api'
import { flatten } from './flatten'
import getAllFilesRecursively from './utils/files'
import path from 'path'
import readingTime from 'reading-time'
// Rehype packages
import rehypePrismPlus from 'rehype-prism-plus'
import remarkAutolinkHeadings from 'remark-autolink-headings'
import remarkCodeTitles from './remark-code-title'
import remarkFootnotes from 'remark-footnotes'
import remarkGfm from 'remark-gfm'
import remarkImgToJsx from './remark-img-to-jsx'
import remarkMath from 'remark-math'
// Remark packages
import remarkSlug from 'remark-slug'
import remarkTocHeadings from './remark-toc-headings'
import { visit } from 'unist-util-visit'

const root = process.cwd()

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

export function getFiles(type) {
  const prefixPaths = path.join(root, 'data', type)
  const files = getAllFilesRecursively(prefixPaths)
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map((file) => file.slice(prefixPaths.length + 1).replace(/\\/g, '/'))
}

export function formatSlug(slug) {
  return slug.replace(/\.(mdx|md)/, '')
}

export function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export async function getRecord(type, slug) {
  const reqPath = path.join(type, slug + '.json')
  const data = await fetchAPI(reqPath)
  return data
}

export async function processMDX(obj) {
  const source = obj.body
  // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'esbuild.exe'
    )
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    )
  }

  let toc = []
  const { frontmatter, code } = await bundleMDX(source, {
    // mdx imports can be automatically source from the components directory
    cwd: path.join(process.cwd(), 'components'),
    xdmOptions(options) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkSlug,
        remarkAutolinkHeadings,
        [remarkTocHeadings, { exportRef: toc }],
        remarkGfm,
        remarkCodeTitles,
        [remarkFootnotes, { inlineNotes: true }],
        remarkMath,
        remarkImgToJsx,
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        [rehypePrismPlus, { ignoreMissing: true }],
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
      return options
    },
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        '.js': 'jsx',
      }
      return options
    },
  })

  return {
    mdxSource: code,
    toc,
    readingTime: readingTime(code),
    slug: obj.id || null,
    date: obj.date ? new Date(obj.date).toISOString() : null,
    ...obj,
  }
}

export async function getAllFilesFrontMatter(folder, flat = false) {
  var data = await fetchAPI(folder)

  /*
  const allFrontMatter = []

  files.forEach((file) => {
    // Replace is needed to work on Windows
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
    // Remove Unexpected File
    if (path.extname(fileName) !== '.md' && path.extname(fileName) !== '.mdx') {
      return
    }
    const source = fs.readFileSync(file, 'utf8')
    const { data: frontmatter } = matter(source)
    if (frontmatter.draft !== true) {
      allFrontMatter.push({
        ...frontmatter,
        slug: formatSlug(fileName),
        date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
      })
    }
  })
  */
  var flattened = []
  if (flat) {
    for (var index = 0; index < data.length; index++) {
      const item = await flatten(folder, data[index])
      flattened.push(item)
    }
    return flattened.sort((a, b) => dateSortDesc(a.date, b.date))
  } else {
    return data.sort((a, b) => dateSortDesc(a.date, b.date))
  }
}
