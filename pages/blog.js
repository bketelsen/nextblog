import ListLayout from '@/layouts/ListLayout'
import { PageSeo } from '@/components/SEO'
import { getAllPostsFrontmatter } from '@/lib/apollo'
import siteMetadata from '@/data/siteMetadata'

export const POSTS_PER_PAGE = 5

export async function getStaticProps() {
  const posts = await getAllPostsFrontmatter()

  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination }, revalidate: 60 }
}

export default function Blog({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSeo title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </>
  )
}
