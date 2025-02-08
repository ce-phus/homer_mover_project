import React from 'react'
import { quotes } from '@/assets'
import Image from 'next/image'

const FeedbackCard = ({content, name, title, img}) => (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[500px] hover:black-gradient  md:mr-10 sm:mr-5 mr-0 my-5'>
      <Image src={quotes} alt='double_quotes' className='w-[42px] h-[27px] object-contain'/>
      <p className='font-poppins font-normal text-[18px] text-dark leading-[32px] my-10'>{content}</p>
      <div className='flex flex-row'>
        <Image src={img} alt={name} className='w-[48px] h-[48px] rounded-full'/>
        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins text-gray-800 font-semibold text-[20px] leading-[32px]'>{name}</h4>
          <p className='font-poppins font-normal text-[16px] leading-[24px] text-gray-600'>{title}</p>
        </div>
      </div>
    </div>
  )
  export default FeedbackCard