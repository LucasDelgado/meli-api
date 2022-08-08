import express, { Router, Request, Response, NextFunction } from 'express';
import { ItemDto } from './dto/item.dto';
import { ItemsSearchDto } from './dto/itemsSearch.dto';
import ItemsService from './items.service';

const ItemsController: Router = express.Router();

const itemsService = ItemsService.getInstance();

/**
 * Query {{q}}
 */
ItemsController.get(
    '/',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { q } = req.query as { q: string };
            if (!q) throw { response: { status: 400 }, message: 'bad request' };

            const items: ItemsSearchDto = await itemsService.getAll(q);

            res.json(items);
        } catch (error) {
            next(error);
        }
    }
);

/**
 * Param {{id}}
 **/
ItemsController.get(
    '/:id',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            if (!id)
                throw { response: { status: 400 }, message: 'id is required' };

            const item: ItemDto = await itemsService.get(id);
            res.json(item);
        } catch (error) {
            next(error);
        }
    }
);

export default ItemsController;
