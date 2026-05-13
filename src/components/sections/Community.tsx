import { motion } from "motion/react";
import { TestimonialsColumn } from "../ui/testimonials-columns-1";
import { siteConfig } from "../../constants/siteConfig";

export default function Community() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4 uppercase tracking-widest">
            Ulasan Pelanggan
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
            Apa Kata Mereka?
          </h2>
          <p className="text-slate-600 mt-6 text-lg">
            Pengalaman nyata dari pelanggan setia {siteConfig.subName}.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 sm:gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn 
            testimonials={siteConfig.testimonials.slice(0, 3)} 
            duration={20} 
          />
          <TestimonialsColumn 
            testimonials={siteConfig.testimonials.slice(3, 6)} 
            duration={25} 
          />
          <TestimonialsColumn 
            testimonials={siteConfig.testimonials.slice(6, 9)} 
            className="hidden lg:block" 
            duration={22} 
          />
        </div>
      </div>
    </section>
  );
}
