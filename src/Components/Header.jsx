import React from 'react'
import Navbar from './Navbar'
import Search from '../assets/Search.png'
import {motion} from 'motion/react'

const Header = () => {
  return (
    <div className='w-auto min-h-130 overflow-hidden mb-8 bg-center bg-cover bg-[url(/background.png)] md:min-h-screen' style = {{filter: 'brightness(60%)'}} id ="Header">
        <Navbar/>
        <motion.div
        initial ={{opacity: 0, y: 200}}
        whileInView ={{opacity: 1, y: 0 }}
        transition ={{duration: 0.5}}
        >
            <h2 className='max-w-80 text-center text-2xl mx-auto mt-8 font-bold text-white mb-8 md:text-4xl md:max-w-110 md:mt-35'>Make Your Interioir More Minimaistic & Modern </h2>
            <p className='mx-auto max-w-80 text-center text-white mb-10 md:max-w-110'>Bringing interiors to life, understanding the person or people living in a home is far greater need in design.</p>
            <div className="relative w-auto h-15 border border-white rounded-full bg-transparent text-white flex items-center px-4 mx-8 md:w-1/5 md:mx-150">
              <input type="text" className="bg-transparent flex-grow outline-none text-white placeholder-white" placeholder="Search Furniture"/>
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center ml-3">
                <img src={Search} className="p-3 cursor-pointer" alt="" />
              </div>
        </div>
     </motion.div>
    </div>
  )
}

export default Header