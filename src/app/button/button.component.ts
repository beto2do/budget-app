import { Component } from '@angular/core';

@Component({
  selector: 'button[budgetButton]',
  imports: [],
  template: `<ng-content />`,
  host: {
    class:
      'bg-slate-500 hover:bg-slate-700 dark:bg-slate-300 dark:hover:bg-slate-500 text-white dark:text-gray-900 font-bold py-2 px-4 rounded',
  },
})
export class ButtonComponent {}
