import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function SearchBar({ filterResults }) {
  const [searchTerm, setSearchTerm] = useState('')

  function handleSearch(term) {
    setSearchTerm(term)
    filterResults(term)
  }

  return (
    <div className="relative w-full max-w-4xl px-4 mx-auto my-4 text-center text-gray-500 sm:px-6 sm:my-8 sm:w-1/2">
      <input
        className="w-full h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
        onChange={(event) => handleSearch(event.target.value)}
        type="search"
        name="search"
        placeholder="Search [tag, title, summary]"
      />
      <button type="submit" className="absolute top-0 right-0 mt-2 mr-10 focus:outline-none">
        <FontAwesomeIcon icon={faSearch} className="w-5 text-gray-400" />
      </button>
    </div>
  )
}

export default SearchBar
