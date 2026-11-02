import React, { useState } from 'react';
import { BookOpen, ShieldCheck, Lock, Heart, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-24 sm:pb-12 text-sm border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800 text-center md:text-left">
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="font-black text-white text-lg font-montserrat tracking-tight block">
                Cenários da Fé Kids
              </span>
              <p className="text-xs text-slate-400">
                35 Cenários Bíblicos 3D para Imprimir e Montar
              </p>
            </div>
          </div>

          {/* Policy Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              Política de Privacidade
            </button>
            <span>|</span>
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              Termos de Uso
            </button>
            <span>|</span>
            <a
              href="#faq"
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              Central de Dúvidas
            </a>
          </div>

          {/* Badges */}
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-emerald-400" /> SSL 256-bit Seguro
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" /> Compra Protegida
            </span>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 text-center text-xs text-slate-500 space-y-2">
          <p>
            Este produto não garante a obtenção de resultados específicos. Qualquer menção ou depoimento reflete experiências individuais de clientes e usuários.
          </p>
          <p className="flex items-center justify-center gap-1 text-slate-400">
            Feito com <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> para abençoar famílias e ministérios de todo o Brasil.
          </p>
          <p className="text-slate-400 font-medium">
            Todos os direitos reservados © {new Date().getFullYear()} Cenários da Fé Kids.
          </p>
        </div>
      </div>

      {/* Policy Modal */}
      {modalType && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setModalType(null)}
        >
          <div
            className="bg-white text-slate-800 rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <h3 className="font-bold text-lg font-montserrat">
                {modalType === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}
              </h3>
              <button
                onClick={() => setModalType(null)}
                className="p-1 rounded hover:bg-slate-100 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
              {modalType === 'privacy' ? (
                <>
                  <p>
                    A sua privacidade é de extrema importância para nós. O Cenários da Fé Kids tem o compromisso de proteger as informações pessoais que você compartilha conosco.
                  </p>
                  <p>
                    <strong>1. Coleta de Informações:</strong> Coletamos apenas as informações necessárias para efetuar a entrega digital do seu pedido (como nome e e-mail).
                  </p>
                  <p>
                    <strong>2. Uso das Informações:</strong> Seu e-mail será utilizado exclusivamente para o envio do material adquirido, notas fiscais, comunicações sobre o produto e atualizações pedagógicas.
                  </p>
                  <p>
                    <strong>3. Segurança:</strong> Todos os dados de pagamento são processados através de gateways de pagamento certificados (PCI-DSS), não tendo nós qualquer acesso aos números de cartão de crédito.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Ao adquirir os <strong>35 Cenários Bíblicos 3D</strong> do Cenários da Fé Kids, você concorda com os seguintes termos:
                  </p>
                  <p>
                    <strong>1. Licença de Uso:</strong> O material destina-se a uso educacional, pessoal, familiar e eclesiástico (em sua igreja local ou escola). Você pode imprimir quantas cópias precisar para seus alunos e filhos.
                  </p>
                  <p>
                    <strong>2. Proibição de Revenda:</strong> É estritamente proibida a revenda, sublicenciamento, doação digital ou distribuição pública não autorizada dos arquivos em PDF originais na internet.
                  </p>
                  <p>
                    <strong>3. Garantia:</strong> Oferecemos 7 dias incondicionais de garantia com reembolso integral mediante solicitação simples por e-mail.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
