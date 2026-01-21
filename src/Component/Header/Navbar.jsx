import React from 'react'
import { Link, NavLink } from 'react-router'
import { IoLogoGithub } from "react-icons/io5";
import topIcon from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  const links = 
  <>
    <li><NavLink className='hover:bg-base-300 rounded-md py-2 px-3 btn btn-ghost' to='/'>Home</NavLink></li>
    <li><NavLink className='hover:bg-base-300 rounded-md py-2 px-3 btn btn-ghost' to='/allApps'>Apps</NavLink></li>
    <li><NavLink className='hover:bg-base-300 rounded-md py-2 px-3 btn btn-ghost' to='/installation'>Installation</NavLink></li>
  </>
  return (
 <div className="max-w-[1200px] mx-auto">
         <div className="navbar bg-base-100 shadow-b-sm w-full">
  <div className="navbar-start max-w-[1200px] mx-auto">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow navbar-container">
        {links}
      </ul>
    </div>
    <NavLink to='/'>
    <div className='flex items-center gap-2 ml-2 text-xl'>
    <img className='h-8 w-8' src={topIcon} alt="" /><span>HERO.IO</span>
    </div>
    </NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 navbar-container gap-4">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <button className='px-4 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold text-lg rounded-xl shadow-sm hover:shadow-3xl hover:from-[#5a27cc] hover:to-[#8f4cd1] transition-all duration-300 transform hover:-translate-y-1 border-0 outline-none'><a className='flex justify-center items-center gap-2' href='https://github.com/amirahmed08' target="_blank"><IoLogoGithub /><span>Contribute</span></a></button>
  </div>
</div>
 </div>
  )
}

export default Navbar