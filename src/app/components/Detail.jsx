import React from 'react'
import { moving, moving1, moving2 } from '@/assets'
import Image from 'next/image'
import { styles } from '../styles'
import { TiTickOutline } from "react-icons/ti";
import Link from 'next/link';

const Detail = () => {
  return (
    <div className='mt-20'>
        <div className='grid grid-cols-2 md:grid-cols-1 gap-5'>
            <div className='grid grid-cols-2 w-full h-full gap-0'>
                <Image 
                src={moving}
                alt='moving2'
                width={500}
                height={500}
                className='x object-contain'/>
                <Image 
                src={moving2}
                alt='moving2'
                width={500}
                height={500}
                className='x object-contain'/>
                <Image 
                src={moving1}
                alt='moving2'
                width={500}
                height={500}
                className='x object-contain'/>
                <Image 
                src={moving}
                alt='moving2'
                width={500}
                height={500}
                className='x object-contain'/>
            </div>
            <div className='mt-10 space-y-4 mx-3'>
                <p className={styles.sectionSubText}>A personalised moving experience.</p>
                <h1 className={styles.heroHeadText}>Atlas Map, Experts in International Moving Services</h1>
                <p className={styles.paragraph}>Atlas Map Relocation is your trusted partner for a stress-free and seamless move across borders. As one of the leading international moving companies, we specialise in providing door-to-door moving services. Are you looking for local relocation service or a international moving company? Santa Fe is on hand to support you and your family.</p>
                <p className={styles.paragraph}>Our comprehensive services include professional packing, meticulous logistics, and unwavering support throughout the customs clearance process. We understand that every move is unique, which is why we offer a personalised service.</p>

                <h3 className='font-bold tracking-wide text-white text-lg'>
                What do we offer at Santa Fe Relocation?
                </h3>
                  <ul className='space-y-2'>
                    <li className='flex space-x-2'>
                      <TiTickOutline className='text-white mt-1 text-xl'/>
                      <p className={styles.paragraph}>Door-to-door International moving service</p>
                    </li>
                    <li className='flex space-x-2'>
                      <TiTickOutline className='text-white mt-1 text-xl'/>
                      <p className={styles.paragraph}>Professional packing and logistics</p>
                    </li>
                    <li className='flex space-x-2'>
                      <TiTickOutline className='text-white mt-1 text-xl'/>
                      <p className={styles.paragraph}>Dedicated relocation expert</p>
                    </li>
                    <li className='flex space-x-2'>
                      <TiTickOutline className='text-white mt-1 text-xl'/>
                      <p className={styles.paragraph}>Storage Solutions</p>
                    </li>
                    <li className='flex space-x-2'>
                      <TiTickOutline className='text-white mt-1 text-xl'/>
                      <p className={styles.paragraph}>Shipment Tracking with Ai Technology</p>
                    </li>
                    <li className='flex space-x-2'>
                      <TiTickOutline className='text-white mt-1 text-xl'/>
                      <p className={styles.paragraph}>Smart Home Surveys</p>
                    </li>
                  </ul>
                  <p className={styles.paragraph}>You should consider a few important things when selecting an international moving company. Do they have experience? Can I trust them with my belongings? Are they cost effective?</p>
                  <p className={styles.paragraph}>We not only want to answer all these questions with a yes, but we want to offer great customer service alongside it. We’re hoping that our customer reviews may convince you.</p>
                  <p className={`${styles.paragraph} mb-10`}>Santa Fe relocation is much more than just a man and van service. A move overseas is a stressful undertaking, from our experience there is nothing worse than feeling under prepared. Let us take away those endless lists, the stressful research and painless paperwork. Our team can support you with great service and you will be thankful you chose an international moving expert like us.</p>
                 <div className='mb-10'>
                   
                 <Link href={"/contact"} className='w-full border flex justify-end border-grade mb-10 mt-10 text-center px-5 py-4 text-lg font-bold text-grade hover:text-white hover:bg-grade hover:scale-105 duration-500 border-l-[5px]'>Book a Consultation Today !!</Link>
                 </div>
            </div>
        </div>
       
      
      
    </div>
  )
}

export default Detail