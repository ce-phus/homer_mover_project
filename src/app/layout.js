import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import Head from "next/head";
import { Lora } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";
import { Work_Sans } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
})
const worksans = Work_Sans({
  subsets:['latin'], display: 'swap'
})
const lora = Lora({ subsets: ['latin'], display: 'swap' });
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
});

export const metadata = {
  title: "Atlas Path Relocation",
  description: "Atlas Map is a global relocation service that helps you move your belongings from one place to another with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <link rel='icon' href="./logo.svg" />
      <body className={`${worksans.className} font-lora bg-white w-full min-h-screen`}>
        <div className="z-70">

        <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
