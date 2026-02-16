import React from 'react'
import video from '../../assets/foodYard.mp4'

const Hero = () => {
  return (
    <div className='w-full h-screen overflow-hidden '>
      <video src={video} autoPlay muted  loop className='w-full h-full object-cover'></video>
    </div>
  )
}

export default Hero
