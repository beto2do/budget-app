import { Routes } from '@angular/router';
import { SummaryComponent } from './components/summary/summary.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'summary', component: SummaryComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: '', redirectTo: '/summary', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
