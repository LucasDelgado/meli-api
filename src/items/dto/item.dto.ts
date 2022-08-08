import { Autor } from '../entities/autor';
import { Item } from '../entities/item';

export interface ItemDto extends Item {
    autor: Autor;
    description?: string;
}
