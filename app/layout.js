import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './globals.css';
import WarningBanner from './components/WarningBanner';
import { ThemeProvider } from 'next-themes';



export default function RootLayout({ children }) {
  return (
      <html lang="en"  suppressHydrationWarning>
        <ThemeProvider enableSystem={true} attribute='class'> 
      <body>
        <div className="flex flex-col min-h-screen">
          <WarningBanner />
          <NavBar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer /> 
        </div>
      </body>
      </ThemeProvider>   
    </html> 

  );
}