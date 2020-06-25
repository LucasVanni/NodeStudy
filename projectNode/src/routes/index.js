const { Router } = require('express');
// Rotas
const routes = Router();

// Quando o usuário acessar a home do sistema
routes.get('/', (req, res) => {
    res.render('home');
})

routes.get('/home', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})

routes.get('/sobre', (req, res) => {
    const { nome, idade } = req.query;
    res.json({message: `Olá, ${nome} você tem ${idade} anos`});
});

routes.get('/post/:id', ((req, res) => {
    const { id } = req.params;
    res.json({
       'ID do post': id
    })
}))

routes.get('/home/:slug', ((req, res) => {
    const { slug } = req.params;
    res.json({
        'Slug do post': slug
    })
}));

module.exports = routes;
