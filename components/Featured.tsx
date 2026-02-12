import Image from "next/image";
import Link from "next/link";

export default function Featured() {
  return (
    <section className="bg-hope-midnight relative z-10">
      
      {/* MOBILE STRATEGY: 
         - Height is h-[80dvh] (slightly shorter than full screen so you can see the next item peeking through)
         - Text is ALWAYS visible (opacity-100)
         - Gradient is always dark
      */}

      {/* --- SECTION 1: APPAREL --- */}
      <div className="relative w-full h-[80dvh] md:h-[100dvh] overflow-hidden group cursor-pointer">
        <Link href="/shop/dresses">
          <div className="absolute inset-0 transition-transform duration-[2000ms] group-hover:scale-105">
            <Image 
              src="/feature-dress.jpg" 
              alt="Royal Indian Anarkali Dress"
              fill
              unoptimized
              priority
              className="object-cover object-center md:object-top"
            />
          </div>
          
          {/* Gradient: Darker on mobile for readability */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-transparent to-transparent md:from-black/10 md:via-black/50 md:to-hope-midnight" />
          
          {/* Content Container */}
          <div className="absolute inset-0 flex items-end md:items-center justify-center md:justify-end px-6 pb-12 md:px-20 md:pb-0">
            <div className="max-w-xl text-center md:text-right transform translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-700">
              
              <span className="inline-block py-1 px-3 border border-hope-gold/30 rounded-full text-hope-gold text-[8px] md:text-[10px] tracking-[0.3em] uppercase mb-4 md:mb-6 backdrop-blur-md">
                The Apparel Collection
              </span>
              
              <h2 className="font-serif text-4xl md:text-8xl text-white mb-4 md:mb-6 leading-none drop-shadow-xl">
                The Silk <br className="hidden md:block"/><span className="italic text-hope-gold">Route</span>
              </h2>
              
              {/* Description: Hidden on very small phones, visible on foldables/desktop */}
              <p className="hidden sm:block font-sans text-stone-300 text-xs md:text-lg font-light leading-relaxed mb-6 md:mb-8 pl-0 md:pl-0 opacity-90 md:opacity-80 md:group-hover:opacity-100 transition-opacity duration-500">
                Flowing silhouettes and intricate embroidery inspired by the royal courts of India. Each piece is a solitary masterpiece.
              </p>
              
              <div className="inline-block border-b border-white pb-1 text-[10px] md:text-xs text-white uppercase tracking-[0.3em] group-hover:border-hope-gold group-hover:text-hope-gold transition-colors duration-300">
                View Dresses
              </div>
            </div>
          </div>
        </Link>
      </div>


      {/* --- SECTION 2: JEWELRY --- */}
      <div className="relative w-full h-[80dvh] md:h-[100dvh] overflow-hidden group cursor-pointer">
        <Link href="/shop/jewelry">
          <div className="absolute inset-0 transition-transform duration-[2000ms] group-hover:scale-105">
            <Image 
              src="/feature-jewelry.jpg" 
              alt="Antique Indian Jewelry"
              fill
              unoptimized
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/60 via-transparent to-transparent md:from-black/10 md:via-black/50 md:to-hope-midnight" />

          <div className="absolute inset-0 flex items-end md:items-center justify-center md:justify-start px-6 pb-12 md:px-20 md:pb-0">
            <div className="max-w-xl text-center md:text-left transform translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-700">
              <span className="inline-block py-1 px-3 border border-hope-gold/30 rounded-full text-hope-gold text-[8px] md:text-[10px] tracking-[0.3em] uppercase mb-4 md:mb-6 backdrop-blur-md">
                Adornments & Gems
              </span>
              <h2 className="font-serif text-4xl md:text-8xl text-white mb-4 md:mb-6 leading-none drop-shadow-xl">
                Antique <br className="hidden md:block"/><span className="italic text-hope-gold">Heritage</span>
              </h2>
              <p className="hidden sm:block font-sans text-stone-300 text-xs md:text-lg font-light leading-relaxed mb-6 md:mb-8 pr-0 md:pr-0 opacity-90 md:opacity-80 md:group-hover:opacity-100 transition-opacity duration-500">
                Rare, handcrafted jewels that carry the legacy of generations. Gold, emeralds, and uncut diamonds perfected by master artisans.
              </p>
              <div className="inline-block border-b border-white pb-1 text-[10px] md:text-xs text-white uppercase tracking-[0.3em] group-hover:border-hope-gold group-hover:text-hope-gold transition-colors duration-300">
                View Jewelry
              </div>
            </div>
          </div>
        </Link>
      </div>


      {/* --- SECTION 3: JUTTI --- */}
      <div className="relative w-full h-[80dvh] md:h-[100dvh] overflow-hidden group cursor-pointer">
        <Link href="/shop/jutti">
          <div className="absolute inset-0 transition-transform duration-[2000ms] group-hover:scale-105">
            <Image 
              src="/jutti.jpg" 
              alt="Handcrafted Indian Jutti"
              fill
              unoptimized
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-transparent to-transparent md:from-black/10 md:via-black/50 md:to-hope-midnight" />

          <div className="absolute inset-0 flex items-end md:items-center justify-center md:justify-end px-6 pb-12 md:px-20 md:pb-0">
            <div className="max-w-xl text-center md:text-right transform translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-700">
              <span className="inline-block py-1 px-3 border border-hope-gold/30 rounded-full text-hope-gold text-[8px] md:text-[10px] tracking-[0.3em] uppercase mb-4 md:mb-6 backdrop-blur-md">
                The Footwear Edit
              </span>
              <h2 className="font-serif text-4xl md:text-8xl text-white mb-4 md:mb-6 leading-none drop-shadow-xl">
                Royal <br className="hidden md:block"/><span className="italic text-hope-gold">Steps</span>
              </h2>
              <p className="hidden sm:block font-sans text-stone-300 text-xs md:text-lg font-light leading-relaxed mb-6 md:mb-8 pl-0 md:pl-0 opacity-90 md:opacity-80 md:group-hover:opacity-100 transition-opacity duration-500">
                Step into tradition with authentic leather Juttis. Hand-stitched, adorned with Zardozi, and designed for regal comfort.
              </p>
              <div className="inline-block border-b border-white pb-1 text-[10px] md:text-xs text-white uppercase tracking-[0.3em] group-hover:border-hope-gold group-hover:text-hope-gold transition-colors duration-300">
                View Footwear
              </div>
            </div>
          </div>
        </Link>
      </div>

    </section>
  );
}