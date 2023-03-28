import React from 'react'
import { CiSearch, CiHeart, CiUser, CiSettings } from 'react-icons/ci'
import { BsBag } from 'react-icons/bs'


const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-14 sm:h-16 shadow-lg px-10 md:px-24 lg:px-36'>
            <div className='cursor-pointer'>
                <h1 className='font-semibold'>Logo Here</h1>
            </div>
            <div className='cursor-pointer border border-gray-400 rounded-full bg-transparent flex items-center'>
                <input className="pl-5 sm:py-2 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type="text" placeholder='Search' />
                <CiSearch className='hidden md:inline-flex text-gray-500 mr-2' />
            </div>
            <div>
                <ul className='flex space-x-3'>
                    <li className='cursor-pointer'><CiSettings size={19} /></li>
                    <li className='cursor-pointer'><CiHeart /></li>
                    <li className='cursor-pointer'><BsBag className='h-3.5' /></li>
                    <li className='cursor-pointer'><CiUser /></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar




