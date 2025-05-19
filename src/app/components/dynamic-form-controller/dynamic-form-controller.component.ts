import { Component, input } from '@angular/core';
import { ControlBase } from '../../models/form-base';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'budget-dynamic-form-controller',
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-form-controller.component.html',
})
export class DynamicFormControllerComponent {
  controller = input.required<ControlBase<string>>();
  form = input.required<FormGroup>();

  get isValid() {
    return this.form().controls[this.controller().key].valid;
  }
}
