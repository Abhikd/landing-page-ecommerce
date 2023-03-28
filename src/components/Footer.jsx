import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest } from 'react-icons/fa'
import { CiLocationOn, CiMail } from 'react-icons/ci'
import { FiPhoneCall } from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='w-full border border-t-gray-300 flex items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[90%] mx-auto pb-1 gap-y-10 gap-x-5 mt-4'>
            <div className='flex flex-col'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div className='flex justify-start space-x-4 py-2'>
                    <div className='h-10 w-10 bg-[#4867aa] rounded-full text-white flex items-center justify-center'>
                        <FaFacebookF />
                    </div>
                    <div className='h-10 w-10 bg-[#1da1f2] rounded-full text-white flex items-center justify-center'>
                        <FaTwitter />
                    </div>
                    <div className='h-10 w-10 bg-[#f5154f] rounded-full text-white flex items-center justify-center'>
                        <FaInstagram />
                    </div>
                    <div className='h-10 w-10 bg-[#0077b5] rounded-full text-white flex items-center justify-center'>
                        <FaLinkedinIn />
                    </div>
                    <div className='h-10 w-10 bg-[#b7081b] rounded-full text-white flex items-center justify-center'>
                        <FaPinterest />
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start'>
                <h1 className='text-red-600 text-xl font-medium'>Online Shopping</h1>
                <div className='h-[200px] flex flex-col justify-around'>
                <p>Men's T-Shirt</p>
                <p>Women's Wear</p>
                <p>Winter Collections</p>
                <p>Hooded T-Shirts</p>
                <p>Streetwear Collections</p>
                </div>
            </div>
            <div className='flex flex-col items-start'>
                <h1 className='text-red-600 text-xl font-medium'>Customer Policy</h1>
                <div className='h-[200px] flex flex-col justify-around'>
                <p>About Us</p>
                <p>Terms And Conditions</p>
                <p>Shipping & Returns Policy</p>
                <p>Cancellation & Refund Policy</p>
                <p>Contact Us</p>
                </div>
            </div>
            <div className='flex flex-col items-start'>
                <h1 className='text-red-600 text-xl font-medium'>Store Information</h1>
                <div className='h-[200px] flex flex-col justify-around'>
                    <div className='flex space-x-1'>
                        <CiLocationOn className='h-10 w-10' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className='flex space-x-2'>
                        <FiPhoneCall className='h-6 w-6' />
                        <p>Call Us: 1234567890</p>
                        </div>
                        <div className='flex space-x-1'>
                        <CiMail className='h-6 w-6' />
                        <p>Email Us: info@yourmail.com</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer