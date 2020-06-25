const express = require('express');

// Mustache
const mustache = require('mustache-express');

// Rotas
const routes = require('./routes');

// Configurações

// express -> auxilia no desenvolvimento do servidor
const app = express();

app.use(express.json());

app.use(routes);

// Aplicando a engine, e enviando a biblioteca utilizada
app.engine('mst', mustache());

// Especifica para que o motor servirá
app.set('view engine', 'mst');

app.set('views', `${__dirname}/views`);

// O navegador precisa saber onde está o arquivo

// app.get('/', (req, res) => {
//     res.json('Hello World')
// });
//
// // OU
//
// app.use('/', routes);

module.exports = app;
