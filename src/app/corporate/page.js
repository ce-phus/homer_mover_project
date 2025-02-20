import React from 'react'
import Image from 'next/image'
import { hero37, hero15, download, corporate } from '@/assets'

const page = () => {
  return (
    <>
    <div className='flex flex-row lg:flex-col pt-10'>
        <div className='w-full h-1/2 sm:h-full md:h-[1000px] xl:h-[600px]'>
            <Image 
            src={hero15}
            alt='hero5'
            className='w-full h-full'/>
        </div>
        <div className='w-full flex flex-col items-center pt-20 lg:pt-20 bg-gray-100 space-y-8'>
            <h1 className='mt-5 text-[20px] uppercase font-medium tracking-wide text-primary'>Corporate Relocation Services</h1>
            <Image
            src={download}
            className='w-[150px]'
            alt=''/>
            <h1 className='text-[20px] uppercase text-dark tracking-wide font-medium'>Empowering Your Business with Seamless Employee Moves</h1>

            <ul className='space-y-2 mb-20 mx-5'>
                <li className='space-x-2 flex'>
                    <p className='font-medium'>Employee Relocation Programs: <span className='text-lg font-normal'>Tailored support for relocating staff, ensuring productivity and well-being</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='font-medium'>Immigration Compliance:  <span className='text-lg font-normal'>Assistance with work permits, visas, and legal documentation.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='font-medium'>Temporary Housing Solutions: <span className='text-lg font-normal'>Arranging short-term accommodations for employees during transitions.</span></p>
                </li>

                <li className='space-x-2 flex mb-20'>
                    <p className='font-medium'>Spousal and Family Integration: <span className='text-lg font-normal'>Support for accompanying family members, including school searches and cultural orientation.</span></p>
                </li>
            </ul>
        </div>
    </div>
    <div className='max-w-7xl mx-auto pt-20 pb-20'>
        <div className='text-center space-y-8'>
            <h2 className='text-[20px] uppercase tracking-wide text-dark font-medium'>Services</h2>
            <h1 className='text-[20px] uppercase text-primary font-medium'>Tailored Solutions to Make Every Move Stress-Free</h1>
            <ul className='space-y-4 mb-20 flex flex-col items-center'>
                <li className='space-x- flex'>
                    <p className='font-medium'>Tailored Corporate Consultation & Strategy: <span className='text-lg font-normal'>We collaborate with your HR and management teams to develop a customized relocation strategy that aligns with your company’s objectives and ensures a seamless transition for your employees.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='font-medium'>Comprehensive Employee Relocation Support: <span className='text-lg font-normal'>Our service covers all aspects of employee relocation—from visa and immigration assistance to school search, cultural orientation, and local integration—ensuring that staff and their families are well-supported throughout the move</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='font-medium'>Efficient Logistics & Vendor Coordination: <span className='text-lg font-normal'>We manage every detail of the move, coordinating with trusted vendors for packing, shipping, and transportation while keeping your business continuity in mind.</span></p>
                </li>
            </ul>
        </div>
    </div>

    <div className='flex flex-row lg:flex-col bg-gray-100'>
        <div className='flex w-full mx-[100px] xl:mx-0 lg:mt-10 lg:mb-10 items-center justify-center flex-col space-y-5'>
            <h1 className='text-[20px] uppercase text-primary tracking-wide'>Additional Services</h1>
            <ul className='space-y-2 mb-20 mx-10'>
                <li className='space-x-3 flex'>
                    <p className='font-medium'>Budget Management & Transparent Reporting: <span className='text-lg font-normal'>We work within your allocated budget, providing detailed reporting and expense tracking to ensure financial transparency and cost efficiency.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='font-medium'>Temporary Accommodation & Settling-In Assistance: <span className='text-lg font-normal'>We assist in securing temporary housing and setting up essential services, enabling employees to settle quickly and focus on their new roles.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className=' font-medium'>Cultural & Business Integration: <span className='text-lg font-normal'>Our tailored programs include cultural training and local orientation to help employees adapt to their new environment, fostering smoother transitions and enhanced productivity.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className=' font-medium'>Ongoing Post-Move Support: <span className='text-lg font-normal'>Our commitment extends beyond the move with continuous support and follow-up services, ensuring that any issues are promptly addressed and employees continue to thrive in their new location.</span></p>
                </li>
            </ul>
        </div>
        <div className='w-full h-['>
            <Image 
            src={corporate}
            alt='hero8'
            className='w-full h-full'/>
        </div>

        
    </div>
    </>
  )
}

export default page