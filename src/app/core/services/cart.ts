
import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = signal<Product[]>([]);

  cartCount = computed(() => this.cartItems().length);

  getCartItems(): Product[] {
    return this.cartItems();
  }

  addToCart(product: Product): void {
    this.cartItems.update(items => [...items, product]);
  }

  getCartCount(): number {
    return this.cartCount();
  }
}
