import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  //templateUrl: 'counter.component.html'
  template: `
    <h2>Counter: {{counter}}</h2>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})
export class CounterComponent {
  public counter: number = 10;

  //Por defecto es public
  public increaseBy(num: number): void {
    this.counter += num;
  }

  reset():void {
    this.counter = 10;
  }
}
