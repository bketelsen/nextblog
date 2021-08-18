import ArticleList from '@/components/ArticleList'
import BlogCta from '@/components/BlogCta'
import Hero from '@/components/Hero'
import SubscribeCTA from '@/components/SubscribeCTA'
import { getAllFilesFrontMatter } from '@/lib/mdx'

function IndexPage({ posts }) {
  return (
    <div className="">
      {/* hero section */}
      <Hero />

      {/* article section */}
      <h1 className="my-4 text-4xl font-extrabold leading-loose text-center text-gray-900 dark:text-white sm:pt-4">
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
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default IndexPage
