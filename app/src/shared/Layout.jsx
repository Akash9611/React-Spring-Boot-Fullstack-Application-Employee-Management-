import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../components'

const Layout = () => {
  return (
    <div className="min-vh-100 bg-dark text-light d-flex flex-column">
      <header>
        <Header />
      </header>
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout