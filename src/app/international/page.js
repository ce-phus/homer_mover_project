import React from 'react'
import Image from 'next/image'
import { hero9, hero10, hero17, hero7 } from '@/assets'
import { TiTick } from "react-icons/ti";
import { motion } from "framer-motion"

const International = () => {
  return (
    <>
    <div className='flex flex-row lg:flex-col sm:flex-co'>
        <div className='w-full sm:h-full md:h-[1000px] lg:h-[600px]'>
            <Image 
            src={hero10}
            alt='hero5'
            className='w-full h-full'/>
        </div>
        <div className='w-full flex flex-col items-center justify-center bg-grade space-y-5'>
            <h1 className='mt-5 text-xl font-medium tracking-wide text-primary'>International Relocation Services</h1>
            <h1 className='text-xl text-dark tracking-wide font-medium'>Bridging Borders, Building Futures</h1>

            <ul className='space-y-2 mb-20 mx-5'>
                <li className='space-x-2 flex'>

                    <p className='text-lg font-medium'>Visa and Immigration Expertise:  <span className='text-lg font-normal'>Navigating the complexities of international moves with precision..</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Destination Services: <span className='text-lg font-normal'>From securing housing to setting up utilities and bank accounts, we handle it all.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Cultural and Language Integration: <span className='text-lg font-normal'>Guidance to help you adapt to local customs and languages.</span></p>
                </li>

                <li className='space-x-2 flex mb-20'>
                    <p className='text-lg font-medium'>Family Support:  <span className='text-lg font-normal'>Assistance with school placements, finding childcare, and settling in.</span></p>
                </li>
            </ul>
        </div>
    </div>
    <div className='max-w-7xl mx-auto pt-20 pb-20'>
        <div className='text-center space-y-8'>
            <h2 className='text-xl tracking-wide text-dark font-medium'>Additional Services</h2>
            <h1 className='text-2xl text-primary font-medium'>Tailored Solutions to Make Every Move Stress-Free</h1>
            <ul className='space-y-4 mb-20 flex flex-col items-center'>
                <li className='space-x- flex'>
                    <p className='text-xl font-medium'>Property Management:  <span className='text-lg font-normal'>Coordinating the sale or rental of your current property.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-xl font-medium'>Settling-In Services: <span className='text-lg font-normal'>Support with tasks like registering for healthcare, setting up utilities, or finding local services.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-xl font-medium'>Customized Moving Plans: <span className='text-lg font-normal'>Flexible packages designed around your specific timeline and requirements.</span></p>
                </li>
            </ul>
        </div>
    </div>

    <div className='flex flex-row lg:flex-col bg-grade'>

        <div className='flex w-full mx-[50px] xl:mx-0 xl:mt-10 xl:mb-10 items-center justify-center flex-col space-y-5'>
            <h1 className='text-xl text-primary tracking-wide'>Why Choose Atlas Path?</h1>
            <ul className='space-y-2 mb-20 mx-10'>
                <li className='space-x-3 flex'>
                    <p className='text-lg font-medium'>Surrey-Based Expertise: <span className='text-lg font-normal'>With deep local knowledge, we understand what matters to individuals and businesses moving to or from the UK</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Comprehensive Support: <span className='text-lg font-normal'>From legal requirements to cultural integration, we cover every detail.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Personalized Approach: <span className='text-lg font-normal'>Every relocation is as unique as the client. We tailor solutions to meet your needs.</span></p>
                </li>
            </ul>
        </div>
        <div className='w-full h-[700px] xl:h-full'>
            <Image 
            src={hero17}
            alt='hero8'
            className='w-full h-full'/>
        </div>

        
    </div>
    </>
  )
}

export default International