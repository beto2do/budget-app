import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  constructor() {}

  getProducts(): Product[] {
    return [
      {
        id: 1,
        name: 'Internet',
        estimate: 100,
      },
      {
        id: 2,
        name: 'Transportation',
        estimate: 200,
      },
      {
        id: 3,
        name: 'Water',
        estimate: 300,
      },
      {
        id: 4,
        name: 'Natural juice',
        estimate: 400,
      },
      {
        id: 5,
        name: 'Gym',
        estimate: 500,
      },
    ];
  }
}
