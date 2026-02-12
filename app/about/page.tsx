import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-hope-midnight min-h-screen pt-32 pb-20 overflow-x-hidden">
      
      {/* SECTION 1: The Intro (Text Only, Very Clean) */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-32 animate-fade-in-up">
        <span className="text-hope-gold font-sans text-xs tracking-[0.4em] uppercase block mb-6">
          The Story
        </span>
        <h1 className="font-serif text-5xl md:text-8xl text-white leading-tight mb-8">
          From the Valleys of Kashmir <br className="hidden md:block" />
          <span className="italic text-stone-500">to the</span> <br className="hidden md:block" />
          Shores of Puerto Rico.
        </h1>
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>
      </div>

      {/* SECTION 2: The Craft (Split Screen) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* Image: The Close-up Texture */}
          <div className="w-full md:w-1/2 relative h-[60vh] md:h-[80vh] border-l border-white/10 pl-4 md:pl-8">
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="/pashmina-close-up.jpg" // Using the detail shot you uploaded
                alt="Hand-embroidered Pashmina Detail"
                fill
                unoptimized // Nuclear fix for sharpness
                className="object-cover hover:scale-105 transition-transform duration-[2000ms]"
              />
              {/* Caption */}
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-4 py-2">
                <p className="text-hope-gold text-[9px] tracking-[0.2em] uppercase">
                  Authentic Zardozi Work
                </p>
              </div>
            </div>
          </div>

          {/* Text: The Narrative */}
          <div className="w-full md:w-1/2">
            <h2 className="font-serif text-4xl text-white mb-8">
              The House of <br/><span className="italic text-hope-gold">Pashmina Empire</span>
            </h2>
            
            <div className="space-y-8 font-sans text-stone-300 text-sm md:text-base font-light leading-loose text-justify">
              <p>
                <strong className="text-white">HOPE</strong> is not just a boutique; it is a bridge between two rich cultures. We travel deep into the heart of India, handpicking items that carry the weight of royal heritage.
              </p>
              <p>
                Every Pashmina, every Anarkali, and every piece of jewelry is chosen for its singularity. We do not believe in mass production. We believe in the &quot;One of a Kind.&quot;
              </p>
              <p>
                When you wear HOPE, you are wearing a piece of art that was crafted by a master artisan in India, imported with care, and presented to you in Puerto Rico.
              </p>
            </div>

            <div className="mt-12">
              <Link href="/shop" className="text-white border-b border-white/30 pb-1 text-xs uppercase tracking-[0.3em] hover:text-hope-gold hover:border-hope-gold transition-all">
                View the Curated Pieces
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 3: The Philosophy (Centered Dark Box) */}
      <div className="relative py-32 bg-stone-900/50 border-y border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Image 
            src="/icon-star.svg" // We don't have this, so I'll use text instead
            alt="" 
            width={20} 
            height={20} 
            className="hidden" 
          />
          <h3 className="font-serif text-3xl md:text-5xl text-white mb-8">
            &quot;No two pieces are the same.&quot;
          </h3>
          <p className="font-sans text-stone-400 text-sm leading-relaxed max-w-xl mx-auto">
            Our promise to you is exclusivity. Once a design is sold, it is gone forever. 
            We ensure that your style remains as unique as you are.
          </p>
        </div>
      </div>

      {/* SECTION 4: Location / Contact */}
      <div className="max-w-5xl mx-auto px-6 mt-32 text-center">
        <h4 className="font-sans text-hope-gold text-xs tracking-[0.3em] uppercase mb-8">
          Visit Us
        </h4>
        <p className="font-serif text-2xl text-white mb-2">Carolina, Puerto Rico</p>
        <p className="font-sans text-stone-500 text-sm mb-10">By Appointment Only</p>
        
        <a 
          href="https://wa.me/17874639435?text=I%20would%20like%20to%20book%20an%20appointment%20to%20visit%20the%20HOPE%20showroom."
          className="inline-block bg-white text-black px-12 py-4 text-xs font-sans uppercase tracking-[0.2em] hover:bg-hope-gold transition-colors duration-500"
        >
          Book an Appointment
        </a>
      </div>

    </main>
  );
}