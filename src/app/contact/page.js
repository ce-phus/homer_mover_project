import React from 'react'
import { hero1 } from '@/assets'
import Image from 'next/image'
import { globe } from '@/assets'
import { FaBuilding } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

const Contact = () => {
  return (
    <>
    <div className='flex flex-col items-center pt-20 space-y-4'>
      <h1 className='text-dark text-2xl font-bold tracking-wide'>Contact Us</h1>
      <h2 className='text-xl text-primary font-medium'>We use an agile approach to connect with our audience early and often.</h2>
    </div>
    <div className='flex flex-row lg:flex-col mx-3 xl:mx-5 max-w-[1600px] mx-auto pt-20'>
      <form className='w-full mx-3'>
          <div className='flex flex-wrap -mx-3 mb-6 md:mb-2'>
            <div className='lg:w-full w-1/2 px-3 mb-2'>
              <label className='font-medium tracking-wide block'>First Name</label>
              <input
              className='appearance-none bg-grade text-gray-800 block border border-gray-300 placeholder-gray-500 rounded-lg w-full p-2.5'
              type="text"
              name="firstname"
              placeholder='Mary' />
            </div>
            <div className='lg:w-full w-1/2 px-3 mb-2'>
              <label className='font-medium tracking-wide block'>Last Name</label>
              <input
              className='appearance-none bg-grade text-gray-800 block border border-gray-300 placeholder-gray-500 rounded-lg w-full p-2.5'
              type="text"
              name="lastname"
              placeholder='Jane'/>
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-6 md:mb-2'>
            <div className='lg:w-full w-1/2 px-3 mb-2'>
              <label className='font-medium tracking-wide block'>Email Address</label>
              <input
              className='appearance-none bg-grade text-gray-800 block border border-gray-300 placeholder-gray-700 rounded-lg w-full p-2.5'
              placeholder='someone@gmail.com'
              type="email"
              name="email"/>
            </div>
            <div className='lg:w-full w-1/2 px-3 mb-2'>
              <label className='font-medium tracking-wide block'>Phone Number</label>
              <input
              className='appearance-none bg-grade text-gray-800 block border border-gray-300 placeholder-gray-700 rounded-lg w-full p-2.5'
              placeholder='0700000000'
              type="tel"
              name="phonenumber"/>
            </div>
          </div>
          <div className='mt-2'>
            <label className=' font-medium block tracking-wide'>Subject of Inquiry</label>
            <input
              className='appearance-none bg-grade text-gray-800 block border border-gray-300 placeholder-gray-800 rounded-lg w-full p-2.5'
              placeholder=''
              name="message"/>
              <label className='flex flex-col mt-3'>
                <span className='font-medium mb-4'> Message</span>
                <textarea
                  rows={7}
                  name='message'
                  
                  placeholder='What you want to say?'
                  className='bg-grade border border-white shadow py-4 px-6 placeholder:text-dark text-gray-800 rounded-lg outline-none border-none font-medium'
                />
              </label>
          </div>
            
          <div className='flex space-x-5  flex-row'>
            <div className='mt-5 space-y-2'>
              <h1 className='font-medium mb-3'>Preferred Contact</h1>
              <div className='flex space-x-3'>
                <input
                name='preferredContact'
                type='checkbox'
                value='Email'
                className='rounded-full bg-white'/>
                <label className='font-medium'>Email</label>
              </div>
              <div className='flex space-x-3'>
                <input
                value='Phone Call'
                type='checkbox'
                className='rounded-full bg-white'/>
                <label className='font-medium'>Phone Call</label>
              </div>
              <div className='flex space-x-3'>
                <input
                name='preferredContact'
                value='Text Message'
                type='checkbox'
                className='rounded-full bg-white'/>
                <label className='font-medium'>Text Message</label>
              </div>
            </div>

            <div className='mt-5 space-y-2 md:pl-20'>
              <h1 className='font-medium mb-3'>Urgency of Inquiry</h1>
              <div className='flex space-x-3'>
              <input type='radio' name='urgency' value='Urgent' /> 
                <label className='font-medium'>Urgent</label>
              </div>
              <div className='flex space-x-3'>
              <input type='radio' name='urgency' value='Urgent'/> 
                <label className='font-medium'>Normal</label>
              </div>
              <div className='flex space-x-3'>
              <input type='radio' name='urgency' value='Not Urgent'  />
                <label className='font-medium'>Not Urgent</label>
              </div>
            </div>
            
          </div>
          <button
          type='submit'
          className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mt-2'
        >
          { "Send"}
        </button>
      </form>
      <div className='w-3/4 xl:w-full flex flex-col items-center space-y-7 mx-3'>
        
        <div className='space-y-1 mx-2 text-center flex flex-col items-center'>
          <FaBuilding className='text-6xl text-gray-700 bg-grade p-1.5 rounded-lg'/>
          <h1 className='text-2xl font-bold text-center'>Company Information</h1>
          <p className='font-medium text-lg text-gray-800'>Atlas Path Relocation</p>
        </div>
        <div className='space-y-1 mx-2 text-center flex flex-col items-center'>
          <IoCall className='text-6xl text-gray-700 bg-grade p-1.5 rounded-lg'/>
          <h1 className='text-2xl font-bold text-center'>Call Us</h1>
          <p className='font-medium text-lg text-gray-800'>Call us to speak to a member of our team. We are always happy to help.</p>
          <p className='font-medium text-lg text-blue-800'>+44 (646) 786-5060</p>
        </div>
        <div className='space-y-1 mx-2 text-center flex flex-col items-center'>
          <IoLocation className='text-6xl text-red-700 bg-grade p-1.5 rounded-lg'/>
          <h1 className='text-2xl font-bold text-center'>Address:</h1>
          <p className='font-medium text-lg text-gray-800'>MANCHESTER, United Kingdom 2078 Deansgate Zip Code/Postal Address:0856</p>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Contact