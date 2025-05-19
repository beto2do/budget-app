import { Component, inject, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormControllerComponent } from '../dynamic-form-controller/dynamic-form-controller.component';
import { ControlBase } from '../../models/form-base';
import { FormControllerService } from '../../services/form-controller.service';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'budget-form-expense',
  providers: [FormControllerService],
  imports: [
    ReactiveFormsModule,
    DynamicFormControllerComponent,
    ButtonComponent,
  ],
  templateUrl: './form-expense.component.html',
})
export class FormExpenseComponent {
  private readonly formControllerService = inject(FormControllerService);

  controllers = input<ControlBase<string>[] | null>([]);
  form: FormGroup = this.formControllerService.toFormGroup(
    this.controllers() as ControlBase<string>[],
  );
  payLoad = '';

  ngOnInit() {
    this.form = this.formControllerService.toFormGroup(
      this.controllers() as ControlBase<string>[],
    );
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
