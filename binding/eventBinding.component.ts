import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  buttonMessage = '';
  inputMessage = '';

  onButtonClick() {
    this.buttonMessage = 'Button was clicked!';
  }

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.inputMessage = inputElement.value;
  }
}