import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {
  // presentValue: number;   //[(ngModel)]="presentValue" name="presentValue"
  // interest: number;       //[(ngModel)]="interest"     name="interest"
  // numPeriods: number;     //[(ngModel)]="numPeriods"   name="numPeriods"
  // futureValue: number;     //<div>The future value is = {{futureValue | number:'1.0-2'}} </div>

  // calcFV() {
  //   let x = (1 + this.interest / 100);
  //   this.futureValue = this.presentValue * (Math.pow(x, this.numPeriods)) 
// }
  constructor() { }
}
