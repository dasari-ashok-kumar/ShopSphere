import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'Premium wireless headphones with clear sound.',
      price: 2499,
      originalPrice: 3499,
      category: 'Electronics',
      subCategory: 'Audio',
      brand: 'SoundMax',
      image: 'assets/images/headphones.jpg',
      rating: 4.5,
      stock: 25,
      gender: 'Unisex'
    },
    {
      id: 2,
      name: 'Men Casual T-Shirt',
      description: 'Comfortable cotton casual T-shirt.',
      price: 799,
      originalPrice: 1199,
      category: 'Men',
      subCategory: 'Clothing',
      brand: 'UrbanWear',
      image: 'assets/images/tshirt.jpg',
      rating: 4.2,
      stock: 40,
      gender: 'Men'
    },
    {
      id: 3,
      name: 'Women Handbag',
      description: 'Elegant handbag for everyday use.',
      price: 1599,
      originalPrice: 2199,
      category: 'Women',
      subCategory: 'Accessories',
      brand: 'StyleHub',
      image: 'assets/images/handbag.jpg',
      rating: 4.6,
      stock: 15,
      gender: 'Women'
    },
    {
      id: 4,
      name: 'Kids Sports Shoes',
      description: 'Lightweight and comfortable sports shoes.',
      price: 999,
      category: 'Kids',
      subCategory: 'Footwear',
      image: 'assets/images/kid-shoes.jpg',
      rating: 4.3,
      stock: 20,
      gender: 'Kids'
    },
    {
      id: 5,
      name: 'Face Moisturizer',
      description: 'Daily moisturizing cream for soft skin.',
      price: 499,
      originalPrice: 699,
      category: 'Beauty',
      subCategory: 'Skincare',
      brand: 'GlowCare',
      image: 'assets/images/moisturizer.jpg',
      rating: 4.4,
      stock: 30,
      gender: 'Unisex'
    }
  ];

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(
      product => product.category.toLowerCase() === category.toLowerCase()
    );
  }

  searchProducts(searchText: string): Product[] {
    const search = searchText.toLowerCase().trim();

    return this.products.filter(product =>
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      (product.brand?.toLowerCase().includes(search) ?? false)
    );
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}