import Image from 'next/image'
import { PageSEO } from '@/components/SEO'
import SectionContainer from '@/components/SectionContainer'
import SocialMedia from '../components/SocialMedia'
import siteMetadata from '@/data/siteMetadata'

function AboutPage() {
  const pageTitle = `About | ${process.env.siteTitle}`
  return (
    <SectionContainer>
      <div className="container min-h-screen mx-auto mb-20">
        <PageSEO title={`About - ${siteMetadata.author}`} description={siteMetadata.description} />
        <h1 className="my-4 text-4xl font-extrabold leading-loose text-center sm:pt-4">About</h1>
        <section className="w-full px-4 py-2 mx-auto sm:max-w-6xl ">
          <div className="flex justify-center">
            <Image
              className="object-cover w-64 h-64 mx-auto my-8 rounded-full"
              src="/static/images/brian-head.jpeg"
              alt="silver fox, amirite"
              height={300}
              width={300}
            />
          </div>
          <p className="mt-6 sm:text-lg md:text-xl">
            {' '}
            <span role="img" aria-label="waving hand">
              👋
            </span>{' '}
            Hello! I'm Brian. This is my blog.
          </p>
          <p className="mt-6 sm:text-lg md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <p className="mt-6 sm:text-lg md:text-xl">Follow me on Social Media.</p>
          <SocialMedia />
        </section>
      </div>
    </SectionContainer>
  )
}

export default AboutPage
