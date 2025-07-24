import React from 'react'
import Navbar from './Navbar'

const Layout = () => {
  return (
   <>
   <Navbar />
   <Outlet />
   <Footer />
   
   </>
  )
}

export default Layout