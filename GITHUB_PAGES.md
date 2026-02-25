# 🚀 Deploy no GitHub Pages

Guia para hospedar seu site no GitHub Pages gratuitamente!

## 📋 Pré-requisitos

- Repositório no GitHub
- Git instalado
- Seu projeto já configurado com esse workflow

## ⚙️ Setup Inicial (uma única vez)

### 1. Ative GitHub Pages no seu Repositório

- Vá para: **Settings** → **Pages**
- Em "Source", selecione: **GitHub Actions**
- Salve

### 2. Configuração para Repositório Pessoal

Se seu repositório é `seu-usuario/seu-usuario.github.io`:

**O site será publicado em**: `https://seu-usuario.github.io`

Não é necessário alterar nada no código.

### 3. Configuração para Repositório de Projeto

Se seu repositório é `seu-usuario/infinity-school-lp`:

**O site será publicado em**: `https://seu-usuario.github.io/infinity-school-lp/`

#### ⚠️ Você precisa atualizar o vite.config.ts:

Abra `vite.config.ts` e encontre a seção `export default defineConfig({`:

```typescript
export default defineConfig({
  plugins,
  base: '/infinity-school-lp/',  // 👈 Adicione esta linha
  resolve: {
    // ... resto do código
  },
})
```

**Substitua `infinity-school-lp` pelo nome do seu repositório.**

---

## 🚀 Como Fazer Deploy

### Método 1: Automático (Recomendado)

Simplesmente faça push para a branch `main`:

```bash
git add .
git commit -m "seu commit aqui"
git push origin main
```

O workflow do GitHub Actions vai:
1. ✅ Fazer checkout do código
2. ✅ Instalar dependências
3. ✅ Fazer type check
4. ✅ Fazer build
5. ✅ Deploy automático para GitHub Pages

**Pronto!** Seu site estará disponível em ~2 minutos.

### Monitorar o Deploy

- Vá para: **Actions** no seu repositório
- Clique no workflow mais recente
- Veja o progresso em tempo real

---

## ✨ Features do Setup

- ✅ Build automático a cada push
- ✅ Type checking (TypeScript)
- ✅ Performance otimizado com Vite
- ✅ Deploy zero-downtime
- ✅ HTTPS automático
- ✅ CDN do GitHub (fast!)

---

## ⚡ Variáveis de Ambiente no GitHub Pages

Se seu site usa variáveis de ambiente (como Google Maps API):

### 1. Crie `.env.production` na raiz:

```env
VITE_API_URL=https://seu-usuario.github.io/infinity-school-lp
GOOGLE_MAPS_API_KEY=sua_chave_publica_aqui
```

⚠️ **Não commite dados secretos!** Use apenas chaves públicas ou APIs com acesso restrito.

### 2. Ou configure Secrets do GitHub:

- **Settings** → **Secrets and variables** → **Actions**
- Clique **New repository secret**
- Nome: `GOOGLE_MAPS_API_KEY`
- Valor: sua chave
- Add secret

Depois modifique o workflow para usar:
```yaml
- name: Build
  run: pnpm run build
  env:
    VITE_GOOGLE_MAPS_API_KEY: ${{ secrets.GOOGLE_MAPS_API_KEY }}
```

---

## 🔄 Atualizar o Site

Sempre que você quer atualizar:

```bash
# Faça suas mudanças
# Depois:
git add .
git commit -m "chore: atualizar site"
git push origin main

# Pronto! Deploy automático em segundos.
```

---

## 🆘 Troubleshooting

### Workflow falha com "Cannot find module"

```bash
# Localmente:
pnpm install
pnpm run check
pnpm run build
```

Se passar localmente mas falha no Actions, pode ser cache. Vá para **Actions** → **Clear all caches**.

### Site não aparece com styled (CSS branco)

Verifique se `base:` no `vite.config.ts` está correto:
- Repositório pessoal: `base: '/'`
- Repositório de projeto: `base: '/seu-repo-name/'`

### "404 - Page not found"

Verifique:
1. Settings → Pages → Source está em "GitHub Actions"
2. O workflow completou com sucesso (verde ✅)
3. Espere 2-3 minutos após o deploy
4. Limpe cache do browser (Ctrl+Shift+Delete)

### Build local funciona mas GitHub Actions falha

Possíveis causas:
- Dependências diferentes (`pnpm.lock` não atualizado)
- Versão do Node diferente

Solução:
```bash
rm pnpm-lock.yaml
pnpm install
git add pnpm-lock.yaml
git commit -m "chore: update lockfile"
git push
```

---

## 📊 Domínio Customizado (Opcional)

Se quiser usar seu próprio domínio:

1. Configure DNS apontando para GitHub Pages
2. Em **Settings** → **Pages** → **Custom domain**
3. Digite seu domínio
4. Confirme o DNS

---

## 🔐 HTTPS

GitHub Pages fornece HTTPS automaticamente:
- Domínio padrão (github.io): ✅ HTTPS automático
- Domínio customizado: Pode levar até 24h ⏳

---

## 📈 Limites do GitHub Pages

- Tamanho máximo: 1 GB por repositório
- Limite de build: 10 por hora
- Ideal para sites estáticos (<100 MB)

---

## 🎯 Checklist Final

- [ ] Repository está público
- [ ] Settings → Pages → Source = "GitHub Actions"
- [ ] `vite.config.ts` tem `base` correto
- [ ] `.github/workflows/deploy-github-pages.yml` existe
- [ ] Fez push para `main`
- [ ] ✅ primeiro Actions completou com sucesso

---

Seu site está online! 🎉

Para mais informações: [GitHub Pages Docs](https://docs.github.com/en/pages)
