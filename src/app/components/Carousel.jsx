import React from 'react'
import { hero1, hero2, hero3, hero4, hero5, hero6, hero7, download, hero8, hero9, hero10, hero11, hero12, hero13, hero14 } from '@/assets';
import Slider from 'react-slick';
import Image from 'next/image';
import { FaPhoneVolume } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroData = [
    {
      id: 1,
      img: hero1,
      
    },
    {
        id: 7,
        img: hero7,
        
    },
    {
      id: 3,
      img: hero3,
      
    },
    {
        id: 10,
        img: hero10,
        
    },
    {
        id: 4,
        img: hero4,
        
    },
    {
        id: 5,
        img: hero5,
        
    },
    {
        id: 6,
        img: hero6,
        
    },
    
    
    {
        id: 14,
        img: hero14,
        
    },
  ];

const Carousel = () => {
    const sliderSettings  =  {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    }
  return (
    <div className='flex flex-row sm:flex-col md:flex-col lg:flex-col pt-[80px] md:flex-col-reverse sm:flex-col-reverse'>
        <Slider {...sliderSettings} className="lg:w-full xl:w-[550px] w-[850px] h-auto">
        {HeroData.map((data) => (
            <div key={data.id} className="relative z-0 h-[599px] overflow-hidden">
            <Image
                src={data.img}
                alt=""
                className="object-cover"
                layout="fill" 
                priority={true} 
            />
            </div>
        ))}
        </Slider>
        <div className='bg-grade w-full'>
            <div className='space-y-10 flex flex-col items-center mt-20  justify-center'>
                <h1 className='text-lg font-normal uppercase'>Welcome to</h1>
                <Image
                src={download}
                className='w-[150px]'
                alt=''/>
                <h1 className='text-xl font-normal uppercase font-medium text-primary'>Atlas Path Relocation</h1>
            </div>
            <div className='mt-10 space-y-2 mx-5 text-center flex flex-col justify-center items-center lg:mb-20'>
                <p className='text-dark font-normal'>Relocation doesn’t have to be stressful. At Atlas Path, we make your move seamless,</p>
                <p className='text-dark font-normal'> whether it’s international, domestic, or corporate.Let us handle the details while you focus on starting fresh.</p>
                <p className="mt-20 mb-[100px] p-4 rounded-lg text-white black-gradient text-lg font-medium flex w-[300px] sm:w-[250px] items-center justify-center">
                    <span className="flex space-x-5 "><FaPhoneVolume className="mr-2 mt-1"/> +44 (646) 786-5060</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Carousel