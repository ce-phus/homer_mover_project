"use client";
import React from 'react'
import Image from 'next/image'
import { hero7, download } from '@/assets'
import { london } from '../constants'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants'
import Link from 'next/link';

const London = () => {
  return (
    <>
    <div className='flex flex-row lg:flex-col sm:flex-col pt-10'>
        <div className='w-1/2 lg:w-full sm:w-full'>
            <Image 
            src={hero7}
            alt='md1'
            className='w-full h-full'/>
        </div>   
        <div className='bg-gray-100 sm:w-full w-1/2 lg:w-full'>
            <div className='flex justify-center items-center flex-col mt-20 mb-20 sm:mt-20 space-y-10'>
            <motion.h1
                variants={fadeIn("down", "spring", 0.75)} 
                initial='hidden' animate='show' 
                className='text-xl font-normal text-primary tracking-wide mt-0 uppercase'>Relocating to London with Atlas Path</motion.h1>
                <motion.h1
                variants={fadeIn("down", "spring", 0.75)} 
                initial='hidden' animate='show' 
                className='text-lg font-normal text-primary tracking-wide mt-0 uppercase'>Why Move to London?</motion.h1>
                
                <Image
                src={download}
                className='w-[150px]'
                alt=''/>
                <motion.p variants={fadeIn("right", "spring", 0.75)} 
                initial='hidden' animate='show' className='text-normal text-dark tracking-wide mx-5'>As one of the world’s most dynamic cities, London offers  <span className='font-bold'>unmatched career opportunities, rich cultural experiences, and diverse neighborhoods </span>to suit every lifestyle. Whether you're relocating for work, study, or a fresh start, London provides an exciting and vibrant place to call home.</motion.p>
            </div>
        </div>          
    </div>

    <div className="flex pt-20 pb-20 flex-col items-center justify-center space-y-10">        
        <h1 className="text-primary text-center text-xl font-normal italic tracking-wide w-full">Best Areas in London for Relocation</h1>
        <Image 
        src={download}
        alt="globe"
        className="w-[100px] h-"/>
        <p className="text-center w-[800px] sm:w-full sm:mx-2 font-normal text-md text-dark">London is made up of 32 boroughs, each offering a unique living experience. Some of the most popular areas include:</p>
    </div>
    <div className='grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-20 xl:gap-[60px] mx-4 pt-10'>
            {london.map((post)=> (
                <div key={post.id} className='flex flex-col items-center space-y-3 duration-300 ease-in-out hover:scale-105'>
                    
                    <Image 
                    src={post.img}
                    alt={post.title1}
                    className='w-[600px] lg:h-[400px] xl:w-[400px] xl:h-[350px] lg:w-[400px] h-[450px] mb-5'/>
                    <motion.h1 variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-xl font-medium text-primary mb-5'>{post.title1}</motion.h1>
                    <motion.h1 variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-lg font-normal text-dark mb-10'>{post.title2}</motion.h1>
               
                </div>
            ))}
        </div>
    </>
  )
}

export default London