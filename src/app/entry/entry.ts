import { Component, inject } from '@angular/core';
import { AppStateService } from '../stateservice';

@Component({
  selector: 'app-entry',
  standalone: true,
  template: `
    <button (click)="state.increment()">Increment</button>
    <button (click)="state.setCount(0)">Reset</button>
    <button (click)="state.addItem({ name: 'Item ' + state.count(), price: state.count() * 10 })">Add Item</button>
  `,
})
export class EntryComponent {
  readonly state = inject(AppStateService);
}

