import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-hope-midnight border-t border-white/10 pt-20 pb-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-serif text-white tracking-widest mb-6">HOPE</h2>
            <p className="text-stone-400 font-sans text-sm leading-relaxed max-w-xs">
              House of Pashmina Empire.<br/>
              Bringing the authentic royal heritage of India to the heart of Puerto Rico.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-hope-gold font-sans text-xs uppercase tracking-[0.2em] mb-6">Collection</h3>
            <ul className="space-y-4">
              <li><Link href="/shop" className="text-stone-400 hover:text-white font-sans text-sm transition-colors">All Products</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-hope-gold font-sans text-xs uppercase tracking-[0.2em] mb-6">Concierge</h3>
            <ul className="space-y-4">
              <li className="text-stone-400 font-sans text-sm">WhatsApp: +1 (787) 463-9435</li>
              <li className="text-stone-400 font-sans text-sm">Carolina, Puerto Rico</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-600 font-sans text-xs uppercase tracking-widest">© 2026 HOPE. All rights reserved.</p>
          <p className="text-stone-600 font-sans text-xs uppercase tracking-widest mt-4 md:mt-0">Designed by Mustachio Systems</p>
        </div>
      </div>
    </footer>
  );
}