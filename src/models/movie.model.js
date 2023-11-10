const mongoose = require('mongoose');

//Schema dos filmes
const movieSchema = new mongoose.Schema({ 
    title: { 
      type: String,
      required: true
    },
    year: { 
      type: Number
    },
    actors: { 
      type: String
    },
    summary: { 
      type: String,
      required: true
    },
  });
  
const MovieModel = mongoose.model("Movie", movieSchema);
module.exports = MovieModel