import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CtaBanner({ onOpenBooking }) {
  return (
    <section id="contato" className="py-24 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-cta-radial border border-gold-champagne/20 rounded-2xl p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* Tag */}
          <div className="flex items-center gap-3.5 mb-8">
            <span className="text-xs font-semibold tracking-[0.2em] text-gold-champagne uppercase">
              PRÓXIMO PASSO
            </span>
            <span className="w-12 h-[1px] bg-gold-gradient inline-block" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_auto] items-center gap-10 lg:gap-14">
            {/* Title */}
            <div>
              <h2 className="font-editorial text-[clamp(2.4rem,4.2vw,3.8rem)] font-normal leading-[1.12] text-white">
                Vamos cuidar da<br />
                sua saúde?
              </h2>
            </div>

            {/* Description & Action */}
            <div>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-7 font-light">
                Agende sua consulta e receba um plano de cuidado personalizado, com base na ciência e no que realmente importa: você.
              </p>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gold-gradient text-obsidian font-semibold text-sm tracking-wide shadow-gold-glow hover:shadow-lg hover:shadow-gold-primary/30 transform hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span>Agendar consulta</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Vertical Badge */}
            <div className="hidden lg:flex border-l border-gold-champagne/30 pl-6 select-none pointer-events-none">
              <div className="flex flex-col gap-1 text-[11px] tracking-[0.22em] font-bold text-gold-champagne uppercase">
                <span>MAIS</span>
                <span>QUE</span>
                <span>HORMÔNIOS,</span>
                <span>PESSOAS.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
