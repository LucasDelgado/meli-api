import { Autor } from '../entities/autor';
import { Item } from '../entities/item';

export interface ItemOfSearchDto
    extends Omit<Item, 'sold_quantity' | 'description'> {
    address: string;
}

export interface ItemsSearchDto {
    autor: Autor;
    items: ItemOfSearchDto[];
    categories: string[];
}
