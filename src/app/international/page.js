import React from 'react'
import Image from 'next/image'
import { hero9, hero10, hero17, download } from '@/assets'
const International = () => {
  return (
    <>
    <div className='flex flex-row lg:flex-col pt-10'>
        <div className='w-full sm:h-full md:h-[1000px] lg:h-[600px]'>
            <Image 
            src={hero10}
            alt='hero5'
            className='w-full h-full'/>
        </div>
        <div className='w-full flex flex-col items-center bg-gray-100 space-y-5'>
            <h1 className='mt-[100px] lg:mt-20 text-[20px] uppercase font-medium tracking-wide text-primary'>International Relocation Services</h1>
            <Image
            src={download}
            className='w-[150px]'
            alt=''/>
            <h1 className='text-[20px] uppercase text-dark tracking-wide font-medium'>Bridging Borders, Building Futures</h1>

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
            <h2 className='text-[20px] uppercase tracking-wide text-dark font-medium'>Services</h2>
            <h1 className='text-[20px] uppercase text-primary font-medium'>Tailored Solutions to Make Every Move Stress-Free</h1>
            <ul className='space-y-4 mb-20 flex flex-col items-center'>
                <li className='space-x- flex'>
                    <p className='text-xl font-medium'>Global Consultation & Tailored Planning: <span className='text-lg font-normal'>We start with a comprehensive consultation to understand your unique international relocation needs and develop a customized moving plan.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-xl font-medium'>Seamless Shipping & Logistics Coordination: <span className='text-lg font-normal'>Our team manages every aspect of international shipping—from professional packing and secure transportation to customs clearance and door-to-door delivery.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-xl font-medium'>Visa & Immigration Support: <span className='text-lg font-normal'>We offer expert guidance on visa applications, work permits, and residency requirements, ensuring a smooth transition for you and your family.</span></p>
                </li>
            </ul>
        </div>
    </div>

    <div className='flex flex-row lg:flex-col bg-gray-100'>

        <div className='flex w-full mx-[50px] xl:mx-0 xl:mt-10 xl:mb-10 items-center justify-center flex-col space-y-5'>
            <h1 className='text-[20px] uppercase text-primary tracking-wide'>Additional Services</h1>
            <ul className='space-y-2 mb-20 mx-10'>
                <li className='space-x-3 flex'>
                    <p className='text-lg font-medium'>Customs Documentation & Clearance: <span className='text-lg font-normal'>We coordinate with experienced customs brokers to handle all necessary documentation and ensure compliance with import/export regulations.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Overseas Home Search & Settling-In Assistance: <span className='text-lg font-normal'>We assist with finding suitable housing, arranging temporary accommodations, and setting up essential services at your new destination.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Cultural Orientation & Local Integration: <span className='text-lg font-normal'>Benefit from tailored orientation services that help you navigate the new culture, connect with community resources, and settle in confidently.</span></p>
                </li>
                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Ongoing Post-Move Support: <span className='text-lg font-normal'>Our support continues after the move to address any concerns and ensure a seamless integration into your new country.</span></p>
                </li>
            </ul>
        </div>
        <div className='w-full h-[600px] xl:h-full'>
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