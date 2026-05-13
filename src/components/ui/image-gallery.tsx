
interface ImageGalleryProps {
  id?: string;
  title?: string;
  description?: string;
  images?: string[];
  className?: string;
}

export default function ImageGallery({ 
  id,
  title = "Our Latest Creations", 
  description = "A visual collection of our most recent works – each piece crafted with intention, emotion, and style.",
  images = [
    "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551218808-946224d50943?q=80&w=800&auto=format&fit=crop",
  ],
  className = ""
}: ImageGalleryProps) {
  return (
    <section id={id} className={`w-full flex flex-col items-center justify-start py-24 bg-white text-primary ${className}`}>
      <div className="max-w-3xl text-center px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">{title}</h2>
        <p className="text-lg text-primary/60 font-medium leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 h-auto md:h-[500px] w-full max-w-7xl px-6">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative group flex-grow transition-all w-full md:w-32 rounded-2xl overflow-hidden h-[300px] md:h-full duration-700 hover:md:w-[40%] shadow-2xl cursor-pointer"
          >
            <img
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              src={src}
              alt={`gallery-image-${idx}`}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
