import { Component, ViewEncapsulation, input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'budget-table',
  imports: [],
  templateUrl: './table.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent {

  headerCellClass = 'border-b border-gray-200 p-4 pt-0 pb-3 pl-8 text-left font-medium';
  dataCellClass = 'border-b border-gray-100 p-4 pl-8';

  products = input.required<Product[]>();
}
