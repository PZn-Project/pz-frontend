import { type ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

const Layout = (): ReactElement => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}

export default Layout
