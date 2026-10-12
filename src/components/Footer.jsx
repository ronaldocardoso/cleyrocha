import React from 'react';
import { Instagram, Linkedin, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-[#07090b] border-t border-gold-champagne/10 pt-20 pb-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_1.4fr_1.4fr] gap-12 pb-16">
          {/* Column 1: Brand & Social */}
          <div>
            <a href="#hero" className="flex items-center gap-3.5 mb-5 group">
              <span className="font-display text-2xl font-bold text-gold-champagne tracking-tight">
                CR
              </span>
              <div className="flex flex-col">
                <span className="font-editorial text-lg tracking-[0.18em] font-semibold text-white leading-tight">
                  CLEY ROCHA
                </span>
                <span className="text-[10px] tracking-[0.22em] font-medium text-gold-champagne uppercase">
                  ENDOCRINOLOGIA
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
              Ciência, cuidado e qualidade de vida.
            </p>

            <div className="flex items-center gap-3.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold-champagne/20 flex items-center justify-center text-gold-champagne hover:bg-gold-gradient hover:text-black hover:border-transparent transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold-champagne/20 flex items-center justify-center text-gold-champagne hover:bg-gold-gradient hover:text-black hover:border-transparent transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/5511982633335?text=Ol%C3%A1%2C%20Dr.%20Cley%20Rocha!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20agendamento."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold-champagne/20 flex items-center justify-center text-gold-champagne hover:bg-gold-gradient hover:text-black hover:border-transparent transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navegação */}
          <div>
            <h4 className="text-white font-medium text-sm tracking-wider uppercase mb-5">
              Navegação
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#hero" className="hover:text-gold-champagne transition-colors">Início</a></li>
              <li><a href="#areas" className="hover:text-gold-champagne transition-colors">Tireoide</a></li>
              <li><a href="#areas" className="hover:text-gold-champagne transition-colors">Emagrecimento</a></li>
              <li><a href="#integrada" className="hover:text-gold-champagne transition-colors">Saúde Metabólica</a></li>
              <li><a href="#faq" className="hover:text-gold-champagne transition-colors">FAQ</a></li>
              <li><a href="#conteudos" className="hover:text-gold-champagne transition-colors">Conteúdos</a></li>
              <li><a href="#contato" className="hover:text-gold-champagne transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Column 3: Consultório & Contato */}
          <div>
            <h4 className="text-white font-medium text-sm tracking-wider uppercase mb-5">
              Consultório & Contato
            </h4>
            <div className="flex flex-col gap-5 text-sm">
              {/* Endereço */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-champagne shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Higienópolis • São Paulo - SP</strong>
                  <a
                    href="https://maps.google.com/?q=Rua+Mato+Grosso,+306,+Higien%C3%B3polis,+S%C3%A3o+Paulo+-+SP,+01239-040"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-gold-champagne transition-colors block text-xs leading-relaxed mt-0.5"
                  >
                    Rua Mato Grosso, 306 • Conjunto 1102<br />
                    <span className="text-slate-400">CEP 01239-040</span>
                  </a>
                </div>
              </div>

              {/* Telefones */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold-champagne shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1 text-xs">
                  <strong className="text-white font-medium text-sm">Telefones</strong>
                  <a href="tel:+551121146455" className="text-slate-300 hover:text-gold-champagne transition-colors">
                    Fone: (11) 2114-6455
                  </a>
                  <a
                    href="https://wa.me/5511982633335?text=Ol%C3%A1%2C%20Dr.%20Cley%20Rocha!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20agendamento."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-champagne font-medium hover:underline"
                  >
                    Cel. / WhatsApp: (11) 98263-3335
                  </a>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold-champagne shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-white block font-medium text-sm">E-mail</strong>
                  <a href="mailto:cleyrocha@uol.com.br" className="text-slate-300 hover:text-gold-champagne transition-colors">
                    cleyrocha@uol.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Identificação Médica Oficial */}
          <div>
            <div className="bg-gold-champagne/[0.04] border border-gold-champagne/20 rounded-lg p-6">
              <h4 className="font-editorial text-xl font-semibold text-white mb-1.5">
                Dr. Cley Rocha de Farias
              </h4>
              <p className="text-xs tracking-wider text-gold-champagne uppercase font-medium mb-3">
                Endocrinologia e Metabologia
              </p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-block bg-gold-champagne/10 border border-gold-champagne/30 text-gold-champagne text-[11px] font-semibold tracking-wider px-2.5 py-1 rounded">
                  CRM 113825-SP
                </span>
                <span className="inline-block bg-gold-champagne/10 border border-gold-champagne/30 text-gold-champagne text-[11px] font-semibold tracking-wider px-2.5 py-1 rounded">
                  RQE Nº: 65951
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Doutorado em Endocrinologia pela Faculdade de Medicina da Universidade de São Paulo
              </p>

              <button
                onClick={onOpenBooking}
                className="w-full py-2 px-4 rounded-full bg-gold-gradient text-black font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Agendar consulta
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Dr. Cley Rocha de Farias. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Desenvolvido por</span>
            <a
              href="https://www.ronaldocardoso.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:opacity-80 transition-opacity"
              title="Ronaldo Cardoso"
              aria-label="Website do desenvolvedor Ronaldo Cardoso"
            >
              <img
                src="/assets/logo_ronaldocardoso.png"
                alt="Ronaldo Cardoso"
                className="h-5 w-auto object-contain hover:scale-110 transition-transform"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
