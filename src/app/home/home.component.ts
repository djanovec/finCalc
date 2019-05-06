import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calc.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

presentValue: number;   //[(ngModel)]="presentValue" name="presentValue"
interest: number;       //[(ngModel)]="interest"     name="interest"
numPeriods: number;     //[(ngModel)]="numPeriods"   name="numPeriods"
futureValue: number;     //<div>The future value is = {{futureValue | number:'1.0-2'}} </div>

// fv(PV, i, n) {
//     var x = (1 + i / 100)
//     var FV = PV * (Math.pow(x, n))
//     console.log(FV)
//     return FV;
// }

// <div *ngIf="presentValue && interest && numPeriods">{{presentValue}} * (1 + {{interest}}/100)<sup>{{numPeriods}}</sup></div>


calcFV() {
    let x = (1 + this.interest / 100);
    this.futureValue = this.presentValue * (Math.pow(x, this.numPeriods));
    
} 

  constructor() {
  
}

    ngOnInit() {

    }
      
}
