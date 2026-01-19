import React from 'react'
import starImg from '../../assets/icon-ratings.png'
import downloadImg from '../../assets/icon-downloads.png'
import { Link } from 'react-router'

const SingleAppList = ({singleApp}) => {

const {id,title}=singleApp
  return (
    <Link to={`/appDetails/${id}`}>
     <div className="card bg-base-200 w-auto shadow-sm p-2 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
      <figure>
        <img
          className='bg-gray-200 h-50 mask-size: cover rounded-xl'
          src={singleApp.image}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{singleApp.title}</h2>
        <div className='flex justify-between items-center mt-3 '>
        <span className='flex justify-baseline items-center gap-2 p-2 py-1 px-2 bg-gray-200 rounded-md'>
          <img className='h-5 w-5' src={downloadImg} alt="" />
          <span>9M</span>
        </span>
        <span className='flex justify-baseline items-center gap-2 py-1 px-2 bg-gray-200 rounded-md'>
          <img className='h-5 w-5' src={starImg} alt="" />
          <span>5</span>
        </span>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default SingleAppList