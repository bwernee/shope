import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
  standalone: false,
})
export class CategoriesPage {
  categories = [
    'Fashion',
    'Phones',
    'Electronics',
    'Beauty',
    'Home & Living',
    'Groceries',
    'Shoes',
    'Accessories'
  ];
}
