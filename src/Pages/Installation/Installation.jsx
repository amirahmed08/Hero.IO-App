import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
import { getInstalledApp } from '../../Utility/Utility'
import InstalledApp from '../InstalledApp/InstalledApp'

const Installation = () => {
  const [appList, setAppList] = useState([])
  const data= useLoaderData()
  useEffect(() => {
    const storedAppData = getInstalledApp();
    const convertedStoredApp = storedAppData.map(id=>parseInt(id))
    const installedApp =data.filter(app => convertedStoredApp.includes(app.id))
    set
  },[])
  return (
    <div className='bg-base-200'>
      <div className='max-w-[1200px] mx-auto'>
        {
          appList.map(b => <InstalledApp key={b.id} b={b}></InstalledApp>)
        }
      </div>
    </div>
  )
}

export default Installation