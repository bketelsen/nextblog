import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function BlogCta() {
  return (
    <div className="my-6 text-2xl font-bold text-center sm:my-8 sm:text-3xl">
      <Link href="/blog" passHref>
        <a className="">
          All Posts
          <FontAwesomeIcon className="inline w-6 ml-2 sm:w-8 text-primary" icon={faArrowRight} />
        </a>
      </Link>
    </div>
  )
}

export default BlogCta
