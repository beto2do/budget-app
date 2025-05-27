import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartComponent } from './chart.component';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;
  let div: HTMLDivElement;
  let h2: HTMLHeadingElement;
  let span: HTMLSpanElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', 'Budget Chart');
    div = fixture.nativeElement.querySelector('div');
    h2 = fixture.nativeElement.querySelector('h2');
    span = fixture.nativeElement.querySelector('span');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial content', async () => {
    expect(div.textContent).toContain('');
    expect(h2.textContent).toContain(component.label());
    expect(span.textContent).toContain('$0.00');
  });

  it('should set balance', () => {
    fixture.componentRef.setInput('initialBalance', 1000);
    fixture.detectChanges();
    expect(span.textContent).toEqual('$1,000.00');
  });
});
