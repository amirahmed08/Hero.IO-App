import React from 'react'
import starImg from '../../assets/icon-ratings.png'
import downloadImg from '../../assets/icon-downloads.png'

const InstalledApp = ({b, removeInstalledApp}) => {
 const handleRemove = () => {
  if (removeInstalledApp) {
    removeInstalledApp(b.id);
  }
};

  return (
         <div className='flex justify-between items-center bg-white px-4 py-2 rounded-md shadow-md'>
            <div className='flex flex-row gap-3'>
              <div>
              <img className='bg-gray-300 h-15 w-15 rounded-lg bg-cover' src={b.image} alt="" />
            </div>
            <div>
              <h1 className='text-2xl font-bold mb-2'>{b.title}</h1>
              <div className='flex gap-4'>
                <div className='flex gap-2'>
                  <img className='h-5 w-5' src={downloadImg} alt="" />
                  <span>{b.downloads}</span>
                </div>
                <div className='flex gap-2'>
                  <img className='h-5 w-5' src={starImg} alt="" />
                  <span>{b.ratingAvg}</span>
                </div>
                <div>
                  <span>{b.size}MB</span>
                </div>
              </div>
            </div>
            </div>
          <div>
            <button onClick={handleRemove} className='bg-[#00D390] rounded-md text-white font-semibold px-3 py-2'>Uninstall</button>
          </div>
          </div>
  )
}

export default InstalledApp