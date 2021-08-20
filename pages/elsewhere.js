import ArticleList from '../components/ArticleList'
import { PageSEO } from '@/components/SEO'
import SearchBar from '../components/SearchBar'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'

function ElsewherePage({ posts }) {
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
      <PageSEO
        title={`Elsewhere - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <h1 className="my-4 text-4xl font-extrabold leading-loose text-center sm:pt-4">Elsewhere</h1>

      {/* search bar */}
      <SearchBar filterResults={filterResults} />

      {/* blogs */}
      <ArticleList path="elsewhere" posts={filteredPosts} showPagination={true} />
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('elsewhere')

  return { props: { posts } }
}

export default ElsewherePage
