import React from 'react'
import homey from '../assets/homey.png'
import right_arrow from '../assets/right_arrow.png'

const Homey = () => {
  return (
    <div className='w-auto mx-8 h-130 mb-20 flex'>
        <div className='w-1/2'>
            <img src={homey} alt="" />
        </div>
        <div className='w-1/2 px-8 py-8'>
            <h2 className='text-2xl font-semibold mb-8'>Make your room feel homey</h2>
            <p className='text-gray-400 mb-8'>We help people not only to make the room at home better, but we help people to feel a more homey and comfortable room, you don't have to worry about the result because of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials.</p>
            <p className='text-gray-400 mb-8'>Contact us, if your are interested in working with us.</p>
            <div className='border border-[#F79489] w-80 h-15 rounded-full flex items-center px-4'>
                <input type="email" className ='w-80 h-15 outline-none text-[#F79489]'  placeholder ='Insert your email address' name="" id="" />
                <div className='w-15 h-12 rounded-full bg-[#FADCD9] flex items-center justify-center'>
                    <img src={right_arrow} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homey