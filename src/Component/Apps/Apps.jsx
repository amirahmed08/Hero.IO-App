import React, { Suspense } from 'react'
import App from '../App/App'
import { NavLink } from 'react-router';

const Apps = ({data}) => {
  // Slice to show only first 8 apps
  const displayApps = data.slice(0, 8);

  return (
    <div className='max-w-[1200px] mx-auto mb-8 px-4'>
      <div className='text-center my-8'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>
          Trending Apps
        </h1>
        <p className='text-gray-500 font-semibold mt-3 max-w-2xl mx-auto leading-relaxed'>
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div>
          <Suspense
  fallback={
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-md p-4 animate-pulse"
        >
          <div className="h-32 bg-gray-300 rounded-xl mb-4"></div>

          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>

          <div className="flex justify-between mt-4">
            <div className="h-4 w-16 bg-gray-300 rounded"></div>
            <div className="h-4 w-12 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  }
>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {
                displayApps.map((singleApp) => (
                  <App key={singleApp.id} singleApp={singleApp} />
                ))
              }
            </div>
          </Suspense>
        
        {/* Styled button - no functionality */}
        <div className='text-center mt-12'>
          <NavLink  to='/allApps'><button className='px-4 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold text-lg rounded-xl shadow-2xl hover:shadow-3xl hover:from-[#5a27cc] hover:to-[#8f4cd1] transition-all duration-300 transform hover:-translate-y-1 border-0 outline-none'>
            Show All
          </button></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Apps
