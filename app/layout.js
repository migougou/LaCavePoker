import Header from './Components/Header';
import Footer from './Components/Footer';
import './globals.css'; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer /> 
        </div>
      </body>
    </html>
  );
}