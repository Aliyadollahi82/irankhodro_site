'use client';

import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/login' || pathname === '/register';

  return (
    <html lang="fa" dir="rtl">
      <body className="bg-[#f4f6f9] text-gray-800 font-sans antialiased min-h-screen flex flex-col justify-between">
        {!isAuthPage && <Header />}
        
        <main className="w-full flex-grow">
          <PageTransition>
            {children}
          </PageTransition>
        </main>

        {!isAuthPage && <Footer />}
      </body>
    </html>
  );
}