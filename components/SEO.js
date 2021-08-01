import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import { useRouter } from 'next/router'

export const PageSeo = ({ title, description }) => {
  const router = useRouter()
  return (
    <Head>
      <title>{`${title}`}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={`${siteMetadata.siteUrl}${siteMetadata.socialBanner}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteMetadata.siteUrl}${siteMetadata.socialBanner}`} />
    </Head>
  )
}

export const BlogSeo = ({
  authorDetails,
  title,
  excerpt,
  publish_date,
  last_edit_date,
  url,
  images = [],
}) => {
  const router = useRouter()
  const publishedAt = new Date(publish_date).toISOString()
  const modifiedAt = new Date(last_edit_date || publish_date).toISOString()
  const encodedTitle = encodeURI(title)
  let imagesArr = [`${siteMetadata.ogEndpoint}?title=${encodedTitle}`]

  const featuredImages = imagesArr.map((img) => {
    return {
      '@type': 'ImageObject',
      url: `${img}`,
    }
  })

  let authorList
  if (authorDetails) {
    authorList = {
      '@type': 'Person',
      name: authorDetails.first_name + ' ' + authorDetails.last_name,
    }
  } else {
    authorList = {
      '@type': 'Person',
      name: siteMetadata.author,
    }
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: title,
    image: featuredImages,
    datePublished: publishedAt,
    dateModified: modifiedAt,
    author: authorList,
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.author,
      logo: {
        '@type': 'ImageObject',
        url: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
      },
    },
    description: excerpt,
  }

  return (
    <>
      <Head>
        <title>{`${title}`}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={excerpt} />
        <meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={siteMetadata.title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:title" content={title} />
        {featuredImages.map((img) => (
          <meta property="og:image" content={img.url} key={img.url} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteMetadata.twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={excerpt} />
        <meta name="twitter:image" content={`${siteMetadata.ogEndpoint}?title=${title}`} />
        {publish_date && <meta property="article:published_time" content={publishedAt} />}
        {last_edit_date && <meta property="article:modified_time" content={modifiedAt} />}
        <link rel="canonical" href={`${siteMetadata.siteUrl}${router.asPath}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
        />
      </Head>
    </>
  )
}
