import React from 'react'
import { hero10 } from '@/assets'
import Image from 'next/image'
import { styles } from '../styles'
import { TiTickOutline } from "react-icons/ti";
import Link from 'next/link';

const Detail = () => {
  return (
    <div className=''>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>
          <div className='mt-10 space-y-7 mx-3 text-center pt-20'>
            <p className={styles.sectionSubText}>A Customised Relocation Experience</p>
            <h1 className={styles.heroHeadText}>Atlas Path – Specialists in Global Moving Services</h1>
            <p className={`${styles.paragraph}`}>Atlas Path Relocation is your trusted partner for a stress-free and seamless move across borders. As one of the leading international moving companies, we specialise in providing door-to-door moving services. Are you looking for local relocation service or a international moving company? Santa Fe is on hand to support you and your family.</p>
            
            <div className='flex items-center justify-center'>                  
            <Link href={"/contact"} className='w-full border w-1/2  flex justify-center border-grade mb-10 mt-10 text-center px-5 py-4 text-lg font-bold text-primary hover:text-white hover:bg-primary hover:scale-105 duration-500 border-l-[5px]'>Book a Consultation Today !!</Link>
            </div>
          </div>

          <Image 
          src={hero10}
          className='w-full h-[600px] sm:h-full md:h-full'
          alt="hero7"/>
        </div>
    </div>
  )
}

export default Detail