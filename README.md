# TechStore - E-commerce Storefront

![TechStore Banner](https://via.placeholder.com/1200x600/09090b/fafafa?text=TechStore+E-commerce)

Um e-commerce moderno e responsivo construído como projeto de portfólio para demonstrar habilidades em tecnologias frontend de ponta, foco em Core Web Vitals e boas práticas de arquitetura.

## 🚀 Tecnologias Utilizadas

- **[Next.js 15 (App Router)](https://nextjs.org/)**: Framework React com renderização híbrida (Server e Client Components).
- **[React 19](https://react.dev/)**: Biblioteca JavaScript para construção da interface.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para maior previsibilidade e segurança no código.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de CSS utility-first para estilização ágil e responsiva.
- **[Zustand](https://github.com/pmndrs/zustand)**: Gerenciamento de estado global leve para o carrinho de compras.
- **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca para animações fluidas e micro-interações.
- **[Sonner](https://sonner.emilkowal.ski/)**: Notificações toast para feedback visual de alta qualidade.
- **[FakeStore API](https://fakestoreapi.com/)**: API REST pública para consumo de dados (produtos, categorias).

## ✨ Funcionalidades Principais

- **Vitrine de Produtos**: Consumo de API externa utilizando Server Components para otimização de SEO e performance inicial.
- **Roteamento Dinâmico**: Páginas individuais de detalhes do produto (`/product/[id]`).
- **Carrinho de Compras Global**: 
  - Adição e remoção de itens.
  - Alteração de quantidades com cálculo em tempo real.
  - Estado persistido no `LocalStorage` (os itens não são perdidos ao recarregar a página).
  - Acessível por toda a aplicação via um *Slide-over Drawer* animado.
- **Loading States**: Uso de *Skeletons* integrados nativamente com a feature `loading.tsx` do Next.js.
- **Tratamento de Erros Customizado**: Páginas `error.tsx` e `not-found.tsx` preparadas para lidar com exceções de rotas ou da API.
- **Dark Mode Nativo**: UI elegante baseada em tons escuros e acentos vibrantes.

## 🛠️ Como rodar localmente

Siga os passos abaixo para testar o projeto na sua máquina:

1. Clone o repositório:
```bash
git clone https://github.com/SEU_USUARIO/e-commerce-portfolio.git
```

2. Acesse a pasta do projeto:
```bash
cd e-commerce-portfolio
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 👨‍💻 Sobre o Autor

**Eduardo Braga**  
*Desenvolvedor Frontend | Estudante de Análise e Desenvolvimento de Sistemas (3º Semestre)*

Focado em criar interfaces de alta performance, este projeto reflete meu domínio atual sobre o ecossistema React/Next.js e minha capacidade de estruturar aplicações escaláveis.

- [LinkedIn](https://www.linkedin.com/in/ebragaprado/)
- [Portfólio](https://bragaweb.netlify.app/)
