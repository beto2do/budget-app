import { Component, ViewEncapsulation, input } from '@angular/core';
import { Product } from '../models/product';
import { ModalComponent } from '../modal/modal.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'budget-table',
  imports: [ModalComponent, ButtonComponent],
  templateUrl: './table.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent {
  isOpen = false;
  headerCellClass =
    'border-b border-gray-200 p-4 pt-0 pb-3 pl-8 text-left font-medium text-gray-900 dark:text-white';
  dataCellClass =
    'border-b border-gray-100 p-4 pl-8 text-gray-900 dark:text-white';

  tableTitle = input.required<string>();
  products = input.required<Product[]>();

  addRow() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }
}
