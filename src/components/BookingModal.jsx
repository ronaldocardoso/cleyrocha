import React, { useEffect } from 'react';
import { X, MapPin, Video, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookingModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#121519] border border-gold-champagne/25 rounded-2xl p-8 sm:p-10 max-w-lg w-full relative z-10 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-slate-400 hover:text-gold-champagne transition-colors p-1"
              aria-label="Fechar janela"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-8">
              <span className="text-[11px] tracking-[0.2em] font-bold text-gold-champagne uppercase block mb-2">
                ATENDIMENTO EXCLUSIVO
              </span>
              <h3 className="font-editorial text-3xl font-semibold text-white mb-2">
                Agende sua consulta
              </h3>
              <p className="text-sm text-slate-300 font-light">
                Escolha o formato ideal para o seu atendimento com o Dr. Cley Rocha:
              </p>
            </div>

            <div className="flex flex-col gap-4 mb-6">
              {/* Presencial Option */}
              <a
                href="https://wa.me/5511982633335?text=Ol%C3%A1%2C%20Dr.%20Cley%20Rocha!%20Gostaria%20de%20agendar%20uma%20consulta%20presencial%20em%20S%C3%A3o%20Paulo."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/[0.03] border border-gold-champagne/15 hover:border-gold-champagne/60 hover:bg-gold-champagne/10 p-5 rounded-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-gold-primary/10 flex items-center justify-center text-gold-champagne shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-white font-medium text-base mb-1">
                    Consulta Presencial
                  </h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Consultório em São Paulo — SP. Avaliação clínica completa e exame físico minucioso.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gold-champagne transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
              </a>

              {/* Online Option */}
              <a
                href="https://wa.me/5511982633335?text=Ol%C3%A1%2C%20Dr.%20Cley%20Rocha!%20Gostaria%20de%20agendar%20uma%20consulta%20online%20(Telemedicina)."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/[0.03] border border-gold-champagne/15 hover:border-gold-champagne/60 hover:bg-gold-champagne/10 p-5 rounded-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-gold-primary/10 flex items-center justify-center text-gold-champagne shrink-0">
                  <Video className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-white font-medium text-base mb-1">
                    Telemedicina (Online)
                  </h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Atendimento por videoconferência com emissão de receitas e pedidos digitais para todo o Brasil.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gold-champagne transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
              </a>
            </div>

            <p className="text-center text-xs text-slate-500">
              Você será direcionado diretamente para a equipe de atendimento via WhatsApp.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
