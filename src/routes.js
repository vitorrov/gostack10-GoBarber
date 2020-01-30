import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/teste'); // Rota de testes

routes.post('/users', UserController.store); // Criar usuário

export default routes;
