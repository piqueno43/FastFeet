<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src=".github/logo.png" width="300px" />
</h1>

<h3 align="center">
  Desafio FastFeet para certificação
</h3>

Aplicação desenvolvida do zero e conta com as seguintes tecnologias:

- Node.js
- Express
- Docker
- Reactjs
- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize;
- Postgres

Abaixo estão orientações para iniciar a aplicação.

Execute para todos os diretórios backend, frontend e mobile para instalar as dependencias do projeto:

    yarn

### **1. Backend**

Após instalar as dependencias preencha o arquivo .env com os dados do banco de dados postgres, redis e dados de e-mail.

Execute:

    yarn sequelize db:seed:all

Agora você tem o usuário: admin@fastfeet.com com a senha 123456 no seu banco de dados.
Execute:

    yarn sequelize db:migrate

Para criar as tabelas no banco de dados.

Execute:

    yarn dev
    yarn queue

Para iniciar o servidor e as queues.

### **2. Frontend**

Após o backend iniciado:

Execute:

    yarn start

### **3. Mobile**

Execute:

    yarn android ou yarn ios

Para instalar o app

- Edite a baseURL no arquivo mobile/src/services/api.js para o endereço do backend.
