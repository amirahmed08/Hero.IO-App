import React from 'react'
import starImg from '../../assets/icon-ratings.png'
import downloadImg from '../../assets/icon-downloads.png'

const InstalledApp = ({b}) => {
  return (
    <div>
          <div className='p-8'>
            <h1 className='text-center text-4xl font-bold'>Your Installed Apps</h1>
            <p className='text-center text-gray-500 font-semibold mt-4'>Explore All Trending Apps on the Market developed by us</p>
          </div>
          <div className='flex justify-between items-center w-full mb-5'>
            <h2 className='text-2xl font-bold '>1.Apps Found</h2>
            <button className='btn btn-ghost'>Sort by Size</button>
          </div>
          <div className='flex justify-between items-center bg-white px-4 py-2 rounded-md shadow-md'>
            <div className='flex flex-row gap-3'>
              <div>
              <img className='bg-gray-300 h-15 w-15 rounded-lg' src="" alt="" />
            </div>
            <div>
              <h1 className='text-2xl font-bold mb-2'>Title Name</h1>
              <div className='flex gap-4'>
                <div className='flex gap-2'>
                  <img className='h-5 w-5' src={downloadImg} alt="" />
                  <span>9m</span>
                </div>
                <div className='flex gap-2'>
                  <img className='h-5 w-5' src={starImg} alt="" />
                  <span>rating</span>
                </div>
                <div>
                  <span>Size</span>
                </div>
              </div>
            </div>
            </div>
          <div>
            <button className='bg-[#00D390] rounded-md text-white font-semibold px-3 py-2'>Uninstall</button>
          </div>
          </div>
        </div>
  )
}

export default InstalledApp