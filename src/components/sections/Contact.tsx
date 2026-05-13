import { MapPin, Phone, Clock } from "lucide-react";
import { siteConfig } from "../../constants/siteConfig";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-base-100">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2 border border-slate-100">
          <div className="p-6 sm:p-12 md:p-20">
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-primary mb-8 md:mb-12">Kunjungi Kami</h2>
            
            <div className="space-y-6 md:space-y-10">
              <div className="flex gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-lg mb-1 md:mb-2">Alamat</h4>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">{siteConfig.contact.address}</p>
                </div>
              </div>

              <div className="flex gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-lg mb-1 md:mb-2">Telepon / WhatsApp</h4>
                  <p className="text-slate-600 text-xs md:text-base">{siteConfig.contact.phone}</p>
                </div>
              </div>

              <div className="flex gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Clock size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-lg mb-1 md:mb-2">Jam Operasional</h4>
                  <p className="text-slate-600 text-xs md:text-base">{siteConfig.contact.openingHours}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 md:mt-16">
              <a 
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20${siteConfig.subName}%2C%20saya%20ingin%20reservasi%20meja.`}
                target="_blank"
                className="bg-primary text-white px-6 md:px-10 py-3 md:py-5 rounded-full font-bold text-xs md:text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 md:gap-3 w-full"
              >
                <Phone size={16} className="md:w-5 md:h-5" /> <span className="hidden sm:inline">Chat via</span> WhatsApp
              </a>
            </div>
          </div>

          <div className="h-full border-l border-slate-100 grayscale hover:grayscale-0 transition-all duration-1000 min-h-[400px]">
            <iframe 
              src={siteConfig.contact.googleMapsEmbed} 
              className="w-full h-full"
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
