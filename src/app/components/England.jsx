import React from 'react'
import { logistics } from '@/assets'
import Image from 'next/image'
import { styles } from '../styles'

const England = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 mx-2'>
    <div className='mt-10 mb-10'>
        <div className='flex space-x-3 mb-3'>
            <div className='w-8 h-8 rounded-full bg-grade'/>
            <p className={styles.sectionSubText}>Relocating Across England with Atlas Path</p>
        </div>
        <h1 className={styles.sectionHeadText}>Why Move to England?</h1>
        <p className={styles.paragraph}>Beyond Surrey and London, the rest of England offers a wealth of opportunities, from bustling cities and thriving business hubs to charming countryside retreats and historic market towns. Whether you're relocating for work, family, or a lifestyle change, Atlas Path ensures a seamless transition to your new home.</p>
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

export default England