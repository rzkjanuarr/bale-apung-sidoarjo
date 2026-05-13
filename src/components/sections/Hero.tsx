import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "../../constants/siteConfig";

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black text-center">
      {/* Background Image with 30% Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="../../../public/images/hero.jpg"
          alt={`${siteConfig.name} Background`}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-30 mb-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-4">
            <span className="hero__badge mb-1 inline-block">
              <span className="tracking-[0.25em] font-black uppercase text-[10px] sm:text-xs">{siteConfig.name}</span>
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.85] text-white drop-shadow-2xl tracking-tighter">
              {siteConfig.heroText.title.line1} <span className="text-secondary italic font-serif">{siteConfig.heroText.title.highlight}</span> <br className="hidden sm:block" /> {siteConfig.heroText.title.line2}
            </h1>
          </div>
          <p className="text-lg md:text-2xl text-white/90 mb-4 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-medium">
            {siteConfig.heroText.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="#menu"
              className="w-full sm:w-auto bg-primary text-white border-2 border-primary px-10 py-4 sm:px-12 sm:py-5 rounded-full font-black text-sm sm:text-lg hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-2 group shadow-2xl uppercase tracking-widest"
            >
              Lihat Menu <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20${siteConfig.subName}%2C%20saya%20ingin%20reservasi%20meja.`}
              target="_blank"
              className="w-full sm:w-auto border-2 border-white/40 text-white px-10 py-4 sm:px-12 sm:py-5 rounded-full font-bold text-sm sm:text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-md uppercase tracking-widest"
            >
              Reservasi Meja
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
