import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  handleKeyDown(event: KeyboardEvent): void {
    console.log(`Key pressed: ${event.key}, Key code: ${event.code}`);
  }
}