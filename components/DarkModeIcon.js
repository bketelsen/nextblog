import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'next-themes'

function DarkModeIcon() {
  const { theme, setTheme } = useTheme()
  return (
    <button
      aria-label="dark-mode-icon"
      className="focus:outline-none"
      onClick={() => {
        setTheme(theme === 'cupcake' ? 'dark' : 'cupcake')
      }}
    >
      {theme === 'dark' ? (
        <FontAwesomeIcon icon={faSun} className="w-5 text-white cursor-pointer" />
      ) : (
        <FontAwesomeIcon icon={faMoon} className="w-5 text-gray-600 cursor-pointer" />
      )}
    </button>
  )
}

export default DarkModeIcon
