import { ItemOfSearchDto, ItemsSearchDto } from '../dto/itemsSearch.dto';
import { autorAdapter } from './autorAdapter';
import { categoriesAdapter } from './categoriesAdapter';

export const itemsSearchAdapter = (items: any): ItemsSearchDto => {
    return {
        autor: autorAdapter({ name: 'Lucas', lastname: 'Delgado' }),
        items: items?.results.map((item: any): ItemOfSearchDto => {
            return {
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
                address: item.address?.city_name || '',
            };
        }),
        categories: categoriesAdapter(items?.filters),
    };
};
