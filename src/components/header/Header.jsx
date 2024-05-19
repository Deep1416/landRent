import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
const Header = () => {
  return (
    <div className='bg-yellow-200  p-5'>
        <div className='max-w-screen-xl m-auto'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-10 items-center'>
                    <div className='flex gap-4'>
                        <span >name</span>
                        <span className='text-lg font-semibold'>Logo</span>
                    </div>
                    <ul className='flex items-center gap-6 font-medium'>
                        <li>Rent</li>
                        <li>Buy</li>
                        <li>Sell</li>
                        <li className='flex items-center gap-2'>Manage Property <IoIosArrowDown /></li>
                        <li className='flex items-center gap-2'>Resources <IoIosArrowDown /></li>
                    </ul>
                </div>
                <div className='flex gap-5 items-center font-medium'>
                    <button className='px-6 py-2 rounded-md border-2 border-purple-400 text-purple-400'>Login</button>
                    <button className='px-6 py-2 rounded-md border-2 border-purple-400 bg-purple-400 text-white'>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header