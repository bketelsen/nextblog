import { useRouter } from 'next/router'

function MobileNav({ toggleExpansion }) {
  const router = useRouter()

  const navBtnClicked = (route) => {
    toggleExpansion(false)
    router.push(route)
  }

  return (
    <nav className="block w-full h-screen md:block md:flex md:items-center md:w-auto">
      <div className="border-b border-gray-300"></div>
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
        <button
          className="block w-full py-4 mx-auto font-medium font-semibold text-gray-600 no-underline transition duration-150 ease-in-out border-b border-gray-300 md:mt-0 hover:text-gray-700 dark:text-white focus:outline-none"
          key={link.title}
          onClick={() => navBtnClicked(link.route)}
        >
          {link.title}
        </button>
      ))}
    </nav>
  )
}

export default MobileNav
