import Navbar from './Navbar'
import Footer from './Footer'
import Header from './header'

export default function Layout({ children }) {
  return (
    <main className="container">
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
