import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  handleFormSubmit(name: string, phone: string): void {
    console.log(`Name: ${name}`);
    console.log(`Phone: ${phone}`);
    alert(`Thank you, ${name}! We are going to contact you on this number: ${phone}.`);
  }
}