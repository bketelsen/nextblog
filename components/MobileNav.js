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
          className="block w-full mx-auto btn btn-ghost"
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
