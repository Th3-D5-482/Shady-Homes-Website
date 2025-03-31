import React from 'react'
import { feedbacks } from '../Database'

const Services = () => {
  return (
    <div className='w-auto h-150 mb-8 px-8 bg-[#FAF5F2]'>
        <h2 className='text-2xl text-center font-semibold py-20'>What they say about our services</h2>
        <div className='h-120 flex justify-between gap-10'>
            {feedbacks.map((feedback,index) => (
                <div className='w-1/3 h-70 border-gray-400 hover:border px-8 rounded'>
                    <h3 className='text-xl font-semibold mb-8'>{feedback.title}</h3>
                    <p className='text-gray-400 max-w-100 mb-8'>{feedback.data}</p>
                    <div className='w-1/2 flex h-15 gap-3'>
                        <div className='bg-center bg-no-repeat bg-cover w-15 h-15' style ={{backgroundImage: `url(${feedback.photo})`}}/>
                        <div>
                            <p className='mb-3 font-semibold'>{feedback.name}</p>
                            <p className='text-sm text-gray-400'>{feedback.occupation}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services