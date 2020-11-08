const express = require('express'); //chamando o express
const mongoose = require('mongoose'); // Chamando o mongoose 
const requireDir = require('require-dir'); // Chamando o require-dir
//Iniciando app através da função express
const app = express();  

//Conectando o banco de dados
mongoose.connect("mongodb://localhost:27017/nodeapi",
 {useNewUrlParser:true, useUnifiedTopology:true});
requireDir('./src/models');

const Product = mongoose.model('Product');



/*/Primeira rota 
app.get('/',(req, res) =>{ 
    res.send('Hello NodeJS');
});*/

//Inserindo um Produto
app.get('/',(req, res) =>{ 
    Product.create({
        title: "React Native",
        description: "Build native apps with React",
        url: "http://github.com/facebook/react-native"    
});
    return res.send("Product Created");
});

app.listen(3001); //Aplicação rodará na porta 3001
