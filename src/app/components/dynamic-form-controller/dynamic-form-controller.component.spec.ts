import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl } from '@angular/forms';
import { DynamicFormControllerComponent } from './dynamic-form-controller.component';
import { ControlBase } from '../../models/form-base';

describe('DynamicFormControllerComponent', () => {
  let component: DynamicFormControllerComponent;
  let fixture: ComponentFixture<DynamicFormControllerComponent>;
  let textboxControl: ControlBase<string> = {
    key: 'testKey',
    label: 'Test Label',
    type: 'number',
    controlType: 'textbox',
    required: true,
    value: '',
    order: 1,
    options: [],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFormControllerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFormControllerComponent);
    fixture.componentRef.setInput('controller', textboxControl);
    fixture.componentRef.setInput(
      'form',
      new FormGroup({ testKey: new FormControl('') }),
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show textbox element', () => {
    const hostElement = fixture.nativeElement as HTMLElement;
    const inputElement = hostElement.querySelector(
      `input[type="${textboxControl.type}"]`,
    );
    expect(inputElement).toBeTruthy();
    expect(inputElement?.getAttribute('id')).toBe(textboxControl.key);
  });

  it('should show dropdown element', () => {
    const dropdownControl: ControlBase<string> = {
      ...textboxControl,
      controlType: 'dropdown',
      options: [
        { key: 'option1', value: 'Option 1' },
        { key: 'option2', value: 'Option 2' },
      ],
    };
    fixture.componentRef.setInput('controller', dropdownControl);
    fixture.detectChanges();
    const hostElement = fixture.nativeElement as HTMLElement;
    const selectElement = hostElement.querySelector('select');
    expect(selectElement).toBeTruthy();
    expect(selectElement?.getAttribute('id')).toBe(dropdownControl.key);
    const options = selectElement?.querySelectorAll('option');
    expect(options?.length).toBe(dropdownControl.options.length);
    expect(options?.[0].textContent).toContain(
      dropdownControl.options[0].value,
    );
    expect(options?.[1].textContent).toContain(
      dropdownControl.options[1].value,
    );
    expect(options?.[0].getAttribute('value')).toBe(
      dropdownControl.options[0].key,
    );
    expect(options?.[1].getAttribute('value')).toBe(
      dropdownControl.options[1].key,
    );
  });
});
