import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'budget-chart',
  templateUrl: './chart.component.html',
  imports: [CurrencyPipe],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class ChartComponent {
  initialBalance = input(0);
  label = input.required<string>();
}
