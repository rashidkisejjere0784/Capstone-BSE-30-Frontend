export interface Product {
    id: string;
    name: string;
    price: string;
    category: string;
    description: string;
    discount: string;
    availability: string;
    brand: string;
    image: string;
    images: string[];
    colors: string[];
    deals: string;
    size: string;
    capacity: string;
    cart: boolean;
    tag: string;
    quantity: number;
    whishlist: boolean;
    rating: number[];
}


export interface Links {
    name: string,
    link: string,
}

export interface Shop{
    img: string;
    title: string;
}