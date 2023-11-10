const express = require('express') 
const app = express() //Iniciando o Servidor
app.use(express.json()) //Reconhecer Json nas requisições

const mongoose = require('mongoose') 

const TokenVerify = require('./src/middleware/verify.token')//Middleware de autenticação

const user = require('./routes/user') //User module

const movie = require('./routes/movie') //Movie module

//Docs com swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); 
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)) //Iniciando a doc

//Public route
app.get('/', (req, res) => { 
  res.status(200).json({ msg: 'Bem vindo a nossa API! :)'})
})

//Private route
app.get('/user/:id', TokenVerify, async (req, res) => {
  const id = req.params.id //Buscando o id na url (diferente do corpo da req => req.body)

  // User existe?
  const user = await User.findById(id, '-password') //Retornar o user sem a senha por motivos de segurança
  if (!user) {
    return res.status(404).json({ msg: 'Usuário não encontrado' })
  }

  res.status(500).json({ user })
})

app.use(user, movie)

//Escutando as requisições a partir da conexão com o banco de dados
const connectToDataBase = async () => {""
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.isxouff.mongodb.net/?retryWrites=true&w=majority`)
    app.listen(3000, () => console.log(`Conexão concluída! Server rodando na porta 3000 🚀`))   
  } catch (err) {
    console.log('Conexão perdida! :(', err);
  }
}

connectToDataBase()