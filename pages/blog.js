import { useState } from 'react'
import SEO from '../components/SEO'
import SearchBar from '../components/SearchBar'
import ArticleList from '../components/ArticleList'
import { getAllFilesFrontMatter } from '@/lib/mdx'

function BlogPage({ posts }) {
  const pageTitle = `Blog | ${process.env.siteTitle}`
  const [filteredPosts, setFilteredPosts] = useState(posts)

  function filterResults(searchTerm) {
    let tempArray = []
    posts.forEach((post) => {
      if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        tempArray.push(post)
      }
    })
    setFilteredPosts(tempArray)
  }

  return (
    <div className="">
      <SEO title={pageTitle} />
      <h1 className="mb-4 text-4xl font-extrabold leading-loose text-center text-gray-900 dark:text-white">
        Blog
      </h1>

      {/* search bar */}
      <SearchBar filterResults={filterResults} />

      {/* blogs */}
      <ArticleList posts={filteredPosts} showPagination={true} />
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default BlogPage
