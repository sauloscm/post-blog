# Aplicação de Postagens com Express.js e Sequelize

Esta é uma aplicação simples de blog, onde usuários podem visualizar, adicionar e deletar postagens utilizando o framework Express.js e o ORM Sequelize para interagir com o banco de dados. A aplicação utiliza Handlebars como motor de template para renderizar as páginas.

## Tecnologias Usadas

- **Node.js**: Ambiente de execução para o JavaScript no servidor.
- **Express.js**: Framework web para Node.js que facilita a criação de servidores.
- **Sequelize**: ORM para Node.js, utilizado para interagir com bancos de dados SQL.
- **MySQL**: Banco de dados relacional utilizado para armazenar as postagens.
- **Handlebars**: Motor de template para renderizar HTML com dados dinâmicos.
- **body-parser**: Middleware para analisar os corpos das requisições HTTP.
- **nodemon**: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.

## Funcionalidades

### 1. Visualização de Postagens
- A aplicação exibe uma lista de postagens armazenadas no banco de dados MySQL.
  
### 2. Adicionar Postagem
- Os usuários podem adicionar novas postagens preenchendo um formulário com título e conteúdo.

### 3. Deletar Postagem
- O usuário pode excluir postagens clicando no botão "Deletar" ao lado de cada postagem.

## Endpoints

### `GET /`
Exibe todas as postagens armazenadas no banco de dados.

### `GET /cad`
Exibe o formulário para adicionar novas postagens.

### `POST /add`
Recebe os dados de uma nova postagem (título e conteúdo) e os armazena no banco de dados.

### `GET /deletar/:id`
Deleta a postagem com o ID especificado na URL.

## Estrutura do Projeto

```bash
.
├── models/
│   └── Post.js               # Definição do modelo de dados para as postagens
├── views/
│   ├── home.handlebars        # Template para exibir as postagens
│   ├── formulario.handlebars  # Template do formulário para adicionar postagens
│   └── main.handlebars        # Layout principal
├── public/
│   ├── css/
│   │   └── styles.css        # Arquivo de estilos para as páginas
├── index.js                  # Arquivo principal do servidor
├── package.json              # Dependências e scripts do projeto
└── README.md                 # Este arquivo
```

## Como Executar a Aplicação

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/post-blog.git
cd post-blog
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Configurar o Banco de Dados
Certifique-se de ter um banco de dados MySQL rodando e crie um banco de dados chamado `postagens`. Em seguida, configure o arquivo de conexão no Sequelize.

### 4. Executar as Migrações (Se necessário)

```bash
npx sequelize-cli db:migrate
```

### 5. Rodar o Servidor

```bash
npm start
```

Ou, durante o desenvolvimento, utilize o `nodemon` para reiniciar automaticamente:

```bash
npx nodemon index.js
```

### 6. Acessar a Aplicação
Abra o navegador e acesse:

```
http://localhost:8081
```

Agora a aplicação estará rodando localmente e você poderá visualizar, adicionar e deletar postagens!

---

