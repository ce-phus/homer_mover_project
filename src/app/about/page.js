"use client";
import React from 'react'
import { md1, md2, download } from '@/assets'
import Image from 'next/image'
import { motion } from "framer-motion"
import { fadeIn } from '../../../variants';
import { Quiz } from '../components';

const About = () => {
  return (
    <>
        <div className='flex flex-row md:flex-col sm:flex-col pt-20 sm:mx-3'>
            <div className='bg-grade w-full'>
                <div className='flex justify-center items-center flex-col mt-20 space-y-10'>
                    <motion.h1
                    variants={fadeIn("down", "spring", 0.75)} 
                    initial='hidden' animate='show' 
                    className='text-5xl font-normal text-primary tracking-wide mt-0 uppercase'>About Us</motion.h1>
                    <Image
                    src={download}
                    className='w-[150px]'
                    alt=''/>
                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-xl text-dark tracking-wide mx-5'>Atlas Path Relocation Plus, is an independent relocation and home search company specialising in private and corporate relocations to – or within – London and across the UK.</motion.p>
                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-xl text-dark tracking-wide mx-5'>Established in 2004, we have managed hundreds of successful moves and have built our long-term reputation of being a premium relocation company by offering our clients a bespoke VIP service rather than a ‘one size fits all approach’.</motion.p>
                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-xl text-dark tracking-wide mx-5'>The personal touch is of paramount importance for us; nothing is ever too much trouble. We will help you – or your executives – with whatever you need to make your relocation process as smooth and stress-free as possible.</motion.p>
                </div>
            </div>
            <div className='w-full h-full'>
                <Image 
                src={md1}
                alt='md1'
                className='w-full h-full'/>
            </div>       
        </div>
        <div className='pt-20 pb-20 flex flex-col items-center justify-center space-y-6 sm:mx-3 ms:mx-3'>
            <p className='text-4xl tracking-wide text-primary italic'>``Helping our clients find their perfect place, </p>
            <p className='text-4xl tracking-wide text-primary italic'> is more than just our speciality… it’s our passion.``</p>
        </div>
        <div className='flex flex-row sm:flex-col md:flex-col'>
            <div className='w-full h-full'>
                <Image 
                src={md2}
                alt='md1'
                className='w-full h-full'/>
            </div> 
            <div className='bg-grade w-full'>
                <div className='flex justify-center items-center flex-col mt-20 space-y-10'>
                    <Image
                    src={download}
                    className='w-[150px]'
                    alt=''/>

                    <h2 className='text-xl text-dark tracking-wide font-normal uppercase'>Introducing</h2>
                    <motion.h1
                    variants={fadeIn("down", "spring", 0.75)} 
                    initial='hidden' animate='show' 
                    className='text-5xl font-normal text-primary tracking-wide mt-0 uppercase text-center'>Peter Nakitare - Managing</motion.h1> 
                    <motion.h1
                    variants={fadeIn("down", "spring", 0.75)} 
                    initial='hidden' animate='show' 
                    className='text-5xl font-normal text-primary tracking-wide mt-0 uppercase'>Director</motion.h1>         
                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-xl text-dark tracking-wide mx-5'>Atlas Path Relocation Plus, is an independent relocation and home search company specialising in private and corporate relocations to – or within – London and across the UK.</motion.p>
                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-xl text-dark tracking-wide mx-5'>Established in 2004, we have managed hundreds of successful moves and have built our long-term reputation of being a premium relocation company by offering our clients a bespoke VIP service rather than a ‘one size fits all approach’.</motion.p>
                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-xl text-dark tracking-wide mx-5'>The personal touch is of paramount importance for us; nothing is ever too much trouble. We will help you – or your executives – with whatever you need to make your relocation process as smooth and stress-free as possible.</motion.p>
                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-xl text-dark tracking-wide mx-5'>The personal touch is of paramount importance for us; nothing is ever too much trouble. We will help you – or your executives – with whatever you need to make your relocation process as smooth and stress-free as possible.</motion.p>
                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-xl text-dark tracking-wide mx-5'>The personal touch is of paramount importance for us; nothing is ever too much trouble. We will help you – or your executives – with whatever you need to make your relocation process as smooth and stress-free as possible.</motion.p>
                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-xl text-dark tracking-wide mx-5'>The personal touch is of paramount importance for us; nothing is ever too much trouble. We will help you – or your executives – with whatever you need to make your relocation process as smooth and stress-free as possible.</motion.p>
                    <motion.p variants={fadeIn("right", "spring", 0.75)} 
                    initial='hidden' animate='show' className='text-normal text-xl text-dark tracking-wide mx-5'>The personal touch is of paramount importance for us; nothing is ever too much trouble. We will help you – or your executives – with whatever you need to make your relocation process as smooth and stress-free as possible.</motion.p>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center text-center'>
            <Quiz />
        </div>
    </>  
  )
}

export default About