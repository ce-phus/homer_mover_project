import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import Head from "next/head";
import { Montserrat } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
});

export const metadata = {
  title: "Atlas Map",
  description: "Atlas Map is a global relocation service that helps you move your belongings from one place to another with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <link rel='icon' href="./logo.svg" />
      <body className={`${montserrat.variable} font-mont bg-primary w-full min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
