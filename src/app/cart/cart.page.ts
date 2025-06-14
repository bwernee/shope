import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: false,
})
export class CartPage {
  cart = [
    {
      name: 'Cool Shirt',
      price: 299,
      image: 'https://i.imgur.com/XqgU3Nx.png'
    },
    {
      name: 'Smartphone',
      price: 9999,
      image: 'https://i.imgur.com/sZlktYy.png'
    }
  ];
}
