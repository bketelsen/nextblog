import DarkModeIcon from './DarkModeIcon'
import DesktopNav from './DesktopNav'
import Link from 'next/link'
import MobileNav from './MobileNav'
import { useState } from 'react'

function Nav() {
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <header>
      <div className="flex flex-wrap items-center justify-between max-w-5xl py-4 mx-auto md:p-6">
        <div className="p-4">
          <DarkModeIcon />
        </div>
        <Link href="/" passHref>
          <a className="p-4 cursor-pointer focus:outline-none">
            <h1 className="flex items-center no-underline">
              <span className="text-xl font-bold tracking-tight hover:text-primary">
                {process.env.siteTitle}
              </span>
            </h1>
          </a>
        </Link>

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

        {isExpanded ? <MobileNav toggleExpansion={toggleExpansion} /> : <DesktopNav />}
      </div>
    </header>
  )
}

export default Nav