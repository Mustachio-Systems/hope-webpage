import Image from "next/image";

export default function SpecialOccasions() {
  
  const waLink = "https://wa.me/17874639435?text=Hello%20HOPE%2C%20I%20am%20looking%20for%20a%20handcrafted%20dress%20for%20a%20special%20occasion.%20Can%20you%20show%20me%20your%20current%20gala%20and%20wedding%20curation%3F";

  return (
    <section className="relative bg-hope-midnight py-32 overflow-hidden flex items-center min-h-[90vh]">
      
      {/* 1. ATMOSPHERE: Gold Dust Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-hope-gold/10 blur-[150px] rounded-full opacity-50 mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-hope-rose/10 blur-[150px] rounded-full opacity-40 mix-blend-screen" />
        {/* Grain Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* 2. THE CONTENT CARD (Glassmorphism Overlap) */}
          <div className="w-full md:w-1/2 z-20 md:-mr-24 mt-10 md:mt-0 order-2 md:order-1">
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-16 shadow-2xl relative overflow-hidden group">
              
              {/* Shine Effect on Card Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms]" />

              <span className="inline-block py-1 px-3 border border-hope-gold/50 rounded-full text-hope-gold text-[10px] tracking-[0.3em] uppercase mb-8 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                The Grand Finale
              </span>
              
              <h2 className="font-serif text-5xl md:text-7xl text-white mb-8 leading-[0.9]">
                Dressed for <br/> 
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-hope-gold via-[#FFF] to-hope-gold animate-shimmer bg-[length:200%_auto]">
                  Royalty
                </span>
              </h2>
              
              <div className="space-y-6 font-sans text-stone-300 text-sm md:text-base font-light leading-loose mb-12">
                <p>
                  For the weddings, the galas, and the moments that demand nothing less than perfection. Our special occasion curation features heavy Zardozi work and hand-woven silks.
                </p>
                <p className="border-l border-hope-gold/30 pl-4 italic text-stone-400">
                  &quot;Every gown is imported as a singular masterpiece. Unforgettable, Regal, and Yours.&quot;
                </p>
              </div>

              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 text-xs font-sans uppercase tracking-[0.2em] text-white group-hover:text-hope-gold transition-colors duration-300"
              >
                <span className="border-b border-white/30 pb-1 group-hover:border-hope-gold transition-colors">Consult Our Stylist</span>
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>

          {/* 3. THE SHOWSTOPPER IMAGE */}
          <div className="w-full md:w-[60%] relative h-[600px] md:h-[850px] order-1 md:order-2">
            <div className="relative w-full h-full overflow-hidden shadow-2xl border-r border-white/5">
              <Image 
                src="/gala-dress.png" 
                alt="Royal Special Occasion Dress"
                fill
                unoptimized
                className="object-cover transition-transform duration-[4000ms] hover:scale-105"
              />
              {/* Vignette for drama */}
              <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/20" />
            </div>
            
            {/* Floating 'One of a Kind' Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-12 md:-right-12 z-30">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-hope-gold/30 backdrop-blur-md bg-black/60 flex items-center justify-center animate-spin-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                  <path
                    id="curve"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="transparent"
                  />
                  <text className="text-[10px] fill-hope-gold uppercase tracking-widest font-sans">
                    <textPath href="#curve">
                      • Handcrafted • One of a Kind •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl text-white">✦</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}