import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero({ onOpenBooking }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Scroll parallax transforms
  const yBg = useTransform(scrollY, [0, 800], [0, 180]);
  const yDoctor = useTransform(scrollY, [0, 800], [0, 60]);
  const yBadge = useTransform(scrollY, [0, 800], [0, -80]);

  // Mouse move parallax for desktop
  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return;
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    setMousePos({
      x: (clientX - centerX) / centerX,
      y: (clientY - centerY) / centerY,
    });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-36 pb-20 flex items-center bg-hero-radial overflow-hidden"
    >
      {/* Monumental Typography with Scroll and Mouse Parallax */}
      <motion.div
        style={{ y: yBg }}
        animate={{
          x: mousePos.x * -25,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 100 }}
        aria-hidden="true"
        className="absolute top-[16%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0"
      >
        <span className="font-display font-bold text-[clamp(5.5rem,15vw,16rem)] tracking-[0.14em] text-monumental-gradient inline-block whitespace-nowrap opacity-60">
          ENDOCRINO
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-12 relative z-10">
        {/* Left Column: Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
        >
          {/* Sub-tagline */}
          <div className="flex items-center justify-center lg:justify-start gap-3.5 mb-6 -translate-y-[110px] whitespace-nowrap overflow-hidden">
            <span className="text-[11px] tracking-[0.2em] font-semibold text-gold-champagne uppercase whitespace-nowrap">
              ENDOCRINOLOGIA • TIREOIDE • EMAGRECIMENTO • SAÚDE METABÓLICA
            </span>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gold-gradient shrink-0" />
          </div>

          {/* Title */}
          <h1 className="font-editorial text-[clamp(1.9rem,3.4vw,3.25rem)] font-normal leading-[1.16] text-white mb-6 translate-y-[70px]">
            <span className="whitespace-nowrap sm:inline">Medicina de precisão para o seu</span> <br className="hidden sm:block" />
            <em className="font-editorial italic text-gold-champagne font-normal not-italic:font-normal">
              equilíbrio hormonal.
            </em>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0 translate-y-[70px]">
            Acompanhamento médico especializado em tireoide, emagrecimento e saúde metabólica, com foco em resultados reais, qualidade de vida e olhar individualizado.
          </p>
        </motion.div>

        {/* Right Column: Doctor Portrait & Badges */}
        <motion.div
          style={{ y: yDoctor }}
          animate={{
            x: mousePos.x * 12,
            y: mousePos.y * 12,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 90 }}
          className="relative flex items-center justify-center -mt-8"
        >
          <div className="relative w-full max-w-[640px] flex items-center justify-end">
            <img
              src="/assets/cley_rocha_cutout.png"
              alt="Dr. Cley Rocha - Endocrinologista"
              className="w-full min-w-[340px] sm:min-w-[500px] max-w-[640px] h-auto max-h-[85vh] object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] transition-transform duration-700 hover:scale-[1.02]"
              style={{
                maskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)'
              }}
            />
          </div>

          {/* Right Side Vertical Badge: Saúde Hormonal */}
          <motion.div
            style={{ y: yBadge }}
            animate={{
              x: mousePos.x * 16,
            }}
            className="hidden xl:flex absolute -right-6 top-1/4 items-center gap-3 [writing-mode:vertical-rl] pointer-events-none select-none"
          >
            <span className="w-[1px] h-10 bg-gold-gradient" />
            <span className="text-[10px] tracking-[0.24em] font-semibold text-gold-champagne uppercase opacity-90">
              SAÚDE HORMONAL PARA UMA VIDA MAIS PLENA
            </span>
          </motion.div>

          {/* Bottom Right Badge: Assinatura Dr. Cley Rocha */}
          <motion.div
            animate={{
              x: mousePos.x * -10,
              y: mousePos.y * -8,
            }}
            className="absolute right-0 bottom-6 bg-obsidian/85 backdrop-blur-md border border-gold-champagne/20 rounded-lg px-5 py-3.5 text-right shadow-2xl pointer-events-none select-none"
          >
            <div className="font-signature text-3xl sm:text-4xl text-gold-champagne leading-none mb-1">
              Cley Rocha
            </div>
            <div className="text-[9px] tracking-[0.22em] font-bold text-white leading-tight uppercase">
              ENDOCRINOLOGISTA
            </div>
            <div className="text-[8px] tracking-[0.26em] font-medium text-gold-muted uppercase">
              DOUTOR
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
