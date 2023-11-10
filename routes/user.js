const UserModel = require('../src/models/user.model') //Esqueleto das nossa requisições
const bcrypt = require('bcrypt') //lib para criptografar a senha

const jwt = require('jsonwebtoken') //Trabalhar com o token JWT

const express = require('express')
const app = express() //Iniciando o Servidor

//Utilizado para manusear variáveis locais (Conteúdo sensível)
require('dotenv').config()

//Cadastrar um user | Validação dos dados
app.post('/cadastro', async (req, res) => {
    // Check se um user existe
    const { password, email, user } = req.body //Desestruturando o corpo da requisição
    
    const equalsEmail = await UserModel.findOne({ email: email })
    
    if (equalsEmail) {
      return res.status(422).json({ msg: 'Utilize outro e-mail. '})
    }
    
    // Validando a senha
    const salt = await bcrypt.genSalt(3) //Acrescenta aleatoriamente sequências de caracteres
    const passwordHash = await bcrypt.hash(password, salt) 
  
    // Create new doc
    const doc = await UserModel.create({ user, email, password: passwordHash })
    
    try {    
      return res.status(201).json({ msg: 'Usuário criado com sucesso.'}); //Requisição conclúida
    } catch (err) {    
      res.status(500).send(err.message)
    }
}) 
  
//Login
app.post('/login', async (req, res) => {
    //Login baseado em usuário e senha
    const { user, password } = req.body 
    
      //Buscando usuário dentro do banco
      const userExist = await UserModel.findOne({ user: user })
      if (!userExist) {
        return res.status(404).json({ msg: 'Usuário não encontrado, tente novamente.'})     
      }
  
      //Check se a senha está correta
      const passwordCorrect =  await bcrypt.compare(password, userExist.password)
      if (!passwordCorrect) {
        return res.status(422).json({ msg: 'Senha incorreta.'})     
      }
  
      try {
        //Autenticação com Json Web Token
        const token = jwt.sign({
          id: user._id
        }, 
        process.env.SECRET,
        )
  
        res.status(201).json({ msg: 'Login concluído', token})
    } catch (err) {
        res.status(500).send(err.message)
    }
})

module.exports = app