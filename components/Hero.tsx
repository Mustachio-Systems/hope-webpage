import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden supports-[height:100dvh]:h-[100dvh]">
      
      {/* --- ATMOSPHERE --- */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-pashmina.jpg" 
          alt="Authentic Kashmir Pashmina"
          fill
          unoptimized
          priority
          className="object-cover object-center scale-[1.02] animate-ken-burns" 
        />
        
        {/* Luxury Lighting Gradients - Adjusted for mobile contrast */}
        <div className="absolute inset-0 bg-black/40" /> 
        <div className="absolute inset-0 bg-gradient-to-t from-hope-midnight via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent opacity-80" />
        
        {/* Film Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 text-center text-white w-full max-w-[95%] md:max-w-6xl px-4 mt-16 flex flex-col items-center">
        
        {/* Subtitle Badge */}
        <div className="overflow-hidden mb-6 md:mb-10">
          <p className="font-sans text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-hope-gold animate-slide-up-fade opacity-0 [animation-fill-mode:forwards] [animation-delay:200ms]">
            Est. 2026 • Puerto Rico
          </p>
        </div>
        
        {/* Main Headline - Resized for small mobile screens */}
        <div className="overflow-hidden w-full">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-[10rem] font-light mb-4 leading-[1] md:leading-[0.85] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 animate-slide-up-fade opacity-0 [animation-fill-mode:forwards] [animation-delay:500ms]">
            Uniquely<br className="md:hidden"/> Yours.
          </h1>
        </div>
        
        {/* Tagline */}
        <p className="font-sans font-extralight text-sm sm:text-lg md:text-2xl text-stone-300 max-w-[280px] sm:max-w-lg md:max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed animate-slide-up-fade opacity-0 [animation-fill-mode:forwards] [animation-delay:800ms]">
          <span className="italic font-serif text-xl md:text-3xl pr-2 text-hope-gold">The</span> House of Pashmina Empire
        </p>
        
        {/* CTA Button */}
        <div className="animate-slide-up-fade opacity-0 [animation-fill-mode:forwards] [animation-delay:1100ms]">
          <Link 
            href="/shop" 
            className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 overflow-hidden border border-white/20 hover:border-hope-gold/50 bg-black/20 backdrop-blur-md transition-all duration-700"
          >
             <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-hope-gold/0 via-hope-gold/10 to-hope-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
             <span className="relative font-sans text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-white group-hover:text-hope-gold transition-colors duration-500">
               Enter The Collection
             </span>
          </Link>
        </div>
      </div>

      {/* --- SCROLL INDICATOR --- */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 animate-bounce-slow">
        <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-white">Scroll</span>
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </div>

    </section>
  );
}