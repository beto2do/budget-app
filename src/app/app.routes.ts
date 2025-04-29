import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'summary',
    loadComponent: () =>
      import('./components/summary/summary.component').then(
        (m) => m.SummaryComponent,
      ),
  },
  {
    path: 'transactions',
    loadComponent: () =>
      import('./components/transactions/transactions.component').then(
        (m) => m.TransactionsComponent,
      ),
  },
  { path: '', redirectTo: '/summary', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () =>
      import('./components/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent,
      ),
  },
];
