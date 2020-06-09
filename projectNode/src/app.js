// Aplicação específica
import express from 'express';

// Rotas
import routes from './routes';

// Configurações

const App = express();

App.use(express.json());

App.use(routes);

export default App;