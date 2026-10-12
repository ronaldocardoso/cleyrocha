import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Quais são os principais sintomas de hipotireoidismo?',
      a: 'Os sintomas mais comuns incluem cansaço excessivo e desproporcional, ganho de peso sem mudanças na dieta, sonolência diurna, pele ressecada, queda acentuada de cabelo, intestino preso, intolerância ao frio e alterações de humor ou memória. O diagnóstico é confirmado por meio de exames de sangue detalhados (como TSH e T4 livre).',
    },
    {
      q: 'Como saber se tenho resistência à insulina?',
      a: 'A resistência à insulina pode manifestar-se por acúmulo persistente de gordura abdominal, fadiga ou sonolência pronunciada logo após as refeições, vontade constante de doces e carboidratos, além de escurecimento da pele em dobras do pescoço ou axilas (acantose nigricans). A confirmação diagnóstica envolve dosagens de glicemia de jejum, insulina basal e cálculo do índice HOMA-IR.',
    },
    {
      q: 'O emagrecimento com acompanhamento endocrinológico é seguro?',
      a: 'Sim, é a abordagem mais segura e sustentável cientificamente. O tratamento não se baseia em fórmulas prontas, mas sim na investigação minuciosa de desequilíbrios metabólicos, hormonais e comportamentais. Quando indicado, o uso de medicações modernas aprovadas é feito com controle rigoroso de dosagens e monitoramento contínuo da sua saúde cardiovascular e metabólica.',
    },
    {
      q: 'Quais exames são usados no diagnóstico?',
      a: 'Solicitamos um painel laboratorial sob medida para cada paciente, que costuma abranger função tireoidiana (TSH, T4L, T3, anticorpos), metabolismo glicêmico e lipídico completo, avaliação de hormônios adrenais (cortisol), hormônios sexuais, além de dosagem de micronutrientes essenciais (vitamina D, B12, ferro, ferritina e zinco). Exames de imagem, como ultrassonografia da tireoide, são indicados conforme a necessidade clínica.',
    },
    {
      q: 'Qual a relação entre hormônios e ganho de peso?',
      a: 'Hormônios são os grandes maestros do nosso metabolismo. A insulina regula o armazenamento de gordura; os hormônios tireoidianos definem o ritmo do gasto calórico basal; o cortisol elevado cronicamente estimula o apetite e a deposição de gordura visceral; e os hormônios da saciedade (como leptina e GLP-1) controlam os sinais de fome. Equilibrar essas vias é essencial para emagrecer e manter os resultados.',
    },
    {
      q: 'O tratamento é para toda a vida?',
      a: 'Não necessariamente. Algumas condições crônicas, como o hipotireoidismo de Hashimoto, demandam reposição hormonal contínua com ajustes periódicos de dose. Já quadros como resistência à insulina, alterações metabólicas leves ou sobrepeso frequentemente podem ser revertidos ou controlados a longo prazo com reeducação metabólica, mudanças de estilo de vida e tratamento médico focado.',
    },
  ];

  return (
    <section id="faq" className="py-28 bg-[#faf9f6] text-slate-900 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16">
        {/* Left Column: FAQ Header */}
        <div>
          <div className="flex items-center gap-3.5 mb-5">
            <span className="text-xs font-semibold tracking-[0.2em] text-gold-deep uppercase">
              DÚVIDAS FREQUENTES
            </span>
            <span className="w-12 h-[1px] bg-gold-gradient inline-block" />
          </div>

          <h2 className="font-editorial text-[clamp(2.4rem,4vw,3.5rem)] font-normal leading-[1.15] text-slate-900 mb-6">
            Perguntas<br />
            frequentes
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            Tire suas principais dúvidas sobre tireoide, metabolismo, emagrecimento e muito mais, com informações claras e baseadas na ciência.
          </p>
        </div>

        {/* Right Column: Accordion */}
        <div className="flex flex-col divide-y divide-black/10 border-y border-black/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.q} className="py-2">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full py-5 flex items-center justify-between text-left group transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-base sm:text-lg font-medium text-slate-900 group-hover:text-gold-deep transition-colors pr-6">
                    {faq.q}
                  </span>
                  <span
                    className={`text-2xl font-light text-gold-deep transform transition-transform duration-300 leading-none ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
