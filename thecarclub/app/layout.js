import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Head from 'next/head';
import Image from 'next/image'
import styles from "../styles/page1.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Car Club",
  description: "A blog for Car lovers",
  icons:{
    icon: '/Cobra logo.jpg',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Cobra logo.jpg" />
      </head>
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className={styles.navbar}>
          <div className={styles.navlist}>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Blogs</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className={styles.navpara}>
               <Image
                src="/Cobra logo.jpg"
                alt="Logo"
                width={70}
                height={50}
              />
              <p>The Car Club</p>
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}