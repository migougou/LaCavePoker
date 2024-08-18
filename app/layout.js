"use client"
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './globals.css';
import WarningBanner from './components/WarningBanner';

export default function RootLayout({ children }) {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark(!dark);
    if (typeof window !== "undefined") {
      if (!dark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDark(isDarkMode);
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  return (
    <html lang="en" className={dark ? "dark" : ""} suppressHydrationWarning>
      <body className={dark ? "dark" : ""}>
        <div className="flex flex-col min-h-screen">
          <WarningBanner />
          <NavBar dark={dark} toggleDarkMode={toggleDarkMode} />
          <main className="flex-grow bg-white dark:bg-gray-900">
            {children}
          </main>
          <Footer /> 
        </div>
      </body>  
    </html> 
  );
}
