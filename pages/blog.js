import ArticleList from '../components/ArticleList'
import { PageSEO } from '@/components/SEO'
import SearchBar from '../components/SearchBar'
import { getArticles } from '@/lib/queries'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'

function BlogPage({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts)

  function filterResults(searchTerm) {
    const filteredBlogPosts = posts.filter((frontMatter) => {
      const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
      return searchContent.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setFilteredPosts(filteredBlogPosts)
  }

  return (
    <div className="">
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <h1 className="my-4 text-4xl font-extrabold leading-loose text-center sm:pt-4">Blog</h1>

      {/* search bar */}
      <SearchBar filterResults={filterResults} />

      {/* blogs */}
      <ArticleList posts={filteredPosts} showPagination={true} />
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getArticles()
  return {
    props: { posts: posts },
    revalidate: 60,
  }
}

export default BlogPage
