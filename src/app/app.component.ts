import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './table/table.component';
import { Product } from './models/product';
import { HeaderComponent } from './header/header.component';
import { ChartComponent } from './chart/chart.component';
import { BalanceCardComponent } from './balance-card/balance-card.component';
import { ComparisonBarsComponent } from './comparison-bars/comparison-bars.component';
import { SectionComponent } from './section/section.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TableComponent,
    HeaderComponent,
    ChartComponent,
    BalanceCardComponent,
    ComparisonBarsComponent,
    SectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'budget';
  initialBalance = signal<number>(0);
  products: Product[] = [
    {
      id: 1,
      name: 'Internet',
      estimate: 100,
    },
    {
      id: 2,
      name: 'Transportation',
      estimate: 200,
    },
    {
      id: 3,
      name: 'Water',
      estimate: 300,
    },
    {
      id: 4,
      name: 'Natural juice',
      estimate: 400,
    },
  ];

  changeBalanceHandler(balance: number) {
    this.initialBalance.set(balance);
  }
}
