import React from 'react'
import { styles } from '../styles'
import { logo8 } from '@/assets'
import { footerLinks, socialMedia } from '../constants'
import Image from 'next/image'
import Link from 'next/link'
import Quiz from './Quiz'
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className="">
        <div className="flex items-center justify-center text-center">
            <Quiz />
        </div>
      </div>
    <div className={`${styles.flexStart} flex-row sm:flex-col max-w-7xl mx-auto mb-8 w-full`}>
      <div className='flex-1 sm:flex md:flex-col sm:flex-row justify-start mr-10'>
        <Image src={logo8} alt='logo' className='w-[200px] h-[200px] object-contain'/>
        <p className={`text-gray-700 text-xl font-bold mt-4 max-w-[310px] md:hidden`}>
          Savor a Smooth Moving Experience with Atlas Path.
        </p>
      </div>
      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 mx-3'>
        {footerLinks.map((footerLink, footerIndex) => (
          <div key={`footer-link-${footerIndex}`} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px]'>
              {footerLink.title}
            </h4>
            <ul className='list-none mt-4'>
              {footerLink.links.map((link, index) => (
                <li key={`link-${link.name}-${index}`} className={`text-gray-700 font-medium font-normal text-[16px] leading-[24px] hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                  <Link href={link.link} target='_blank'>
                  {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
    </div>
    <div className='flex justify-start mb-3'>
        <Link href={'https://cephuswebdev.netlify.app'} target='_blank' className='text-dark font-normal text-lg'>
        Designed and Hosted by <span className='font-medium text-primary text-lg'>Cephus.</span> 
        </Link>
    </div>
    <div className='w-full flex justify-between items-center flex-col pt-6 border-t-[1px] border-t-[#3F3E45] max-w-[2000px] mx-auto'>
      <p className='font-medium text-center text-[18px] leading-[27px]'>
      © {currentYear} Atlas Path Relocation. All Rights Reserved
      </p>
      <p className='font-medium text-center text-[18px] leading-[27px] flex'>
      <MdEmail className='w-6 h-7 mr-2'/> info@atlaspathrelocation.com
      </p>
    </div>
    <p className='font-medium text-[18px]'>Company ID: 16138365</p>
    <div className='flex flex-row md:mt-0 mt-6 bg-dark py-2 px-5 rounded-lg'>
      {socialMedia.map((social, index) => (
        <Link key={social.id} href={social.link} >
        <Image
          
          src={social.icon}
          alt={social.id}
          className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
        />
        </Link>
        
      ))}
    </div>
  </section>
  )
}
  

export default Footer
