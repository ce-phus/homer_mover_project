"use client";
import React from 'react'
import { md1, service1, download, finesse, md2, hero14 } from '@/assets'
import Image from 'next/image'
import { motion } from "framer-motion"
import { fadeIn } from '../../../variants';
import { Quiz } from '../components';
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

        <div className='flex flex-row lg:flex-col sm:flex-col pt-20'>
            <div className='w-1/2 lg:w-full sm:w-full'>
                <Image 
                src={hero14}
                alt='md1'
                className='w-full h-full'/>
            </div>   
            <div className='bg-grade sm:w-full w-1/2 lg:w-full'>
                <div className='flex justify-center items-center flex-col mt-20 mb-20 sm:mt-20 space-y-10'>
                <motion.h1
                    variants={fadeIn("down", "spring", 0.75)} 
                    initial='hidden' animate='show' 
                    className='text-3xl font-normal text-primary tracking-wide mt-0 uppercase'>About Us</motion.h1>
                    <motion.h1
                    variants={fadeIn("down", "spring", 0.75)} 
                    initial='hidden' animate='show' 
                    className='text-2xl font-normal text-primary tracking-wide mt-0 uppercase'>Welcome to Atlas Path Relocation</motion.h1>
                    
                    <Image
                    src={download}
                    className='w-[150px]'
                    alt=''/>
                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-xl text-dark tracking-wide mx-5'>At Atlas Path, we specialize in making corporate, domestic, and international relocations seamless and stress-free. Based in the heart of Surrey, England, we bring local expertise and global reach to every move, ensuring your journey is as smooth as possible.</motion.p>
                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-xl text-dark tracking-wide mx-5'>Relocating can be overwhelming, whether you're moving a family across borders, an individual to a new city, or an entire team for business. That’s where we come in. With a personal, hands-on approach and years of experience, we tailor our services to fit your unique needs.</motion.p>
                </div>
            </div>
                
        </div>
        <div className='pb-20 pt-20 flex flex-col text-center w-full sm:mx-3'>
            <div className='space-y-10 flex flex-col justify-center items-center'>
            <div className='flex items-center space-x-4'>
                <Image 
                    src={finesse}
                    alt='Finesse'
                    className='w-7 h-7 mt-2' 
                />
                <h1 className='text-5xl text-primary font-normal tracking-wide'>Our Story</h1>
            </div>
            <Image
                src={download}
                className='w-[150px]'
                alt='Download Icon' 
            />
            <p className='text-normal text-xl text-dark tracking-wide mx-5 max-w-7xl mx-auto'>
                Atlas Path was born out of a passion for helping people embrace new opportunities. With international roots and a home in Surrey, our founder brings a unique blend of international insight and local expertise. This dual perspective shapes how we approach relocation—combining empathy, precision, and a deep commitment to making every move a success.
            </p>
            <p className='text-normal text-xl text-dark tracking-wide mx-5 max-w-7xl mx-auto'>
                From our first consultation to the final details of your move, our goal is to be more than a service provider—we aim to be your trusted partner on this journey.
            </p>
            </div>
        </div>

        <div className='flex flex-row sm:flex-col md:flex-col lg:flex-col sm:flex-col-reverse'>
            <div className='bg-grade w-full'>
                <div className='flex justify-center items-center flex-col mt-20 sm:mb-20 space-y-7'>
                    <Image
                    src={download}
                    className='w-[150px]'
                    alt=''/>

                    <h2 className='text-xl text-dark tracking-wide font-normal uppercase'>Introducing</h2>
                    <motion.h1
                    variants={fadeIn("down", "spring", 0.75)} 
                    initial='hidden' animate='show' 
                    className='text-2xl font-normal text-primary tracking-wide mt-0 uppercase text-center'>Meet Lucy - Founder</motion.h1> 
                    <motion.h1
                    variants={fadeIn("down", "spring", 0.75)} 
                    initial='hidden' animate='show' 
                    className='text-2xl font-normal text-primary tracking-wide mt-0 uppercase'>of Atlas Path</motion.h1>         
                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-xl text-dark tracking-wide mx-5'>Based in Surrey for over 12 years, Lucy combines her academic foundation in law and international relations with extensive professional experience to offer unparalleled relocation services. Her legal education provides her with a deep understanding of the laws that are often central to relocation, including immigration, family, and property law. This unique insight ensures that every move is not only smooth but fully compliant with legal requirements.</motion.p>
                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-xl text-dark tracking-wide mx-5'>As a parent, Lucy understands firsthand the importance of a stress-free and seamless relocation experience, especially for families. She knows that moving involves more than logistics—it’s about creating a sense of stability and belonging in a new environment.</motion.p>
                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-xl text-dark tracking-wide mx-5'>Lucy’s career spans roles as a seasoned estate agent and an accomplished headhunter. As an estate agent, she gained firsthand experience in helping individuals and families find homes that truly fit their needs, while mastering the art of property negotiation. Her time as a headhunter sharpened her ability to connect people with opportunities and navigate diverse market dynamics, skills that seamlessly translate into corporate and international relocations.</motion.p>
                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-xl text-dark tracking-wide mx-5'>With Atlas Path, Lucy merges her legal knowledge, professional expertise, and personal commitment to making every move as stress-free as possible. Whether assisting businesses relocating teams, families starting fresh, or individuals seeking new horizons, Lucy’s approach is both compassionate and precise.</motion.p>
                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-xl text-dark tracking-wide mx-5'>With a home in Surrey, Lucy offers a unique perspective on the challenges and opportunities of relocation, ensuring her clients feel supported at every step of the journey.</motion.p>
                </div>
            </div>
            <div className='w-full sm:h-[500px] h-[1200px]'>
                <Image 
                src={md2}
                alt='md1'
                className='w-full h-full'/>
            </div> 
            
        </div>
        <div className='flex flex-col justify-center items-center text-center'>
            <Quiz />
        </div>
    </>  
  )
}

export default About