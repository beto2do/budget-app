import { TestBed } from '@angular/core/testing';

import { BudgetService } from './budget.service';

describe('BudgetService', () => {
  let service: BudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of products', () => {
    const products = service.getProducts();
    expect(products.length).toBe(5);
    expect(products[0].name).toBe('Internet');
  });

  it('should fetch products asynchronously', (done) => {
    service.fetchProducts().then((products) => {
      expect(products.length).toBe(5);
      expect(products[1].name).toBe('Transportation');
      done();
    });
  });
});
