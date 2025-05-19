import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormControllerComponent } from './dynamic-form-controller.component';

describe('DynamicFormControllerComponent', () => {
  let component: DynamicFormControllerComponent;
  let fixture: ComponentFixture<DynamicFormControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFormControllerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFormControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
