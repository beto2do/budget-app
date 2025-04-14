import { Component, model } from '@angular/core';

@Component({
  selector: 'budget-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  initialBalanceChanged = model<number>();

  changeBalance(event: Event) {
    const target = event.target as HTMLInputElement | null;
    if (target && target.value) {
      this.initialBalanceChanged.update(() => Number(target.value));
    }
  }
}
