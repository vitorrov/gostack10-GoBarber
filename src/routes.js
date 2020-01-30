import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/teste'); // Rota de testes

routes.post('/users', UserController.store); // Criar usuário
routes.post('/sessions', SessionController.store); // Login

export default routes;
