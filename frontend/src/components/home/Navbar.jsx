import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import React from 'react'
import { useState } from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] =useState(false);
  return (
    <>
    <div className='absolute top-0 left-0 w-full z-50  text-white text-xl'>
    <div className='px-8 py-4 flex  flex-wrap justify-between items-center sticky top-0'>
      <div style={{fontFamily:"cursive"}} className='text-2xl italic bg-amber-400 ps-8 pr-10 py-1 rounded-r-sm  rounded-t-4xl text-center '>GLI Canteen</div>
      <div className='flex justify-end items-center gap-10 lg:flex hidden'>
        <Link to='/' className='font-medium text-lg cursor-pointer active:scale-95 hover:text-amber-400' >Home</Link>
        <Link to='/login' className='font-medium text-lg cursor-pointer active:scale-95 hover:text-amber-400 duration-300' >Login</Link>
        <Link to='/register' className='font-medium text-lg cursor-pointer active:scale-95 hover:text-amber-400 duration-300' >Register</Link>
        <Link to='/register' className='font-medium text-lg cursor-pointer active:scale-95 hover:text-amber-400 duration-300' >status</Link> 
        <Link to='/register' className='font-medium text-lg cursor-pointer active:scale-95 hover:text-amber-400 duration-300' >Admin Login</Link>
      </div>
      <div className='flex justify-start lg:flex hidden  gap-2 items-center'>
        <div className='hover:bg-amber-300 rounded-full px-1 py-1  duration-300'>🔎</div>
        <div><input type="text" placeholder='serch product..' className='border-2 outline-none rounded-lg px-2 placeholder:text-sm ' /></div>
      </div>
          <div className='lg:hidden'><GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} /></div>
          
        <div className='lg:hidden mt-4 text-xl cursor-pointer w-full text-center flex justify-center '>
          {isOpen && 
      <>
        <div className=' flex flex-col gap-5 w-2/3 rounded-xl bg-amber-400 py-2'>
        <Link to='/' className='font-medium cursor-pointer active:scale-95 hover:text-amber-400' >Home</Link>
        <Link to='/login' className='font-medium  cursor-pointer active:scale-95 hover:text-amber-400' >Login</Link>
        <Link to='/register' className='font-medium  cursor-pointer active:scale-95 hover:text-amber-400' >Register</Link>
        <Link to='/register' className='font-medium  cursor-pointer active:scale-95 hover:text-amber-400' >status</Link> 
        <Link to='/register' className='font-medium  cursor-pointer active:scale-95 hover:text-amber-400' >Admin Login</Link>
          </div>
      </>
          }
          
        </div>
    </div>
    </div>
    </>
  )
}

export default Navbar
