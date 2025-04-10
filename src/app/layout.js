import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import { Work_Sans } from "next/font/google";


const worksans = Work_Sans({
  subsets:['latin'], display: 'swap'
})


export const metadata = {
  title: "Atlas Path Relocation",
  description: "We provide tailored relocation solutions for individuals, families, and businesses, ensuring a smooth transition with home search, school placements, and settling-in support.",
  icons: [
    { url: '/favicon.svg', type: 'image/svg+xml' },
    { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
  ],
  openGraph: {
    title: "Atlas Path Relocation",
    description: "We provide tailored relocation solutions for individuals, families, and businesses, ensuring a smooth transition with home search, school placements, and settling-in support.",
    url: 'https://atlaspathrelocation.com',
    siteName: 'Atlas Path Relocation',
    images: [
      {
        url: 'https://atlaspathrelocation.com/logo.png',
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
    images: ['https://atlaspathrelocation.com/logo.png'], 
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
