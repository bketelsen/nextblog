import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PostPreview from './PostPreview'

function ArticleList({ path = 'blog', posts, showPagination }) {
  const displayNum = 9
  const [displayedPosts, setDisplayedPosts] = useState(posts)
  const [minIdx, setMinIdx] = useState(0)
  const [maxIdx, setMaxIdx] = useState(Math.min(displayNum, posts.length))

  useEffect(() => {
    if (posts.length > displayNum) {
      setDisplayedPosts(posts.slice(minIdx, displayNum))
    } else {
      setDisplayedPosts(posts)
    }
  }, [posts])

  function indexIncrement(oldIdx) {
    if (posts.length > displayNum) {
      const newIdx = oldIdx + displayNum
      let newMin, newMax
      if (newIdx < posts.length) {
        newMax = newIdx
        newMin = minIdx + displayNum
      } else {
        newMax = posts.length
        newMin = Math.min(minIdx + displayNum, newMax - 1)
      }
      setMinIdx(newMin)
      setMaxIdx(newMax)
      setDisplayedPosts(posts.slice(newMin, newMax))
    }
  }

  function indexDecrement(oldIdx) {
    const newIdx = oldIdx - displayNum
    let newMin, newMax
    if (newIdx >= 0) {
      newMin = newIdx
      newMax = newMin + displayNum
    } else {
      newMin = 0
      newMax = displayNum
    }
    setMinIdx(newMin)
    setMaxIdx(newMax)
    setDisplayedPosts(posts.slice(newMin, newMax))
  }

  return (
    <div className="max-w-6xl py-4 mx-auto md:py-8 lg:py-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {' '}
        {displayedPosts.map((node) => {
          return (
            <PostPreview
              path={path}
              key={node.id}
              slug={node.id}
              tags={node.tags}
              featured={node.featured}
              date={node.date}
              image={node.Image ? node.Image : null}
              title={node.title}
              description={node.summary}
            />
          )
        })}
      </div>
      {showPagination ? (
        <div className="flex items-center justify-center my-4 space-x-4 md:my-8 lg:my-12">
          <div className="font-semibold ">
            {Math.min(minIdx + 1, posts.length)}-{Math.min(maxIdx, posts.length)} of {posts.length}{' '}
            Posts
          </div>
          <button
            className="text-primary hover:text-primary-focus focus:outline-none"
            aria-label="left-arrow"
            onClick={() => indexDecrement(minIdx)}
          >
            <FontAwesomeIcon className="inline w-6 ml-2 sm:w-8" icon={faArrowLeft} />
          </button>
          <button
            className="text-primary hover:text-primary-focus focus:outline-none"
            aria-label="left-arrow"
            onClick={() => indexIncrement(maxIdx)}
          >
            <FontAwesomeIcon className="inline w-6 ml-2 sm:w-8" icon={faArrowRight} />
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default ArticleList
