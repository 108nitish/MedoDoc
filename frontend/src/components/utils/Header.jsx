import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className='flex flex-col bg-purple-50 mt-[10vh] h-[37vh] justify-center items-center shadow-md rounded-b-3xl'>
            <div className='flex flex-col justify-center items-center'>
                <div className="heading font-extrabold text-5xl md:text-7xl">
                    <span className=' text-purple-600'>Medo</span>
                    <span className='text-slate-400'>Doc</span>
                </div>
                <div className="subheading italic text-lg text-indigo-950 mt-2 ml-1 text-center">
                    A medical assistant for your health
                </div>
            </div>
            <div className='mt-5'>
                <Link to="/prediction">
                <button type="button" class="md:w-[13vw]  text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 text-2xl">Predict</button>
                </Link>
            
            </div>
            
        </div>
    </>
  )
}

export default Header