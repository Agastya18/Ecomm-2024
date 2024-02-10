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
     
  
   
    <main  className=' max-h-screen' >
    <Header />
    {children}
    <Footer/> 
  </main>
  
 
  
   
   
   
    </div>
    
  )
}

export default Layout
// style={{ minHeight: "80vh" }}