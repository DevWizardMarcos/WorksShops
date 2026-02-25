# WorksShops

🌐 **Live site:** [https://devwizardmarcos.github.io/WorksShops/](https://devwizardmarcos.github.io/WorksShops/)

A Vite/React application.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+
- [pnpm](https://pnpm.io/) 10+

### Install dependencies

```bash
pnpm install
```

### Run in development mode

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`.

## Deploy to GitHub Pages

Deployment happens automatically via GitHub Actions on every push to the `main` branch.

The workflow (`.github/workflows/deploy-github-pages.yml`) will:
1. Install dependencies with pnpm
2. Build the frontend with Vite
3. Publish the `dist/public` directory to GitHub Pages

To trigger a manual deploy, push a commit to `main`.
