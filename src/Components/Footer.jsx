import React from 'react'
import app_logo from '../assets/app_logo.png'

const Footer = () => {
  return (
    <div className='w-auto h-100 px-8 py-20 bg-black justify-between'>
        <div className='flex'>
            <div className='w-1/5 flex'>
                <img src ={app_logo} className='h-10 w-10 mt-3' alt="" />
                <h2 className='text-2xl font-bold max-w-30 ml-3 text-white'>Shady Homes</h2>
            </div>
            <div className='w-1/5'>
                <h3 className='text-xl text-[#FADCD9] mb-3 font-semibold'>Features</h3>
                <ul className='text-white'>
                    <li className='mb-3'><a href="#" className='hover:underline hover:text-gray-400'>Our Features</a></li>
                    <li className='mb-3'><a href="#" className='hover:underline hover:text-gray-400'>Pricing</a></li>
                    <li className='mb-3'><a href="#" className='hover:underline hover:text-gray-400'>Affliate Program</a></li>
                    <li className='mb-3'><a href="#" className='hover:underline hover:text-gray-400'>Press Kit</a></li>
                </ul>
            </div>
            <div className='w-1/5'>
                <h3 className='text-xl text-[#FADCD9] mb-3 font-semibold'>Support</h3>
                <ul className='text-white'>
                        <li className='mb-3'><a href="#" className='hover:underline hover:text-gray-400'>Account</a></li>
                        <li className='mb-3'><a href="#" className='hover:underline hover:text-gray-400'>Help</a></li>
                        <li className='mb-3'><a href="#" className='hover:underline hover:text-gray-400'>Contact Us</a></li>
                    </ul>
                </div>
            <div className='w-1/5'>
                <h3 className='text-xl text-[#FADCD9] mb-3 font-semibold'>Legal</h3>
                <ul className='text-white'>
                    <li className='mb-3'><a href="#" className='hover:underline hover:text-gray-400'>Privacy Policy</a></li>
                    <li className='mb-3'><a href="#" className='hover:underline hover:text-gray-400'>Terms of Use</a></li>
                </ul>
            </div>
            <div className='w-1/5'>
                <h3 className='text-xl text-[#FADCD9] mb-3 font-semibold'>Social Media</h3>
                <ul className='text-white'>
                    <li className='mb-3'><a href="#" className='hover:underline hover:text-gray-400'>Twitter</a></li>
                    <li className='mb-3'><a href="#" className='hover:underline hover:text-gray-400'>Facebook</a></li>
                    <li className='mb-3'><a href="#" className='hover:underline hover:text-gray-400'>Instagram</a></li>
                    <li className='mb-3'><a href="#" className='hover:underline hover:text-gray-400'>YouTube</a></li>
                </ul>
            </div>
        </div>
        <div>
            <p className='text-center text-gray-400 mt-20'>Copyrights {new Date().getFullYear()} © Shady Homes</p>
        </div>
    </div>
  )
}

export default Footer