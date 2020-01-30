import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/teste'); // Rota de testes

routes.post('/users', UserController.store); // Criar usuário
routes.post('/sessions', SessionController.store); // Login

routes.use(authMiddleware); // Todas rotas após essa linha passarão pelo authMiddleware

routes.put('/users', authMiddleware, UserController.update); // Alterar dados

export default routes;
