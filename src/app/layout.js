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
  icons: {
    icon: '/logo.svg',
  },
  openGraph: {
    title: "Atlas Path Relocation",
    description: "Atlas Map is a global relocation service that helps you move your belongings from one place to another with ease.",
    url: 'https://atlaspathrelocation.com',
    siteName: 'Atlas Path Relocation',
    images: [
      {
        url: 'https://atlaspathrelocation.com/_next/static/media/logo8.ac913a58.svg',
        width: 600,
        height: 400,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Atlas Path Relocation",
    description: "Atlas Map is a global relocation service...",
    images: ['https://atlaspathrelocation.com/_next/static/media/logo8.ac913a58.svg'], 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${worksans.className} font-lora bg-white w-full min-h-screen`}>
        <div>
          <div className="z-50">
            <Navbar />
          </div>
          <div>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
