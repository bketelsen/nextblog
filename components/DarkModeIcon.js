import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'next-themes'

function DarkModeIcon() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <button
      aria-label="dark-mode-icon"
      className="focus:outline-none"
      onClick={() => {
        setTheme(theme === 'cupcake' ? 'dark' : 'cupcake')
      }}
    >
      {theme === 'dark' ? (
        <FontAwesomeIcon icon={faSun} className="w-5 cursor-pointer" />
      ) : (
        <FontAwesomeIcon icon={faMoon} className="w-5 cursor-pointer" />
      )}
    </button>
  )
}

export default DarkModeIcon
