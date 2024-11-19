import DocumentTitle from 'react-document-title'
import Navbar from '../share/Navbar'
import Footer from '../share/Footer'
import BackToTop from '../share/BackToTop'

const MainLayout = ({ children , title}) => {
  return (
    <DocumentTitle title={`${title} - Shopper`}>
        <div className='flex flex-col min-h-screen'>
                <header>
                    <Navbar />
                </header>
                <main className='flex-grow bg-gray-50 pt-20 pb-12'>
                    { children }
                    <BackToTop />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
    </DocumentTitle>
  )
}

export default MainLayout