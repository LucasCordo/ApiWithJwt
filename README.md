<h1 align="center">ApiWithJwt</h1>

<p align="center">
 API de filmes com autenticação JWT hospedando em um banco de dados MongoDB - NoSQL.
</p>

## 🧠 Experiência
Com esse projeto eu consegui desenvolver minhas habilidades com algumas ferramentas e tecnologias. Principalmente com a parte de documentação utilizando Swagger e testes com o Postman.

Foi o meu primeiro contato com o Swagger, com isso eu aprendi a documentar cada método de uma API e tornar eles funcionais. Com o Postman eu testei os principais pontos da minha API, entendendo o funcionamento de um Request/Response.

Projeto proposto e avaliado pelo professor Edson M. Souza durante o 4° Semestre como AP2. 

### User
- [X] Cadastrar um usuário
- [X] Fazer login

| Método 	| Endpoint | Descrição |
|--------|----------|----------|
| POST |	/cadastro |	Cadastrar credencias de um usuário |
| POST |	/login |	Fazer login com os dados cadastrados |


### Movie

- [X] Consultar lista de filmes
- [X] Deletar algum filme
- [X] Atualizar determinado filme
- [X] Adicionar um filme

**Atenção:** as rotas relacionadas ao filme precisam do token gerado ao fazer login.

| Método HTTP	| Endpoint | Descrição |
|--------|----------|----------|
| GET |	/movie | Consultar lista de filmes armazenados |
| POST | /movie	 | Adicionar um filme|
| DELETE |	/movie/:id | Deletar um filme a partir de um ID |
| PUT |	/movie/:id | Atualizar um filme a partir de um ID |


# +
- [X] Senha criptografada
- [X] Validação de token

## 🚀 Tecnologias usadas
- Node | Bcrypt | Jsonwebtoken | Express | Mongoose | Dotenv

## 📄 Doc
Após instalar todas as dependências e iniciar o projeto, você pode acessar a documentação no seguinte endpoint: 
```
GET /doc
```

## ⚙️ Deploy
Ainda não está disponível.
