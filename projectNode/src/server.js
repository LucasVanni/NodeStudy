const app = require('./app');
const mongoose = require('mongoose')

require('dotenv').config({path: '.env'})

//Conexão ao Banco de dados
mongoose.connect(
    process.env.DATABASE,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
    console.log('Connection has been succeed')
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', error => {
    console.error(`ERRO ${error.message}`)
})

app.listen(process.env.PORT || 2222, () => {
    console.log("Servidor rodando na porta " + process.env.PORT)
});
