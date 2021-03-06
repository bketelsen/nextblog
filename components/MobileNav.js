import { useRouter } from 'next/router'

function MobileNav({ toggleExpansion }) {
  const router = useRouter()

  const navBtnClicked = (route) => {
    toggleExpansion(false)
    router.push(route)
  }

  return (
    <div className="mb-2 shadow-lg navbar bg-neutral text-neutral-content rounded-box">
      <ul className="flex-1 shadow-lg menu bg-neutral ">
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
            route: `/elsewhere`,
            title: `Elsewhere`,
          },
          {
            route: `/about`,
            title: `About`,
          },
        ].map((link) => (
          <li key={link.title}>
            <button
              className="btn btn-block btn-ghost"
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
