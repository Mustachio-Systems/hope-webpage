import Image from "next/image";
import Link from "next/link";

// This data makes it easy for you to update prices/text later
const collections = [
  {
    id: "pashminas",
    title: "The Pashmina Vault",
    description: "Authentic Kashmir wool. Hand-spun and hand-woven. Each piece features unique embroidery that tells a story of its artisan.",
    price: "From $120",
    image: "/hero-pashmina.jpg", // Using your high-quality hero image
    whatsappMsg: "Hello HOPE, I am interested in seeing your current Pashmina collection.",
  },
  {
    id: "apparel",
    title: "Heritage Apparel",
    description: "One-of-a-kind Silk and Georgette Anarkalis. Heavy Zardozi work suitable for galas, weddings, and royal events.",
    price: "From $250",
    image: "/feature-dress.jpg",
    whatsappMsg: "Hello HOPE, I am interested in your Heritage Apparel and Dresses.",
  },
  {
    id: "jewelry",
    title: "Antique Jewelry",
    description: "Gold-plated silver, uncut diamonds (Polki), and emeralds. These sets are curated from estate sales and artisan families.",
    price: "From $85",
    image: "/feature-jewelry.jpg",
    whatsappMsg: "Hello HOPE, I would like to see your available Antique Jewelry sets.",
  },
  {
    id: "jutti",
    title: "Royal Footwear (Jutti)",
    description: "Genuine leather handcrafted footwear. Comfortable, elegant, and the perfect finish to any ethnic ensemble.",
    price: "From $65",
    image: "/jutti.jpg",
    whatsappMsg: "Hello HOPE, do you have Juttis available in my size?",
  },
  {
    id: "accessories",
    title: "Clutches & Accessories",
    description: "Hand-embroidered velvet and silk clutches. The perfect companion for your evening wear.",
    price: "From $45",
    image: "/indian-wallet.jpg", // Make sure this file is in your public folder!
    whatsappMsg: "Hello HOPE, I am looking for a unique clutch or accessory.",
  },
];

export default function Shop() {
  return (
    <main className="bg-hope-midnight min-h-screen pt-32 pb-20">
      
      {/* Header */}
      <div className="text-center mb-24 px-4 animate-fade-in-up">
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">The Collection</h1>
        <p className="font-sans text-hope-gold text-xs md:text-sm tracking-[0.3em] uppercase max-w-2xl mx-auto leading-relaxed">
          Our inventory is fluid and unique. <br className="hidden md:block"/>
          We invite you to browse our categories and inquire directly for current availability.
        </p>
      </div>

      {/* Collection Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-24">
          
          {collections.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex flex-col md:flex-row gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative h-[500px] md:h-[600px] group overflow-hidden border border-white/5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized // Nuclear fix for sharpness
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
                {/* Price Tag Overlay */}
                <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-6 py-3 border border-hope-gold/30">
                  <span className="font-sans text-hope-gold text-xs tracking-widest uppercase">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                  {item.title}
                </h2>
                <div className={`h-px w-24 bg-hope-gold mb-8 mx-auto ${index % 2 === 1 ? "md:mr-0" : "md:ml-0"}`} />
                
                <p className="font-sans text-stone-400 text-sm md:text-base font-light leading-loose mb-10 max-w-md mx-auto md:mx-0">
                  {item.description}
                </p>

                {/* WhatsApp Action Button */}
                <a 
                  href={`https://wa.me/17874639435?text=${encodeURIComponent(item.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-white/30 px-10 py-4 text-xs font-sans uppercase tracking-[0.2em] text-white hover:bg-hope-gold hover:text-black hover:border-hope-gold transition-all duration-300"
                >
                  Inquire Availability
                </a>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center mt-32 border-t border-white/10 pt-16 max-w-2xl mx-auto px-4">
        <p className="font-serif text-2xl text-stone-500 italic mb-4">&quot;No two pieces are ever the same.&quot;</p>
        <p className="font-sans text-stone-600 text-xs tracking-widest uppercase">
          Visit our showroom in Carolina, PR for a private viewing.
        </p>
      </div>

    </main>
  );
}