import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import authMiddleware from './app/middlewares/auth';

// Controllers
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import DeliveryController from './app/controllers/DeliveryController';
import DeliverymanDeliveryController from './app/controllers/DeliverymanDeliveryController';
import DeliverymanController from './app/controllers/DeliverymanController';
import CheckInController from './app/controllers/CheckInController';
import CheckOutController from './app/controllers/CheckOutController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';
import ProblemController from './app/controllers/ProblemController';

const upload = multer(multerConfig);
const routes = new Router();

routes.get('/', (req, res) => res.send('ok'));

routes.post('/sessions', SessionController.store);

// Delivery
routes.post('/deliveryman/:deliverymanId', DeliverymanDeliveryController.store);
routes.get(
  '/deliveryman/:deliverymanId/deliveries',
  DeliverymanDeliveryController.index
);
routes.put(
  '/deliveryman/:deliverymanId/checkout/:deliveryId',
  upload.single('file'),
  CheckOutController.update
);

routes.put(
  '/deliveryman/:deliverymanId/checkin/:deliveryId',
  CheckInController.update
);

// Problems
routes.get('/delivery/:deliveryId/problems', DeliveryProblemController.index);
routes.post('/delivery/:deliveryId/problems', DeliveryProblemController.store);
routes.delete('/problems/:problemId/cancel-delivery', ProblemController.delete);

routes.use(authMiddleware);

// Recipient
routes.get('/recipient', RecipientController.index);
routes.post('/recipient', RecipientController.store);
routes.put('/recipient/:id', RecipientController.update);
routes.delete('/recipient/:id', RecipientController.delete);

// Deliveryman
routes.get('/deliveryman', DeliverymanController.index);
routes.post('/deliveryman', DeliverymanController.store);
routes.put('/deliveryman/:id', DeliverymanController.update);
routes.delete('/deliveryman/:id', DeliverymanController.delete);

// Deliverys
routes.get('/delivery', DeliveryController.index);
routes.post('/delivery', DeliveryController.store);
routes.put('/delivery/:id', DeliveryController.update);
routes.delete('/delivery/:id', DeliveryController.delete);

// Problems
routes.get('/delivery/problems', ProblemController.index);

// Files
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
