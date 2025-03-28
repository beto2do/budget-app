import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonBarsComponent } from './comparison-bars.component';

describe('ComparisonBarsComponent', () => {
  let component: ComparisonBarsComponent;
  let fixture: ComponentFixture<ComparisonBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparisonBarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparisonBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
