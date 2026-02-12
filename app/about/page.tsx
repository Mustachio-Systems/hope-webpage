import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-hope-midnight min-h-screen pt-32 pb-20 overflow-x-hidden relative">
      
      {/* --- GLOBAL ATMOSPHERE --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-hope-gold/5 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-hope-rose/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* --- SECTION 1: The Intro (Editorial Typography) --- */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-40 relative z-10 animate-fade-in-up mt-10">
        <span className="inline-block py-1 px-4 border border-hope-gold/30 rounded-full text-hope-gold text-[10px] tracking-[0.4em] uppercase mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]">
          The Story
        </span>
        <h1 className="font-serif text-5xl md:text-[5.5rem] text-white leading-[1.1] mb-12 drop-shadow-2xl">
          From the Valleys of <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-hope-gold via-[#FFF] to-hope-gold">Kashmir</span> <br className="hidden md:block" />
          <span className="font-light text-stone-400 text-4xl md:text-6xl">to the</span> <br className="hidden md:block" />
          Shores of Puerto Rico.
        </h1>
        <div className="h-px w-40 bg-gradient-to-r from-transparent via-hope-gold/50 to-transparent mx-auto" />
      </div>

      {/* --- SECTION 2: The Craft (Glassmorphism Overlap) --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Image: The Close-up Texture */}
          <div className="w-full md:w-[60%] relative h-[60vh] md:h-[80vh] z-10 group perspective-1000">
            {/* Museum Frame Effect */}
            <div className="absolute inset-0 border border-hope-gold/20 -m-4 -translate-x-4 -translate-y-4 hidden md:block transition-transform duration-700 group-hover:-translate-x-6 group-hover:-translate-y-6" />
            
            <div className="relative w-full h-full overflow-hidden shadow-2xl">
              <Image 
                src="/pashmina-close-up.jpg" 
                alt="Hand-embroidered Pashmina Detail"
                fill
                unoptimized 
                className="object-cover hover:scale-105 transition-transform duration-[3000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Text: The Narrative (Overlapping Glass Card) */}
          <div className="w-full md:w-[50%] z-20 md:-ml-24 mt-10 md:mt-0">
            <div className="bg-black/60 backdrop-blur-2xl border border-white/10 p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
              
              {/* Card Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms]" />

              <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-snug">
                The House of <br/>
                <span className="italic text-hope-gold">Pashmina Empire</span>
              </h2>
              
              <div className="space-y-6 font-sans text-stone-300 text-sm md:text-base font-light leading-loose text-justify relative z-10">
                <p>
                  <strong className="text-white font-medium tracking-widest">HOPE</strong> is not just a boutique; it is a bridge between two rich cultures. We travel deep into the heart of India, handpicking items that carry the weight of royal heritage.
                </p>
                <p>
                  Every Pashmina, every Anarkali, and every piece of jewelry is chosen for its singularity. We do not believe in mass production. We believe in the <span className="italic text-white">&quot;One of a Kind.&quot;</span>
                </p>
                <p>
                  When you wear HOPE, you are wearing a piece of art that was crafted by a master artisan in India, imported with care, and presented to you in Puerto Rico.
                </p>
              </div>

              <div className="mt-12">
                <Link href="/shop" className="inline-flex items-center gap-4 text-xs font-sans uppercase tracking-[0.3em] text-white hover:text-hope-gold transition-colors duration-300 group/btn">
                  <span className="border-b border-white/30 pb-1 group-hover/btn:border-hope-gold transition-colors">View the Curation</span>
                  <span className="text-xl group-hover/btn:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- SECTION 3: The Philosophy (Cinematic Quote) --- */}
      <div className="relative py-40 my-20 border-y border-white/5 overflow-hidden flex items-center justify-center min-h-[50vh]">
        {/* Spotlight Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
        
        {/* Giant Watermark Quote */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <span className="font-serif text-[20rem] text-white leading-none">&quot;</span>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h3 className="font-serif text-4xl md:text-6xl text-white mb-10 leading-tight">
            &quot;No two pieces are <br className="hidden md:block"/> <span className="italic text-hope-gold">ever the same.</span>&quot;
          </h3>
          <p className="font-sans text-stone-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Our promise to you is absolute exclusivity. Once a design is claimed, it is gone forever. 
            We ensure that your style remains as unique as you are.
          </p>
        </div>
      </div>

      {/* --- SECTION 4: Location / Contact (Concierge Style) --- */}
      <div className="max-w-3xl mx-auto px-6 mt-32 text-center relative z-10 mb-20">
        <div className="w-12 h-12 mx-auto mb-8 relative opacity-80">
          <Image src="/icon.png" alt="HOPE Emblem" fill unoptimized className="object-contain" />
        </div>
        
        <h4 className="font-sans text-hope-gold text-[10px] tracking-[0.4em] uppercase mb-4">
          The Showroom
        </h4>
        <p className="font-serif text-3xl text-white mb-2">Carolina, Puerto Rico</p>
        <p className="font-sans text-stone-500 text-xs tracking-widest uppercase mb-12">Private Viewings By Appointment Only</p>
        
        <a 
          href="https://wa.me/17874639435?text=I%20would%20like%20to%20book%20an%20appointment%20to%20visit%20the%20HOPE%20showroom."
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-white text-black px-12 py-5 text-xs font-sans uppercase tracking-[0.2em] hover:bg-hope-gold transition-colors duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
        >
          <span>Book an Appointment</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>

    </main>
  );
}