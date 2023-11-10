const mongoose = require('mongoose')

//Schema dos filmes
const userSchema = new mongoose.Schema({ 
    user: {
      type: String,
      required: [true, 'Falta o usuário.']
    },
    email: {
      type: String,
      required: [true, 'Falta o email.']
    },
    password: {
      type: String,
      required: [true, 'Falta a senha.'],    
      minLength: 7
    }
  });
  
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel