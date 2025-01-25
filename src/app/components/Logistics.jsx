import React from 'react'
import { logistics } from '@/assets'
import Image from 'next/image'
import { styles } from '../styles'

const Logistics = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 mx-2'>
    <div className='mt-10 mb-10'>
        <div className='flex space-x-3 mb-3'>
            <div className='w-8 h-8 rounded-full bg-grade'/>
            <p className={styles.sectionSubText}>LOGISTICS</p>
        </div>
        <h1 className={styles.sectionHeadText}>Taking the pressure off the details</h1>
        <h2 className='uppercase tracking-wide font-bold text-white text-2xl mt-5 mb-3'>MOVING HOUSEHOLD GOODS</h2>
        <p className={styles.paragraph}>Atlas Map is an expert in moving household goods, providing safe and convenient door-to-door service for international moving. Their certified crew packs items carefully, tracks their progress, and handles unpacking. They aim to make the moving process stress-free for customers.</p>

        <h2 className='uppercase tracking-wide font-bold text-white text-2xl mt-5 mb-3'>AUTO TRANSPORT</h2>
        <p className={styles.paragraph}>Choose Atlas Map Relocation for unparalleled car shipping services worldwide. With over 60 years of experience, we offer hassle-free transportation, including pre-trip condition reports, import/export documentation, door-to-door service, and 24/7 customer support. Explore our Shipment Protection plans for added peace of mind.</p>

        <h2 className='uppercase tracking-wide font-bold text-white text-2xl mt-5 mb-3'>OCEAN AND AIR FREIGHT</h2>
        <p className={styles.paragraph}>Atlas Map offers air and ocean freight services for international moving. They assess your needs and handle the logistics, providing flexible options. With their expertise, you can trust them to ensure a smooth and worry-free move.</p>

        <h2 className='uppercase tracking-wide font-bold text-white text-2xl mt-5 mb-3'>STORAGE FOR YOUR BELONGINGS</h2>
        <p className={styles.paragraph}>Atlas Map offers secure and flexible moving storage solutions for various needs. With state-of-the-art facilities worldwide, they provide short-term or long-term storage options during your move. Let them take care of your belongings while you focus on settling into your new home.</p>

        <h2 className='uppercase tracking-wide font-bold text-white text-2xl mt-5 mb-3'>SHIPMENT PROTECTION</h2>
        <p className={styles.paragraph}>Experience peace of mind during your move with Atlas Map comprehensive shipment protection. With coverage options like lump sum valuation, tiered valuation, and total protection, we go the extra mile to protect your belongings from mishaps, damage, and loss, giving you the confidence to focus on creating your new home.</p>

        <h2 className='uppercase tracking-wide font-bold text-white text-2xl mt-5 mb-3'>DELIVERY AND UNPACKING</h2>
        <p className={styles.paragraph}>Experience a seamless transition to your new home with Atlas Map expert unpacking service. Our dedicated team ensures that your belongings are delivered and unpacked with precision, allowing you to settle in quickly and effortlessly. We simplify the delivery and unpacking process for you, so you can focus on creating a comfortable and welcoming space</p>
    </div>
    <div className='w-full h-full'>
        <Image 
        src={logistics}
        alt='admin'
        className='w-full h-full object-cover resize-mode'/>
    </div>
    
</div>
  )
}

export default Logistics