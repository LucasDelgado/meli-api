import { ItemDto } from '../dto/item.dto';
import { autorAdapter } from './autorAdapter';

export const itemAdapter = (item: any, description: string): ItemDto => {
    return {
        autor: autorAdapter({ name: 'Lucas', lastname: 'Delgado' }),
        id: item.id || '',
        title: item.title || '',
        price: {
            currency: item.currency_id || '',
            amount: item.price || 0,
            decimals: 0,
        },
        picture: item.thumbnail || '',
        condition: item.condition || '',
        free_shipping: item.shipping?.free_shipping || false,
        sold_quantity: item.sold_quantity || 0,
        description: description || '',
    };
};
