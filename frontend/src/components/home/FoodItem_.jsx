import React from 'react'
import { FaGears } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { BsFillCartCheckFill } from "react-icons/bs";


const FoodItem_1 = () => {
  return (
    <div className='w-full h-screen overflow-hidden  bg-amber-300'>
      <div className='w-full h-full'>
          <h2 className='font-bold text-xl w-fit mt-5 ms-5 bg-amber-600 text-white border-b-2 px-5 leading-10 mx-3'>Our Services</h2>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 justify-items-center text-white">
          <div className='w-100 h-[18rem] bg-sky-500 border-2'>
            <div className='text-center my-3 font-bold  text-green-800'>
              <FaGears className='inline-block text-5xl' />
              <h2>Service1</h2>
              </div>
            <p className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolores quae voluptatibus eligendi atque vitae enim ipsam iure architecto, nulla eaque! Voluptates officia quibusdam nesciunt odio repudiandae dignissimos unde eveniet.</p>
          </div>


          <div className='w-100 h-[18rem] bg-green-400 border-2'>
            <div className='text-center my-3 font-bold '>
              <IoFastFood className='inline-block text-5xl text-amber-800' />
              <h2 className='text-amber-800'>service2</h2>
              </div>
            <p className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolores quae voluptatibus eligendi atque vitae enim ipsam iure architecto, nulla eaque! Voluptates officia quibusdam nesciunt odio repudiandae dignissimos unde eveniet.</p>
            </div>


          <div className='w-100 h-[18rem] bg-amber-400 border-2'>
            <div className='text-center my-3 font-bold '>
              <BsFillCartCheckFill className='inline-block text-amber-800 text-5xl' />
              <h2 className='text-amber-800'>service3</h2>
            </div>
            <p className='p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi facilis distinctio quasi incidunt dolorem mollitia voluptatibus! Cumque quod veniam optio mollitia, fugiat distinctio dolorem eos in vitae voluptates reprehenderit magnam.</p>

          </div>
        </div>

      </div>
    </div>
  )
}

export default FoodItem_1