export interface ProductsItemType {
    itemId: string;
    name: string;
    description?: string;
    shortDescription?: string;
    images: string[];
    priceList: number[];
    quantity: number;
    bidId?: string;
}
