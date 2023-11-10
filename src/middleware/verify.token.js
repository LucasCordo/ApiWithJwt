const jwt = require('jsonwebtoken') //Trabalhar com o token JWT

//Utilizado para manusear variáveis locais (Conteúdo sensível)
require('dotenv').config()

//Middleware para verificar o token
module.exports = async function(req, res, next){ //Next é usado quando a condição deu certo "Próximo passo=>"
    const authHeader = req.headers['authorization']
  
    const token = authHeader && authHeader.split(" ")[1] //Separando o token do bearer
  
    if (!token) {
      return res.status(401).json({ msg:"Acesso negado." })
    }
  
    try {
      jwt.verify(token, process.env.SECRET) //Verificando se o token está correto
      next() //Prosseguir com middleware pode acessar a rota
    } catch (err) {
      res.status(400).json({ msg:"Token inválido." })
    }
}