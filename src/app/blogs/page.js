"use client";
import React from 'react'
import { idea, download } from '@/assets'
import Image from 'next/image'
import { motion } from "framer-motion"
import { fadeIn } from '../../../variants';
import { Posts, Resources } from '../constants';
import Link from 'next/link';

const Blogs = () => {
  return (
    <>
        <div className='flex flex-row lg:flex-col'>
            <div className='w-full h-[750px] sm:h-full md:h-[1000px] xl:h-[600px]'>
            <Image
            src={idea}
            alt='idea'
            className='w-full h-full'/>
            
            </div>
            <div className='w-full flex flex-col items-center lg:pt-20 bg-gray-100 space-y-5'>
                <motion.h1
                    variants={fadeIn("down", "spring", 0.75)} 
                    initial='hidden' animate='show'
                    className='text-[20px] font-normal text-primary tracking-wide mt-[120px] lg:mt-20 uppercase'>Blog & Resources</motion.h1>

                    <Image
                    src={download}
                    className='w-[150px]'
                    alt=''/>
                    <motion.h1
                    variants={fadeIn("down", "spring", 0.75)} 
                    initial='hidden' animate='show' 
                    className='text-[20px] font-normal text-primary tracking-wide mt-0 uppercase'>"Your Go-To Hub for Relocation Tips and Insights"</motion.h1>

                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-dark tracking-wide mx-5'>At Atlas Path, we believe knowledge is key to a smooth and successful relocation. Whether you’re moving locally, across the UK, or internationally, our resources are here to guide you every step of the way.</motion.p>
            </div>
        </div>
        <motion.h1 variants={fadeIn("down", "spring", 0.75)} 
        initial='hidden' animate='show'  className='pt-20 flex justify-center text-[20px] font-normal text-primary tracking-wide mt-0 uppercase'>Blogs</motion.h1>
        <div className='grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-20 xl:gap-[60px] mx-4 pt-10'>
            {Posts.map((post)=> (
                <div key={post.id} className='flex flex-col items-center space-y-3 duration-300 ease-in-out hover:scale-105'>
                    <Link href={post.link} className='text-center'>
                    <Image 
                    src={post.img}
                    alt={post.title1}
                    className='w-[600px] xl:w-[400px]  lg:w-[400px] h-[350px] bg-white mb-5'/>
                    <h1 className='text-xl font-medium text-primary mb-5'>{post.title1}</h1>
                    <h1 className='text-lg font-normal text-dark mb-10'>{post.title2}</h1>
                    </Link>
                </div>
            ))}
        </div>
        <motion.h1 variants={fadeIn("down", "spring", 0.75)} 
        initial='hidden' animate='show'  className='pt-20 flex justify-center text-[20px] font-normal text-primary tracking-wide mt-0 uppercase'>Resources</motion.h1>
        <div className='grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-20 xl:gap-[60px] mx-4 pt-10'>
        {Resources.map((resource)=> (
            <div key={resource.id} className='space-y-4 duration-300 ease-in-out hover:scale-105'>
                <Link href={resource.link} className='text-center'>
                    <Image 
                    src={resource.img}
                    alt={resource.title1}
                    className='w-[600px] xl:w-[400px]  lg:w-[400px] h-[350px] bg-white mb-5'/>
                    <h1 className='text-xl font-medium text-primary mx-3 italic mb-5'>{resource.title1}</h1>
                    <h1  className='text-lg font-normal text-dark mx-3 mb-10'>{resource.title2}</h1>
                </Link>
            </div>
        ))}
        </div>
    </>
  )
}

export default Blogs