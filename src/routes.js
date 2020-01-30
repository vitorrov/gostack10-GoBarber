import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/teste'); // Rota de testes

routes.post('/users', UserController.store); // Criar usuário
routes.post('/sessions', SessionController.store); // Login

routes.use(authMiddleware); // Todas rotas após essa linha passarão pelo authMiddleware

routes.put('/users', authMiddleware, UserController.update); // Alterar dados

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
