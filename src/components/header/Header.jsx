import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { AiFillHome } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className=' border border-b-slate-400  p-5 '>
        <div className='max-w-screen-xl m-auto'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-10 items-center'>
                    <Link to={"/"}><div className='flex gap-4 items-center'>
                        <span className='text-2xl text-[#7065f1]' ><AiFillHome /></span>
                        <span className='text-xl font-semibold'>Esatery</span>
                    </div></Link>
                    <ul className='md:flex items-center gap-6 font-medium hidden'>
                        <li>Rent</li>
                        <li>Buy</li>
                        <li>Sell</li>
                        <li className='flex items-center gap-2'>Manage Property <IoIosArrowDown /></li>
                        <li className='flex items-center gap-2'>Resources <IoIosArrowDown /></li>
                    </ul>
                </div>
                <div className='hidden md:flex gap-5 items-center font-medium'>
                
                    <button className='px-6 py-2 rounded-md border  text-[#7065f1]'>Login</button>
                    <button className='px-6 py-2 rounded-md border bg-[#7065f1] text-white'>Sign Up</button>
                </div>
                <div className='text-2xl md:hidden'>
                <TiThMenu />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header