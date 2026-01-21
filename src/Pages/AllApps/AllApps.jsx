import React, { useState, useMemo, Suspense } from 'react'
import { useLoaderData } from 'react-router'
import SingleAppList from '../../Component/SingleAppList/SingleAppList'
import { CiSearch } from "react-icons/ci";
import AppNotFound from '../../assets/App-Error.png'

const AllApps = () => {
   const data = useLoaderData()
   const [searchTerm, setSearchTerm] = useState('')

   const filteredData = useMemo(() => {
      if (!searchTerm.trim()) return data
      return data.filter(app => 
         app.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
         app.title?.toLowerCase().includes(searchTerm.toLowerCase())
      )
   }, [data, searchTerm])

   const count = filteredData.length

   return (
      <div className='max-w-[1200px] mx-auto'>
         <div className='text-center my-6'>
            <h1 className='font-bold text-4xl'>Our All Applications</h1>
            <p className='text-gray-500 text-xl mt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
         </div>
         <div className='flex justify-between items-center'>
            <div className='text-2xl font-semibold'>
               <span>({count})</span>
               <span className='ml-2'>Apps Found</span>
            </div>
            <form className="bg-white shadow-md p-2 rounded-full flex items-center gap-2 max-w-md">
               <CiSearch className="text-gray-500 text-xl ml-2" />
               <input
                  type="text"
                  placeholder="Search Apps"
                  className="w-full outline-none bg-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
               />
            </form>
         </div>
         
         {filteredData.length === 0 ? (
            <div className='text-center py-20 flex flex-col justify-center items-center'>
               <img className='h-60 w-60' src={AppNotFound} alt="" />
               <h2 className='text-3xl font-bold text-gray-700 mb-2'>No Apps Found</h2>
               <p className='text-xl text-gray-500 mb-8'>
                  {searchTerm ? 
                     `No apps match "${searchTerm}"` : 
                     'No apps available at the moment.'
                  }
               </p>
               {searchTerm && (
                  <button 
                     onClick={() => setSearchTerm('')}
                     className='bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors'
                  >
                     Clear Search
                  </button>
               )}
            </div>
         ) : (
            <Suspense
  fallback={
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
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
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8'>
                {filteredData.map((singleApp) => (
                  <SingleAppList key={singleApp.id} singleApp={singleApp} />
                ))}
              </div>
            </Suspense>
         )}
      </div>
   )
}

export default AllApps
