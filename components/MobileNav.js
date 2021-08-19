import { useRouter } from 'next/router'

function MobileNav({ toggleExpansion }) {
  const router = useRouter()

  const navBtnClicked = (route) => {
    toggleExpansion(false)
    router.push(route)
  }

  return (
    <div className="py-4 bg-neutral">
      <ul className="p-4 shadow-lg menu bg-neutral rounded-box">
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
          <li key={link.title}>
            <button
              className="block w-full mx-auto btn btn-ghost"
              key={link.title}
              onClick={() => navBtnClicked(link.route)}
            >
              {link.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileNav
