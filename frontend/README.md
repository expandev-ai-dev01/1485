# Plutus - Sistema de Controle Financeiro Pessoal

Sistema de controle financeiro pessoal sem cadastro/login, permitindo registro de despesas, ganhos e análise em gráficos. Design em preto e dourado.

## Tecnologias

- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 6.26.2
- TanStack Query 5.59.20
- Zustand 5.0.1
- React Hook Form 7.53.1
- Zod 3.23.8

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── main.tsx           # Entry point
│   ├── App.tsx            # Componente raiz
│   ├── providers.tsx      # Providers globais
│   └── router.tsx         # Configuração de rotas
├── pages/                 # Páginas da aplicação
│   ├── layouts/          # Layouts compartilhados
│   ├── Dashboard/        # Página principal
│   └── NotFound/         # Página 404
├── domain/               # Domínios de negócio
├── core/                 # Componentes e utilitários core
│   ├── components/       # Componentes genéricos
│   ├── lib/             # Configurações de bibliotecas
│   ├── utils/           # Utilitários
│   └── types/           # Tipos globais
└── assets/              # Assets estáticos
    └── styles/          # Estilos globais
```

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:3000

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Características

- ✅ Sem necessidade de cadastro ou login
- ✅ Armazenamento local (localStorage)
- ✅ Design elegante em preto e dourado
- ✅ Registro de despesas e receitas
- ✅ Visualização de gráficos
- ✅ Cálculo de balanço financeiro
- ✅ Interface responsiva

## Privacidade

Todos os dados são armazenados localmente no dispositivo do usuário. Nenhuma informação é enviada para servidores externos.