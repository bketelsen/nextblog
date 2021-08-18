import FooterLinkColumn from './FooterLinkColumn'
import SocialMedia from './SocialMedia'
import Link from 'next/link'

function Footer() {
  return (
    <>
      <footer className="pt-8 pb-4 text-white bg-palette-primary dark:bg-gray-900">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-6/12">
              <h2 className="mb-4 text-lg font-semibold sm:text-xl md:mb-0">
                Follow Me On Social Media
              </h2>
              <SocialMedia color="light" />
            </div>
            <div className="w-full lg:w-6/12">
              <div className="flex flex-wrap mb-6 items-top">
                <FooterLinkColumn
                  items={[
                    {
                      label: 'Blog',
                      link: '/blog',
                    },
                  ]}
                />
                <FooterLinkColumn
                  items={[
                    {
                      label: 'About',
                      link: '/about',
                    },
                    {
                      label: 'Contact',
                      link: '/contact',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 mx-auto text-center md:w-4/12">
              <div className="py-1 text-sm font-semibold">
                Copyright © {new Date().getFullYear()}{' '}
                <Link href="/" passHref>
                  {process.env.siteTitle}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
