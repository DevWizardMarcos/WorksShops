# 🤝 Guia de Contribuição

Obrigado por considerar contribuir para o Infinity School LP! Este documento fornece diretrizes e instruções para contribuir.

## Code of Conduct

Por favor, note que este projeto é lançado com um [Código de Conduta](CODE_OF_CONDUCT.md). Ao participar neste projeto, você concorda em cumprir seus termos.

## Como Contribuir

### Reportando Bugs

Antes de criar um relatório de bug, verifique a lista de issues pois você já pode encontrar uma solução ou ver que o erro já foi reportado.

Ao reportar um bug, inclua:
- **Título descritivo**
- **Descrição clara** do problema
- **Steps para reproduzir** o problema
- **Exemplo específico** que demonstra o problema
- **Comportamento observado** vs **comportamento esperado**
- **Screenshots** se aplicável
- **Seu ambiente**: OS, browser, versão do Node.js

### Sugerindo Melhorias

Antes de criar sugestões de melhoria, verifique se já não foi sugerido.

Ao sugerir uma melhoria, inclua:
- **Título descritivo**
- **Descrição detalhada** da sugestão
- **Exemplos** de como funcionaria
- **Por que** essa melhoria seria útil

### Pull Requests

- Siga o [guia de estilo TypeScript/React](#guia-de-estilo)
- Inclua documentação apropriada
- Termine seus branches antes de fazer um merge
- Evite plataformas dependentes
- Siga as convenções de commit

## Guia de Estilo

### TypeScript/React

- Use **TypeScript** sempre (sem `any` sem boa razão)
- Nomeie exports de forma descritiva
- Use functional components com hooks
- Destructure props nos parâmetros
- Uma sentença por linha
- Use `const` e `let`, não use `var`

**Exemplo:**
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  onClick,
  children 
}: ButtonProps) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}
```

### Commits

- Use o imperativo ("add feature" não "added feature")
- Use lowercase
- Seja conciso e descritivo
- Faça commits atômicos

**Exemplos:**
- `feat: add dark mode toggle`
- `fix: prevent race condition in form submission`
- `docs: update installation guide`
- `style: reformat button component`

### Branches

- Use nomes descritivos: `feature/feature-name`, `fix/bug-name`, `docs/doc-update`
- Use hífens entre palavras
- Use lowercase

## Processo de Desenvolvimento

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/amazing-feature`)
3. Commit suas mudanças (`git commit -m 'feat: add amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

### Setup Local

```bash
# Clone seu fork
git clone https://github.com/seu-usuario/infinity-school-lp.git
cd infinity-school-lp

# Install dependencies
pnpm install

# Create your feature branch
git checkout -b feature/amazing-feature

# Start development server
pnpm run dev

# Type check
pnpm run check

# Format code
pnpm run format
```

## Checklist antes de submeter PR

- [ ] Meu código segue o guia de estilo
- [ ] Rodei `pnpm run check` local e passou
- [ ] Rodei `pnpm run format` para formatar o código
- [ ] Meus commits usam mensagens claras em imperativo
- [ ] Meu código não introduz novas warnings
- [ ] Atualizei a documentação conforme necessário
- [ ] Meus commits são atômicos e contam uma história clara

## Dúvidas?

Sinta-se livre para abrir uma issue com a tag `question` ou entrar em contato.

---

Obrigado por contribuir! 🎉
