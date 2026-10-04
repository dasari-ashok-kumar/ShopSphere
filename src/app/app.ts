
import { Component } from '@angular/core';
import { HomeComponent } from './features/home/home';
import { CartService } from './core/services/cart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(public cartService: CartService) {}
}
