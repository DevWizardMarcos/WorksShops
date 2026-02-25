# Infinity School LP

Uma landing page moderna e responsiva para Infinity School, construída com React, TypeScript, Express e TailwindCSS.

## 📋 Características

- ⚡ **Performance otimizada** com Vite
- 🎨 **UI moderna** com Radix UI components
- 🌙 **Tema dinâmico** (light/dark)
- 📱 **Totalmente responsivo** - Mobile first
- 🎬 **Animações fluidas** com Framer Motion
- 🗺️ **Integração com Google Maps**
- 📊 **Gráficos interativos** com Recharts
- 🔧 **Type-safe** com TypeScript
- 🗂️ **Formulários validados** com React Hook Form e Zod
- 🚀 **Backend escalável** com Express

## 🛠️ Stack Tecnológico

### Frontend
- **React 19** - UI library
- **Vite** - Build tool
- **TypeScript** - Type safety
- **TailwindCSS 4** - Styling
- **Radix UI** - Component library
- **Framer Motion** - Animations
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Wouter** - Routing
- **Recharts** - Data visualization

### Backend
- **Express.js** - Server framework
- **Node.js** - Runtime
- **TypeScript** - Type safety

### Package Manager
- **pnpm** - Fast, disk space efficient package manager

## 📦 Pré-requisitos

- **Node.js** >= 18.x
- **pnpm** >= 10.x (ou npm/yarn)

## 🚀 Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/infinity-school-lp.git
cd infinity-school-lp
```

2. Instale as dependências
```bash
pnpm install
```

## 💻 Desenvolvimento

Inicie o servidor de desenvolvimento:
```bash
pnpm run dev
```

O projeto será aberto em `http://localhost:5173` (frontend) com hot reload habilitado.

Comandos disponíveis:
- `pnpm run dev` - Inicia o servidor de desenvolvimento
- `pnpm run build` - Build para produção
- `pnpm run start` - Executa a build em produção
- `pnpm run preview` - Preview da build
- `pnpm run check` - Verifica tipos TypeScript
- `pnpm run format` - Formata código com Prettier

## 📁 Estrutura do Projeto

```
.
├── client/                 # Frontend React
│   ├── index.html         # Entry HTML
│   ├── public/            # Assets públicos
│   └── src/
│       ├── components/    # Componentes React
│       │   ├── ui/       # Componentes base (Radix UI)
│       │   ├── Map.tsx
│       │   └── ...
│       ├── contexts/     # Context API
│       ├── hooks/        # Custom hooks
│       ├── lib/          # Utilities
│       ├── pages/        # Page components
│       ├── App.tsx       # Root component
│       └── main.tsx      # Entry point
├── server/                # Backend Express
│   └── index.ts          # Server entry
├── shared/                # Código compartilhado
│   └── const.ts          # Constantes
├── package.json           # Dependencies
├── vite.config.ts        # Vite config
├── tsconfig.json         # TypeScript config
└── tailwind.config.js    # TailwindCSS config
```

## 🔨 Build para Produção

```bash
pnpm run build
```

Isso gera:
- Build otimizada do frontend em `dist/client`
- Bundle do server em `dist/index.js`

## 🚀 Executar em Produção

```bash
pnpm run start
```

## 🌍 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto (não commitado):
```env
VITE_API_URL=sua_url_aqui
GOOGLE_MAPS_API_KEY=sua_chave_aqui
```

## 📝 Convenções de Código

- **TypeScript** - Type safety obrigatório
- **Prettier** - Formatação automática
- **Componentes** - Base em Radix UI
- **Hooks** - Uso de React Hooks pattern

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📞 Contato

Para dúvidas ou sugestões, abra uma issue no repositório.

---

Desenvolvido com ❤️ para Infinity School
