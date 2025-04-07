import { Component, input, output } from '@angular/core';

@Component({
  selector: 'budget-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  isOpen = input.required<boolean>();
}
