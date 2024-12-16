import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Here we have a simple example object of just some user on an forum for example (without a password..)

export class AppComponent {
  user = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    roles: ['Admin', 'User'],
    address: {
      street: '123 Elm St',
      city: 'Somewhere',
      postalCode: '12345'
    },
    createdAt: new Date()
  };
}