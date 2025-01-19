import type { Metadata } from 'next';
import './globals.css';
import NavBar from './components/navigation/NavBar';
import Footer from './components/footer/Footer';
import MainSectionContainer from './components/container/MainSectionContainer';

/*
//Importing Google Fonts.
 import { Oooh_Baby } from 'next/font/google';
 const ooohBabyFont = Oooh_Baby({ subsets: ['latin'], weight: ['400'] });

// usage: <body className={ooohBaby.className}>
*/

/*
//Importing local Fonts.
import localFont from 'next/font/local';
import { MonaSans_Font } from '@/assets/fonts/MonaSans';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// usage: 
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
         ${MonaSans_Font.className}>
*/

export const metadata: Metadata = {
  title: 'Add site title here',
  description: 'Add a description here',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <MainSectionContainer>{children}</MainSectionContainer>
        <Footer />
      </body>
    </html>
  );
}
