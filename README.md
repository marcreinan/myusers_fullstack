# MyUsers Fullstack

Projeto fullstack de integração com a API Reqres.in para consumir e processar os dados dos usuários disponibilizados, consiste em um crawler que busca os dados dos usuários da API e armazema no banco de dados SQLite3 no backend, uma API REST como backend que processa as requisições do crawler e do frontend utilizando o Querybuilder Knex.js realizando integração com o banco, autenticação na API do Reqres.in e um Web app como frontend responsável pelas telas de login e listagem de usuários do banco de dados. Toda a comunicação entre os serviços é feito no padrão JSON, com requisições assincronas

Crawler escrito em Node.js com apoio dos módulos Express e do Axios

Backend escrito em Node.js com apoio dos módulos Express, Axios, Cors, Knex e SQLite3

Frontend escrito em React.js com apoio dos módulos Axios, React-dom, React-Icons, React-router-dom


## ✅   Instalação

Faça o download a partir do link: https://github.com/marcreinan/myusers_fullstack ou se você tiver o GIT e o NPM instalado em sua maquina, digite no terminal o seguinte comando dentro da pasta de sua preferência:
```bash
git clone https://github.com/marcreinan/myusers_fullstac.git
```
Escolha uma das pastas(myusers_crawler, myusers_backend ou myusers_frontend) para instalar as dependencias e rodar o projeto, digite os comandos abaixo: 
```bash
npm install
npm start
```
!É explicitamente necessário criar os arquivos .env nas pastas raiz do crawler e do backend, em seguida configurar as váriavéis de ambientes(process.env | arquivo .env na raiz dos projetos) para a correta execução dos arquivos, cada diretório tem seu arquivo .env.example mostrando quais as váriáveis necessitam ser declaradas e configuradas!

Para iniciar com um banco de dados sem registros base, delete o arquivo ```db.sqlite3``` dentro da pasta ```api/v1``` depois rode as migrates do knex utilizando o comando:
```bash
npx knex migrate:latest
```

## ☔   Dependências 

Para correta execução desse projeto é necessário que você tenha instalado o NPM, o Node.js, o React.js e o driver SQLite3 para acesso ao banco de dados. Utilize o comando npm install para download dos módulos

## 🚀   Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [NODE](https://nodejs.org)
- [REACT](https://pt-br.reactjs.org/)
- [JSON](https://www.json.org)
- [EXPRESS](https://expressjs.com/pt-br/)
- [AXIOS](https://github.com/axios/axios)
- [SQLITE3](https://www.sqlite.org/index.html)
- [KNEX](http://knexjs.org)
- [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

## 💻   Endpoints da API backend

O endereço raiz da API se encontra em ```api/v1/```, os endpoints são inseridos a partir daqui. ex: ```http://localhost:3000/api/v1/login```

| URL   | Método | Entrada | Saída | Headers | Ação|
|-------|--------|---------|-------|---------|-----|
|/login |POST|email* , password*|token||Autentica um usuário |
|/users/:id|GET|   |id, first_name, last_name, email, avatar|Token* |Obtém um usuário|
|/users|GET|   |(array de usuários)|Token* |Obtém todos os usuários
|/users?page=:page|GET|   |(array de usuários)|Token* |Obtém os usuários em páginas de n registros (padrão 2 registros)
|/charge|POST|(array de registros de usuários)|||Insere um lote de usuários no banco, caso o usuário já exista, o registro é atualizado com as novas informações

---
