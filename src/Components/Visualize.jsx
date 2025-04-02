import React, { useState } from 'react'
import visualize from '../assets/visualize.png'

const Visualize = () => {
    const [isModern,setIsModern] = useState(true);
    const [isContemporary,setIsContemporary] = useState(false);
    const [isMinimalis,setIsMinimalis] = useState(false);
    const [isIndustrial,setIsIndustrial] = useState (false);
    const Modern = (isTrue) => {
        if (isTrue) {
            setIsModern(!isModern);
        }
        else {
            setIsModern(false);
        }
       
    }
    const Contemporary = (isTrue) => {
        if (isTrue) {
            setIsContemporary(!isContemporary);
        }
        else {
            setIsContemporary(false);
        }
    }
    const Minimalis = (isTrue) => {
        if  (isTrue) {
            setIsMinimalis(!isMinimalis);
        }
        else {
            setIsMinimalis(false);
        }
    }
    const Industrial = (isTrue) => {
        if (isTrue) {
            setIsIndustrial(!isIndustrial);
        }
        else {
            setIsIndustrial(false);
        }
    }
  return (
    <div className='w-auto h-150 flex mx-8 mb-8 overflow-hidden'>
        <div className='w-1/2 h-125 pr-8'>
            <h2 className='text-2xl font-semibold mb-10'>Visualize your ideas with us</h2>
            <p className='max-w-160 mb-5 text-gray-400'>We are ready to help you build and also realize the room design that you dream of, with our experts and also the best category recommendations from us. </p>
            <div className='mb-2 hover:border px-2 py-2 rounded border-gray-400'>
                <div className='flex justify-between mb-5'>
                    <p className='font-semibold'>Modern</p>
                    <button className='text-[#F79489] text-3xl cursor-pointer' onClick = {() => {
                        Modern(true);
                        Contemporary(false);
                        Minimalis(false);
                        Industrial(false);
                    }}>{isModern ? '-' : '+'}
                    </button>
                </div>
                {isModern && (<p className='max-w-160 text-gray-400'>Mordern design is a term in the design world that refers to a house with a clean design, simple color choices, the use of materials including metal, glass, and stell, and is usually accompained by clean lines. </p>)}
            </div>
            <div className='mb-2 hover:border px-2 py-2 rounded border-gray-400'>
                <div className='flex justify-between mb-5'>
                    <p className='font-semibold'>Contemporary</p>
                    <button className='text-[#F79489] text-3xl cursor-pointer' onClick = {() => {
                        Modern(false);
                        Contemporary(true);
                        Minimalis(false);
                        Industrial(false);
                    }}>{isContemporary ? '-' : '+'}
                    </button>
                </div>
                {isContemporary && (<p className='max-w-160 text-gray-400'>Contemporary design is a term in the design world that refers to a house with a constantly evolving aesthetic, blending various styles while focusing on current trends, functionality, and harmony.</p>)}
            </div>
            <div className='mb-2 hover:border px-2 py-2 rounded border-gray-400'>
                <div className='flex justify-between mb-5'>
                    <p className='font-semibold'>Minimalis</p>
                    <button className='text-[#F79489] text-3xl cursor-pointer' onClick = {() => {
                        Modern(false);
                        Contemporary(false);
                        Minimalis(true);
                        Industrial(false);
                    }}>{isMinimalis ? '-' : '+'}
                    </button>
                </div>
                {isMinimalis && (<p className='max-w-160 text-gray-400'>Minimalist design is a term in the design world that refers to a house with an uncluttered layout, a neutral color palette, an emphasis on open spaces, and only essential furniture and decor.</p>
            )}
            </div>
            <div className='mb-2 hover:border px-2 py-2 rounded border-gray-400'>
                <div className='flex justify-between mb-5'>
                    <p className='font-semibold'>Industrial</p>
                    <button className='text-[#F79489] text-3xl cursor-pointer' onClick = {() => {
                        Modern(false);
                        Contemporary(false);
                        Minimalis(false);
                        Industrial(true);
                    }}>{isIndustrial ? '-' : '+'}
                    </button>
                </div>
                {isIndustrial && (<p className='max-w-160 text-gray-400'>Industrial design is a term in the design world that refers to a house with a raw and edgy aesthetic, featuring materials like exposed brick, concrete, wood, and metal, with a focus on utilitarian appeal.</p>
            )}
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