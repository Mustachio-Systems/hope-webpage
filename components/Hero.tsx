import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    // FIX 1: Use 'dvh' (Dynamic Viewport Height) so it doesn't jump on mobile browsers
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden supports-[height:100dvh]:h-[100dvh]">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-pashmina.jpg" 
          alt="Authentic Kashmir Pashmina"
          fill
          unoptimized
          priority
          className="object-cover scale-105 animate-slow-zoom" 
        />
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-black/30" /> 
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-hope-midnight" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-[90%] md:max-w-6xl px-4 mt-20">
        <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] mb-4 md:mb-8 text-hope-gold animate-fade-in">
          Est. 2026 • Puerto Rico
        </p>
        
        {/* FIX 2: Responsive Text Sizing (text-5xl for mobile, 9rem for desktop) */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-[9rem] font-light mb-6 md:mb-8 leading-[0.9] tracking-tight text-white mix-blend-overlay opacity-90">
          Uniquely Yours.
        </h1>
        
        <p className="font-sans font-extralight text-sm sm:text-lg md:text-2xl text-stone-200 max-w-lg md:max-w-2xl mx-auto mb-10 md:mb-16 leading-relaxed">
          <span className="italic font-serif text-xl md:text-3xl pr-2">The</span> House of Pashmina Empire
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link href="/shop" className="group relative px-8 py-3 md:px-12 md:py-4 overflow-hidden border border-white/20 hover:border-white/50 transition-colors duration-300">
               <span className="absolute inset-0 w-full h-full bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
               <span className="relative font-sans text-[10px] uppercase tracking-[0.3em] text-white">Explore Collection</span>
            </Link>
        </div>
      </div>
    </section>
  );
}