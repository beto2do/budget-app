import { TestBed } from '@angular/core/testing';

import { FormControllerService } from './form-controller.service';
import { ControlBase } from '../models/form-base';

describe('FormControllerService', () => {
  let service: FormControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a form group from controllers', () => {
    const controllers: ControlBase<string>[] = [
      new ControlBase({ key: 'name', required: true }),
      new ControlBase({ key: 'age', required: false }),
    ];
    const formGroup = service.toFormGroup(controllers);
    expect(formGroup.controls['name'].valid).toBeFalse();
    expect(formGroup.controls['name'].value).toEqual('');
    expect(formGroup.controls['age'].valid).toBeTrue();
    expect(formGroup.controls['age'].value).toEqual('');
  });

  it('should return income controllers', () => {
    service.getIncomeControllers().subscribe((controllers) => {
      expect(controllers.length).toBeGreaterThan(0);
      expect(controllers[0].key).toEqual('product-income');
      expect(controllers[1].key).toEqual('amount-income');
    });
  });
});
