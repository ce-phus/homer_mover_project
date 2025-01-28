import React from 'react'
import { hero1, hero2, hero3, hero4, hero5, hero6, hero7, download } from '@/assets';
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
      id: 2,
      img: hero7,
      
    },
    {
      id: 3,
      img: hero3,
      
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
        id: 7,
        img: hero2,
        
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
      
        <Slider {...sliderSettings} className="lg:w-full w-1/2 h-auto">
        {HeroData.map((data) => (
            <div key={data.id} className="relative z-0 w-full h-[599px] overflow-hidden">
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
                <h1 className='text-2xl font-normal uppercase'>Welcome to</h1>
                <Image
                src={download}
                className='w-[150px]'
                alt=''/>
                <h1 className='text-3xl font-normal uppercase font-medium text-primary'>Atlas Map Relocation</h1>
            </div>
            <div className='mt-10 space-y-5 flex flex-col justify-center items-center lg:mb-20'>
                <p className='text-dark font-normal'>We are leading executive relocation agency</p>
                <p className='text-dark font-normal'>with a personal touch.</p>
                <p className="mt-20 mb-[100px] p-4 rounded-lg text-white black-gradient text-lg font-medium flex w-[200px] items-center justify-center">
                    <span className="flex space-x-5"><FaPhoneVolume className="mr-2 mt-1"/> +2540112989429</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Carousel