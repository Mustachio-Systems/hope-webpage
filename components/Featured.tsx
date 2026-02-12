import Image from "next/image";

export default function Featured() {
  
  const waLink = (msg: string) => `https://wa.me/17874639435?text=${encodeURIComponent(msg)}`;

  return (
    <section className="bg-hope-midnight relative z-10">
      
      {/* --- SECTION 1: APPAREL --- */}
      <div className="relative w-full h-[85dvh] md:h-[100dvh] overflow-hidden group">
        
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 transition-transform duration-[4000ms] md:group-hover:scale-105">
            <Image 
              src="/feature-dress.jpg" 
              alt="Royal Indian Anarkali Dress"
              fill
              unoptimized
              priority
              className="object-cover object-center md:object-top"
            />
          </div>
          {/* MOBILE FIX: Bottom gradient on mobile, Side gradient on desktop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent md:bg-gradient-to-r md:from-transparent md:via-black/20 md:to-black/90" />
        </div>
          
        {/* MOBILE FIX: Removed pb-12, added pb-8. Card drops exactly into the bottom gradient */}
        <div className="absolute inset-0 flex items-end md:items-center justify-center md:justify-end px-4 md:px-20 pb-12 md:pb-0 pointer-events-none">
          {/* MOBILE FIX: Removed translate-y-8 from mobile so it's always in place */}
          <div className="w-[95%] sm:w-[80%] md:w-[450px] bg-black/50 md:bg-black/40 backdrop-blur-2xl border border-white/10 p-6 md:p-12 shadow-2xl pointer-events-auto transform translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-1000">
            
            <span className="inline-block mb-4 md:mb-6 font-sans text-hope-gold text-[8px] md:text-[9px] tracking-[0.4em] uppercase border-b border-hope-gold/30 pb-2">
              Heritage Narrative
            </span>
            
            <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white mb-4 md:mb-6 leading-none md:leading-[0.9]">
              The Silk <br className="hidden md:block"/><span className="italic text-transparent bg-clip-text bg-gradient-to-r from-hope-gold to-[#FFF]">Route</span>
            </h2>
            
            <p className="font-sans text-stone-300 text-xs sm:text-sm font-light leading-relaxed md:leading-loose mb-8 md:mb-10 text-justify">
              Inspired by the royal courts of India, our apparel features hand-woven silks and intricate gold-thread Zardozi. These aren&apos;t just dresses; they are solitary masterpieces designed to be inherited.
            </p>
            
            <a 
              href={waLink("Hello HOPE, I am captivated by the 'Silk Route' apparel. Please send me what you have in inventory.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-3 md:gap-4 text-[9px] md:text-[10px] font-sans uppercase tracking-[0.2em] text-white hover:text-hope-gold transition-colors duration-300"
            >
              <span className="border-b border-white/30 pb-1 group-hover/btn:border-hope-gold transition-colors">Concierge Inquire</span>
              <span className="text-lg md:text-xl group-hover/btn:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* --- SECTION 2: JEWELRY --- */}
      <div className="relative w-full h-[85dvh] md:h-[100dvh] overflow-hidden group border-t border-white/5">
        
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 transition-transform duration-[4000ms] md:group-hover:scale-105">
            <Image 
              src="/feature-jewelry.jpg" 
              alt="Antique Indian Jewelry"
              fill
              unoptimized
              priority
              className="object-cover object-center"
            />
          </div>
          {/* MOBILE FIX: Bottom gradient on mobile, Left gradient on desktop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent md:bg-gradient-to-l md:from-transparent md:via-black/20 md:to-black/90" />
        </div>

        <div className="absolute inset-0 flex items-end md:items-center justify-center md:justify-start px-4 md:px-20 pb-12 md:pb-0 pointer-events-none">
          <div className="w-[95%] sm:w-[80%] md:w-[450px] bg-black/50 md:bg-black/40 backdrop-blur-2xl border border-white/10 p-6 md:p-12 shadow-2xl pointer-events-auto transform translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-1000">
            
            <span className="inline-block mb-4 md:mb-6 font-sans text-hope-gold text-[8px] md:text-[9px] tracking-[0.4em] uppercase border-b border-hope-gold/30 pb-2">
              Legacy Adornments
            </span>
            
            <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white mb-4 md:mb-6 leading-none md:leading-[0.9]">
              Antique <br className="hidden md:block"/><span className="italic text-transparent bg-clip-text bg-gradient-to-r from-hope-gold to-[#FFF]">Heritage</span>
            </h2>
            
            <p className="font-sans text-stone-300 text-xs sm:text-sm font-light leading-relaxed md:leading-loose mb-8 md:mb-10 text-justify">
              Each jewel carries the soul of generations. We source rare gold-plated silver and uncut diamonds (Polki) to offer a singular brilliance found nowhere else in Puerto Rico.
            </p>
            
            <a 
              href={waLink("Hello HOPE, I am interested in your unique jewelry. Please send me photos of your current antique sets.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-3 md:gap-4 text-[9px] md:text-[10px] font-sans uppercase tracking-[0.2em] text-white hover:text-hope-gold transition-colors duration-300"
            >
              <span className="border-b border-white/30 pb-1 group-hover/btn:border-hope-gold transition-colors">Concierge Inquire</span>
              <span className="text-lg md:text-xl group-hover/btn:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* --- SECTION 3: JUTTI --- */}
      <div className="relative w-full h-[85dvh] md:h-[100dvh] overflow-hidden group border-t border-white/5">
        
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 transition-transform duration-[4000ms] md:group-hover:scale-105">
            <Image 
              src="/jutti.jpg" 
              alt="Handcrafted Indian Jutti"
              fill
              unoptimized
              priority
              className="object-cover object-center"
            />
          </div>
          {/* MOBILE FIX: Bottom gradient on mobile, Right gradient on desktop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent md:bg-gradient-to-r md:from-transparent md:via-black/20 md:to-black/90" />
        </div>

        <div className="absolute inset-0 flex items-end md:items-center justify-center md:justify-end px-4 md:px-20 pb-12 md:pb-0 pointer-events-none">
          <div className="w-[95%] sm:w-[80%] md:w-[450px] bg-black/50 md:bg-black/40 backdrop-blur-2xl border border-white/10 p-6 md:p-12 shadow-2xl pointer-events-auto transform translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-1000">
            
            <span className="inline-block mb-4 md:mb-6 font-sans text-hope-gold text-[8px] md:text-[9px] tracking-[0.4em] uppercase border-b border-hope-gold/30 pb-2">
              Artisanal Footwear
            </span>
            
            <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white mb-4 md:mb-6 leading-none md:leading-[0.9]">
              Royal <br className="hidden md:block"/><span className="italic text-transparent bg-clip-text bg-gradient-to-r from-hope-gold to-[#FFF]">Steps</span>
            </h2>
            
            <p className="font-sans text-stone-300 text-xs sm:text-sm font-light leading-relaxed md:leading-loose mb-8 md:mb-10 text-justify">
              The final touch of grace. Our leather Juttis are hand-stitched with vibrant threads and adorned with Zardozi patterns, ensuring a royal step for every occasion.
            </p>
            
            <a 
              href={waLink("Hello HOPE, I am looking for a unique pair of Juttis. What do you have available today?")}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-3 md:gap-4 text-[9px] md:text-[10px] font-sans uppercase tracking-[0.2em] text-white hover:text-hope-gold transition-colors duration-300"
            >
              <span className="border-b border-white/30 pb-1 group-hover/btn:border-hope-gold transition-colors">Concierge Inquire</span>
              <span className="text-lg md:text-xl group-hover/btn:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}