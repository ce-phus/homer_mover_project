import React from 'react'
import { styles } from '../styles'
import Link from 'next/link'

const GetStarted = () => {
  return (
    <Link href={'/contact'}>
      <div className={`${styles.flexCenter} w-[130px] text-center h-[130px] rounded-full bg-yellow-900 p-[2px] cursor-pointer hover:scale-105 duration-500`}>
        <div className={`${styles.flexCenter} flex-col bg-gray-100 w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-primary-gradient'>Contact</span>
            
          </p>
        </div>
        <p className='font-poppins font-medium text-[18px] mr-4 leading-[23px]'>
            <span className='text-primary-gradient'>Us</span>
            
          </p>
      </div>
    </div>
    </Link>
    
  )
}

export default GetStarted