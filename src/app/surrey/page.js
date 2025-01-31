"use client";
import React from 'react'
import { guildford, woking, farnham, esher, reigate, download } from '@/assets'
import { styles } from '../styles';
import { motion } from "framer-motion"
import Image from 'next/image'
import { fadeIn } from '../../../variants'
import { locations } from '../constants';
import Slider from 'react-slick';

const Surrey = () => {
  return (
    <>
    <div className='flex flex-row lg:flex-col sm:flex-col pt-10'>
        <div className='w-1/2 lg:w-full sm:w-full'>
            <Image 
            src={reigate}
            alt='md1'
            className='w-full h-full'/>
        </div>   
        <div className='bg-gray-100 sm:w-full w-1/2 lg:w-full'>
            <div className='flex justify-center items-center flex-col mt-20 mb-20 sm:mt-20 space-y-10'>
            <motion.h1
                variants={fadeIn("down", "spring", 0.75)} 
                initial='hidden' animate='show' 
                className='text-xl font-normal text-primary tracking-wide mt-0 uppercase'>Relocating to Surrey with Atlas Path</motion.h1>
                <motion.h1
                variants={fadeIn("down", "spring", 0.75)} 
                initial='hidden' animate='show' 
                className='text-lg font-normal text-primary tracking-wide mt-0 uppercase'>Why Move to Surrey?</motion.h1>
                
                <Image
                src={download}
                className='w-[150px]'
                alt=''/>
                <motion.p variants={fadeIn("right", "spring", 0.75)} 
                initial='hidden' animate='show' className='text-normal text-dark tracking-wide mx-5'>Surrey is one of England’s most sought-after locations, offering the perfect blend of scenic countryside, excellent transport links, and outstanding quality of life. Whether you're a professional seeking proximity to London, a family looking for top-rated schools, or someone who enjoys a balance of city access and peaceful surroundings, Surrey has something for everyone.</motion.p>
            </div>
        </div>          
    </div>

    <h1 className='text-2xl font-medium tracking-wide text-primary flex items-center justify-center pt-20'>Popular Areas in Surrey for Relocation</h1>
    <div className='pt-20'>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5 bg-gray-100'>
          <div className='mt-10 space-y-7 mx-3 text-center pt-20'>
            <h1 className={styles.heroHeadText}>Guildford</h1>
            <p className={`${styles.paragraph}`}>Vibrant town with excellent schools, shopping, and transport links.</p>
          </div>

          <Image 
          src={guildford}
          className='w-full h-[600px] sm:h-full md:h-full'
          alt="hero7"/>
        </div>
    </div>
    <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>
        <Image 
          src={woking}
          className='w-full h-[600px] sm:h-full md:h-full'
          alt="hero7"/>
          <div className='mt-10 space-y-7 mx-3 text-center pt-20'>
            <h1 className={styles.heroHeadText}>Woking </h1>
            <p className={`${styles.paragraph}`}>A fast-developing commuter town with fantastic London connections.</p>
          </div>
    </div>

    <div className='bg-gray-100'>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>
          <div className='mt-10 space-y-7 mx-3 text-center pt-20'>
            <h1 className={styles.heroHeadText}>Farnham </h1>
            <p className={`${styles.paragraph}`}>Historic market town with countryside charm.</p>
          </div>

          <Image 
          src={farnham}
          className='w-full h-[600px] sm:h-full md:h-full'
          alt="hero7"/>
        </div>
    </div>

    <div className=''>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>
            <Image 
            src={esher}
            className='w-full h-[600px] sm:h-full md:h-full'
            alt="hero7"/>
          <div className='mt-10 space-y-7 mx-3 text-center pt-20'>
            <h1 className={styles.heroHeadText}>Esher & Cobham </h1>
            <p className={`${styles.paragraph}`}>Exclusive areas with a mix of luxury living and family appeal.</p>
          </div>
        </div>
    </div>

    <div className='bg-gray-100'>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'> 
          <div className='mt-10 space-y-7 mx-3 text-center pt-20'>
            <h1 className={styles.heroHeadText}>Reigate & Dorking </h1>
            <p className={`${styles.paragraph}`}>Picturesque locations offering both countryside and convenience.</p>
          </div>
          <Image 
            src={reigate}
            className='w-full h-[600px] sm:h-full md:h-full'
            alt="hero7"/>
        </div>
    </div>

    </>
  )
}

export default Surrey