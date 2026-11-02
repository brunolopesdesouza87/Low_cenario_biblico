import React, { useState } from 'react';
import { X, Check, ShieldCheck, Zap, Copy, ExternalLink, QrCode, CreditCard, Sparkles } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: 'premium' | 'basico';
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'checkout' | 'pix'>('checkout');
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState('');
  const [simulatedSuccess, setSimulatedSuccess] = useState(false);

  if (!isOpen) return null;

  const isPremium = selectedPlan === 'premium';
  const price = isPremium ? 'R$ 11,99' : 'R$ 4,99';
  const planName = isPremium ? 'Plano Premium (Acesso Vitalício)' : 'Plano Básico (1 Mês)';
  const checkoutUrl = isPremium
    ? 'https://pay.criativa.online/c/4zij80b'
    : '#pix';

  const fakePixCode = isPremium
    ? '00020126580014br.gov.bcb.pix0136cenariosdafe@pagamentos.com.br520400005303986540511.995802BR5920Cenarios da Fe Kids6009Sao Paulo62070503***6304ABCD'
    : '00020126580014br.gov.bcb.pix0136cenariosdafe@pagamentos.com.br52040000530398654054.995802BR5920Cenarios da Fe Kids6009Sao Paulo62070503***6304ABCD';

  const handleCopy = () => {
    navigator.clipboard.writeText(fakePixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSimulatedSuccess(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="font-black text-lg font-montserrat">Finalizar Inscrição</h3>
              <p className="text-xs text-sky-100">{planName}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {simulatedSuccess ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce-subtle">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h4 className="text-xl font-black text-slate-800 font-montserrat">
                Inscrição Confirmada com Sucesso!
              </h4>
              <p className="mt-2 text-sm text-slate-600 max-w-xs mx-auto">
                Enviamos os dados de acesso e o link de download dos <strong>35 Cenários Bíblicos 3D</strong> para <strong>{email}</strong>.
              </p>
              <div className="mt-6">
                <button
                  onClick={onClose}
                  className="bg-sky-600 hover:bg-sky-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm"
                >
                  Concluir e Voltar à Página
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Order summary box */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 mb-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-extrabold text-slate-800 text-sm block">
                      {isPremium ? '35 Cenários Bíblicos 3D + 4 Bônus' : '05 Cenários Bíblicos (Amostra)'}
                    </span>
                    <span className="text-xs text-emerald-600 font-semibold">
                      {isPremium ? 'Acesso Vitalício Imediato' : 'Acesso 30 Dias'}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-slate-800 font-montserrat">
                      {price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex rounded-xl bg-slate-100 p-1 mb-5">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('checkout')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    paymentMethod === 'checkout'
                      ? 'bg-white text-slate-800 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Checkout Oficial
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    paymentMethod === 'pix'
                      ? 'bg-white text-slate-800 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <QrCode className="w-3.5 h-3.5" />
                  PIX Instantâneo
                </button>
              </div>

              {paymentMethod === 'checkout' ? (
                <div className="space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Você será direcionado para o ambiente 100% blindado e seguro de pagamento, com liberação automática dos arquivos em PDF no seu e-mail:
                  </p>

                  <a
                    href={checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#FF2A53] hover:bg-[#e41842] text-white font-black text-base py-3.5 px-6 rounded-xl shadow-lg shadow-rose-600/30 uppercase tracking-wide transition-all transform hover:scale-[1.02] active:scale-95 text-center"
                  >
                    <span>Ir para Checkout Seguro • {price}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <div className="text-center">
                    <span className="text-[11px] text-slate-400">
                      Aceita PIX com confirmação em 30 segundos e Cartão em até 2x.
                    </span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSimulatePayment} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Seu E-mail para receber o material:
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="exemplo@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between text-xs text-slate-600 mb-1.5">
                      <span className="font-bold">Código PIX Copia e Cola:</span>
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="text-sky-600 font-bold hover:underline flex items-center gap-1"
                      >
                        <Copy className="w-3 h-3" />
                        {copied ? 'Copiado!' : 'Copiar'}
                      </button>
                    </div>
                    <p className="font-mono text-[10px] text-slate-500 break-all bg-white p-2 rounded border border-slate-200">
                      {fakePixCode}
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1FBE00] hover:bg-[#199d00] text-white font-black text-sm py-3 px-6 rounded-xl shadow-md uppercase tracking-wider transition-all"
                  >
                    Confirmar Pagamento PIX ({price})
                  </button>
                </form>
              )}

              {/* Security Footnote */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-center gap-4 text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Protegido
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-sky-600 font-semibold">
                  <Zap className="w-3.5 h-3.5" /> Envio Imediato
                </span>
                <span>•</span>
                <span>Garantia 7 Dias</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
