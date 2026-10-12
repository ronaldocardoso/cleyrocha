import React from 'react';
import { motion } from 'framer-motion';

export default function EndocrinologiaIntegrada({ onOpenBooking }) {
  return (
    <section id="integrada" className="py-28 bg-[#f9f8f6] text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* Left: Lifestyle Photo with Badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src="/assets/lifestyle_sunrise.jpg"
              alt="Estilo de vida saudável e equilíbrio hormonal"
              className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Top Left Floating Badge */}
            <div className="absolute top-6 left-6 flex flex-col gap-0.5 bg-white/90 backdrop-blur-md px-5 py-3.5 rounded border border-gold-champagne/40 shadow-lg">
              <span className="text-[10px] tracking-[0.2em] font-bold text-slate-900">
                MAIS SAÚDE
              </span>
              <span className="text-[10px] tracking-[0.2em] font-bold text-slate-900">
                MAIS ENERGIA
              </span>
              <span className="text-[10px] tracking-[0.2em] font-bold text-slate-900">
                MAIS VOCÊ
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right: Editorial Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-lg"
        >
          <div className="flex items-center gap-3.5 mb-5">
            <span className="text-xs font-semibold tracking-[0.2em] text-gold-deep uppercase">
              ENDOCRINOLOGIA INTEGRADA
            </span>
            <span className="w-12 h-[1px] bg-gold-gradient inline-block" />
          </div>

          <h2 className="font-editorial text-[clamp(2.4rem,4vw,3.5rem)] font-normal leading-[1.15] text-slate-900 mb-6">
            Equilíbrio<br />
            para o seu amanhã
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 font-light">
            A endocrinologia vai além do tratamento de exames. É um acompanhamento completo, que considera você em sua totalidade: corpo, mente e rotina, para resultados duradouros e uma vida com mais disposição, saúde e bem-estar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
