import express from 'express';
import ClassesConstroller from './controllers/ClassesController';

const routes = express.Router();
const classesConstroller = new ClassesConstroller();

routes.get('/classes', classesConstroller.index);
routes.post('/classes', classesConstroller.create);

export default routes;