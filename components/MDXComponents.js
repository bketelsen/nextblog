import CustomLink from './Link'
import Image from './Image'
import Pre from './Pre'
import TOCInline from './TOCInline'
import { getMDXComponent } from 'mdx-bundler/client'
/* eslint-disable react/display-name */
import { useMemo } from 'react'

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout components={MDXComponents} {...rest} />
}
