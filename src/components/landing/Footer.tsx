import { AtSign, MessageCircle, Mail } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Método", href: "#metodo" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="bg-[#0B0D0F] pt-16 pb-12 text-[#A1A8B3]">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 border-b border-[#F5F5F5]/12 pb-12 md:grid-cols-12">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5">
            <a
              href="#"
              className="inline-flex items-center gap-2.5"
              aria-label="Método Forma 90"
            >
              <span className="inline-flex h-7 w-2 -skew-x-12 bg-[#C6FF00]" />
              <span className="font-display text-2xl font-bold tracking-tight text-[#F5F5F5] uppercase">
                Método Forma <span className="text-[#C6FF00]">90</span>
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#A1A8B3]">
              Consultoria de treino online personalizada para quem busca mais organização, consistência e evolução na academia ou em casa.
            </p>

            <p className="mt-3 font-mono text-xs text-[#F5F5F5]/80">
              Lucas Andrade • Personal Trainer | CREF 000000-G/XX
            </p>
          </div>

          {/* Navigation Column (4 cols) */}
          <div className="md:col-span-4">
            <h2 className="font-mono text-xs font-semibold tracking-[0.2em] text-[#F5F5F5] uppercase">
              Navegação
            </h2>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-mono text-xs tracking-wider text-[#A1A8B3] uppercase transition-colors hover:text-[#C6FF00]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fictional Socials Column (3 cols) */}
          <div className="md:col-span-3">
            <h2 className="font-mono text-xs font-semibold tracking-[0.2em] text-[#F5F5F5] uppercase">
              Canais (Demonstrativos)
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2.5 font-mono text-xs text-[#A1A8B3] transition-colors hover:text-[#C6FF00]"
                  aria-label="Instagram demonstrativo do Método Forma 90"
                >
                  <AtSign className="h-4 w-4 text-[#C6FF00]" aria-hidden="true" />
                  <span>Instagram (@metodoforma90)</span>
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2.5 font-mono text-xs text-[#A1A8B3] transition-colors hover:text-[#C6FF00]"
                  aria-label="WhatsApp demonstrativo do Método Forma 90"
                >
                  <MessageCircle className="h-4 w-4 text-[#C6FF00]" aria-hidden="true" />
                  <span>WhatsApp Consultoria</span>
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2.5 font-mono text-xs text-[#A1A8B3] transition-colors hover:text-[#C6FF00]"
                  aria-label="E-mail demonstrativo do Método Forma 90"
                >
                  <Mail className="h-4 w-4 text-[#C6FF00]" aria-hidden="true" />
                  <span>E-mail (contato@forma90.com.br)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal / Portfolio Notice */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-[#F5F5F5]">
            Projeto fictício desenvolvido para fins de portfólio.
          </p>
          <p className="font-mono text-xs text-[#A1A8B3]">
            © 2026 Método Forma 90 • Todos os dados e valores são ilustrativos.
          </p>
        </div>
      </div>
    </footer>
  );
}
