import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
      <a href="#" class="navbar-brand">Keep Clone</a>
    </nav>
    <app-card-list [cards]="cards"></app-card-list>
  `
})
export class AppComponent {
  public cards: Array<any> = [
    { text: 'Card 1' },
    { text: 'Card 2' },
    { text: 'Card 3' },
    { text: 'Card 4' },
    { text: 'Card 5' },
    { text: 'Card 6' },
    { text: 'Card 7' },
    { text: 'Card 8' },
    { text: 'Card 9' },
    { text: 'Card 10', pinned: true }
  ];
}
