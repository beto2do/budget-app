import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './table/table.component';
import { Product } from './models/product';
import { HeaderComponent } from './header/header.component';
import { ChartComponent } from './chart/chart.component';
import { BalanceCardComponent } from './balance-card/balance-card.component';
import { ComparisonBarsComponent } from './comparison-bars/comparison-bars.component';
import { SectionComponent } from './section/section.component';
import { ChartComparisonComponent } from './chart-comparison/chart-comparison.component';
import { BudgetService } from './services/budget.service';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TableComponent,
    HeaderComponent,
    ChartComponent,
    ChartComparisonComponent,
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
  products: Product[] = [];

  constructor(private budgetService: BudgetService) {
    this.products = this.budgetService.getProducts();
  }

  changeBalanceHandler(balance: number) {
    this.initialBalance.set(balance);
  }
}
