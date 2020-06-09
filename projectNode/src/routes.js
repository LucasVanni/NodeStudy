import { Router } from 'express';

const routes = Router();

const users = [
    'Diego',
    'Claiton',
    'Robson',
    'Daniel'
]

routes.get('/', (req, res) => {
    return res.json({
        message: 'Hello Alunos'
    })
})

routes.get('/alunos', (req, res) => {
   return res.json(users)
})

routes.get('/aluno/:id', (req, res) => {
    const { id } = req.params;

    const user = users[Number(id)];

    return res.json(user);
})

export default routes;