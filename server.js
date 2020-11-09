const express = require('express'); //chamando o express
const cors = require("cors");
const mongoose = require('mongoose'); // Chamando o mongoose 
const requireDir = require('require-dir'); // Chamando o require-dir

//Iniciando app através da função express
const app = express();  
app.use(express.json()); //Permitir enviar dados no formato json
app.use(cors());

//Conectando o banco de dados
mongoose.connect("mongodb://localhost:27017/nodeapi",
 {useNewUrlParser:true, useUnifiedTopology:true});
requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001); //Aplicação rodará na porta 3001
