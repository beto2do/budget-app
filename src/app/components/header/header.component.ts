import { Component, model, ChangeDetectionStrategy } from '@angular/core';
import { OrangeColorDirective } from '../../directives/orange-color.directive';

@Component({
  selector: 'budget-header',
  imports: [OrangeColorDirective],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './header.component.html',
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
