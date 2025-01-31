"use client";
import React from 'react'
import Image from 'next/image'
import { styles } from '../styles'
import { motion } from "framer-motion"
import { fadeIn } from '../../../variants';
import { manchester, brighton, bristol, birmingham, oxford, newcastle, cotswolds, hero31, download, globe } from '@/assets'

const England = () => {
  return (
    <>
    <div className='flex flex-row lg:flex-col sm:flex-col pt-10'>
        <div className='w-1/2 lg:w-full sm:w-full'>
            <Image 
            src={hero31}
            alt='md1'
            className='w-full h-full'/>
        </div>   
        <div className='bg-gray-100 sm:w-full w-1/2 lg:w-full'>
            <div className='flex justify-center items-center flex-col mt-20 mb-20 sm:mt-20 space-y-10'>
            <motion.h1
                variants={fadeIn("down", "spring", 0.75)} 
                initial='hidden' animate='show' 
                className='text-xl font-normal text-primary tracking-wide mt-0 uppercase'>Relocating Across England with Atlas Path</motion.h1>
                <motion.h1
                variants={fadeIn("down", "spring", 0.75)} 
                initial='hidden' animate='show' 
                className='text-lg font-normal text-primary tracking-wide mt-0 uppercase'>Why Move to Surrey?</motion.h1>
                
                <Image
                src={download}
                className='w-[150px]'
                alt=''/>
                <motion.p variants={fadeIn("right", "spring", 0.75)} 
                initial='hidden' animate='show' className='text-normal text-dark tracking-wide mx-5'>Beyond Surrey and London, the rest of England offers a wealth of opportunities, from <span className='font-bold'>bustling cities and thriving business hubs </span> to <span className='font-bold'>charming countryside retreats and historic market towns.</span> Whether you're relocating for work, family, or a lifestyle change, Atlas Path ensures a seamless transition to your new home.</motion.p>
            </div>
        </div>          
    </div>

    <div className="flex pt-10 pb-20 flex-col items-center justify-center space-y-10">
        <Image 
        src={globe}
        alt="globe"
        className="w-[100px] h-"/>
        <h1 className="text-primary text-center text-xl font-normal italic tracking-wide w-full">Why Choose Atlas Path for Your Move?</h1>
        <p className="text-center w-[800px] sm:w-full sm:mx-2 font-normal text-md text-dark">We provide tailored relocation support, whether you’re moving to a fast-growing city like Manchester, a historic townlike Oxford, or a coastal retreat like Brighton. Our expertise spans the entire country, offering you in-depth knowledge and personalized assistance.</p>
    </div>

    <h1 className='flex items-center justify-center text-xl font-medium text-dark pt-20 mb-5'>What We Offer:</h1>
    <h1 className='flex items-center justify-center text-2xl font-medium text-primary mb-10'>Top Locations for Relocation Across England</h1>

    <div className='pt-10'>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5 bg-gray-100'>
          <div className='mt-10 space-y-7 mx-3 text-center pt-20'>
            <h1 className={styles.heroHeadText}>Manchester </h1>
            <p className={`${styles.paragraph}`}>A booming city with a strong economy, great transport links, and cultural hotspots.</p>
          </div>

          <Image 
          src={manchester}
          className='w-full h-[600px] sm:h-full md:h-full'
          alt="hero7"/>
        </div>
    </div>
    <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>
        <Image 
          src={birmingham}
          className='w-full h-[600px] sm:h-full md:h-full'
          alt="hero7"/>
          <div className='mt-10 space-y-7 mx-3 text-center pt-20'>
            <h1 className={styles.heroHeadText}>Birmingham </h1>
            <p className={`${styles.paragraph}`}>A major business and education hub with excellent affordability.</p>
          </div>
    </div>

    <div className='bg-gray-100'>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>
          <div className='mt-10 space-y-7 mx-3 text-center pt-20'>
            <h1 className={styles.heroHeadText}>Oxford & Cambridge </h1>
            <p className={`${styles.paragraph}`}>World-renowned for their universities, history, and charming neighborhoods.</p>
          </div>

          <Image 
          src={oxford}
          className='w-full h-[600px] sm:h-full md:h-full'
          alt="hero7"/>
        </div>
    </div>


    <div className=''>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'> 
            <Image 
            src={bristol}
            className='w-full h-[600px] sm:h-full md:h-full'
            alt="hero7"/>
          <div className='mt-10 space-y-7 mx-3 text-center pt-20'>
            <h1 className={styles.heroHeadText}>Bristol </h1>
            <p className={`${styles.paragraph}`}>A vibrant city with a strong creative and tech scene.</p>
          </div>
        </div>
    </div>

    <div className='bg-gray-100'>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>
          <div className='mt-10 space-y-7 mx-3 text-center pt-20'>
            <h1 className={styles.heroHeadText}>Brighton </h1>
            <p className={`${styles.paragraph}`}>A beautiful coastal town with a relaxed atmosphere and a thriving arts community.</p>
          </div>
          <Image 
            src={brighton}
            className='w-full h-[600px] sm:h-full md:h-full'
            alt="hero7"/>
        </div>
    </div>

    <div className=''>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>
         <Image 
            src={cotswolds}
            className='w-full h-[600px] sm:h-full md:h-full'
            alt="hero7"/> 
          <div className='mt-10 space-y-7 mx-3 text-center pt-20'>
            <h1 className={styles.heroHeadText}>The Cotswolds</h1>
            <p className={`${styles.paragraph}`}>Perfect for those seeking countryside living with easy access to major cities.</p>
          </div>
          
        </div>
    </div>

    <div className='bg-gray-100'>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>
          <div className='mt-10 space-y-7 mx-3 text-center pt-20'>
            <h1 className={styles.heroHeadText}>Newcastle </h1>
            <p className={`${styles.paragraph}`}>A friendly city with great career opportunities and a lower cost of living.</p>
          </div>
          <Image 
            src={newcastle}
            className='w-full h-[600px] sm:h-full md:h-full'
            alt="hero7"/>
        </div>
    </div>
    </>
  )
}

export default England