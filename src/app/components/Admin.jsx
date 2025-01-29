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
                    <div className='w-6 h-6 mt-1 rounded-lg bg-black-gradient'/>
                    <p className={styles.sectionSubText}>ADMIN SUPPORT</p>
                </div>
                <h1 className={styles.sectionHeadText}>Helping You Get Started</h1>
                <h2 className='uppercase tracking-wide text-center font-bold text-dark text-lg mt-5 mb-3'>COMMITTED RELOCATION SPECIALIST</h2>
                <p className={`${styles.paragraph} w-3/4 text-center`}>Atlas Path assigns a dedicated relocation specialist to support you throughout your move. They manage coordination, packing, shipment tracking, and international customs procedures. With their expertise, your relocation is streamlined and hassle-free.</p>
            </div>
           
        </div>
    </div>
  )
}

export default Admin