import Image from 'next/image'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import SectionContainer from './SectionContainer'
import { formatDate } from '@/utils/helpers'
import Link from 'next/link'

function Post({ post }) {
  const { mdxSource, toc, frontMatter } = post

  return (
    <SectionContainer>
      <div className="w-full mx-auto my-8 md:my-12">
        <h1 className="text-3xl font-extrabold text-center md:text-4xl lg:text-5xl ">
          {frontMatter.title}
        </h1>
        <p className="my-2 text-lg text-center sm:mb-4">{formatDate(frontMatter.date)}</p>
        {frontMatter.images && (
          <Image
            className="object-cover object-center w-full py-2 rounded-sm h-72 sm:h-96 md:h-120"
            width="1280"
            height="720"
            alt={frontMatter.title}
            src={frontMatter.images[0]}
          />
        )}

        <div className="container p-4 mx-auto text-lg prose xl:prose-xl sm:p-8">
          <MDXLayoutRenderer toc={toc} mdxSource={mdxSource} frontMatter={frontMatter} />
        </div>
        {frontMatter.deck && (
          <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">
            <Link href={`/decks/${frontMatter.deck}.html`}>View Slides</Link>
          </div>
        )}
      </div>
    </SectionContainer>
  )
}

export default Post
