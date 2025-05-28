import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update initialBalanceChanged on changeBalance', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('input')!;
    spyOn(component, 'changeBalance').and.callThrough();
    nameInput.value = '1000';
    nameInput.dispatchEvent(new Event('input'));

    expect(component.changeBalance).toHaveBeenCalled();
    expect(component.initialBalanceChanged()).toBe(1000);
  });
});
