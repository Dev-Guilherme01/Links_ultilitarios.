# Utilinks

Um portal centralizado de servicos publicos para a cidade de Acailandia, Maranhao.
Desenvolvido para facilitar o acesso da populacao aos servicos governamentais municipais, estaduais e federais.

---

## Visao Geral

O **Utilinks** e um aplicativo web responsivo que organiza e centraliza links para servicos publicos oficiais em uma unica interface intuitiva e acessivel. O projeto foi criado com o objetivo de simplificar o dia a dia dos cidadaos, removendo a necessidade de procurar em multiplos sites diferentes para encontrar servicos essenciais.

### Principais Recursos

- **Interface Intuitiva**: Design limpo e organizado com categorias visuais claras
- **Totalmente Responsivo**: Funciona perfeitamente em dispositivos moveis, tablets e desktops
- **9 Categorias de Servicos**: Educacao, Saude, Documentos, Trabalho, Impostos, Transporte, Assistencia Social, Habitacao e Utilidades
- **Acesso Rapido**: Links diretos para servicos oficiais sem intermediarios
- **Tutorial Integrado**: Guia passo a passo sobre como usar o aplicativo
- **Secao Sobre**: Informacoes detalhadas sobre seguranca, privacidade e confiabilidade
- **Sistema de Feedback**: Formulario para reportar problemas e enviar sugestoes
- **Sem Coleta de Dados**: O aplicativo nao armazena nenhuma informacao pessoal do usuario

---

## Demonstracao

O Utilinks oferece uma experiencia de usuario simples e direta:

1. O usuario acessa o site e visualiza uma grade com 9 categorias coloridas
2. Ao clicar em uma categoria, ve todos os servicos disponiveis nela
3. Clica no servico desejado e e redirecionado diretamente para o site oficial
4. Pode usar o tutorial para aprender a navegar pelo app
5. Pode enviar feedback para reportar problemas ou sugerir melhorias

---

## Tecnologias Utilizadas

Este projeto foi desenvolvido com tecnologias modernas e amplamente utilizadas no mercado:

- **React 18** - Biblioteca JavaScript para construcao de interfaces de usuario
- **TypeScript** - Superset do JavaScript com tipagem estatica
- **Vite** - Build tool moderna e rapida para projetos web
- **Tailwind CSS** - Framework CSS utilitario para estilizacao rapida e responsiva
- **Lucide React** - Biblioteca de icones SVG
- **Supabase** - Backend as a Service para futuras funcionalidades (autenticacao e banco de dados)

### Requisitos do Sistema

- Node.js versao 18.0 ou superior
- npm versao 9.0 ou superior (ou yarn/pnpm equivalente)
- Navegador web moderno (Chrome, Firefox, Safari, Edge)

---

## Instalacao e Execucao

Siga os passos abaixo para executar o projeto localmente:

### 1. Clone o repositorio

```bash
git clone https://github.com/seu-usuario/utilinks.git
cd utilinks
```

### 2. Instale as dependencias

```bash
npm install
```

### 3. Configure as variaveis de ambiente (opcional)

Crie um arquivo `.env` na raiz do projeto se desejar usar recursos avancados:

```env
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima_supabase
```

O aplicativo funciona perfeitamente sem configuracoes adicionais para uso basico.

### 4. Execute o servidor de desenvolvimento

```bash
npm run dev
```

O aplicativo estara disponivel em: `http://localhost:5173`

### 5. Build para producao

```bash
npm run build
```

Os arquivos otimizados serao gerados na pasta `dist/`.

Para visualizar o build de producao localmente:

```bash
npm run preview
```

---

## Estrutura do Projeto

```
utilinks/
├── public/                  # Arquivos estaticos publicos
├── src/
│   ├── components/          # Componentes React
│   │   ├── About.tsx        # Pagina sobre o app
│   │   ├── CategoryCard.tsx # Card individual de categoria
│   │   ├── CategoryDetail.tsx # Detalhes de uma categoria
│   │   ├── Feedback.tsx     # Formulario de feedback
│   │   ├── Home.tsx         # Pagina inicial com grade
│   │   └── Tutorial.tsx     # Tutorial passo a passo
│   ├── App.tsx              # Componente principal com navega
│   ├── data.ts              # Dados das categorias e servicos
│   ├── index.css            # Estilos globais
│   ├── main.tsx             # Ponto de entrada da aplic
│   └── types.ts             # Definicoes de tipos TypeScript
├── .env                     # Variaveis de ambiente
├── package.json             # Dependencias e scripts
├── tailwind.config.js       # Configura do Tailwind CSS
├── tsconfig.json            # Configura do TypeScript
└── vite.config.ts           # Configura do Vite
```

