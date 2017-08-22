import { Component, Input, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="card-block">
        <label class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" [checked]="card.pinned" (change)="card.pinned = !card.pinned">
          <span class="custom-control-indicator"></span>
        </label>
        <div class="card-text">{{ card.text }}</div>
      </div>
    </div>
  `,
  styles: [
    `.card { margin-top: 1.5rem; }`
  ],
})
export class CardComponent implements OnInit {
  @HostBinding('class') class= 'col-3';

  @Input() card: any;

  constructor() { }

  ngOnInit() {
  }

}
