import React from 'react';
import { motion } from 'framer-motion';

export default function AreasAtuacao() {
  const areas = [
    {
      title: 'Tireoide',
      desc: 'Diagnóstico e tratamento de distúrbios da tireoide, com acompanhamento contínuo e individualizado.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M18 16C12 24 10 36 16 46C20 52 26 54 30 46C31.5 43 32 38 32 34C32 38 32.5 43 34 46C38 54 44 52 48 46C54 36 52 24 46 16C42 12 36 18 32 24C28 18 22 12 18 16Z" stroke="url(#goldGrad)" />
          <path d="M28 32C24 35 20 40 22 45" stroke="url(#goldGrad)" strokeLinecap="round" />
          <path d="M36 32C40 35 44 40 42 45" stroke="url(#goldGrad)" strokeLinecap="round" />
          <defs>
            <linearGradient id="goldGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f5e5c9" />
              <stop offset="0.5" stopColor="#d4af37" />
              <stop offset="1" stopColor="#aa8222" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: 'Emagrecimento',
      desc: 'Acompanhamento médico seguro e personalizado, com foco em saúde, bem-estar e resultados sustentáveis.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M18 14C22 22 28 30 26 40C24 48 20 54 16 58" stroke="url(#goldGrad)" strokeLinecap="round" />
          <path d="M46 14C42 22 36 30 38 40C40 48 44 54 48 58" stroke="url(#goldGrad)" strokeLinecap="round" />
          <ellipse cx="32" cy="36" rx="8" ry="3" stroke="url(#goldGrad)" strokeDasharray="2 2" />
          <path d="M24 24H40" stroke="url(#goldGrad)" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Saúde Metabólica',
      desc: 'Controle de diabetes, colesterol, resistência à insulina e outros fatores metabólicos.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polygon points="32 10 44 17 44 31 32 38 20 31 20 17" stroke="url(#goldGrad)" />
          <polygon points="44 31 54 37 54 49 44 55 34 49 34 37" stroke="url(#goldGrad)" strokeOpacity="0.8" />
          <polygon points="20 31 30 37 30 49 20 55 10 49 10 37" stroke="url(#goldGrad)" strokeOpacity="0.8" />
          <circle cx="32" cy="24" r="2.5" fill="#d4af37" />
        </svg>
      ),
    },
    {
      title: 'Distúrbios Hormonais',
      desc: 'Avaliação e tratamento de desequilíbrios hormonais em todas as fases da vida.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="26" cy="30" r="10" stroke="url(#goldGrad)" />
          <line x1="26" y1="40" x2="26" y2="52" stroke="url(#goldGrad)" strokeLinecap="round" />
          <line x1="20" y1="46" x2="32" y2="46" stroke="url(#goldGrad)" strokeLinecap="round" />
          <circle cx="42" cy="24" r="9" stroke="url(#goldGrad)" />
          <line x1="48" y1="18" x2="56" y2="10" stroke="url(#goldGrad)" strokeLinecap="round" />
          <polyline points="49 10 56 10 56 17" stroke="url(#goldGrad)" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="areas" className="py-24 bg-[#faf9f6] text-slate-800 border-t border-gold-champagne/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold-deep uppercase">
            ÁREAS DE ATUAÇÃO
          </span>
          <span className="w-12 h-[1px] bg-gold-gradient inline-block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-9 rounded-lg border border-gold-champagne/30 shadow-sm hover:shadow-card-light hover:border-gold-primary/50 transition-all duration-300 flex flex-col items-center text-center relative group overflow-hidden"
            >
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                {area.icon}
              </div>
              <h3 className="font-editorial text-2xl font-semibold text-slate-900 mb-3.5">
                {area.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {area.desc}
              </p>
              {/* Bottom Gold Hover Accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gold-gradient transition-all duration-300 group-hover:w-3/5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
