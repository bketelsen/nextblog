import Link from 'next/link'
import MobileNav from './MobileNav'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'

function Nav() {
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <>
      <div className="mb-2 shadow-lg navbar bg-neutral text-neutral-content rounded-box">
        <div className="px-2 mx-2 navbar-start">
          <span className="text-lg font-bold"> {siteMetadata.headerTitle}</span>
        </div>
        <div className="hidden px-2 mx-2 navbar-center md:flex">
          <div className="flex items-stretch">
            {[
              {
                route: `/`,
                title: `Home`,
              },
              {
                route: `/blog`,
                title: `Blog`,
              },
              {
                route: `/about`,
                title: `About`,
              },
            ].map((link) => (
              <Link href={link.route} passHref key={link.title}>
                <a className="btn btn-ghost btn-sm rounded-btn">{link.title}</a>
              </Link>
            ))}
          </div>
        </div>
        <div className="mr-2 navbar-end">
          {isExpanded ? (
            <button
              onClick={() => toggleExpansion(!isExpanded)}
              type="button"
              className="inline-flex items-center justify-center px-6 transition duration-150 ease-in-out rounded-md focus:outline-none"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => toggleExpansion(!isExpanded)}
              type="button"
              className="inline-flex items-center justify-center px-6 transition duration-150 ease-in-out rounded-md md:hidden focus:outline-none"
              id="main-menu"
              aria-label="Main menu"
              aria-haspopup="true"
            >
              <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      {isExpanded && <MobileNav toggleExpansion={toggleExpansion} />}
    </>
  )
}

export default Nav
