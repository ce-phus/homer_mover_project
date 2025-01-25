import React from 'react'
import { admin } from '@/assets'
import Image from 'next/image'
import { styles } from '../styles'

const Admin = () => {
  return (
    <div>
        <div className='grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 mx-2'>
            <div className=''>
                <div className='flex space-x-3 mb-3'>
                    <div className='w-8 h-8 rounded-full bg-grade'/>
                    <p className={styles.sectionSubText}>ADMIN SUPPORT</p>
                </div>
                <h1 className={styles.sectionHeadText}>Getting you started</h1>
                <h2 className='uppercase tracking-wide font-bold text-white text-2xl mt-5 mb-3'>Dedicated Reloaction Expert</h2>
                <p className={styles.paragraph}>Atlas Map provides a dedicated relocation expert who guides you through every step of the moving process. They handle logistics, packing, tracking, and customs regulations for international moves. With their assistance, moving becomes organised and stress-free.</p>
                <h2 className='uppercase tracking-wide font-bold text-white text-2xl mt-5 mb-3'>PRE-MOVE CONSULTATION</h2>
                <p className={styles.paragraph}>Atlas Map offers pre-move consultations to understand your unique requirements and provide an accurate moving quote. They use advanced technology for virtual or in-person surveys to create a visual inventory of your belongings. This helps the moving team prepare effectively, ensuring a seamless moving experience for you.</p>
            </div>
            <div className='w-full h-full'>
                <Image 
                src={admin}
                alt='admin'
                className='w-full h-full object-cover resize-mode'/>
            </div>
            
        </div>
    </div>
  )
}

export default Admin