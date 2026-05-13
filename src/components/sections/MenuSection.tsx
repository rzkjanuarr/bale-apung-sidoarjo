import InteractiveBentoGallery from "../ui/interactive-bento-gallery";
import { siteConfig } from "../../constants/siteConfig";
import { MenuItem } from "../../types";

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export default function MenuSection({ onAddToCart }: MenuSectionProps) {
  return (
    <section id="menu" className="py-24 bg-base-100">
      <div className="container-fluid px-6">
        <InteractiveBentoGallery 
          title="Pilihan Hidangan Kami"
          description="Seret dan jelajahi koleksi menu favorit Bale Apung"
          onAddToCart={onAddToCart}
          mediaItems={siteConfig.menu.map((item, idx) => ({
            id: idx + 1,
            type: "image",
            title: item.name,
            desc: `Rp ${item.price.toLocaleString()} - ${item.category}`,
            url: item.image,
            span: idx % 10 === 0 || idx % 10 === 5 ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1",
            originalItem: item
          }))}
        />
        
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm italic">* Harga sewaktu-waktu dapat berubah tanpa pemberitahuan</p>
        </div>
      </div>
    </section>
  );
}
