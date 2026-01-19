import React from 'react'
import Banner from '../../Component/Banner/Banner'
import SubBanner from '../../Component/Sub-Banner/SubBanner'
import Apps from '../../Component/Apps/Apps'
import { useLoaderData } from 'react-router'

const Home = () => {
  const data = useLoaderData()


  return (
    <div>
      <Banner></Banner>
      <SubBanner></SubBanner>
      <Apps data={data}></Apps>
    </div>
  )
}

export default Home