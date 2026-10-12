import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TireoideFoco({ onOpenBooking }) {
  return (
    <section id="tireoide" className="py-28 bg-thyroid-radial border-y border-gold-champagne/15 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] items-center gap-16">
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-lg"
        >
          <div className="flex items-center gap-3.5 mb-5">
            <span className="text-xs font-semibold tracking-[0.2em] text-gold-champagne uppercase">
              TIREOIDE EM FOCO
            </span>
            <span className="w-12 h-[1px] bg-gold-gradient inline-block" />
          </div>

          <h2 className="font-editorial text-[clamp(2.4rem,4vw,3.5rem)] font-normal leading-[1.15] text-white mb-6">
            Pequena glândula.<br />
            Grande impacto.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-light">
            Alterações na tireoide podem afetar energia, peso, humor e muitos aspectos da sua saúde. O diagnóstico precoce e o tratamento adequado fazem toda a diferença.
          </p>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2.5 text-base font-semibold text-gold-champagne hover:text-white transition-all duration-300 group"
          >
            <span className="border-b border-gold-champagne/50 pb-0.5 group-hover:border-white">
              Saiba mais
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Right: Photographic Visual with glowing Thyroid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-card-dark group">
            <img
              src="/assets/thyroid_profile.jpg"
              alt="Perfil médico com iluminação da glândula tireoide"
              className="w-full h-auto aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Vertical Quote Badge */}
            <div className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] bg-obsidian/80 backdrop-blur-md px-3.5 py-6 border-l border-gold-champagne rounded-sm shadow-xl pointer-events-none select-none">
              <span className="text-[10px] tracking-[0.24em] font-semibold text-gold-champagne uppercase">
                UMA TIREOIDE SAUDÁVEL TRANSFORMA SUA ENERGIA, SEU HUMOR E SUA VIDA.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
