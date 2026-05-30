import {
  Shield,
  Lock,
  Eye,
  Zap,
  Users,
  Clock,
  CheckCircle,
  Globe,
  Award,
  Heart,
  MessageSquare,
} from 'lucide-react';

interface AboutProps {
  onNavigate?: (tab: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-700 px-4 py-12 text-center text-white md:px-8 md:py-20">
        <h1 className="text-4xl font-extrabold md:text-5xl">Sobre o Utilinks</h1>
        <p className="mt-4 text-lg text-blue-100 md:text-xl">
          Simplicidade e segurança para acessar os serviços públicos do seu município
        </p>
      </section>

      {/* Main content */}
      <main className="mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-16">
        {/* What is Utilinks */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">O que é o Utilinks?</h2>
          <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
            <p className="mb-4 text-base text-gray-700 leading-relaxed md:text-lg">
              O Utilinks é um site criado para <strong>facilitar sua vida</strong> na hora de acessar
              serviços públicos. Em vez de procurar de site em site (e às vezes ficar perdido!),
              aqui você encontra tudo em um único lugar.
            </p>
            <p className="text-base text-gray-700 leading-relaxed md:text-lg">
              Somos um <strong>organizador de links</strong> — nada mais. Não fazemos nada além de
              reunir os links dos serviços oficiais do governo em um local fácil, claro e bem
              organizado, pensado especialmente para que qualquer pessoa, mesmo sem muito
              conhecimento técnico, possa usar.
            </p>
          </div>
        </section>

        {/* How it helps */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Como o Utilinks facilita sua vida</h2>
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {[
              {
                icon: Zap,
                title: 'Acesso rápido',
                description: 'Tudo em um só lugar. Sem precisa procurar em vários sites diferentes.',
              },
              {
                icon: Users,
                title: 'Simples para todos',
                description:
                  'Interface clara e entendível, feita para pessoas de todas as idades e níveis de conhecimento.',
              },
              {
                icon: Clock,
                title: 'Economiza tempo',
                description:
                  'Clique, acesse o serviço e pronto. Sem distrações, sem anúncios, sem perder tempo.',
              },
              {
                icon: Globe,
                title: 'Funciona em qualquer lugar',
                description: 'Use no celular, tablet ou computador. Sempre disponível, sempre pronto.',
              },
              {
                icon: CheckCircle,
                title: 'Confiável',
                description: 'Links diretos para os serviços oficiais do governo. Nada falso ou duvidoso.',
              },
              {
                icon: Heart,
                title: 'Gratuito',
                description:
                  'Sem custo algum. O Utilinks é oferecido gratuitamente para toda a comunidade de Açailândia.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="rounded-xl bg-white p-5 shadow-md hover:shadow-lg transition-shadow">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                      <Icon size={24} className="text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 md:text-lg">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed md:text-base">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Security Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Segurança e privacidade</h2>
          <div className="space-y-5 md:space-y-6">
            {[
              {
                icon: Lock,
                title: 'Seus dados estão seguros',
                description:
                  'O Utilinks NÃO armazena nenhuma informação sua — nem nome, nem CPF, nem nada. Quando você clica em um serviço e vai acessá-lo, seus dados ficam com o serviço oficial, não conosco. Simples assim.',
              },
              {
                icon: Eye,
                title: 'Sem rastreamento',
                description:
                  'Não rastreamos o que você faz. Não vendemos seus dados. Não temos publicidade invasiva. Você usa o site, encontra o que precisa e pronto.',
              },
              {
                icon: Shield,
                title: 'Links oficiais apenas',
                description:
                  'Todos os links que estão aqui são diretos dos sites oficiais do governo municipal, estadual e federal. Nada falso, nada fraudulento, apenas o que é legítimo.',
              },
              {
                icon: Award,
                title: 'Transparência total',
                description:
                  'Você sempre sabe para onde está indo. Antes de clicar em qualquer link, você vê o nome do serviço e uma descrição do que ele faz. Sem surpresas desagradáveis.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="rounded-xl bg-blue-50 p-6 md:p-7">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-200">
                      <Icon size={24} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-blue-900 md:text-lg">{item.title}</h3>
                      <p className="mt-2 text-sm text-blue-800 leading-relaxed md:text-base">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Trust & Confidence */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Por que confiar no Utilinks?</h2>
          <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-6 md:p-8 border-2 border-green-200">
            <div className="space-y-4 md:space-y-5">
              <div className="flex gap-4">
                <CheckCircle size={28} className="flex-shrink-0 text-green-600 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 md:text-lg">Criado pela comunidade</h3>
                  <p className="mt-1 text-sm text-gray-700 md:text-base">
                    O Utilinks foi criado com o objetivo de facilitar a vida das pessoas de Açailândia. Não é um
                    serviço de uma empresa privada tentando ganhar dinheiro com você.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle size={28} className="flex-shrink-0 text-green-600 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 md:text-lg">Links diretos do governo</h3>
                  <p className="mt-1 text-sm text-gray-700 md:text-base">
                    Todos os serviços listados aqui são oficiais. Você não vai cair em sites falsos ou duvidosos.
                    Tudo que está aqui é verificado e confiável.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle size={28} className="flex-shrink-0 text-green-600 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 md:text-lg">Sem intermediários</h3>
                  <p className="mt-1 text-sm text-gray-700 md:text-base">
                    O Utilinks é só um atalho. Você vai direto para o serviço que precisa. Não pedimos seus dados,
                    não pedimos senhas, não fazemos nada a não ser mostrar o caminho.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle size={28} className="flex-shrink-0 text-green-600 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 md:text-lg">Mantido atualizado</h3>
                  <p className="mt-1 text-sm text-gray-700 md:text-base">
                    Os serviços e links são mantidos atualizados regularmente para garantir que você sempre tenha
                    acesso aos endereços corretos.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle size={28} className="flex-shrink-0 text-green-600 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 md:text-lg">Suporte transparente</h3>
                  <p className="mt-1 text-sm text-gray-700 md:text-base">
                    Se encontrar um link quebrado ou um serviço desatualizado, você pode reportar para que a gente
                    corrija. Seu feedback ajuda a manter o Utilinks cada vez melhor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Dúvidas frequentes</h2>
          <div className="space-y-4 md:space-y-5">
            {[
              {
                q: 'O Utilinks cobra alguma taxa?',
                a: 'Não! O Utilinks é completamente gratuito. Nunca vamos cobrar. Alguns dos serviços que listamos podem ter suas próprias taxas (por exemplo, uma segunda via de conta pode custar alguns reais), mas isso vem do serviço em si, não de nós.',
              },
              {
                q: 'Se eu colocar meus dados aqui, eles estão seguros?',
                a: 'O Utilinks não é um lugar para você colocar dados. Você só clica nos links e vai para o site oficial. Qualquer dado que você fornecer fica com o serviço oficial, não conosco. Nós não armazenamos nada.',
              },
              {
                q: 'Posso usar em meu celular?',
                a: 'Com certeza! O Utilinks funciona perfeitamente em celulares, tablets e computadores. A interface se adapta automaticamente ao seu dispositivo.',
              },
              {
                q: 'E se o site cair ou ficar fora do ar?',
                a: 'O Utilinks é hospedado em servidores confiáveis e está disponível 24 horas. Mas se por algum motivo ficar fora, você ainda pode acessar os serviços direto pelos links que você memorizar ou procurar em um mecanismo de busca.',
              },
              {
                q: 'Como posso reportar um link quebrado?',
                a: 'Se encontrar um link que não está funcionando ou informação desatualizada, acesse a aba "Feedback" e envie um relatório. Nossa equipe analisará e corrigirá o problema rapidamente.',
              },
              {
                q: 'O Utilinks é oficial?',
                a: 'O Utilinks é um projeto criado para facilitar o acesso aos serviços oficiais. Os serviços listados são oficiais, mas o Utilinks em si é um atalho criado para a comunidade.',
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="group cursor-pointer rounded-xl border-2 border-gray-200 bg-white p-4 transition-all hover:border-blue-300 md:p-6"
              >
                <summary className="flex items-center justify-between font-semibold text-gray-900 md:text-lg">
                  <span>{item.q}</span>
                  <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-sm text-gray-700 leading-relaxed md:text-base">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8 text-center text-white md:px-10 md:py-12">
          <h2 className="text-2xl font-bold md:text-3xl">Comece a usar agora mesmo</h2>
          <p className="mt-3 text-base text-blue-100 md:text-lg">
            Clique no botão "Início" acima e encontre o serviço que você precisa.
          </p>
          <p className="mt-2 text-sm text-blue-200 md:text-base">
            Rápido, seguro e sem complicações.
          </p>
        </section>
      </main>

      {/* CTA - Feedback */}
      <section className="border-t border-gray-200 bg-blue-50 px-4 py-8 md:px-8 md:py-12">
        <div className="mx-auto max-w-2xl text-center">
          <MessageSquare size={40} className="mx-auto mb-4 text-blue-600" />
          <h2 className="text-2xl font-bold text-blue-900 md:text-3xl">
            Tem alguma sugestão?
          </h2>
          <p className="mt-3 text-base text-blue-800 md:text-lg">
            Sua opinião é valiosa! Use a aba "Feedback" para reportar problemas, sugerir melhorias ou deixar elogios.
          </p>
          <button
            onClick={() => onNavigate?.('feedback')}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:shadow-lg hover:scale-[1.05] active:scale-[0.98] md:px-8 md:py-4 md:text-lg"
          >
            <MessageSquare size={20} />
            Ir para Feedback
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white px-4 py-8 text-center md:px-8">
        <p className="text-sm text-gray-600">
          Utilinks – Serviços públicos de Açailândia ao alcance de todos
        </p>
        <p className="mt-2 text-xs text-gray-500">
          Mantido com dedicação para facilitar sua vida
        </p>
      </footer>
    </div>
  );
}
