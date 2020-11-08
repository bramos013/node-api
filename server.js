const express = require('express'); //chamando o express
const mongoose = require('mongoose'); // Chamando o mongoose 
const requireDir = require('require-dir'); // Chamando o require-dir
//Iniciando app através da função express
const app = express();  

//Conectando o banco de dados
mongoose.connect("mongodb://localhost:27017/nodeapi",
 {useNewUrlParser:true, useUnifiedTopology:true});
requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001); //Aplicação rodará na porta 3001
