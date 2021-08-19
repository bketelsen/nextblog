import ArticleList from '../components/ArticleList'
import SEO from '../components/SEO'
import SearchBar from '../components/SearchBar'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { useState } from 'react'

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
      <h1 className="my-4 text-4xl font-extrabold leading-loose text-center sm:pt-4">Blog</h1>

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
