import React from 'react'
import choose1 from '../assets/choose1.png'
import choose2 from '../assets/choose2.png'
import choose3 from '../assets/choose3.png'
import choose4 from '../assets/choose4.png'

const Choosing = () => {
  return (
    <div className='w-auto h-290 mb-8 overflow-hidden md:h-120'>
        <h2 className='text-2xl text-black font-semibold my-10 mx-15 hidden md:block'>Why Choosing Us</h2>
        <div className='w-auto h-[280px] flex-row gap-5 mx-10 md:flex'>
            <div className='w-auto h-[280px] px-5 rounded border hover:border border-gray-200 shadow-xl  md:w-[425px]'>
                <div className='w-10 h-10 rounded-full bg-[#FAF5F2] mt-5 relative mb-3 md:w-20 md:h-20'>
                    <img src={choose1} className ='md:p-5'alt="" />
                </div>
                <p className='font-semibold text-lg mb-5'>Professionalism</p>
                <p className='mb-5 text-gray-400 md:max-w-70'>We deliver the final work with great professional way.</p>
                <a href="#" className='text-[#F79489]'>more info</a>
            </div>
            <div className='w-auto h-[280px] px-5 hover:border border-gray-200 shadow-xl rounded md:w-[425px]'>
                <div className='w-10 h-10 rounded-full bg-[#FAF5F2] mt-5 relative mb-3 md:w-20 md:h-20'>
                    <img src={choose2} className ='md:p-5'alt="" />
                </div>
                <p className='font-semibold text-lg mb-5'>Smooth workflow</p>
                <p className='max-w-70 mb-5 text-gray-400'>We provide the most easy smooth workflow of interior design.</p>
                <a href="" className='text-[#F79489]'>more info</a>
            </div>
            <div className='w-auto h-[280px] px-5 hover:border border-gray-200 shadow-xl rounded md:w-[425px]'>
                <div className='w-10 h-10 rounded-full bg-[#FAF5F2] mt-5 relative mb-3 md:w-20 md:h-20'>
                    <img src={choose3} className ='md:p-5'alt="" />
                </div>
                <p className='font-semibold text-lg mb-5'>Trusted Platform</p>
                <p className='max-w-70 mb-5 text-gray-400'>People trust us since we opened the company.</p>
                <a href="" className='text-[#F79489]'>more info</a>
            </div>
            <div className='w-auto h-[280px] px-5 hover:border border-gray-200 shadow-xl rounded md:w-[425px]'>
                <div className='w-10 h-10 rounded-full bg-[#FAF5F2] mt-5 relative mb-3 md:w-20 md:h-20'>
                    <img src={choose4} className ='md:p-5'alt="" />
                </div>
                <p className='font-semibold text-lg mb-5'>Qualified employee</p>
                <p className='max-w-70 mb-5 text-gray-400'>Our employees are the best of the field from the city</p>
                <a href="" className='text-[#F79489]'>more info</a>
            </div>
        </div>
    </div>
  )
}

export default Choosing