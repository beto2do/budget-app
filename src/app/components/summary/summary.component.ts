import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { SectionComponent } from '../../section/section.component';
import { TableComponent } from '../table/table.component';
import { HeaderComponent } from '../header/header.component';
import { ChartComponent } from '../../chart/chart.component';
import { ChartComparisonComponent } from '../../chart-comparison/chart-comparison.component';
import { BalanceCardComponent } from '../../balance-card/balance-card.component';
import { ComparisonBarsComponent } from '../../comparison-bars/comparison-bars.component';
import { Product } from '../../models/product';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'budget-summary',
  imports: [
    SectionComponent,
    TableComponent,
    HeaderComponent,
    ChartComponent,
    ChartComparisonComponent,
    BalanceCardComponent,
    ComparisonBarsComponent,
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './summary.component.html',
})
export class SummaryComponent {
  initialBalance = signal<number>(0);
  products: Product[] = [];

  constructor(private budgetService: BudgetService) {
    this.products = this.budgetService.getProducts();
  }

  changeBalanceHandler(balance: number) {
    this.initialBalance.set(balance);
  }
}
