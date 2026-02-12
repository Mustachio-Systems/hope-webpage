"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'The Curation', path: '/shop' },
    { name: 'The Atelier', path: '/about' },
  ];

  // Prevent background scrolling when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* MOBILE FIX: Reduced height from h-24 to h-20 on mobile for a tighter fit */}
          <div className="flex justify-between h-20 md:h-32 items-center">
            
            {/* --- LOGO SECTION --- */}
            <div className="flex-shrink-0 flex items-center z-50">
              <Link href="/" className="flex items-center gap-2 md:gap-4 group" onClick={() => setIsMenuOpen(false)}>
                {/* MOBILE FIX: Scaled down icon from w-12 to w-8 on mobile */}
                <div className="relative w-8 h-8 md:w-14 md:h-14">
                  <Image 
                    src="/icon.png"
                    alt="HOPE Emblem"
                    fill
                    className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                {/* MOBILE FIX: Scaled down text from text-3xl to text-2xl on mobile */}
                <span className="text-2xl md:text-5xl font-serif font-medium text-white tracking-widest group-hover:text-hope-gold transition-colors duration-500 drop-shadow-md">
                  HOPE
                </span>
              </Link>
            </div>

            {/* --- DESKTOP LINKS --- */}
            <div className="hidden md:flex space-x-16">
              {navLinks.map((item) => (
                <Link 
                  key={item.name}
                  href={item.path} 
                  className="font-sans text-[10px] uppercase tracking-[0.3em] text-stone-300 hover:text-hope-gold transition-all duration-300 border-b border-transparent hover:border-hope-gold pb-1"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* --- RIGHT SIDE CONTROLS --- */}
            <div className="flex items-center gap-4 md:gap-6 z-50">
              {/* Contact Button (Scaled for mobile) */}
              <a 
                href="https://wa.me/17874639435?text=Hello%20HOPE%2C%20I%20would%20like%20to%20make%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans border border-white/30 text-white px-3 py-2 md:px-8 md:py-3 text-[8px] md:text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm"
              >
                Contact
              </a>

              {/* Mobile Menu Toggle (Text-Based for Elegance) */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden font-sans text-[9px] uppercase tracking-[0.2em] text-white hover:text-hope-gold transition-colors"
              >
                {isMenuOpen ? 'CLOSE' : 'MENU'}
              </button>
            </div>
            
          </div>
        </div>
      </nav>

      {/* --- FULL SCREEN MOBILE MENU --- */}
      <div 
        className={`fixed inset-0 bg-hope-midnight/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center transition-all duration-700 ease-in-out md:hidden ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center w-full px-8">
          
          {/* Faint watermark icon in menu */}
          <div className="relative w-12 h-12 mb-10 opacity-30">
             <Image src="/icon.png" alt="HOPE" fill unoptimized className="object-contain" />
          </div>

          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="font-serif text-3xl text-white hover:text-hope-gold transition-colors duration-300 w-full text-center py-5 border-b border-white/5"
            >
              {item.name}
            </Link>
          ))}

          {/* Menu Footer details */}
          <div className="mt-16 text-center">
            <p className="font-sans text-hope-gold text-[9px] tracking-[0.4em] uppercase mb-2">
              The Showroom
            </p>
            <p className="font-sans text-stone-500 text-xs tracking-widest uppercase">
              Carolina, Puerto Rico
            </p>
          </div>

        </div>
      </div>
    </>
  );
}