---

## Scripts Disponiveis

| Comando           | Descricao                                              |
|-------------------|--------------------------------------------------------|
| `npm run dev`     | Inicia o servidor de desenvolvimento                    |
| `npm run build`   | Gera build de prod otimizado                           |
| `npm run preview` | Visualiza build de prod localmente                     |
| `npm run lint`    | Executa o linter para verificar qualidade do codigo    |

---

## Funcionalidades por Aba

### Aba "Inicio"
- Grade visual com 9 categorias de servicos publicos
- Cards interativos com cores distintivas
- Navegacao direta para os servicos ao clicar

### Aba "Como usar?"
- Tutorial com 6 passos detalhados
- Ilustracoes e explicacoes claras
- Secao de dicas importantes
- Perguntas frequentes (FAQ)

### Aba "Sobre"
- Explicacao completa sobre o que e o Utilinks
- Como o app facilita a vida da populacao
- Informacoes detalhadas sobre seguranca e privacidade
- Razoes para confiar no aplicativo
- FAQ expandido com 6 perguntas

### Aba "Feedback"
- Formulario para enviar feedback
- 4 tipos de feedback: Sugestao, Problema, Elogio ou Outro
- Campos opcionais para nome e email
- Validacao de dados
- Mensagem de confirmacao apos envio

---

## Seguranca e Privacidade

O Utilinks foi desenvolvido com foco total em seguranca:

- **Nenhum dado e coletado**: O app nao armazena informacoes pessoais
- **Sem rastreamento**: Nao utilizamos cookies de terceiros ou analytics invasivos
- **Links oficiais**: Apenas links verificados de servicos governamentais oficiais
- **Transparencia total**: O usuario sempre sabe para onde esta indo
- **Sem intermediarios**: Os usuarios acessam diretamente os servicos oficiais

---

## Design e Experiencia do Usuario

O projeto segue principios modernos de design:

- **Responsividade**: Adapta-se a qualquer tamanho de tela (mobile, tablet, desktop)
- **Acessibilidade**: Alto contraste, fontes legiveis e navegacao intuitiva
- **Performance**: Carregamento rapido e otimizado
- **Minimalismo**: Interface limpa sem distracoes desnecessarias
- **Feedback visual**: Animacoes sutis e estados de hover para melhor intera

---

## Contribuindo

Contribuicoes sao bem-vindas! Para contribuir:

1. Faca um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Faca commit das suas mudancas (`git commit -m 'Adiciona NovaFeature'`)
4. Faca push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

---

## Roadmap e Futuras Melhorias

O projeto esta em desenvolvimento ativo. Proximos passos planejados:

- [ ] Integracao com banco de dados para salvar feedbacks
- [ ] Sistema de autenticacao opcional para usuarios
- [ ] Painel administrativo para gerenciar servicos
- [ ] Busca e filtros de servicos
- [ ] Notificacoes sobre atualizacoes de servicos
- [ ] Modo escuro (dark mode)
- [ ] Internacionalizacao (i18n) para outros idiomas
- [ ] PWA (Progressive Web App) para uso offline

---

## Licenca

Este projeto esta sob a licenca MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## Autor

Desenvolvido para a comunidade de Acailandia, Maranhao.

---

## Contato e Suporte

- Use a aba **Feedback** no proprio aplicativo para reportar problemas
- Para questoes urgentes relacionadas a servicos publicos, entre em contato diretamente com os orgaos oficiais

---

## Agradecimentos

Agradecemos a todos os cidadaos de Acailandia que inspiraram a criacao deste projeto, e a todos que contribuem para melhora-lo continuamente.

---

**Utilinks** - Servicos publicos de Acailandia ao alcance de todos.
