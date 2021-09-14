import Image from './CloudinaryImage'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import SectionContainer from './SectionContainer'
import { formatDate } from '@/utils/helpers'

function Post({ post }) {
  const { mdxSource, toc } = post

  return (
    <SectionContainer>
      <div className="w-full mx-auto my-8 md:my-12">
        <h1 className="text-3xl font-extrabold text-center md:text-4xl lg:text-5xl ">
          {post.title}
        </h1>
        <p className="my-2 text-lg text-center sm:mb-4">{formatDate(post.date)}</p>
        {post.image && (
          <Image
            className="object-cover object-center w-full py-2 rounded-sm h-72 sm:h-96 md:h-120"
            width={post.image.width}
            height={post.image.height}
            alt={post.title}
            publicId={post.image.id}
          />
        )}

        <div className="container p-4 mx-auto text-lg prose xl:prose-xl sm:p-8">
          <MDXLayoutRenderer toc={toc} mdxSource={mdxSource} frontMatter={post} />
        </div>
      </div>
    </SectionContainer>
  )
}

export default Post
