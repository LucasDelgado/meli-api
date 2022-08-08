import express, { Express } from 'express';
import ItemsController from '../items/items.controller';

const routerApi = (app: Express) => {
    const router = express.Router();
    app.use('/api', router);

    //Controllers
    router.use('/items', ItemsController);
};

export default routerApi;
