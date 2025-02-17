import React from 'react'
import Image from 'next/image'
import { download, concierge, bespoke } from '@/assets'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <div className='flex flex-row lg:flex-col pt-10'>
        <div className='w-full sm:h-full md:h-[1000px] lg:h-[600px] xl:h-[900px] h-[700px]'>
            <Image 
            src={concierge}
            alt='hero5'
            className='w-full h-full'/>
        </div>
        <div className='w-full flex flex-col items-center bg-gray-100 space-y-8'>
            <h1 className='text-[20px] uppercase font-medium tracking-wide text-primary text-center mt-20'>Concierge Move Service</h1>
                <Image
                src={download}
                className='w-[150px]'
                alt=''/>

            <ul className='space-y-2 mb-20 mx-5'>
                <li className='space-x-2 flex'>
                    <p className='text-lg font-normal'>At Atlas Path, our Concierge Service goes beyond traditional relocation support to provide you with a truly personalized, white-glove experience. We understand that moving involves more than just logistics—it’s about settling into your new home and lifestyle with ease. Our dedicated concierge team is here to take care of the finer details, ensuring that every aspect of your transition is smooth and stress-free.</p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-normal'>From arranging home viewings and managing utility setups to scheduling local orientations and connecting you with trusted community resources, we tailor our services to fit your unique needs. Whether you need assistance with finding the perfect neighborhood amenities, booking appointments, or simply getting acquainted with your new environment, our Concierge Service is designed to make your move as seamless as possible.</p>
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
            <h2 className='text-[20px] uppercase tracking-wide text-dark font-medium'>Additional Services</h2>
            <h1 className='text-[20px] uppercase text-primary font-medium'>Tailored Solutions to Make Every Move Stress-Free</h1>
            <ul className='space-y-4 mb-20 flex flex-col items-center'>
                <li className='space-x- flex'>
                    <p className='text-lg font-medium'>Property Management:  <span className='text-lg font-normal'>Coordinating the sale or rental of your current property.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Settling-In Services: <span className='text-lg font-normal'>Support with tasks like registering for healthcare, setting up utilities, or finding local services.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Customized Moving Plans: <span className='text-lg font-normal'>Flexible packages designed around your specific timeline and requirements.</span></p>
                </li>
            </ul>
        </div>
    </div>

    <div className='flex flex-row lg:flex-col bg-gray-100'>

        <div className='flex w-full mx-[100px] lg:mx-0 lg:mt-10 lg:mb-10 items-center justify-center flex-col space-y-5'>
            <h1 className='text-[20px] uppercase text-primary tracking-wide'>Why Choose Atlas Path?</h1>
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