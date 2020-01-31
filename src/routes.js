import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';

import authMiddleware from './app/middlewares/auth';
import isProvider from './app/middlewares/isProvider';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store); // Criar usuário
routes.post('/sessions', SessionController.store); // Login

routes.use(authMiddleware); // Todas rotas após essa linha passarão pelo authMiddleware

routes.get('/teste', isProvider); // Rota de testes

routes.put('/users', authMiddleware, UserController.update); // Alterar dados

routes.get('/providers', ProviderController.index); // Mostra todos providers

routes.post('/appointments', AppointmentController.store); // Marcar um horario
routes.get('/appointments', AppointmentController.index); // Mostrar todos horarios usuario

routes.get('/schedule', isProvider, ScheduleController.index); // Mostra os horarios do provider

routes.get('/notifications', isProvider, NotificationController.index); // Mostra notificações do provider
routes.put('/notifications/:id', isProvider, NotificationController.update); // Marca a mensagem como lida

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
