import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function BlogCta() {
  return (
    <div className="my-6 sm:my-8 text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white">
      Read More
      <Link href="/blog" passHref>
        <a className="text-palette-primary">
          <FontAwesomeIcon className="w-6 sm:w-8 ml-2 inline" icon={faArrowRight} />
        </a>
      </Link>
    </div>
  )
}

export default BlogCta
