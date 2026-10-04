export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  subCategory?: string;
  brand?: string;
  image: string;
  rating?: number;
  stock: number;
  gender?: 'Men' | 'Women' | 'Kids' | 'Unisex';
}