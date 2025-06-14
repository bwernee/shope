import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  products = [
    {
      name: 'Wireless Earbuds',
      price: 799,
      image: 'https://picsum.photos/300/350?random=1'
    },
    {
      name: 'iPhone Case - Shockproof',
      price: 129,
      image: 'https://picsum.photos/300/450?random=2'
    },
    {
      name: 'Bluetooth Speaker',
      price: 459,
      image: 'https://picsum.photos/300/400?random=3'
    },
    {
      name: 'USB Rechargeable Fan',
      price: 199,
      image: 'https://picsum.photos/300/300?random=4'
    },
    {
      name: 'Mini Humidifier',
      price: 289,
      image: 'https://picsum.photos/300/360?random=5'
    },
    {
      name: 'Desk Organizer',
      price: 99,
      image: 'https://picsum.photos/300/420?random=6'
    },
    {
      name: 'Portable Vacuum',
      price: 749,
      image: 'https://picsum.photos/300/390?random=7'
    }
  ];
}
