# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
e este projeto adere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-02-24

### Added

- Initial release
- Frontend with React 19 + TypeScript
- Backend com Express.js
- Componentes UI com Radix UI
- Tema dinâmico (light/dark)
- Integração com Google Maps
- Gráficos interativos com Recharts
- Formulários validados com Zod
- Animações com Framer Motion
- Responsividade mobile-first com TailwindCSS

### Infrastructure

- Vite build tool
- TypeScript type checking
- Prettier code formatting
- pnpm package manager

## [Unreleased]

Futuras mudanças serão documentadas aqui.

### Planned

- [ ] Testes unitários com Vitest
- [ ] CI/CD pipeline
- [ ] Otimizações de performance
- [ ] SEO improvements

---

## Guia para Manutenção deste Arquivo

- Adicione novos items no topo sob `[Unreleased]`
- Quando uma nova versão é lançada, renomeie `[Unreleased]` para `[X.Y.Z] - YYYY-MM-DD`
- Siga Semantic Versioning:
  - MAJOR quando há mudanças incompatíveis na API
  - MINOR quando há novas funcionalidades compatíveis
  - PATCH para correções de bugs
