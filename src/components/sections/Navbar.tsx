import { motion, AnimatePresence } from "motion/react";
import { ChefHat, ShoppingBag, Menu as MenuIcon, X } from "lucide-react";
import { siteConfig } from "../../constants/siteConfig";

interface NavbarProps {
  isScrolled: boolean;
  cartCount: number;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  setIsCartOpen: (isOpen: boolean) => void;
}

export default function Navbar({
  isScrolled,
  cartCount,
  isMenuOpen,
  setIsMenuOpen,
  setIsCartOpen
}: NavbarProps) {
  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-4 sm:px-6 flex items-center">
          {/* Logo Section - Left */}
          <div className="flex-1 flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center text-secondary shrink-0 overflow-hidden">
              {siteConfig.logo ? (
                <img src={siteConfig.logo} alt={siteConfig.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              ) : (
                <ChefHat size={20} className="sm:w-6 sm:h-6" />
              )}
            </div>
            <span className={`text-sm sm:text-xl font-display font-bold ${isScrolled ? "text-primary" : "text-white"}`}>{siteConfig.subName}</span>
          </div>

          {/* Navigation Links - Center */}
          <div className={`hidden lg:flex items-center gap-10 font-bold uppercase tracking-widest text-[11px] ${isScrolled ? "text-primary" : "text-white"}`}>
            {siteConfig.quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group py-1"
              >
                <span className="hover:text-accent transition-all duration-300">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </a>
            ))}
          </div>

          {/* Actions Section - Right */}
          <div className="flex-1 flex items-center justify-end gap-2 sm:gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className={`relative p-2 rounded-full transition-colors ${isScrolled ? "hover:bg-black/5 text-primary" : "hover:bg-white/10 text-white"}`}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-lg">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className={`lg:hidden p-2 ${isScrolled ? "text-primary" : "text-white"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-display">
              {siteConfig.quickLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)}>{link.name}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
