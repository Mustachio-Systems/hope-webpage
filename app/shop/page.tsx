import Image from "next/image";
import Link from "next/link";

const curations = [
  {
    id: "pashminas",
    title: "The Pashmina Vault",
    subtitle: "Hand-spun Wool & Authentic Zardozi",
    description: "Our signature offering. Because each piece is hand-woven by master artisans, the intricate patterns you receive are entirely unique to you. An heirloom to be passed down.",
    price: "From $120",
    image: "/hero-pashmina.jpg",
    whatsappMsg: "Hello HOPE, I'd like to see the current unique Pashminas you have in stock.",
  },
  {
    id: "apparel",
    title: "Heritage Apparel",
    subtitle: "Silk & Georgette Anarkalis",
    description: "Handcrafted for special occasions. We carry a rotating selection of deep jewel tones and intricate gold-work designs. No two silhouettes are ever identical.",
    price: "From $250",
    image: "/feature-dress.jpg",
    whatsappMsg: "Hello HOPE, please send me photos of the dresses/apparel currently available in my size.",
  },
  {
    id: "jewelry",
    title: "Antique Adornments",
    subtitle: "Uncut Diamonds & Estate Pieces",
    description: "We source rare gold-plated silver and uncut diamonds (Polki). Curated from estate collections and master families, ensuring your set is a singular masterpiece.",
    price: "From $85",
    image: "/feature-jewelry.jpg",
    whatsappMsg: "Hello HOPE, I'm interested in seeing your current jewelry sets.",
  },
  {
    id: "jutti",
    title: "Artisanal Juttis",
    subtitle: "Hand-Stitched Leather Footwear",
    description: "Traditional craft meets contemporary comfort. Every pair features different embroidery patterns and color palettes. The perfect finish to a royal ensemble.",
    price: "From $65",
    image: "/jutti.jpg",
    whatsappMsg: "Hello HOPE, what Jutti designs and sizes do you have on hand today?",
  },
  {
    id: "accessories",
    title: "Bespoke Clutches",
    subtitle: "Hand-Embroidered Velvet",
    description: "The final royal touch. Intricate wirework on velvet and silk bases. Our stock of evening accessories changes weekly based on artisanal availability.",
    price: "From $45",
    image: "/indian-wallet.jpg",
    whatsappMsg: "Hello HOPE, I'd like to see the unique clutches you currently have available.",
  },
];

export default function Shop() {
  return (
    <main className="bg-hope-midnight min-h-screen pt-32 pb-20 relative overflow-hidden">
      
      {/* --- GLOBAL ATMOSPHERE --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-hope-gold/5 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-hope-rose/5 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* --- HEADER (Cinematic) --- */}
      <div className="text-center mb-32 px-4 relative z-10 animate-fade-in-up mt-10">
        <span className="inline-block py-1 px-4 border border-hope-gold/30 rounded-full text-hope-gold text-[10px] tracking-[0.4em] uppercase mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]">
          The Private Collection
        </span>
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 drop-shadow-2xl">
          Our <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-hope-gold via-[#FFF] to-hope-gold">Curation</span>
        </h1>
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-hope-gold/50 to-transparent mx-auto mb-8" />
        <p className="font-sans text-stone-300 text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase max-w-2xl mx-auto leading-relaxed font-light">
          We do not keep a static catalog. <br className="hidden md:block"/>
          Because every item is handcrafted, our inventory is constantly evolving. 
          Inquire below for the current selection in Puerto Rico.
        </p>
      </div>

      {/* --- CURATION LIST (Overlapping Layout) --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-32 md:gap-40"> {/* Huge gaps for breathing room */}
          
          {curations.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={item.id} 
                id={item.id}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center scroll-mt-40`}
              >
                
                {/* Image Side (The Canvas) */}
                <div className="w-full md:w-[65%] relative h-[500px] md:h-[700px] group perspective-1000 z-10">
                  <div className={`absolute inset-0 border border-hope-gold/20 -m-4 ${isEven ? '-translate-x-4 -translate-y-4' : 'translate-x-4 -translate-y-4'} hidden md:block transition-transform duration-700 group-hover:translate-x-0 group-hover:translate-y-0`} />
                  
                  <div className="relative w-full h-full overflow-hidden shadow-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-[4000ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000" />
                    
                    {/* Floating Price Tag */}
                    <div className={`absolute top-8 ${isEven ? 'right-8' : 'left-8'} bg-black/60 backdrop-blur-md px-6 py-3 border border-hope-gold/30 shadow-lg`}>
                      <span className="font-sans text-hope-gold text-[10px] tracking-widest uppercase">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text Side (The Glass Card overlapping the image) */}
                <div className={`w-full md:w-[45%] z-20 ${isEven ? 'md:-ml-24' : 'md:-mr-24'} -mt-16 md:mt-0`}>
                  <div className="bg-black/60 backdrop-blur-2xl border border-white/10 p-8 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group/card">
                    
                    {/* Hover Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-[1500ms]" />

                    <h4 className="font-sans text-hope-gold text-[9px] tracking-[0.3em] uppercase mb-4">
                      {item.subtitle}
                    </h4>
                    
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                      {item.title}
                    </h2>
                    
                    <div className="h-px w-16 bg-hope-gold/50 mb-6" />
                    
                    <p className="font-sans text-stone-300 text-sm md:text-base font-light leading-relaxed mb-10 text-justify relative z-10">
                      {item.description}
                    </p>

                    <a 
                      href={`https://wa.me/17874639435?text=${encodeURIComponent(item.whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-4 text-[10px] md:text-xs font-sans uppercase tracking-[0.2em] text-white hover:text-hope-gold transition-colors duration-300 relative z-10"
                    >
                      <span className="border-b border-white/30 pb-1 group-hover/btn:border-hope-gold transition-colors">Request Current Photos</span>
                      <span className="text-xl group-hover/btn:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </div>

      {/* --- FOOTER NOTE --- */}
      <div className="text-center mt-40 border-t border-white/10 pt-20 max-w-2xl mx-auto px-4 relative z-10">
        <Image src="/icon.png" alt="HOPE" width={40} height={40} className="mx-auto mb-8 opacity-50" unoptimized />
        <p className="font-serif text-3xl text-white italic mb-4">&quot;Exclusivity is the true luxury.&quot;</p>
        <p className="font-sans text-stone-500 text-xs tracking-[0.3em] uppercase">
          Once a piece is claimed, it is never remade.
        </p>
      </div>

    </main>
  );
}