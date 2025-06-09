
# 📱 Neuro Guia

**Neuro Guia** é um aplicativo educacional acessível desenvolvido em **React Native com Expo**. Seu objetivo é ensinar pais, educadores e especialistas sobre crianças neurodivergentes, promovendo a inclusão e o aprendizado com empatia, acessibilidade e tecnologia.

## 🧠 Funcionalidades

- Splash screen
- Login e Cadastro de usuários
- Navegação em abas (Bottom Tabs)
- Listagem de cursos e conteúdos
- Busca de conteúdos por palavra-chave
- Perfil do usuário
- Acessibilidade (alto contraste, modo leitura, etc.)
- Salvar conteúdos favoritos
- Tela de Ajuda e Suporte
- Comunicação com API (autenticação, carregamento de dados, etc.)

---

## 📂 Estrutura de Pastas

```bash
.
├── app/                  # Arquivos de rotas (Expo Router)
│   ├── (tabs)/           # Telas acessadas via abas (Bottom Tabs)
│   ├── login/            # Tela de login
│   ├── cadastro/         # Tela de cadastro
│   ├── _layout.tsx       # Layout geral (tabs)
│   └── index.tsx         # Splash ou home inicial
│
├── components/           # Componentes reutilizáveis
│   ├── CursoCard.tsx     # Cartões de cursos
│   ├── Input.tsx         # Campos de entrada
│   └── Botao.tsx         # Botões customizados
│
├── lib/                  # Configurações globais
│   ├── api.ts            # Instância do axios para requisições
│   └── auth.ts           # Funções de autenticação (login, cadastro)
│
├── assets/               # Imagens e fontes
│
├── constants/            # Constantes de tema, cores, textos etc.
│
├── App.tsx               # Arquivo principal
├── package.json          # Dependências e scripts
└── README.md             # Documentação do projeto
```

---

## ⚙️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Expo Router](https://expo.github.io/router/)
- [Axios](https://axios-http.com/)
- [React Navigation (Bottom Tabs)](https://reactnavigation.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ShadCN (via Tailwind + NativeWind)](https://ui.shadcn.dev/)
- [Render (Hospedagem da API)](https://render.com/)
- [Railway (Banco de Dados MySQL)](https://railway.app/)

---

## 🔒 Autenticação

A autenticação é feita por meio de uma **API externa** desenvolvida separadamente e hospedada no **Render**.

Exemplo de login via `lib/auth.ts`:

```ts
import axios from './api';

export async function login(email: string, senha: string) {
  const response = await axios.post('/login', { email, senha });
  return response.data;
}
```

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/mente-inclusiva.git
cd mente-inclusiva
```

2. **Instale as dependências:**

```bash
npm install
# ou
yarn install
```

3. **Inicie o projeto com Expo:**

```bash
npx expo start
```

4. **Acesse o app** no seu celular com o Expo Go ou em um emulador.

---

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com:

```env
API_URL=https://sua-api-no-render.com
```

E no `lib/api.ts`:

```ts
const api = axios.create({
  baseURL: process.env.API_URL,
});
```

---

## 🛠️ Teste de Conexão com o Banco

A conexão com o banco é feita via API backend. Mas para testes diretos:

```bash
node testConnection.js
```

```js
// testConnection.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'metro.proxy.rlwy.net',
  port: 40740,
  user: 'root',
  password: 'yVeyqNYBFMzgeBKhypBcGvQzpmHKsGyb',
  database: 'railway'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar:', err.message);
  } else {
    console.log('Conexão bem-sucedida!');
  }

  connection.end();
});
```

---

## 👨‍💻 Desenvolvedor

**Pedro Henrique Leal Amaral**  
Desenvolvedor Full Stack | Técnico em Desenvolvimento de Sistemas  
📧 [pedrohlealamaral@gmail.com](mailto:pedrohlealamaral@gmail.com)

---

## 📃 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
