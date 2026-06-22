import type { Category } from './types';

export const categories: Category[] = [
  {
    id: 'segunda-via',
    title: '2ª Via',
    description: 'Contas de água, energia, internet e título de eleitor.',
    color: '#1565C0',
    lightColor: '#E3F2FD',
    icon: 'receipt',
    services: [
      {
        id: 'jupiter',
        name: 'Júpiter (Internet)',
        description: '2ª via do boleto de internet',
        url: 'https://cliente.jupiter.com.br/login?redirect=faturas',
      },
      {
        id: 'saae',
        name: 'SAAE (Água)',
        description: '2ª via da conta de água',
        url: 'https://saae.acailandia.ma.gov.br/',
      },
      {
        id: 'equatorial',
        name: 'Equatorial (Energia)',
        description: '2ª via do boleto de energia elétrica',
        url: 'https://ma.equatorialenergia.com.br/siteantigo/sua-conta/emitir-segunda-via/',
      },
      {
        id: 'titulo-eleitor',
        name: 'Título de Eleitor',
        description: '2ª via do título de eleitor',
        url: 'https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/?id=1782171545995',
      },
    ],
  },
  {
    id: 'educacao',
    title: 'Educação',
    description: 'Acesso a programas, exames, faculdades e livros.',
    color: '#2E7D32',
    lightColor: '#E8F5E9',
    icon: 'graduation-cap',
    services: [
      {
        id: 'fies',
        name: 'FIES',
        description: 'Fundo de Financiamento Estudantil',
        url: 'https://acessounico.mec.gov.br/fies',
      },
      {
        id: 'enem',
        name: 'MEC (INEP) – ENEM',
        description: 'Informações e inscrições no ENEM',
        url: 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem',
      },
      {
        id: 'sisu',
        name: 'SISU',
        description: 'Sistema de Seleção Unificada',
        url: 'https://sisu.mec.gov.br',
      },
      {
        id: 'prouni',
        name: 'PROUNI',
        description: 'Programa Universidade para Todos',
        url: 'https://acessounico.mec.gov.br/prouni',
      },
      {
        id: 'mec-livros',
        name: 'MEC Livros',
        description: 'Biblioteca Digital gratuita',
        url: 'https://plataformaintegrada.mec.gov.br',
      },
      {
        id: 'faculdade-vale-aco',
        name: 'Faculdade Vale do Aço',
        description: 'Portal do aluno e AVA',
        url: 'https://ensino.favale.edu.br/',
      },
    ],
  },
  {
    id: 'documentacao',
    title: 'Documentação',
    description: 'Detran, TSE e antecedentes criminais.',
    color: '#6A1B9A',
    lightColor: '#F3E5F5',
    icon: 'id-card',
    services: [
      {
        id: 'detran',
        name: 'Detran (MA)',
        description: 'Serviços de trânsito do Maranhão',
        url: 'https://www.detran.ma.gov.br',
      },
      {
        id: 'tse',
        name: 'Tribunal Superior Eleitoral (TSE)',
        description: 'Título de eleitor e serviços eleitorais',
        url: 'https://www.tse.jus.br',
      },
      {
        id: 'antecedentes',
        name: 'Antecedentes Criminais',
        description: 'Emissão de certidão de antecedentes',
        url: 'https://www.gov.br/pf/pt-br/assuntos/antecedentes-criminais',
      },
    ],
  },
  {
    id: 'agendamentos',
    title: 'Agendamentos',
    description: 'Agendamentos e serviços públicos importantes.',
    color: '#004D40',
    lightColor: '#E0F2F1',
    icon: 'calendar-check',
    services: [
      {
        id: 'agendamento-rg',
        name: 'Agendamento RG / CIN',
        description: 'Emissão da identidade — agende seu horário',
        url: 'https://agendamento.ssp.ma.gov.br/',
      },
      {
        id: 'procon',
        name: 'Procon',
        description: 'Agendamento de atendimento ao consumidor',
        url: 'https://seati.segov.ma.gov.br/procon/agendamento/',
      },
      {
        id: 'outros-agendamentos',
        name: 'Outros Agendamentos',
        description: 'Serviços e atendimentos governamentais',
        url: 'https://www.gov.br/pt-br/servicos',
      },
    ],
  },
  {
    id: 'emprego',
    title: 'Emprego',
    description: 'Carteira de trabalho, INSS e oportunidades.',
    color: '#E65100',
    lightColor: '#FFF8E1',
    icon: 'briefcase',
    services: [
      {
        id: 'ctps',
        name: 'Carteira de Trabalho Digital',
        description: 'Acesse sua CTPS e veja vínculos empregatícios',
        url: 'https://www.gov.br/pt-br/temas/carteira-de-trabalho-digital',
      },
      {
        id: 'inss',
        name: 'Meu INSS',
        description: 'Aposentadoria, benefícios e extratos',
        url: 'https://meu.inss.gov.br',
      },
      {
        id: 'seguro-desemprego',
        name: 'Seguro Desemprego',
        description: 'Solicite e acompanhe o seguro desemprego',
        url: 'https://www.gov.br/pt-br/servicos/solicitar-o-seguro-desemprego',
      },
      {
        id: 'sine',
        name: 'SINE – Vagas de Emprego e Localização',
        description: 'Encontre vagas de emprego na sua região',
        url: 'https://www.trabalho.ma.gov.br/agencias-do-sine',
      },
    ],
  },  
];
