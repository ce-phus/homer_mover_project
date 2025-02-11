"use client";
import React from 'react'
import { md1, service1, download, about, md2, hero14 } from '@/assets'
import Image from 'next/image'
import { motion } from "framer-motion"
import { fadeIn } from '../../../variants';
import Head from 'next/head';

const About = () => {
  return (
    <>
        <Head>
        <title>About Page | Atlas Map Relocation</title>
        <meta
          name="description"
          content="Learn more about Atlas Map Relocation and our mission to provide seamless relocation services globally."
        />
      </Head>

        <div className='flex flex-row lg:flex-col sm:flex-col pt-5'>
            <div className='w-1/2 lg:w-full sm:w-full'>
                <Image 
                src={about}
                alt='md1'
                className='w-full h-full'/>
            </div>   
            <div className='bg-gray-100 sm:w-full w-1/2 lg:w-full'>
                <div className='flex justify-center items-center flex-col mt-20 mb-20 sm:mt-20 space-y-10'>
                <motion.h1
                    variants={fadeIn("down", "spring", 0.75)} 
                    initial='hidden' animate='show' 
                    className='text-xl font-normal text-primary tracking-wide mt-0 uppercase'>About Us</motion.h1>
                     
                     <Image
                    src={download}
                    className='w-[150px]'
                    alt=''/>
                    <motion.h1
                    variants={fadeIn("down", "spring", 0.75)} 
                    initial='hidden' animate='show' 
                    className='text-lg font-normal text-primary tracking-wide mt-0 uppercase'>Welcome to Atlas Path Relocation</motion.h1>
                   
                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-dark tracking-wide mx-5'>At Atlas Path, we specialize in making corporate, domestic, and international relocations seamless and stress-free. Based in the heart of Surrey, England, we bring local expertise and global reach to every move, ensuring your journey is as smooth as possible.</motion.p>
                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-dark tracking-wide mx-5'>Relocating can be overwhelming, whether you're moving a family across borders, an individual to a new city, or an entire team for business. That’s where we come in. With a personal, hands-on approach and years of experience, we tailor our services to fit your unique needs.</motion.p>
                </div>
            </div>
                
        </div>
        <div className='pb-20 pt-20 flex flex-col text-center w-full sm:mx-3'>
            <div className='space-y-10 flex flex-col justify-center items-center'>
            <div className='flex items-center space-x-4'>
                <h1 className='text-[20px] uppercase text-primary font-normal tracking-wide'>Our Story</h1>
            </div>
            <Image
                src={download}
                className='w-[150px]'
                alt='Download Icon' 
            />
            <p className='text-normal text-lg text-dark tracking-wide mx-5 max-w-7xl mx-auto'>
                Atlas Path was born out of a passion for helping people embrace new opportunities. With international roots and a home in Surrey, our founder brings a unique blend of international insight and local expertise. This dual perspective shapes how we approach relocation—combining empathy, precision, and a deep commitment to making every move a success.
            </p>
            <p className='text-normal text-lg text-dark tracking-wide mx-5 max-w-7xl mx-auto'>
                From our first consultation to the final details of your move, our goal is to be more than a service provider—we aim to be your trusted partner on this journey.
            </p>
            </div>
        </div>

        <div className='flex flex-row sm:flex-col md:flex-col lg:flex-col sm:flex-col-reverse'>
            <div className='bg-gray-100 w-full'>
                <div className='flex justify-center items-center flex-col mt-20 sm:mb-20 space-y-7'>
                    <h2 className='text-xl text-dark tracking-wide font-normal uppercase'>Introducing</h2>
                    <Image
                    src={download}
                    className='w-[150px]'
                    alt=''/>
                    <motion.h1
                    variants={fadeIn("down", "spring", 0.75)} 
                    initial='hidden' animate='show' 
                    className='text-xl font-normal text-primary tracking-wide mt-0 uppercase text-center'> Lucy - Founder of Atlas Path</motion.h1>       
                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-lg text-dark tracking-wide mx-5'>Based in Surrey for over 12 years, Lucy brings a unique blend of legal knowledge, professional expertise, and personal experience to the world of relocation. Having lived in Surrey for over a decade, she has an in-depth understanding of the area and the wider Southeast of England, making her well-equipped to guide clients through the nuances of settling in this region.</motion.p>
                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-lg text-dark tracking-wide mx-5'>With a background in law and international relations, Lucy has a deep understanding of the legal complexities involved in moving—whether it’s immigration, family, or property law. This insight ensures that every relocation is not just seamless but also fully compliant with legal requirements.</motion.p>
                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-lg text-dark tracking-wide mx-5'>As a parent, Lucy knows firsthand how important a smooth, stress-free move is, especially for families. Relocation isn’t just about logistics—it’s about creating a sense of stability, belonging, and a fresh start in a new environment.</motion.p>
                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-lg text-dark tracking-wide mx-5'>Her career spans both real estate and executive search. As an estate agent, she helped families and individuals find the right homes while honing her skills in negotiation and property management. As a headhunter, she became an expert in matching talent with opportunities, navigating market trends, and understanding the needs of professionals on the move. These skills translate seamlessly into corporate and international relocations, where attention to detail and a personalized approach make all the difference.</motion.p>
                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-lg text-dark tracking-wide mx-5'>With Atlas Path, Lucy combines her legal acumen, industry expertise, and deep knowledge of Surrey and the Southeast of England to provide tailored, stress-free relocation solutions. Whether guiding businesses through team relocations, supporting families as they settle in new communities, or assisting individuals in embracing new opportunities, she ensures every move is handled with care, precision, and a personal touch.</motion.p>
                </div>
            </div>
            <div className='w-full sm:h-[500px] h-[1000px] xl:h-[1305px] lg:h-[1000px]'>
                <Image 
                src={md2}
                alt='md1'
                className='w-full h-full'/>
            </div> 
            
        </div>
    </>  
  )
}

export default About