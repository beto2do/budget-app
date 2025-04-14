import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'budget-chart',
  templateUrl: './chart.component.html',
  imports: [CurrencyPipe],
  standalone: true,
  styleUrl: './chart.component.css',
})
export class ChartComponent {
  initialBalance = input(0);
  label = input.required<string>();
}
