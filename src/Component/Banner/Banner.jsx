import React from 'react'
import bannerImage from '../../assets/hero.png'
import playStore from '../../assets/playstor.png'
import appStore from '../../assets/appstore.png'
import './Banner.css'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-col items-center justify-between gap-8 px-8 bg-gradient-to-r from-gray-200 via-white to-gray-100'>
      <div>
        <h1 className='banner-container font-bold text-7xl font-bold text-center mt-10'>We Build <br /><span className='bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-bold'>Productive</span> Apps</h1>
        <p className='text-center mt-4 text-lg font-semibold text-gray-500'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        <div className='flex justify-center items-center gap-6 mt-6'>
        <button className='flex justify-center items-center btn btn-ghost border-1 border-gray-300 shadow-md rounded-md px-3 py-6'>
          <img src={playStore} alt="" /> <span className='font-semibold text-2xl'>Google Play</span>
        </button>
        <button className='flex justify-center items-center btn btn-ghost border-1 border-gray-300 shadow-md rounded-md px-4 py-6'>
          <img src={appStore} alt="" /> <span className='font-semibold text-2xl'> App Store</span>
        </button>
        </div>
      </div>
      <div className='mt-4'>
      <img src={bannerImage} alt="Hero Banner" />
      </div>
    </div>
  )
}

export default Banner