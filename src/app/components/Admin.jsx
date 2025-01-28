import React from 'react'
import { admin, finesse } from '@/assets'
import Image from 'next/image'
import { styles } from '../styles'

const Admin = () => {
  return (
    <div>
        <div className='bg-grade'>
            <div className='flex items-center justify-center flex-col space-y-7 pt-20 pb-20'>
                <Image 
                src={finesse}
                alt='finesse'
                className='w-7 h-7'/>
                <div className='flex space-x-3'>
                    <div className='w-6 h-6 mt-1 rounded-lg bg-secondary'/>
                    <p className={styles.sectionSubText}>ADMIN SUPPORT</p>
                </div>
                <h1 className={styles.sectionHeadText}>Getting you started</h1>
                <h2 className='uppercase tracking-wide text-center font-bold text-dark text-2xl mt-5 mb-3'>Dedicated Relocation Expert</h2>
                <p className={`${styles.paragraph} w-3/4 text-center`}>Atlas Map provides a dedicated relocation expert who guides you through every step of the moving process. They handle logistics, packing, tracking, and customs regulations for international moves. With their assistance, moving becomes organised and stress-free.</p>
            </div>
           
        </div>
    </div>
  )
}

export default Admin