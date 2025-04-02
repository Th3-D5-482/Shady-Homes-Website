import React from 'react'
import {products} from '../Database.js'

const StarRating = ({ rating }) => {
    const totalStars = 5;
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {[...Array(totalStars)].map((_, index) => (
          <span
            key={index}
            style={{
              color: index < rating ? 'yellow' : 'gray',
              fontSize: '24px',
              marginRight: '4px', 
            }}
          >
            ★
          </span>
        ))}
      </div>
    );
  };
  

const Featured = () => {
    return (
    <div className='w-auto h-220 mx-8 mb-8 overflow-hidden md:h-140'>
        <h2 className='font-semibold text-2xl text-center mb-10'>Featured Product</h2>
        <div className='h-200 grid grid-rows-2 grid-cols-2 justify-between gap-5 md:flex md:h-110'>
            {products.map((product,index) => (
                <div className='w-auto h-110 hover:border border-gray-400 rounded cursor-pointer md:w-1/4' key ={index}>
                    <div className='h-50 bg-center bg-no-repeat bg-contain bg-[#f6f6f6] rounded md:h-70' style={{backgroundImage: `url(${product.image})`}}/>
                    <div className='h-30 px-8 py-3'>
                        <p className='mb-1 font-semibold'>{product.name}</p>
                        <p className='text-gray-400 text-sm mb-1'>{product.category}</p>
                        <StarRating rating={product.ratings} className ='mb-1' />
                        <p className='font-bold text-xl'>${product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Featured