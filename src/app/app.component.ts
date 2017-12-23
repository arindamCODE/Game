import { Component, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs/Rx';

import { SimpleTimer } from 'ng2-simple-timer';

@Component({
  selector: 'app-root',
  template: `
		    <h1>
            {{(secondsDisplay) && (secondsDisplay <= 89) ? secondsDisplay : '00'}} <br/>   
        </h1>
        <button>Click</button> `,
  styles: [`
        h1 {
            color: #57acec;
            margin-top: 24px; 
            text-align: center;   
        }   
  `]
})
export class AppComponent implements OnInit {
  title = 'app';

  ticks = 0;
  
  public n: number = 1;

  constructor() {
    setTimeout(() => {
      this.stopTimer();
    }, 91000);
  }
  secondsDisplay: number = 0;

  sub: Subscription;

  ngOnInit() {
    this.startTimer();
  }

  private startTimer() {

    let timer = Observable.timer(1,1000);


    this.sub = timer.subscribe(
      t => {
        this.ticks = t;

        this.secondsDisplay = this.getSeconds(this.ticks);

      }
    );

   
  }

  private getSeconds(ticks: number) {
    return this.pad(ticks % 90);
  }

  private pad(digit: any) {
    return digit <= 9 ? '0' + digit : digit;
  }
  
  private stopTimer(){
    this.sub.unsubscribe();
  }
}
