import { Component, inject } from '@angular/core';
import { AppStateService } from '../stateservice';

@Component({
  selector: 'app-display',
  standalone: true,
  template: `
    Count: {{ state.count() }}<br>
    <ul>
    @for (item of state.items(); track item.name) {
      <li>{{ item.name }}: €{{ item.price }}</li>
    } @empty {
      <li>There are no items.</li>
    }
  </ul>
  `,
})
export class DisplayComponent {
  readonly state = inject(AppStateService);
}
