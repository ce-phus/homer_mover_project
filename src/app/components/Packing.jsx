import React from 'react'
import { packing } from '@/assets'
import Image from 'next/image'
import { styles } from '../styles'

const Packing = () => {
  return (
    <div>
        <div className='grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 mx-2'>
            <div className='w-full h-full'>
                <Image 
                src={packing}
                alt='admin'
                className='w-full h-full object-cover resize-mode'/>
            </div>
            <div className='mt-10'>
                <div className='flex space-x-3 mb-3'>
                    <div className='w-8 h-8 rounded-full bg-grade/70'/>
                    <p className={styles.sectionSubText}>PACKING</p>
                </div>
                <h1 className={styles.sectionHeadText}>The next step in your move</h1>
                <h2 className='uppercase tracking-wide font-bold text-white text-2xl mt-5 mb-3'>PACKING SERVICES</h2>
                <p className={styles.paragraph}>Atlas Map Relocation provides professional packing services for all moves. Their experienced packers come prepared with the right supplies based on the pre-move survey. For international moving, they ensure careful inventory and packing, including proper boxing and wrapping. Atlas Map movers bring a variety of box sizes, bubble wrap, and tissue paper, along with a plan for non-boxable items.</p>
            </div>
        </div>
    </div>
  )
}

export default Packing