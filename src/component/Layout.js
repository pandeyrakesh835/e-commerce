import React from 'react'
import { Outlet } from 'react-router-dom'
import Herders from './Herders'
import Footer from './Footer'
const Layout = () => {
  return (
   <>
   <Herders/>
   <Outlet/>
   <Footer/>
   
   
   </>
  )
}

export default Layout

