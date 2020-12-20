import express from 'express';
import ClassesConstroller from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesConstroller = new ClassesConstroller();
const connectionsConstroller = new ConnectionsController();

routes.get('/classes', classesConstroller.index);
routes.post('/classes', classesConstroller.create);

routes.get('/connections', connectionsConstroller.index)
routes.post('/connections', connectionsConstroller.create)

export default routes;