import { Dispatch, SetStateAction } from 'react'
import { boolean, z } from 'zod'

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

export interface ProductImageUploadProps {
  imageFile: { name: string };
  handleSetImageFile:  Dispatch<SetStateAction<string | {   name: string } | null>>;
  imageLoadingState: boolean;
    handleSetUploadedImageUrl: string;
    handleSetImageLoadingState: ()=>void;
  isEditMode: boolean;
  isCustomStyling: boolean;
}

export const productFormSchema = z.object({
  name: z.string(),
  price: z.string(),
  categoryId: z.string(),
  description: z.string(),
  discount: z.string(),
  availability: z.string(),
  quantity: z.string(),
  brandId: z.string(),
  colors: z.string(),
  rating: z.string().max(1).min(0),
})