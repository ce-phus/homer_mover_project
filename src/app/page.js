"use client";
import Image from "next/image";
import Head from "next/head";
import { globe, download } from "@/assets";

import { Services, Detail, Admin, Carousel } from "./components";

export default function Home() {

  return (
    <>
    <Head>
      <title>Home</title>
      <meta name="description" content="Atlas Path" />
      <link rel="icon" href="/logo.svg" />
    </Head>
    <div className="">
        <Carousel />
        <div className="flex pt-20 pb-20 flex-col items-center justify-center space-y-10">

          <h1 className="text-primary text-center text-xl font-normal italic tracking-wide w-full">Tailored Support for Your Move</h1>
          <Image 
          src={download}
          alt="globe"
          className="w-[100px] h-"/>
          <p className="text-center w-[800px] sm:w-full sm:mx-2 font-normal text-md text-dark">Relocating is a deeply personal experience, and no two moves are alike. Whether you’re seeking a family home in the countryside, a vibrant city residence, or a temporary UK base, finding the right place requires careful consideration. Every individual has unique needs and preferences, and we are committed to understanding yours to make your transition as smooth as possible.</p>
          <p className="text-center w-[800px] sm:w-full sm:mx-2 font-normal text-md text-dark">With expert guidance and a client-focused approach, we make your relocation seamless. From finding the perfect home to handling logistics, we provide personalized support every step of the way.</p>
        </div>
        <Admin />
      <div className="">
        <Detail />
        <h1 className="flex items-center justify-center pt-20 text-5xl font-medium tracking-wide text-primary">Our Services</h1>
        <Services />
      </div>
    </div>
    
  </>
  );
}
