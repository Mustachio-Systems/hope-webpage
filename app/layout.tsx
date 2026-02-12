import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HOPE | House of Pashmina Empire",
  description: "Authentic handcrafted luxury from India, available in Puerto Rico.",
  icons: {
    icon: [
      { url: '/icon.png' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="antialiased bg-hope-midnight text-hope-text selection:bg-hope-gold selection:text-black">
        <Navbar />
        {children}
        <Footer />
        
        {/* FIX 2: Updated Floating Watermark to use your PNG */}
        <div className="fixed bottom-8 left-8 z-40 hidden md:block opacity-60 hover:opacity-100 transition-opacity duration-500 mix-blend-screen">
          <img 
            src="/icon.png" 
            alt="HOPE Emblem" 
            className="w-16 h-16 drop-shadow-2xl object-contain" 
          />
        </div>

      </body>
    </html>
  );
}