import React from 'react'
import video from '../../assets/foodYard.mp4'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='w-full h-screen  relative '>
      <Navbar/>
      <video src={video} autoPlay muted  loop className='w-full h-full absolute inset-0 -z-10 object-cover'></video>
    </div>
  )
}

export default Hero
