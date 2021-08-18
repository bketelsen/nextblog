import Link from 'next/link'

function DesktopNav() {
  return (
    <nav className="hidden md:block md:flex md:items-center md:w-auto">
      {[
        {
          route: `/about`,
          title: `About`,
        },
        {
          route: `/blog`,
          title: `Blog`,
        },
      ].map((link) => (
        <Link href={link.route} passHref key={link.title}>
          <a className="justify-center block p-4 py-4 mx-auto text-xl font-medium font-semibold text-gray-600 no-underline transition duration-150 ease-in-out md:mt-0 hover:text-palette-primary dark:text-white dark:hover:text-palette-primary focus:outline-none">
            {link.title}
          </a>
        </Link>
      ))}
    </nav>
  )
}

export default DesktopNav
