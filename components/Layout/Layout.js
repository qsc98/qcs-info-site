import Footer from './Footer'
import Header from './Header'

const Layout = ({ children, noTopPadding = false }) => {
  return (
    <>
      <Header />
      <main
        className={`flex flex-col gap-y-16 sm:gap-y-20 lg:gap-y-28 ${noTopPadding ? '' : 'pt-32 sm:pt-36'
          }`}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
