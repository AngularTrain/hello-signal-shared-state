import { Injectable, signal, computed } from '@angular/core';
import { Item } from './item';

@Injectable({ providedIn: 'root' })
export class AppStateService {
  // shared mutable signal
  private readonly _count = signal(0);
  private readonly _items = signal<Item[]>([]);

  // optionally expose a read-only or derived signal
  readonly count = computed(() => this._count());

  readonly items = computed(() => this._items());

  addItem(item: Item) {
    this._items.update(items => [...items, item]);
  } 

  increment() {
    this._count.update(v => v + 1);
  }

  setCount(value: number) {
    this._count.set(value);
  }
}