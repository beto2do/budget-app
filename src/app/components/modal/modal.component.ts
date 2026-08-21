import {
  Component,
  input,
  output,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'budget-modal',
  imports: [],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  isOpen = input.required<boolean>();
}
