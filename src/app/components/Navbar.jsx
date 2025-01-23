"use client";
import React from 'react'
import { logo3 } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import { FaPhoneVolume } from "react-icons/fa6";
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <>
    <nav className='w-full bg-[#301934] border border-transparent p-2 text-white'>
      <div className='max-w-6xl mx-auto flex justify-between'>
        <div className='flex space-x-3 mt-2'>
            <Link href='/personal'>
              <h2 className='font-medium text-lg tracking-wide text-white'>Personal</h2>
            </Link>
            <Link href='/company'>
              <h2 className='font-medium text-lg tracking-wide text-white'>Company</h2>
            </Link>
            <Link href='/partners'>
              <h2 className='font-medium text-lg tracking-wide text-white'>Partners</h2>
            </Link>
        </div>

        <div className='flex space-x-5'>
            <div className='flex space-x-2 mt-2'>
              <FaPhoneVolume className='text-white mt-1' />
              <p className='text-white font-medium'>+234 703 123 4567</p>
            </div>
            <motion.button
            onClick={() => navigate('/register')}
            className='px-3 py-2 rounded-xl relative radial-gradient'
            initial={{ "--x": "100%", scale: 1 }}
            animate={{ "--x": "-100%" }}
            whileTap={{ scale: 0.97 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 1,
              type: "spring",
              stiffness: 20,
              damping: 15,
              mass: 2,
              scale: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                mass: 0.1,
              },
            }}
          >
            <span className='text-neutral-100 font-medium tracking-wide h-full w-full block relative linear-mask'>Get Quote</span>
            <span className='block absolute inset-0 rounded-xl p-px linear-overlay'/>
          </motion.button>
        </div>
      </div>   
    </nav>
    <nav
    className='bg-[#1B1212] w-full text-white'>
      <div className='flex max-w-7xl mx-auto justify-between'>
        <Image
        src={logo3}
        alt='logo'
        className='w-[120px] h-[120px] contain'/>
        <div className='flex space-x-10 mt-[50px]'>
          <Link href='/login'>
            <h2 className='font-medium text-lg tracking-wide text-white'>Moving with us</h2>
          </Link>
          <Link href='/register'>
            <h2 className='font-medium text-lg tracking-wide text-white'>Useful Resources</h2>
          </Link>
          <Link href='/register'>
            <h2 className='font-medium text-lg tracking-wide text-white'>Moving Guides</h2>
          </Link>
          <Link href='/register'>
            <h2 className='font-medium text-lg tracking-wide text-white'>Moving Services</h2>
          </Link>
          <Link href='/register'>
            <h2 className='font-medium text-lg tracking-wide text-white'>About Us</h2>
          </Link>
          <Link href='/register'>
            <h2 className='font-medium text-lg tracking-wide text-white'>Contact Us</h2>
          </Link>
        </div>
      </div>
    </nav>
    </>
    
  )
}

export default Navbar