import React from 'react';
import { ArrowRight, Award, GraduationCap, FileText, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DoctorProfile({ onOpenBooking }) {
  const formationItems = [
    {
      degree: 'Doutorado em Endocrinologia e Metabologia',
      institution: 'Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (FM-USP), 2014',
    },
    {
      degree: 'Título de Especialista em Endocrinologia e Metabologia',
      institution: 'Sociedade Brasileira de Endocrinologia e Metabologia (SBEM) / Universidade de São Paulo, 2005',
    },
    {
      degree: 'Especialização em Terapia Nutricional e Nutrição Clínica',
      institution: 'Hospital Beneficência Portuguesa de São Paulo (GANEP), 2010',
    },
    {
      degree: 'Graduação em Medicina',
      institution: 'Universidade Federal de Campina Grande (UFCG), 2003',
    },
  ];

  const diseases = [
    'Obesidade & Emagrecimento',
    'Doenças da Glândula Tireoide',
    'Hiperparatireoidismo',
    'Distúrbios do Metabolismo do Cálcio',
    'Doenças da Hipófise',
    'Acromegalia',
    'Doença de Addison',
    'Dislipidemias (Colesterol)',
    'Diabetes Gestacional',
    'Neoplasias Endócrinas',
  ];

  return (
    <section id="dr-cley" className="py-28 bg-[#090b0d] text-white border-y border-gold-champagne/15 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-gold-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Doctor Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="relative rounded-3xl overflow-hidden border border-gold-champagne/25 bg-[#14181f] shadow-[0_25px_60px_rgba(0,0,0,0.85)] group">
              <div className="w-full aspect-[4/5] overflow-hidden bg-[#0a0d11]">
                <img
                  src="/assets/cley_rocha_header.jpg"
                  alt="Dr. Cley Rocha de Farias - Médico Endocrinologista"
                  className="w-full h-full object-cover object-[center_12%] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b0d] via-transparent to-transparent opacity-90 pointer-events-none" />
              </div>

              {/* Floating Credential Badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#10141a]/90 backdrop-blur-md border border-gold-champagne/25 rounded-2xl p-4 flex items-center gap-3.5 shadow-2xl">
                <span className="w-2.5 h-2.5 rounded-full bg-gold-champagne shadow-[0_0_10px_#e5d3b3] shrink-0" />
                <div className="flex flex-col">
                  <span className="font-semibold text-sm text-white leading-tight">
                    Dr. Cley Rocha de Farias
                  </span>
                  <span className="text-xs text-gold-champagne/90 tracking-wider mt-0.5 font-medium">
                    CRM 113825-SP • RQE Nº: 65951
                  </span>
                </div>
              </div>
            </div>

            {/* Selo Doctoralia de Qualidade */}
            <div className="mt-5 bg-white rounded-2xl p-4 flex items-center justify-between gap-4 border border-gold-champagne/40 shadow-[0_16px_36px_rgba(0,0,0,0.5)]">
              <div className="shrink-0 flex items-center">
                <img
                  src="/assets/badge_doctoralia.svg"
                  alt="Certificado Doctoralia"
                  className="h-11 w-auto block"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col border-l border-slate-200 pl-4">
                <span className="text-sm font-bold text-slate-900 leading-tight">
                  Certificado Doctoralia
                </span>
                <span className="text-xs font-semibold text-[#00a085] mt-0.5">
                  Excelência & Qualidade em Atendimento
                </span>
              </div>
            </div>

            {/* Imagem da Tiroxina (T4) */}
            <div className="flex-1 flex items-center justify-center w-full min-h-[260px] mt-6 group">
              <img
                src="/assets/thyroxine_white.png"
                alt="Estrutura Molecular da Tiroxina (T4)"
                className="w-full max-w-[380px] h-auto object-contain opacity-30 group-hover:opacity-50 group-hover:scale-[1.02] transition-all duration-300"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right Column: Bio, Academic Credentials, Scope & Publication */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Tagline */}
            <div className="flex items-center gap-3.5 mb-3">
              <span className="text-xs font-semibold tracking-[0.2em] text-gold-champagne uppercase">
                CORPO CLÍNICO
              </span>
              <span className="w-12 h-[1px] bg-gold-gradient inline-block" />
            </div>

            {/* Title & Name */}
            <h2 className="font-editorial text-[clamp(2.4rem,4.2vw,3.4rem)] font-normal text-white leading-tight mb-2">
              Quem vai conduzir<br />sua consulta.
            </h2>
            <h3 className="text-lg sm:text-xl font-bold text-gold-champagne tracking-wide mb-6">
              Dr. Cley Rocha de Farias
            </h3>

            {/* Bio Lead */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-light">
              Doutorado em endocrinologia pelo Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (FM-USP). Título de especialista pela Sociedade Brasileira de Endocrinologia e Metabologia. Possui graduação em Medicina pela Universidade Federal de Campina Grande (2003) e especialização em Terapia Nutricional e Nutrição Clínica pelo Hospital Beneficência Portuguesa de São Paulo (GANEP-2010). Tem experiência na área de Medicina, com ênfase em Endocrinologia e Metabologia, Tireoideologia e suplementação de selênio.
            </p>

            {/* Block 1: Formação Acadêmica & Títulos */}
            <div className="mb-8 pb-8 border-b border-gold-champagne/15">
              <div className="flex items-center gap-2.5 text-xs font-bold tracking-[0.15em] uppercase text-gold-champagne mb-5">
                <GraduationCap className="w-4 h-4 text-gold-primary" />
                <span>Formação Acadêmica & Títulos</span>
              </div>
              <ul className="space-y-4">
                {formationItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-champagne shadow-[0_0_8px_rgba(229,211,179,0.7)] shrink-0 mt-2" />
                    <div>
                      <strong className="block text-sm font-semibold text-white leading-snug">
                        {item.degree}
                      </strong>
                      <span className="block text-xs text-slate-400 mt-0.5 leading-relaxed">
                        {item.institution}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Block 2: Doenças & Condições Tratadas */}
            <div className="mb-8 pb-8 border-b border-gold-champagne/15">
              <div className="flex items-center gap-2.5 text-xs font-bold tracking-[0.15em] uppercase text-gold-champagne mb-4">
                <Activity className="w-4 h-4 text-gold-primary" />
                <span>Doenças & Condições Tratadas</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {diseases.map((disease) => (
                  <span
                    key={disease}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-[#14181f]/90 border border-gold-champagne/20 text-xs sm:text-sm text-slate-200 hover:border-gold-champagne hover:bg-gold-primary/10 transition-colors duration-200"
                  >
                    {disease}
                  </span>
                ))}
              </div>
            </div>

            {/* Block 3: Publicação Científica */}
            <div className="mb-8 pb-8 border-b border-gold-champagne/15">
              <div className="flex items-center gap-2.5 text-xs font-bold tracking-[0.15em] uppercase text-gold-champagne mb-4">
                <FileText className="w-4 h-4 text-gold-primary" />
                <span>Publicações & Pesquisa Científica</span>
              </div>
              <div className="bg-[#14181f]/80 border border-gold-champagne/20 rounded-xl p-5">
                <span className="inline-block text-[10px] tracking-widest uppercase font-bold text-gold-champagne bg-gold-primary/15 px-2.5 py-1 rounded-full mb-2">
                  Artigo Publicado
                </span>
                <p className="text-sm sm:text-base font-semibold text-white italic leading-snug mb-1">
                  "Suplementação de Selênio em Doença Autoimune da Tireoide"
                </p>
                <span className="text-xs text-gold-champagne font-medium">
                  Journal of Endocrinological Investigation (2015)
                </span>
              </div>
            </div>

            {/* CTA Agendar Consulta */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="btn-pill-gold group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-sm shadow-xl transition-all duration-300"
              >
                <span>Agendar consulta com o Dr. Cley</span>
                <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
              <span className="text-sm sm:text-base text-gold-champagne font-medium">
                Higienópolis • São Paulo & Telemedicina em todo o Brasil
              </span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
