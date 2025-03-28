import React from 'react'
import visualize from '../assets/visualize.png'
import minus from '../assets/minus.png'
import plus from '../assets/plus.png'

const Visualize = () => {
  return (
    <div className='w-auto h-150 flex mx-8'>
        <div className='w-1/2 h-125 pr-8'>
            <h2 className='text-2xl font-semibold mb-10'>Visualize your ideas with us</h2>
            <p className='max-w-160 mb-8 text-gray-400'>We are ready to help you build and also realize the room design that you dream of, with our experts and also the best category recommendations from us. </p>
            <div className='mb-5 hover:border px-2 py-2 rounded'>
                <div className='flex justify-between mb-4'>
                    <p className='font-semibold'>Modern</p>
                    <img src={minus} className ='w-4 h-1' alt="" />
                </div>
                <p className='max-w-160 text-gray-400'>Mordern design is a term in the design world that refers to a house with a clean design, simple color choices, the use of materials including metal, glass, and stell, and is usually accompained by clean lines. </p>
            </div>
            <div className='flex justify-between mb-5 hover:border rounded py-2 px-2'>
                <p className='font-semibold'>Contemporary</p>
                <img src={plus} className ='w-4 h-4' alt="" />
            </div>
            <div className='flex justify-between mb-5 hover:border rounded py-2 px-2'>
                <p className='font-semibold'>Minimalis</p>
                <img src={plus} className ='w-4 h-4' alt="" />
            </div>
            <div className='flex justify-between mb-5 hover:border rounded py-2 px-2'>
                <p className='font-semibold'>Industrial</p>
                <img src={plus} className ='w-4 h-4' alt="" />
            </div>
            <a href="" className='text-[#F79489] mx-2'>See more catagory</a>
        </div>
        <div className='w-1/2 h-125'>
            <img src={visualize} alt="" />
        </div>
    </div>
  )
}

export default Visualize