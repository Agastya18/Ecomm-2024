import Header from './Header'
import Footer from './Footer'
import {Helmet} from 'react-helmet'

const Layout = ({children,title}) => {
  return (
    <div>
    <Helmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
    

    </Helmet>
     <Header />
    <main style={{ minHeight: "80vh" }} >
    
      {children}

    </main>
    <Footer/>
    </div>
  )
}

export default Layout
// style={{ minHeight: "70vh" }}