import CustomLink from './Link'
import Image from 'next/image'
import Pre from './Pre'
import { getMDXComponent } from 'mdx-bundler/client'
/* eslint-disable react/display-name */
import { useMemo } from 'react'

export const MDXComponents = {
  Image,
  a: CustomLink,
  pre: Pre,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
