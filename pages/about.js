import SEO from '../components/SEO'
import SocialMedia from '../components/SocialMedia'
import SectionContainer from '@/components/SectionContainer'

function AboutPage() {
  const pageTitle = `About | ${process.env.siteTitle}`
  return (
    <SectionContainer>
      <div className="container min-h-screen mx-auto mb-20">
        <SEO title={pageTitle} />
        <h1 className="text-4xl font-extrabold leading-loose text-center text-gray-900 dark:text-white">
          About
        </h1>
        <section className="w-full px-4 py-2 mx-auto text-gray-800 sm:max-w-6xl dark:text-gray-200">
          <img
            className="object-cover w-64 h-64 mx-auto my-8 rounded-full"
            src="/images/main-img.jpg"
            alt="my-pic"
          />
          <p className="mt-6 sm:text-lg md:text-xl">Hello! I'm Jane. This is my blog.</p>
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
