import React from 'react'
import app_logo from '../assets/app_logo.png'
import bag_fill from '../assets/bag_fill.png'
import lines from '../assets/lines.png'

const Navbar = () => {
  return (
    <div className='w-auto h-15 mx-8 my-4 justify-between items-center flex text-white md:mx-20'>
        <div className='flex items-center my-1'>
            <img src={app_logo} alt="" />
            <a href="#"><h3 className='max-w-16 text-white font-semibold ml-2'>Shady Homes</h3></a>
        </div>
        <div className='hidden md:block'>
            <ul className='flex gap-15'>
                <li><a href="#" className='hover:text-gray-200 hover:underline'>Furniture</a></li>
                <li><a href="#" className='hover:text-gray-200 hover:underline'>Shop</a></li>
                <li><a href="#" className='hover:text-gray-200 hover:underline'>About Us</a></li>
                <li><a href="#" className='hover:text-gray-200 hover:underline'>Contact</a></li>
            </ul>
        </div>
        <div>
            <button className='cursor-pointer'>
                <img src={bag_fill} alt="" />
            </button>
            <button className='cursor-pointer md:hidden ml-5'>
                <img src={lines} alt="" />
            </button>
        </div>
    </div>
  )
}

export default Navbar