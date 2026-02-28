import React from 'react'
import { FaGears } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { BsFillCartCheckFill } from "react-icons/bs";
import Food from './Food';


const FoodItem_1 = () => {
  return (
    <div className='w-full min-h-screen bg-gray-900 box-border text-white px-4'> 
      <h2 className='uppercase text-2xl border-b-6 border-blue-500 w-fit  pt-5 font-bold text-white '>Our smart canteen</h2>

      <div className='p-4'>
        <h2 className='border-b-6 border-blue-600  uppercase text-xl font-semibold w-fit pr-5'>veg food</h2>
        <div className='flex flex-nowrap overflow-x-auto gap-10 py-5 border-t-2 border-b-2 px-6 mt-5'>
          <Food/>
          <Food/>
          <Food/>
          <Food/>
          <Food/>
          <Food/>
          <Food/>
          <Food/>
          <Food/>
          <Food/>
         
        </div>
      </div>

      <div className='p-4'>
        <h2 className='border-b-6 border-blue-600  uppercase text-xl font-semibold w-fit pr-5'>fast food</h2>
        <div className='flex flex-nowrap overflow-x-auto gap-10 py-5 border-t-2 border-b-2 px-6 mt-5'>
         <Food/>
          <Food/>
          <Food/>
          <Food/>
          <Food/>
          <Food/>
          <Food/>
          <Food/>
          <Food/>
          <Food/>
        </div>
      </div>


      <div className='p-4'>
        <h2 className='border-b-6 border-blue-600  uppercase text-xl font-semibold w-fit pr-5'>non-veg food</h2>
        <div className='flex flex-nowrap overflow-x-auto gap-10 py-5 border-t-2 border-b-2 px-6 mt-5'>
          <Food/>
          <Food/>
          <Food/>
          <Food/>
          <Food/>
          <Food/>
          <Food/>
          <Food/>
          <Food/>
          <Food/>
        </div>
      </div>
    </div>
  )
}

export default FoodItem_1