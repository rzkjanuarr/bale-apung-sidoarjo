import { ChefHat, Facebook, Instagram, MessageCircle, Mail, Bike, ShoppingBag } from "lucide-react";
import { siteConfig } from "../../constants/siteConfig";

export default function FooterSection() {
  return (
    <footer className="bg-primary pt-16 sm:pt-24 pb-12 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16 md:mb-20">
          <div className="col-span-2 flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-primary overflow-hidden">
                {siteConfig.logo ? (
                  <img src={siteConfig.logo} alt={siteConfig.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                ) : (
                  <ChefHat size={24} className="sm:w-7 sm:h-7" />
                )}
              </div>
              <span className="text-xl sm:text-2xl font-display font-bold">{siteConfig.name}</span>
            </div>
            <p className="text-sm sm:text-lg opacity-60 max-w-sm mb-10 leading-relaxed font-medium">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.socialMedia.facebook} target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Facebook size={20} />
              </a>
              <a href={siteConfig.socialMedia.instagram} target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Instagram size={20} />
              </a>
              <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <MessageCircle size={20} />
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Mail size={20} />
              </a>
              <a href={siteConfig.socialMedia.gojek} target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all" title="Gojek">
                <Bike size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1 text-center sm:text-left">
            <h4 className="font-bold text-base sm:text-xl mb-6 sm:mb-8 tracking-tight">Navigasi</h4>
            <ul className="space-y-3 sm:space-y-4 opacity-70 text-sm sm:text-base">
              {siteConfig.quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="relative group inline-block py-0.5">
                    <span className="group-hover:opacity-100 transition-opacity">{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 text-center sm:text-left">
            <h4 className="font-bold text-base sm:text-xl mb-6 sm:mb-8 tracking-tight">Legal</h4>
            <ul className="space-y-3 sm:space-y-4 opacity-70 text-sm sm:text-base">
              {siteConfig.legalLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="relative group inline-block py-0.5 whitespace-nowrap">
                    <span className="group-hover:opacity-100 transition-opacity">{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SEO Tags Section */}
        <div className="border-t border-white/5 py-12">
          <h5 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-white/80 mb-6 text-center">Tags & SEO Keywords</h5>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[9px] sm:text-[10px] text-white/60 font-medium text-center max-w-4xl mx-auto leading-relaxed uppercase tracking-widest">
            {siteConfig.footerTags.map((tag, idx) => (
              <span key={idx}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-center text-[10px] sm:text-sm opacity-40">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
