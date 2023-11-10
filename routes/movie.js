const MovieModel = require('../src/models/movie.model') //Esqueleto das requisições
const TokenVerify = require('../src/middleware/verify.token')//Middleware de autenticação

const express = require('express')
const app = express() //Iniciando o Servidor

app.use(TokenVerify) //Utilizando o middleware 

//Acesso a lista dos filmes 
app.get('/movie', async(_req, res) => {
    try {
      const user = await MovieModel.find({})
      res.status(201).json(user)
    } catch (err) {
      res.status(500).send(err.message)
    }
  
})
  
//Add novo filme 
app.post('/movie', async(req, res) => {
    try {
      //Enviando os detalhes do filme 
      const movie = MovieModel.create(req.body)
      res.status(201).json(movie)
    } catch (err) {
      res.status(500).send(err.message)    
    }
})
  
//Deletar filme 
app.delete('/movie/:id', async(req, res) => {
    try {
      const id = req.params.id
      const user = await MovieModel.findByIdAndDelete(id)
      res.status(201).json(user)
    } catch (err) {
      res.status(500).send(err.message)    
    }
})
  
//Put atualizar filmes (put) -> Permite apenas substituições completas
app.put('/movie/:id', async(req, res) => {
    try {
      const id = req.params.id
      const user = await MovieModel.findByIdAndUpdate(id, req.body)
      res.status(201).json(user)
    } catch (err) {
      res.status(500).send(err.message)
    }
})

module.exports = app