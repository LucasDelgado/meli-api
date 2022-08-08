import { axiosInstance } from '../utils/axios';
import { itemAdapter } from './adapters/itemAdapter';
import { itemsSearchAdapter } from './adapters/itemsSearchAdapter';
import { ItemDto } from './dto/item.dto';
import { ItemsSearchDto } from './dto/itemsSearch.dto';

export default class ItemsService {
    /**
     * Creamos una instancia de la clase para que sea un singleton.
     * El famoso patron antipatron :P ....
     */
    static _productsServiceInstance: ItemsService;

    static getInstance() {
        if (!!!ItemsService._productsServiceInstance) {
            this._productsServiceInstance = new ItemsService();
        }
        return this._productsServiceInstance;
    }

    constructor() {}

    async getAll(search: string): Promise<ItemsSearchDto> {
        try {
            const cantidadItems = 4;
            const { data: products } = await axiosInstance.get(
                `/sites/MLA/search?q=${search}&limit=${cantidadItems}`
            );
            const itemsSearch = itemsSearchAdapter(products);

            return itemsSearch;
        } catch (error) {
            throw error;
        }
    }

    async get(id: string): Promise<ItemDto> {
        try {
            /**
             * depende el requerimiento si usamos promise all o no.
             * ventajas: corren las 2 por paralelo y no espera a que termine al anterior
             * desventajas: si una falla, no se ejecuta la otra.
             * Como este es un desafio elijo la opcion de usar promise all ya que es algo mas
             * excepcional que el de usar promesas individuales que suele utilizarse todo el tiempo.
             */

            let req1 = await axiosInstance.get(`/items/${id}`);
            let req2 = await axiosInstance.get(`/items/${id}/description`);

            let [{ data: product }, { data: description }] = await Promise.all([
                req1,
                req2,
            ]);

            const { plain_text: textDescription } = description || {};

            const item = itemAdapter(product, textDescription);

            return item;
        } catch (error) {
            throw error;
        }
    }
}
