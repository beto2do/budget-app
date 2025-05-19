import { Component, ViewEncapsulation, input, inject } from '@angular/core';
import { Product } from '../models/product';
import { ModalComponent } from '../components/modal/modal.component';
import { ButtonComponent } from '../button/button.component';
import { OrangeColorDirective } from '../directives/orange-color.directive';
import { FormExpenseComponent } from '../components/form-expense/form-expense.component';
import { FormControllerService } from '../services/form-controller.service';
import { ControlBase } from '../models/form-base';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
@Component({
  selector: 'budget-table',
  providers: [FormControllerService],
  imports: [
    ModalComponent,
    ButtonComponent,
    OrangeColorDirective,
    FormExpenseComponent,
    AsyncPipe,
  ],
  templateUrl: './table.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent {
  controllers$: Observable<ControlBase<string>[]> = inject(
    FormControllerService,
  ).getIncomeControllers();
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
