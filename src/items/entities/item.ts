interface Price {
    amount: number;
    currency: string;
    decimals: number;
}

export interface Item {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: Boolean;
    sold_quantity: number;
}
