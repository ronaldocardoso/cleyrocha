import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Conteudos({ onOpenBooking }) {
  const articles = [
    {
      tag: 'TIREOIDE',
      title: 'Tireoide: pequena glândula, grande impacto',
      desc: 'Compreenda como essa pequena estrutura no pescoço atua no controle do metabolismo, da energia vital e da saúde integral.',
      image: '/assets/blog_thyroid.jpg',
    },
    {
      tag: 'EMAGRECIMENTO',
      title: 'Emagrecimento saudável: o que realmente funciona?',
      desc: 'Descubra por que dietas extremas falham e como a ciência endocrinológica atua na regulação do apetite e queima calórica sustentável.',
      image: '/assets/blog_weight.jpg',
    },
    {
      tag: 'SAÚDE METABÓLICA',
      title: 'Metabolismo e longevidade: como a alimentação pode ajudar',
      desc: 'Estratégias nutricionais e hormonais baseadas em evidências para preservar a sensibilidade à insulina e viver com vitalidade prolongada.',
      image: '/assets/blog_metabolism.jpg',
    },
  ];

  return (
    <section id="conteudos" className="py-28 bg-[#f9f8f6] text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3.5 mb-4">
              <span className="text-xs font-semibold tracking-[0.2em] text-gold-deep uppercase">
                CONTEÚDOS
              </span>
              <span className="w-12 h-[1px] bg-gold-gradient inline-block" />
            </div>
            <h2 className="font-editorial text-[clamp(2.2rem,3.8vw,3.2rem)] font-normal text-slate-900 mb-3">
              Informação para a sua saúde
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl font-light">
              Artigos, vídeos e conteúdos confiáveis sobre tireoide, emagrecimento e saúde hormonal, com embasamento científico e linguagem acessível.
            </p>
          </div>

          <a
            href="#conteudos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-deep hover:text-gold-primary transition-colors group"
          >
            <span>Ver todos os conteúdos</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-lg border border-gold-champagne/30 overflow-hidden shadow-sm hover:shadow-card-light hover:border-gold-primary/40 transition-all duration-300 flex flex-col group"
            >
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-7 flex flex-col flex-grow">
                <span className="text-[10px] tracking-[0.2em] font-bold text-gold-deep uppercase mb-3">
                  {article.tag}
                </span>
                <h3 className="font-editorial text-xl font-semibold text-slate-900 leading-snug mb-3">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 flex-grow font-normal">
                  {article.desc}
                </p>

                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-deep group-hover:text-gold-primary transition-colors mt-auto"
                >
                  <span>Ler mais</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
