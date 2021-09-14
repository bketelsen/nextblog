import ArticleList from '@/components/ArticleList'
import BlogCta from '@/components/BlogCta'
import Hero from '@/components/Hero'
import { PageSEO } from '@/components/SEO'
import SubscribeCTA from '@/components/SubscribeCTA'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'

function IndexPage({ posts }) {
  return (
    <div className="">
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      {/* hero section */}
      <Hero />

      {/* article section */}
      <h1 className="my-4 text-4xl font-extrabold leading-loose text-center sm:pt-4">
        Recent Posts
      </h1>
      <ArticleList posts={posts} showPagination={false} />

      {/* blog cta section */}
      <BlogCta />

      {/* subscribe cta section */}
      <div className="max-w-xl px-4 mx-auto mb-8 sm:mb-12">
        <SubscribeCTA />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('articles.json', true)
  return { props: { posts }, revalidate: 60 }
}

export default IndexPage
