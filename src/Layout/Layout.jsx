import { Helmet } from "react-helmet"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Layout = ({ children, title }) => {
  return (
    <div>

      <Helmet>
        <title> {title} </title>
      </Helmet>

      <div>
        <Navbar />
      </div>

      <main>
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout