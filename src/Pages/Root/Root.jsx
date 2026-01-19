import React from 'react'
import Navbar from '../../Component/Header/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../Component/Footer/Footer'

const root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default root