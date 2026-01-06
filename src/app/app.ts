import { Component, signal } from '@angular/core';
import { EntryComponent } from "./entry/entry";
import { DisplayComponent } from "./display/display";

@Component({
  selector: 'app-root',
  // The HTML template
  template: `
    <h1>Entry</h1>
    <app-entry/>
    <h1>Display</h1>
    <app-display/>
  `,
  imports: [EntryComponent, DisplayComponent],
})
export class App {
  
}