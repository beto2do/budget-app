import { Injectable } from '@angular/core';
import {
  ControlBase,
  TextboxControl,
  DropdownControl,
} from '../models/form-base';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormControllerService {
  toFormGroup(controllers: ControlBase<string>[]) {
    const group: any = {};

    controllers.forEach((control) => {
      group[control.key] = control.required
        ? new FormControl(control.value || '', Validators.required)
        : new FormControl(control.value || '');
    });
    return new FormGroup(group);
  }

  getIncomeControllers() {
    const controllers: ControlBase<string>[] = [
      new DropdownControl({
        key: 'product-income',
        label: 'Choose a product',
        options: [
          { key: 'product1', value: 'Internet' },
          { key: 'product2', value: 'Transportation' },
          { key: 'product3', value: 'Water' },
          { key: 'product4', value: 'Natural Juice' },
          { key: 'product5', value: 'Gym' },
        ],
        required: true,
        order: 1,
        controlType: 'dropdown',
      }),
      new TextboxControl({
        key: 'amount-income',
        label: 'Amount',
        type: 'number',
        required: true,
        order: 2,
        controlType: 'textbox',
      }),
    ];
    return of(controllers);
  }
}
