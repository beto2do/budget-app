import {
  Component,
  signal,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Product } from '../../models/product';
import { BudgetService } from '../../services/budget.service';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'budget-table-form',
  imports: [ReactiveFormsModule, ButtonComponent],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './table-form.component.html',
})
export class TableFormComponent {
  private formBuilder = inject(FormBuilder);
  private budgetService = inject(BudgetService);
  tableForm: FormGroup;
  products = signal<Product[]>([]);

  constructor() {
    this.tableForm = this.formBuilder.nonNullable.group({
      amount: ['', [Validators.required, Validators.min(0)]],
      product: ['', [Validators.required]],
    });
    this.budgetService.fetchProducts().then((products) => {
      this.products.set(products);
    });
  }

  onSubmit() {
    console.warn(this.tableForm.value);
  }

  resetForm() {
    this.tableForm.reset();
  }
}
67;
