import Image from 'next/image'
import { PageSEO } from '@/components/SEO'
import SectionContainer from '@/components/SectionContainer'
import SocialMedia from '@/components/SocialMedia'
import siteMetadata from '@/data/siteMetadata'

function AboutPage() {
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
              alt="Brian Ketelsen"
              height={300}
              width={300}
            />
          </div>
          <div className="container p-4 mx-auto text-lg prose xl:prose-xl sm:p-8">
            <p className="mt-6 sm:text-lg md:text-xl">
              {' '}
              <span role="img" aria-label="waving hand">
                👋
              </span>{' '}
              Hello! I'm Brian. This is my blog.
            </p>
            <p className="mt-6 sm:text-lg md:text-xl">
              I'm a cloud developer advocate at Microsoft Azure. I lead a team of advocates who
              focus on Open Source languages and cloud tools.
            </p>
            <p className="mt-6 sm:text-lg md:text-xl">
              I've worn many hats along my journey. I believe that having a broad range of
              experience enables me to see problems from a broader perspective.
            </p>
            <p className="mt-6 sm:text-lg md:text-xl">Some of my previous roles:</p>
            <ul>
              <li>Sybase, Oracle, MSSQL DBA</li>
              <li>Data Warehouse Architect</li>
              <li>Web Developer</li>
              <li>Distributed Systems Engineer</li>
              <li>CTO, CIO, COO</li>
            </ul>

            <p className="mt-6 sm:text-lg md:text-xl">
              Thanks for stopping by, I hope you find some useful information here.
            </p>
          </div>
        </section>
      </div>
    </SectionContainer>
  )
}

export default AboutPage
