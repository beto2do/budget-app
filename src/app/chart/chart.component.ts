import { Component, input } from '@angular/core';

@Component({
  selector: 'budget-chart',
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent {
  initialBalance = input(0);
  label = input.required<string>();
}
