import { motion } from "motion/react";
import { ShoppingBag, X, Utensils, Minus, Plus, ChevronRight } from "lucide-react";
import { CartItem } from "../../types";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  updateQuantity: (id: string, delta: number) => void;
  cartTotal: number;
  handleCheckout: () => void;
  isLoading: boolean;
}

export default function CartSidebar({
  isOpen,
  onClose,
  cart,
  updateQuantity,
  cartTotal,
  handleCheckout,
  isLoading
}: CartSidebarProps) {
  if (!isOpen) return null;

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
      />
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
      >
        <div className="p-8 border-b flex justify-between items-center bg-primary text-white">
          <div className="flex items-center gap-3">
            <ShoppingBag />
            <h2 className="text-2xl font-display font-bold">Pesanan Anda</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {cart.length === 0 ? (
            <div className="text-center py-20 opacity-40">
              <Utensils size={64} className="mx-auto mb-4" />
              <p className="text-lg font-medium">Keranjang masih kosong</p>
              <button 
                onClick={onClose}
                className="mt-4 text-primary font-bold hover:underline"
              >
                Mulai Pesan Sekarang
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 items-center">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-primary">{item.name}</h4>
                  <p className="text-sm text-slate-500">Rp {(item.price/1000).toFixed(0)}k / porsi</p>
                </div>
                <div className="flex items-center gap-3 bg-base-100 p-2 rounded-xl">
                  <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-accent"><Minus size={16} /></button>
                  <span className="font-bold w-6 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-accent"><Plus size={16} /></button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-8 border-t bg-base-100">
            <div className="flex justify-between items-center mb-6">
              <span className="text-slate-500 font-medium">Total Pembayaran</span>
              <span className="text-3xl font-display font-bold text-primary">Rp {(cartTotal/1000).toFixed(0)}k</span>
            </div>
            <button 
              onClick={handleCheckout}
              disabled={isLoading}
              className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {isLoading ? "Memproses..." : "Bayar via QRIS"} <ChevronRight size={20} />
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
}
