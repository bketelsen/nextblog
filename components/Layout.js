import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

function Layout({ children }) {
  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 xl:max-w-7xl xl:px-0">
        <Nav />

        {children}

        <Footer />
      </div>
    </div>
  )
}

export default Layout
