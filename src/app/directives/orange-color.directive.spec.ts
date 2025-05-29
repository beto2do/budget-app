import { Component, DebugElement } from '@angular/core';
import { OrangeColorDirective } from './orange-color.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: ` <h1 budgetOrangeColor>Test Budget</h1>`,
  imports: [OrangeColorDirective],
})
class TestColorComponent {}

describe('OrangeColorDirective', () => {
  let fixture: ComponentFixture<TestColorComponent>;
  let directive: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [OrangeColorDirective],
    }).createComponent(TestColorComponent);
    fixture.detectChanges();
    directive = fixture.debugElement.query(By.directive(OrangeColorDirective));
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
