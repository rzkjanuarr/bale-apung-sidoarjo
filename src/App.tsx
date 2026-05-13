import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { CartItem, MenuItem } from "./types";
import { siteConfig } from "./constants/siteConfig";

// Components
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import About from "./components/sections/About";
import ImageGallery from "./components/ui/image-gallery";
import MenuSection from "./components/sections/MenuSection";
import Community from "./components/sections/Community";
import Contact from "./components/sections/Contact";
import FooterSection from "./components/sections/FooterSection";
import CartSidebar from "./components/sections/CartSidebar";
import CheckoutModal from "./components/sections/CheckoutModal";
import ClickSoundProvider from "./components/ClickSoundProvider";

// Utils
import confetti from "canvas-confetti";

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [qrisUrl, setQrisUrl] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => 
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(0, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      }).filter((item) => item.quantity > 0)
    );
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: cartTotal, items: cart }),
      });
      const data = await res.json();
      if (data.success) {
        setQrisUrl(data.qrCode);
        setIsCheckoutModalOpen(true);
        setIsCartOpen(false);
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } catch (error) {
      console.error("Checkout failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const cartCount = cart.reduce((a, b) => a + b.quantity, 0);

  return (
    <ClickSoundProvider>
      <div className="min-h-screen">
        {/* Scroll Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1.5 bg-secondary z-[100] origin-left shadow-[0_0_15px_rgba(234,179,8,0.5)]"
          style={{ scaleX }}
        />

        <Navbar 
          isScrolled={isScrolled}
          cartCount={cartCount}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          setIsCartOpen={setIsCartOpen}
        />

        <Hero />
        <Stats />
        <About />
        
        <ImageGallery 
          id="gallery"
          title={siteConfig.gallery.title}
          description={siteConfig.gallery.description}
          images={siteConfig.gallery.images}
        />

        <MenuSection onAddToCart={addToCart} />
        <Community />
        <Contact />
        <FooterSection />

        <AnimatePresence>
          {isCartOpen && (
            <CartSidebar 
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              cart={cart}
              updateQuantity={updateQuantity}
              cartTotal={cartTotal}
              handleCheckout={handleCheckout}
              isLoading={isLoading}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isCheckoutModalOpen && (
            <CheckoutModal 
              isOpen={isCheckoutModalOpen}
              onClose={() => setIsCheckoutModalOpen(false)}
              qrisUrl={qrisUrl}
              cartTotal={cartTotal}
              onConfirm={() => {
                setIsCheckoutModalOpen(false);
                setCart([]);
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </ClickSoundProvider>
  );
}
