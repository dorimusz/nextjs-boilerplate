import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import NavBar from './components/navigation/NavBar';
import Footer from './components/footer/Footer';
import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';
// import { MonaSans_Font } from '@/assets/fonts/MonaSans';

// Dynamic Import: The dynamic function is used to import the AppThemeProvider component dynamically. If you want to disable pre-rendering for a Client Component, you can use the ssr option set to false
// SSR Disabled: The ssr: false option ensures that the AppThemeProvider component is only rendered on the client side, not on the server. This is useful for components that rely on client-side state or browser-specific APIs.
const AppThemeProvider = dynamic(() => import('./providers/theme'), {
  ssr: false,
});
// Implementing a Theme Provider in Next.js 14+ without wrapping children in Context offers a cleaner and more efficient way to manage themes in your application without making complete application a client component

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

export const metadata: Metadata = {
  title: 'Add site title here',
  description: 'Add a description here',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  console.log('cookieStore', cookieStore);
  const theme = cookieStore.get('theme')?.value || 'system';
  console.log('theme', theme);

  return (
    <html
      lang="en"
      className={theme}
      style={theme !== 'system' ? { colorScheme: theme } : {}}
    >
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* ${MonaSans_Font.className} */}
        <AppThemeProvider attribute="class" defaultTheme={theme} enableSystem />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
