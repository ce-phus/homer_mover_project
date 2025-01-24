"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Head from "next/head";
import { herobg, herobg2, herobg3 } from "@/assets";
import { FaPhoneVolume } from "react-icons/fa6";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import { FaArrowCircleRight } from "react-icons/fa";


const HeroData = [
  {
    id: 1,
    img: herobg,
    title: "Simplified Global Relocation",
    title2: "Experience Hassle-Free Relocation with Atlas Path",
    subtitle: "All In One",
  },
  {
    id: 2,
    img: herobg2,
    title: "Effortless Worldwide Moving",
    title2: "Relocate with Ease Thanks to Atlas Path",
    subtitle: "All In One",
  },
  {
    id: 3,
    img: herobg3,
    title: "Easy Global Moving Solutions",
    title2: "Savor a Smooth Moving Experience with Atlas Path",
    subtitle: "All In One",
  },
];

export default function Home() {
 const [currentIndex, setCurrentIndex] = useState(0);
 const [isHoveed, setIsHoveed] = useState(false);
 const prevSlide =() => {
    setCurrentIndex(currentIndex === 0 ? HeroData.length - 1 : currentIndex - 1);
 }

 const nextSlide =() => {
    setCurrentIndex(currentIndex === HeroData.length - 1 ? 0 : currentIndex + 1);
 }

 useEffect(()=> {
  if (!isHoveed) {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex === HeroData.length - 1 ? 0 : currentIndex + 1);
    }, 8000);
    return () => clearInterval(interval);
  }
 }, [currentIndex, isHoveed]);

 const handleMouseOver = () => {
  setIsHoveed(true)
 }
 const handleMouseLeave = () => {
  setIsHoveed(false)
 }

 const handleRoute = () => {
  router.push('/quote');
};

 
  return (
    <>
    <Head>
      <title>Home</title>
      <meta name="description" content="Atlas Path" />
      <link rel="icon" href="/logo.svg" />
    </Head>
    <div className="relative w-full mt-20">
      <div className="relative h-[800px] hover:-translate-y-2"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}>
        <Image src={HeroData[currentIndex].img} alt="hero" layout="fill" objectFit="cover" className="transition-all duration-500 ease-in-out cursor-pointer"/>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center mt-10">
          <div className="text-white text-center space-y-10 transition-all duration-500 ease-in-out mx-5">
            <h1 className="text-8xl sm:text-5xl font-bold">{HeroData[currentIndex].title}</h1>
            <h1 className="text-4xl font-medium">{HeroData[currentIndex].title2}</h1>
          </div>
            <p className="mt-[200px] p-4 rounded-lg text-white black-gradient text-lg font-medium flex w-[200px] justify-center">
              <span className="flex space-x-5"><FaPhoneVolume className="mr-2 mt-1"/> +2540112989429</span>
            </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
          <button onClick={prevSlide} className="absolute left-0 bg-black bg-opacity-50 text-white p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={nextSlide} className="absolute right-0 bg-black bg-opacity-50 text-white p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-20 flex items-center justify-center w-full text-white">
        <form className="w-1/3 md:w-3/4 md:flex md:flex-col  flex gap-5 ">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-medium">Moving From</label>
            <input type="text" name="name" id="name" className="p-5 rounded-lg font-medium radial-gradient"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium">Moving To</label>
            <input type="email" name="email" id="email" className="p-5 rounded-lg font-medium radial-gradient"/>
          </div>
          
          <motion.button
            onClick={handleRoute}
            className='p-5 h-1/2 mt-7 w-[300px] rounded-xl relative radial-gradient flex text-center'
            initial={{ "--x": "100%", scale: 1 }}
            animate={{ "--x": "-100%" }}
            whileTap={{ scale: 0.97 }}
            transition={{
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1,
                type: "spring",
                stiffness: 20,
                damping: 15,
                mass: 2,
                scale: {
                    type: "spring",
                    stiffness: 10,
                    damping: 5,
                    mass: 0.1,
                },
            }}
        >
            <span className='text-neutral-100 font-medium tracking-wide  w-[200px] text-center block relative linear-mask flex'>Get Quote <FaArrowCircleRight className="ml-3"/></span>
            <span className='block absolute inset-0 rounded-xl p-px linear-overlay'/>
        </motion.button>
        </form>
      </div>
    </div>
  </>
  );
}
