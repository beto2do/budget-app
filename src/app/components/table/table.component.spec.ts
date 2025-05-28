import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    fixture.componentRef.setInput('tableTitle', 'Test Table');
    fixture.componentRef.setInput('products', [
      { id: 1, name: 'Product 1', estimate: 100 },
    ]);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct table title', () => {
    expect(component.tableTitle()).toBe('Test Table');
  });

  it('should have products defined', () => {
    expect(component.products()).toEqual([
      { id: 1, name: 'Product 1', estimate: 100 },
    ]);
  });
});
