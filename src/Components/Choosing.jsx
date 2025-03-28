import React from 'react'
import choose1 from '../assets/choose1.png'
import choose2 from '../assets/choose2.png'
import choose3 from '../assets/choose3.png'
import choose4 from '../assets/choose4.png'
import {motion} from 'motion/react'

const Choosing = () => {
  return (
    <motion.div 
    initial ={{opacity: 0, y: 200}}
    whileInView ={{opacity: 1, y: 0 }}
    transition ={{duration: 0.5}}
    className='w-auto h-120 mb-8 overflow-hidden'>
        <h2 className='text-2xl text-black font-semibold my-10 mx-15'>Why Choosing Us</h2>
        <div className='w-auto h-[280px] flex gap-5 mx-10'>
            <div className='w-[425px] h-[280px] px-5 rounded hover:border hover:border-gray-200 hover:shadow-xl'>
                <div className='w-20 h-20 rounded-full bg-[#FAF5F2] mt-5 relative mb-3'>
                    <img src={choose1} className ='p-5'alt="" />
                </div>
                <p className='font-semibold text-lg mb-5'>Professionalism</p>
                <p className='max-w-70 mb-5'>We deliver the final work with great professional way.</p>
                <a href="#" className='text-[#F79489]'>more info</a>
            </div>
            <div className='w-[425px] h-[280px] px-5 hover:border hover:border-gray-200 hover:shadow-xl'>
                <div className='w-20 h-20 rounded-full bg-[#FAF5F2] mt-5 relative mb-3'>
                    <img src={choose2} className ='p-5'alt="" />
                </div>
                <p className='font-semibold text-lg mb-5'>Smooth workflow</p>
                <p className='max-w-70 mb-5'>We provide the most easy smooth workflow of interior design.</p>
                <a href="" className='text-[#F79489]'>more info</a>
            </div>
            <div className='w-[425px] h-[280px] px-5 hover:border hover:border-gray-200 hover:shadow-xl'>
                <div className='w-20 h-20 rounded-full bg-[#FAF5F2] mt-5 relative mb-3'>
                    <img src={choose3} className ='p-5'alt="" />
                </div>
                <p className='font-semibold text-lg mb-5'>Trusted Platform</p>
                <p className='max-w-70 mb-5'>People trust us since we opened the company.</p>
                <a href="" className='text-[#F79489]'>more info</a>
            </div>
            <div className='w-[425px] h-[280px] px-5 hover:border hover:border-gray-200 hover:shadow-xl'>
                <div className='w-20 h-20 rounded-full bg-[#FAF5F2] mt-5 relative mb-3'>
                    <img src={choose4} className ='p-5'alt="" />
                </div>
                <p className='font-semibold text-lg mb-5'>Qualified employee</p>
                <p className='max-w-70 mb-5'>Our employees are the best of the field from the city</p>
                <a href="" className='text-[#F79489]'>more info</a>
            </div>
        </div>
    </motion.div>
  )
}

export default Choosing