import { Component, output, input } from '@angular/core';

@Component({
  selector: 'budget-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  buttonText = input.required<string>();

  onClick = output<MouseEvent>();

  clickButton($event: MouseEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    this.onClick.emit($event);
  }
}
