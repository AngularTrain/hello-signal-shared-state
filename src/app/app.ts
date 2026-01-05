import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  // The HTML template
  template: `
    <h1>{{ shopName() }}</h1>
    <p>Current Status: {{ isOpen() ? 'Open' : 'Closed' }}</p>
    <button (click)="toggleShop()">Toggle Status</button>
  `,
})
export class App {
  // 1. Create a Signal containing a string
  shopName = signal('Future Tech Store');

  // 2. Create a Signal containing a boolean
  isOpen = signal(true);

  // 3. Method to change the signal
  toggleShop() {
    // .update() takes the current value and flips it
    this.isOpen.update(value => !value);
    if (this.isOpen()) {
      this.shopName.set('Future Tech Store - Open');
    } else {
      this.shopName.set('Future Tech Store - Closed');
    }
  }
}