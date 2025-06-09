
# 📱 Neuro Guia

**Neuro Guia** é um aplicativo educacional acessível desenvolvido em **React Native com Expo**. Seu objetivo é ensinar pais, educadores e especialistas sobre crianças neurodivergentes, promovendo a inclusão e o aprendizado com empatia, acessibilidade e tecnologia.

## 🧠 Funcionalidades

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
│      ├── curso/           # Telas de curso
|          └──  [id].tsx       # Tela pegando o id referente ao curso respectivo
|          └──  aula.tsx       # Tela da aula sendo assistida
|      └── _layout.tsx       # Layout geral da barra inferior
|      └──  acessibilidade.tsx       # Tela Acessibilidade
|      └──  ajuda.tsx       # Tela ajuda
|      └──  buscar.tsx       # Tela de busca
|      └──  configuracoes.tsx       # Tela de configurações
|      └──  home.tsx       # Tela Home
|      └──  menu.tsx       # Tela de menu
|      └──  salvos.tsx       # Tela de salvo
│   ├── cadastro/         # Tela de cadastro
|       └── index.tsx         # Tela inicial de Cadastro
|       └── etapa2.tsx         # Tela final de Cadastro
│   ├── _layout.tsx       # Layout geral
│   └── index.tsx         # Tela inicial de login
│
├── components/           # Componentes reutilizáveis
│   └── ButtonBack.tsx         # Botão de voltar
│
│
├── assets/               # Imagens e fontes
│
├── contexts/            # Context de autenticacão
│
├── package.json          # Dependências e scripts
└── README.md             # Documentação do projeto
```

---

## ⚙️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Expo Router](https://expo.github.io/router/)
- [React Navigation (Bottom Tabs)](https://reactnavigation.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Render (Hospedagem da API)](https://render.com/)
- [Railway (Banco de Dados MySQL)](https://railway.app/)

---

## 🔒 Autenticação

A autenticação é feita por meio de uma **API externa** desenvolvida separadamente e hospedada no **Render**.

Exemplo de login via `app/index.tsx`:

```ts
const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          senha,
        }),
      });

      const data = await response.json();
}
```

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/Ppedro-Leal/Neuro_Guia.git
cd Neuro_Guia
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


## Como testar o projeto rapidamente:

Baixe o apk através de : https://expo.dev/accounts/ppedro-leal/projects/Neuro_Guia/builds/983e7230-cf07-4c08-a415-02c8e125b944



## 🛠️ Conexão com o Banco railway

A conexão com o banco é feita via API criada com node e express backend.

---

## 📃 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
