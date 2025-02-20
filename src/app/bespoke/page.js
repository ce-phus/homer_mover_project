import React from 'react'
import Image from 'next/image'
import { download, bespoke, bespoke1 } from '@/assets'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <div className='flex flex-row lg:flex-col pt-10'>
        <div className='w-full sm:h-full md:h-[1000px] lg:h-[600px] xl:h-[900px] h-[700px]'>
            <Image 
            src={bespoke1}
            alt='hero5'
            className='w-full h-full'/>
        </div>
        <div className='w-full flex flex-col items-center bg-gray-100 space-y-8'>
            <h1 className='text-[20px] uppercase font-medium tracking-wide text-primary text-center mt-20'>Bespoke Move Service</h1>
                <Image
                src={download}
                className='w-[150px]'
                alt=''/>

            <ul className='space-y-2 mb-20 mx-5'>
                <li className='space-x-2 flex'>
                    <p className='text-lg font-normal'>At Atlas Path, we understand that no two relocations are the same. Our Bespoke Move Service is all about tailoring the moving experience to your exact needs and preferences. Whether you're relocating for work, family, or simply seeking a change of scenery, our dedicated team works closely with you to craft a move that reflects your unique lifestyle.</p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-normal'>From the initial consultation through to your final settling in, we provide personalized planning and coordination. We handle every detail—customizing logistics, coordinating with trusted vendors, and even arranging personalized local orientations—to ensure a smooth and stress-free transition. Our comprehensive approach not only covers the physical aspects of moving but also addresses the emotional side of starting afresh, making your relocation a truly unique journey.</p>
                </li>
                <li className='space-x-2 flex'>
                    <p className='text-xl font-medium'>Contact us today for a free consultation and discover how our Concierge Service can transform your moving experience into a smooth, personalized journey.</p>
                </li>
                <div className='flex items-center justify-center'>                  
                    <Link href={"/contact"} className='w-full border w-1/2  flex justify-center border-grade mb-10 mt-5 text-center px-5 py-4 text-lg font-bold text-primary hover:text-white hover:bg-primary hover:scale-105 duration-500 border-l-[5px]'>Book a Consultation Today !!</Link>
                </div>
            </ul>
        </div>
    </div>
    <div className='max-w-7xl mx-auto pt-20 pb-20'>
        <div className='text-center space-y-8'>
            <h2 className='text-[20px] uppercase tracking-wide text-dark font-medium'>Services</h2>
            <h1 className='text-[20px] uppercase text-primary font-medium'>Tailored Solutions to Make Every Move Stress-Free</h1>
            <ul className='space-y-4 mb-20 flex flex-col items-center'>
                <li className='space-x- flex'>
                    <p className='text-lg font-medium'>Personalized Consultation & Planning: <span className='text-lg font-normal'>We begin with an in-depth consultation to understand your unique needs and create a customized moving plan.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Tailored Logistics Coordination: <span className='text-lg font-normal'>From packing and transportation to handling special items, we coordinate every detail to ensure a smooth move.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Vendor & Service Management: <span className='text-lg font-normal'>We partner with trusted local service providers, including movers, storage solutions, and cleaning services.</span></p>
                </li>
            </ul>
        </div>
    </div>

    <div className='flex flex-row lg:flex-col bg-gray-100'>

        <div className='flex w-full mx-[100px] lg:mx-0 lg:mt-10 lg:mb-10 items-center justify-center flex-col space-y-5'>
            <h1 className='text-[20px] uppercase text-primary tracking-wide'>Additional Services</h1>
            <ul className='space-y-2 mb-20 mx-10'>
                <li className='space-x-3 flex'>
                    <p className='text-lg font-medium'>Local Orientation & Integration: <span className='text-lg font-normal'>Receive support with neighborhood insights, community introductions, and essential service setup (utilities, schools, etc.).</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Document & Legal Assistance: <span className='text-lg font-normal'>Guidance through relocation paperwork, housing agreements, and compliance with local regulations.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Flexible Scheduling: <span className='text-lg font-normal'>Customized moving timelines and arrangements that fit your personal and professional schedule</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Concierge Services: <span className='text-lg font-normal'>CAdditional personalized support, such as arranging home viewings, scheduling appointments, and more.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Ongoing Post-Move Support: <span className='text-lg font-normal'>Follow-up assistance to ensure you’re settled and fully integrated into your new home.</span></p>
                </li>
            </ul>
        </div>
        <div className='w-full h-[550px] lg:h-full'>
            <Image 
            src={bespoke}
            alt='hero8'
            className='w-full h-full'/>
        </div>   
    </div>
    </>
  )
}

export default page