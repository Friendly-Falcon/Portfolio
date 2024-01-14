// layout.tsx

import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';
import Navbar from '../components/Navbar';
import Navigation from '../components/Navigation';




const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
        <Navbar />
        {children}
        <Navigation />
      </body>
    </html>
  );
}
