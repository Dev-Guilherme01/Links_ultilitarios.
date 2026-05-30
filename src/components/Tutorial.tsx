import { CheckCircle, Home as HomeIcon, MousePointer, ExternalLink, Info, MessageSquare } from 'lucide-react';

interface TutorialProps {
  onNavigate?: (tab: string) => void;
}

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ size: number }>;
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Abra o Utilinks',
    description: 'Acesse o site ou aplicativo Utilinks em seu celular ou computador. Você verá uma tela com 9 categorias coloridas de serviços públicos.',
    icon: HomeIcon,
  },
  {
    id: 2,
    title: 'Escolha uma categoria',
    description: 'Clique em qualquer card (aquela caixinha colorida) que corresponda ao serviço que você procura. Por exemplo: clique em "Educação" se precisa acessar inscrições no ENEM.',
    icon: MousePointer,
  },
  {
    id: 3,
    title: 'Veja os serviços disponíveis',
    description: 'Depois de clicar, você verá uma lista de serviços dentro daquela categoria. Cada um tem um nome, uma descrição do que faz, e um botão para acessar.',
    icon: CheckCircle,
  },
  {
    id: 4,
    title: 'Clique no serviço desejado',
    description: 'Escolha o serviço específico que você precisa. Clique nele e você será levado direto para o site oficial do serviço. Pode pedir sua senha ou documento — isso é normal.',
    icon: ExternalLink,
  },
  {
    id: 5,
    title: 'Finalize o que você precisa',
    description: 'No site oficial, siga as instruções para fazer o que você precisa: pagar conta, fazer inscrição, agendar, consultar documentos, etc.',
    icon: CheckCircle,
  },
  {
    id: 6,
    title: 'Volte ao Utilinks',
    description: 'Se precisar de outro serviço, clique em "Voltar" para retornar à lista de categorias e escolha outro card. É simples assim!',
    icon: HomeIcon,
  },
];

export default function Tutorial({ onNavigate }: TutorialProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Header */}
      <header className="bg-[#0D2B5E] px-4 py-8 text-center md:px-6 md:py-12">
        <h1 className="text-3xl font-extrabold text-white md:text-4xl">Como usar o Utilinks?</h1>
        <p className="mt-2 text-blue-200 md:text-base">Siga estas etapas simples para encontrar os serviços que você precisa</p>
      </header>

      {/* Steps */}
      <main className="mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-6 md:gap-8 lg:gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="flex gap-4 md:gap-6">
                {/* Number circle */}
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 font-bold text-white shadow-lg md:h-14 md:w-14">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-start gap-2 md:gap-3">
                    <Icon size={24} className="mt-1 flex-shrink-0 text-blue-600 md:mt-0" />
                    <div className="flex-1">
                      <h2 className="text-lg font-bold text-gray-900 md:text-xl">{step.title}</h2>
                      <p className="mt-2 leading-relaxed text-gray-700 md:mt-3 md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="ml-6 mt-4 h-8 border-l-2 border-blue-300 md:ml-7 md:h-10" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tips section */}
        <div className="mt-12 rounded-2xl bg-blue-50 p-6 md:mt-16 md:p-8 md:shadow-lg">
          <div className="flex gap-4 md:gap-5">
            <Info size={28} className="mt-1 flex-shrink-0 text-blue-600" />
            <div>
              <h3 className="text-lg font-bold text-blue-900 md:text-xl">Dicas importantes</h3>
              <ul className="mt-3 space-y-2 text-sm text-blue-800 md:text-base">
                <li>✓ Não tem pressa? Use quando quiser, sem limite de tempo.</li>
                <li>✓ Pode usar no seu celular, tablet ou computador — funciona em todos!</li>
                <li>✓ Se não achar o serviço que procura, volte e tente outra categoria.</li>
                <li>✓ Guarde o site nos favoritos para acessar mais rápido depois.</li>
                <li>✓ Se tiver dúvida sobre como usar um serviço, procure sua documentação oficial no site.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div className="mt-12 md:mt-16">
          <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">Perguntas frequentes</h3>

          <div className="mt-6 space-y-4 md:space-y-5">
            <details className="group cursor-pointer rounded-xl border-2 border-gray-200 bg-white p-4 md:p-6 transition-all hover:border-blue-300">
              <summary className="flex items-center justify-between font-semibold text-gray-900 md:text-lg">
                <span>O Utilinks cobra alguma taxa?</span>
                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-3 text-gray-700 md:text-base">
                Não! O Utilinks é completamente gratuito. Ele apenas reúne links dos serviços oficiais do governo.
                Os serviços podem ter suas próprias taxas, mas isso vem diretamente deles, não de nós.
              </p>
            </details>

            <details className="group cursor-pointer rounded-xl border-2 border-gray-200 bg-white p-4 md:p-6 transition-all hover:border-blue-300">
              <summary className="flex items-center justify-between font-semibold text-gray-900 md:text-lg">
                <span>Meus dados ficarão seguros?</span>
                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-3 text-gray-700 md:text-base">
                Sim. O Utilinks não armazena seus dados. Quando você clica em um serviço, vai direto para o site oficial.
                Qualquer informação que você fornecer fica com o serviço oficial, não conosco.
              </p>
            </details>

            <details className="group cursor-pointer rounded-xl border-2 border-gray-200 bg-white p-4 md:p-6 transition-all hover:border-blue-300">
              <summary className="flex items-center justify-between font-semibold text-gray-900 md:text-lg">
                <span>Funciona em todos os dispositivos?</span>
                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-3 text-gray-700 md:text-base">
                Sim! O Utilinks funciona em celulares, tablets e computadores. Você pode acessar de qualquer lugar
                que tenha internet.
              </p>
            </details>

            <details className="group cursor-pointer rounded-xl border-2 border-gray-200 bg-white p-4 md:p-6 transition-all hover:border-blue-300">
              <summary className="flex items-center justify-between font-semibold text-gray-900 md:text-lg">
                <span>E se eu esquecer minha senha?</span>
                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-3 text-gray-700 md:text-base">
                O Utilinks não é um site de login — ele é só um organizador de links. Se esquecer a senha de um
                serviço específico, clique nele e procure o link "Esqueci minha senha" dentro do próprio site.
              </p>
            </details>
          </div>
        </div>

        {/* CTA - Feedback */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-center text-white md:mt-16 md:p-8">
          <MessageSquare size={40} className="mx-auto mb-4 md:h-12 md:w-12" />
          <h2 className="text-2xl font-bold md:text-3xl">Encontrou um problema?</h2>
          <p className="mt-3 text-base text-blue-100 md:text-lg">
            Use a aba "Feedback" para reportar erros ou sugerir melhorias. Sua contribuição ajuda a melhorar o Utilinks!
          </p>
          <button
            onClick={() => onNavigate?.('feedback')}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition-all hover:shadow-lg hover:scale-[1.05] active:scale-[0.98] md:px-8 md:py-4 md:text-lg"
          >
            <MessageSquare size={20} />
            Ir para Feedback
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0D2B5E] px-4 py-6 text-center md:py-8">
        <p className="text-sm text-blue-200 md:text-base">
          Ajude a melhorar o Utilinks compartilhando suas sugestões e reportando problemas.
        </p>
      </footer>
    </div>
  );
}
