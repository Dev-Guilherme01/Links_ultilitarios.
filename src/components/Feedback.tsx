import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';

type FeedbackType = 'sugestao' | 'problema' | 'elogio' | 'outro';

interface FeedbackForm {
  type: FeedbackType;
  name: string;
  email: string;
  message: string;
  isSubmitting: boolean;
  submitted: boolean;
  error: string;
}

export default function Feedback({ onNavigate }: { onNavigate?: (tab: string) => void }) {
  const [form, setForm] = useState<FeedbackForm>({
    type: 'sugestao',
    name: '',
    email: '',
    message: '',
    isSubmitting: false,
    submitted: false,
    error: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value, error: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setForm((prev) => ({ ...prev, error: 'Por favor, preencha todos os campos.' }));
      return;
    }

    if (!form.email.includes('@')) {
      setForm((prev) => ({ ...prev, error: 'Por favor, insira um email válido.' }));
      return;
    }

    setForm((prev) => ({ ...prev, isSubmitting: true }));

    try {
      // Simulate submission (in real app, would send to backend/email service)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setForm({
        type: 'sugestao',
        name: '',
        email: '',
        message: '',
        isSubmitting: false,
        submitted: true,
        error: '',
      });

      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setForm((prev) => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (err) {
      setForm((prev) => ({
        ...prev,
        isSubmitting: false,
        error: 'Erro ao enviar feedback. Tente novamente.',
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-b from-blue-600 to-blue-700 px-4 py-12 text-center text-white md:px-8 md:py-16">
        <MessageSquare size={40} className="mx-auto mb-4 md:h-12 md:w-12" />
        <h1 className="text-4xl font-extrabold md:text-5xl">Envie seu Feedback</h1>
        <p className="mt-4 text-lg text-blue-100 md:text-xl">
          Sugestões, problemas ou elogios — sua opinião é importante para melhorar o Utilinks
        </p>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-2xl px-4 py-12 md:px-8 md:py-16">
        {form.submitted ? (
          <div className="rounded-2xl bg-green-50 p-8 text-center md:p-10">
            <div className="mb-4 flex justify-center">
              <CheckCircle size={56} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-green-900 md:text-3xl">Obrigado!</h2>
            <p className="mt-3 text-base text-green-800 md:text-lg">
              Seu feedback foi enviado com sucesso. Vamos analisar e usar suas contribuições para
              melhorar o Utilinks.
            </p>
            <p className="mt-2 text-sm text-green-700">
              Redirecionando em alguns segundos...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-7">
            {/* Type */}
            <div>
              <label htmlFor="type" className="block text-sm font-semibold text-gray-900 md:text-base">
                Tipo de feedback
              </label>
              <select
                id="type"
                name="type"
                value={form.type}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 transition-colors focus:border-blue-500 focus:outline-none md:px-5 md:py-4"
              >
                <option value="sugestao">Sugestão de melhoria</option>
                <option value="problema">Reportar um problema</option>
                <option value="elogio">Elogio ou feedback positivo</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 md:text-base">
                Seu nome (opcional)
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Como você gostaria de ser chamado?"
                className="mt-2 w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none md:px-5 md:py-4"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 md:text-base">
                Seu email (opcional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="seu.email@exemplo.com"
                className="mt-2 w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none md:px-5 md:py-4"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 md:text-base">
                Sua mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Conte-nos o que você pensa sobre o Utilinks. Seja detalhado!"
                rows={6}
                className="mt-2 w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none md:px-5 md:py-4"
              />
            </div>

            {/* Error message */}
            {form.error && (
              <div className="flex items-start gap-3 rounded-xl bg-red-50 p-4 md:p-5">
                <AlertCircle size={24} className="mt-0.5 flex-shrink-0 text-red-600" />
                <p className="text-sm text-red-800 md:text-base">{form.error}</p>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={form.isSubmitting}
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 font-bold text-white transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 md:py-5 md:text-lg flex items-center justify-center gap-2"
            >
              <Send size={20} />
              {form.isSubmitting ? 'Enviando...' : 'Enviar feedback'}
            </button>

            {/* Info text */}
            <div className="rounded-xl bg-blue-50 p-4 md:p-5">
              <p className="text-xs text-blue-800 md:text-sm leading-relaxed">
                Seu feedback é importante e nos ajuda a melhorar o Utilinks. Leia atentamente antes
                de enviar e seja o mais específico possível. Todos os feedbacks são analisados pela
                equipe responsável pelo Utilinks.
              </p>
            </div>
          </form>
        )}
      </main>

      {/* CTA Section */}
      <section className="border-t border-gray-200 bg-white px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Outras maneiras de nos contatar
          </h2>
          <p className="mt-3 text-gray-700 md:text-lg">
            Tem dúvidas ou precisa de mais informações? Aqui estão algumas opções:
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border-2 border-gray-200 bg-gray-50 p-5 md:p-6">
              <h3 className="font-bold text-gray-900 md:text-lg">Página "Sobre"</h3>
              <p className="mt-2 text-sm text-gray-700">
                Encontre informações sobre segurança, privacidade e perguntas frequentes.
              </p>
            </div>

            <div className="rounded-xl border-2 border-gray-200 bg-gray-50 p-5 md:p-6">
              <h3 className="font-bold text-gray-900 md:text-lg">Tutorial</h3>
              <p className="mt-2 text-sm text-gray-700">
                Aprenda passo a passo como usar o Utilinks e encontre respostas rápidas.
              </p>
            </div>

            <div className="rounded-xl border-2 border-gray-200 bg-gray-50 p-5 md:p-6">
              <h3 className="font-bold text-gray-900 md:text-lg">Prefeitura de Açailândia</h3>
              <p className="mt-2 text-sm text-gray-700">
                Entre em contato com a Prefeitura para assuntos relacionados a serviços públicos.
              </p>
            </div>

            <div className="rounded-xl border-2 border-gray-200 bg-gray-50 p-5 md:p-6">
              <h3 className="font-bold text-gray-900 md:text-lg">Equipe do Utilinks</h3>
              <p className="mt-2 text-sm text-gray-700">
                Estamos sempre prontos para ajudar com dúvidas técnicas e sugestões.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 px-4 py-8 text-center text-white md:px-8">
        <p className="text-sm md:text-base">
          Obrigado por ajudar a melhorar o Utilinks para toda a comunidade de Açailândia
        </p>
      </footer>
    </div>
  );
}
