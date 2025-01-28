import React from 'react'
import { styles } from '../styles'
import { arrow } from '@/assets'
import Image from 'next/image'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px]  h-[140px] rounded-full bg-yellow-900 p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-grade w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
          <span className='text-primary-gradient'>Contact</span>
          
        </p>
        <Image src={arrow} alt='arrow'
          className='w-[23px] h-[23px]  object-contain'/>
      </div>
      <p className='font-poppins font-medium text-[18px] mr-4 leading-[23px]'>
          <span className='text-primary-gradient'>Us</span>
          
        </p>
    </div>
  </div>
  )
}

export default GetStarted