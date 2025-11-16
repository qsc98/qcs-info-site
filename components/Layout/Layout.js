import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-y-16 pt-32 sm:gap-y-20 sm:pt-36 lg:gap-y-28">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
