import Image from 'next/image'
import Link from 'next/link'
import { formatContentfulDate } from '../utils/helpers'

function PostPreview({ slug, date, image, title, description }) {
  const postHref = `/blog/${slug}`

  return (
    <Link href={postHref}>
      <div className="max-w-xs p-4 mx-2 my-4 border border-gray-100 rounded shadow-xl cursor-pointer dark:bg-gray-900 dark:border-gray-900 hover:bg-primary-300 dark:hover:bg-primary-900">
        {image && (
          <Image
            className="object-cover w-full h-48 rounded"
            width="800"
            height="450"
            alt={title}
            src={image}
          />
        )}
        <div className="pt-6 text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
          {title}
        </div>
        <div className="mb-2 text-xs text-gray-700 dark:text-gray-200 sm:mb-4">
          {formatContentfulDate(date)}
        </div>
        <div className="text-gray-800 text-md dark:text-gray-100">{description}</div>
      </div>
    </Link>
  )
}

export default PostPreview
