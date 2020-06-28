import express from 'express';
import multer from 'multer';
import multerCfg from '../src/config/multer';

import {celebrate, Joi} from 'celebrate';

import pointsController  from './controllers/pointsController';
import itemsController from './controllers/itemsController';

const routes = express.Router();
const upload =  multer(multerCfg);



const PointsController = new pointsController();
const ItemsController = new itemsController();

routes.get("/items", ItemsController.index);

routes.get('/points/:id', PointsController.show);

routes.get('/points', PointsController.index);



routes.post('/points', 
upload.single('image'), 
celebrate({
    body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required(),
    })
},{
    abortEarly: false
}),
PointsController.create);


export default routes;