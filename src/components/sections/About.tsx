import { motion } from "motion/react";
import { Utensils, Waves, ArrowRight } from "lucide-react";
import { siteConfig } from "../../constants/siteConfig";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80" 
                alt={`${siteConfig.name} interior`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary rounded-3xl -z-0 hidden lg:block" />
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-primary leading-tight">
                {siteConfig.about.title}
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {siteConfig.about.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                {siteConfig.about.features.map((feature) => (
                  <div key={feature.id} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary shrink-0">
                      {feature.id === 1 ? <Utensils size={24} /> : <Waves size={24} />}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{feature.title}</h4>
                      <p className="text-slate-500 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-primary py-2 hover:gap-4 transition-all uppercase tracking-widest text-sm">
                Hubungi Kami <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
