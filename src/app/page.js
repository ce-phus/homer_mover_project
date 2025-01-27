"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Head from "next/head";
import { herobg, herobg2, herobg3, section2, globe  } from "@/assets";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import { FaArrowCircleRight } from "react-icons/fa";
import { Services, Detail, Admin, Packing, Logistics, Quiz, Carousel } from "./components";


export default function Home() {
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
    <div className="relative w-full ">
        <Carousel />
        <div className="flex pt-20 pb-20 flex-col items-center justify-center space-y-10 mx-3">
          <Image 
          src={globe}
          alt="globe"
          className="w-[100px] h-"/>
          <h1 className="text-primary text-4xl font-normal italic tracking-wide w-full">A personal approach to relocation</h1>
          <p className="text-center w-[800px] sm:w-full sm:mx-2 font-normal text-xl text-dark">Finding a new home is a very personal journey and no two moves are the same, so whether you’re looking for a town or country family house, a short-term UK base or a London pied-à-terre; whatever it may be, we are here to help!</p>
          <p className="text-center w-[800px] sm:w-full sm:mx-2 font-normal text-xl text-dark">Finding a new home is a very personal journey and no two moves are the same, so whether you’re looking for a town or country family house, a short-term UK base or a London pied-à-terre; whatever it may be, we are here to help!</p>
        </div>
        <Admin />
      <div className="">
        <Detail />
        <h1 className="flex items-center justify-center pt-20 text-5xl font-medium tracking-wide text-primary">Our Services</h1>
        <Services />
      </div>
      <div className="">
        <div className="flex items-center justify-center text-center">
            <Quiz />
        </div>
      </div>
    </div>
    
  </>
  );
}
