import { motion } from "motion/react";
import { X, QrCode } from "lucide-react";
import confetti from "canvas-confetti";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  qrisUrl: string | null;
  cartTotal: number;
  onConfirm: () => void;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  qrisUrl,
  cartTotal,
  onConfirm
}: CheckoutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-8 sm:p-12">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-primary/95 backdrop-blur-xl"
      />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative bg-white w-full max-w-md rounded-[3rem] shadow-2xl overflow-hidden flex flex-col items-center p-8 sm:p-16 text-center my-auto"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 sm:top-10 sm:right-10 p-2 hover:bg-black/5 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        
        <div className="w-full flex flex-col items-center">
          <div className="w-16 h-16 bg-secondary/20 text-primary rounded-2xl flex items-center justify-center mb-8 shrink-0">
            <QrCode size={32} />
          </div>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">Scan untuk Bayar</h3>
          <p className="text-slate-500 font-medium mb-12">Total: <span className="text-2xl font-bold text-primary ml-1 font-display">Rp {(cartTotal/1000).toFixed(0)}.000</span></p>
        </div>

        <div className="w-full flex justify-center mb-12 relative">
          <div className="bg-slate-50 p-6 sm:p-12 rounded-[3rem] relative w-full max-w-[340px] aspect-square flex items-center justify-center shadow-inner border border-slate-100">
            {qrisUrl && (
              <img 
                src={qrisUrl} 
                alt="QRIS Code" 
                className="w-full h-full object-contain rounded-xl shadow-sm border-4 border-white" 
                referrerPolicy="no-referrer"
              />
            )}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-primary text-white px-10 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.25em] flex items-center gap-2 shadow-2xl whitespace-nowrap">
              <QrCode size={14} /> GPN QRIS
            </div>
          </div>
        </div>

        <div className="max-w-[300px] mx-auto mb-12">
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
            Buka aplikasi e-wallet (Gopay, OVO, Dana) atau Mobile Banking Anda untuk memindai kode di atas secara instan.
          </p>
        </div>

        <button 
          onClick={() => {
            onConfirm();
            confetti({
              particleCount: 150,
              spread: 70,
              origin: { y: 0.6 }
            });
          }}
          className="w-full bg-primary py-6 rounded-[2rem] font-black text-white hover:bg-primary/90 transition-all duration-300 uppercase tracking-widest text-sm shadow-xl shadow-primary/20"
        >
          Konfirmasi Pembayaran
        </button>
      </motion.div>
    </div>
  );
}
