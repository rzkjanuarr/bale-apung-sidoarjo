import { motion } from "motion/react";
import { siteConfig } from "../../constants/siteConfig";

export default function Stats() {
  const stats = [
    { label: "Pengalaman", val: siteConfig.stats.experience, suffix: "Tahun" },
    { label: "Rating Google", val: siteConfig.stats.rating.toString(), suffix: "/5.0" },
    { label: "Pilihan Menu", val: siteConfig.stats.menuItems, suffix: "Item" },
    { label: "Pengunjung", val: siteConfig.stats.reviewsCount, suffix: "Makan" },
  ];

  return (
    <section className="bg-primary py-12 text-white overflow-hidden relative z-40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-display font-bold text-white mb-1">{stat.val}</p>
              <p className="text-sm uppercase tracking-widest opacity-70 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
