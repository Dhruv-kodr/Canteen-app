import React from 'react'
import Navbar from '../components/home/Navbar'
import MainPart from '../components/home/MainPart'

const Home = () => {
  return (
    <div className='min-h-screen bg-lime-50 text-black' >
      <Navbar/>
      <MainPart/>
    </div>
  )
}

export default Home
