import React from 'react'
import { download, finesse } from '@/assets'
import Image from 'next/image'
import { styles } from '../styles'

const Admin = () => {
  return (
    <div>
        <div className='bg-gray-100'>
            <div className='flex items-center justify-center flex-col space-y-7 pt-20 pb-20'>
                <h1 className={styles.sectionHeadText}>Helping You Get Started</h1>
                <Image
                src={download}
                className='w-[150px]'
                alt=''/>
                <h2 className='uppercase tracking-wide text-center font-bold text-dark text-lg mt-5 mb-3'>COMMITTED RELOCATION SPECIALIST</h2>
                <p className={`${styles.paragraph} w-3/4 text-center`}>Atlas Path assigns a dedicated relocation specialist to support you throughout your move. They manage coordination, packing, shipment tracking, and international customs procedures. With their expertise, your relocation is streamlined and hassle-free.</p>
            </div>
           
        </div>
    </div>
  )
}

export default Admin