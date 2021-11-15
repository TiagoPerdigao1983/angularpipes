import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number = 0;
  height: number = 0;
  miles: number = 0;

  car = {
    make: 'Seat',
    model: 'Ibiza',
    year: 2018,
  };

  onMilesChange(target: EventTarget) {
    const value = (<HTMLInputElement>target).value;
    this.miles = parseFloat(value);
  }

  onHeightChange(target: EventTarget) {
    const value = (<HTMLInputElement>target).value;
    this.height = parseFloat(value);
  }

  onNameChange(target: EventTarget) {
    const value = (<HTMLInputElement>target).value;
    this.name = value;
  }

  onDateChange(target: EventTarget) {
    const value = (<HTMLInputElement>target).value;
    this.date = value;
  }

  onAmountChange(target: EventTarget) {
    const value = (<HTMLInputElement>target).value;
    this.amount = parseFloat(value);
  }
}
