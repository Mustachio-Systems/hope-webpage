import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/shop' },
    { name: 'The Atelier', path: '/about' },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 md:h-32 items-center">
          
          {/* LOGO SECTION */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-4 group">
              {/* The Gold Coin Logo */}
              <div className="relative w-12 h-12 md:w-14 md:h-14">
                <Image 
                  src="/icon.png"
                  alt="HOPE Emblem"
                  fill
                  className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                  unoptimized // Force sharp quality
                />
              </div>
              
              {/* The Text Name */}
              <span className="text-3xl md:text-5xl font-serif font-medium text-white tracking-widest group-hover:text-hope-gold transition-colors duration-500 drop-shadow-md">
                HOPE
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
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

          {/* Contact Button */}
          <div className="flex items-center">
            <a 
              href="https://wa.me/17874639435"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans border border-white/30 text-white px-5 py-2 md:px-8 md:py-3 text-[9px] md:text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm"
            >
              Contact
            </a>
          </div>
          
        </div>
      </div>
    </nav>
  );
}