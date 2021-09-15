import ArticleList from '../components/ArticleList'
import { PageSEO } from '@/components/SEO'
import SearchBar from '../components/SearchBar'
import { getAppearances } from '@/lib/queries'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'

function ElsewherePage({ posts }) {
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
  var allAppearances = await getAppearances()

  return {
    props: { posts: allAppearances },
    revalidate: 60,
  }
}

export default ElsewherePage
