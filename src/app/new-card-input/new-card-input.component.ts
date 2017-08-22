import { Component, HostBinding, HostListener, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Card } from '../models/card';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {ValidateFn} from 'codelyzer/walkerFactory/walkerFn';
import 'rxjs/add/operator/debounceTime';
import {dummyValidator} from '../shared/dummy.validator';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-new-card-input',
  template: `
    <div class="card">
      <div class="card-block">
        <input placeholder="Take a note..." class="form-control" name="text" [formControl]="newCardForm.controls['text']">
      </div>
    </div>
  `,
  styles: [
    `.card { margin-bottom: 1.5rem; }`
  ]
})
export class NewCardInputComponent implements OnInit {
  public newCard: Card = { text: '' };
  @HostBinding('class') class= 'col-8';
  @Output() onCardAdd = new EventEmitter<string>();

  @ViewChild('form') public form: NgForm;

  newCardForm: FormGroup;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.charCode === 13 && this.newCardForm.valid) {
      this.addCard(this.newCardForm.controls['text'].value);
    }
  }

  constructor(fb: FormBuilder) {
    // Create a new FormGroup instance with a text FormControl
    this.newCardForm = fb.group({
      'text': [null, Validators.compose([Validators.required, Validators.minLength(2), dummyValidator])]
    });

    // Handle the value changes of the form
    this.newCardForm.valueChanges
      .debounceTime(1000)
      .filter((value) => this.newCardForm.valid)
      .subscribe(data => {
        console.log(data);
      });
  }

  ngOnInit() {
  }

  addCard(cardText: string) {
    // EventEmitter in action
    this.onCardAdd.emit(cardText);
    // To reset one specific form control...
    // this.newCardForm.setValue({ text: 'done!' });

    // Reset the entire form
    this.newCardForm.reset();
  }

}
