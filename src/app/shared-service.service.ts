import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  balance: number = 1000; // first way to transfer data
  sourceBalance = new BehaviorSubject<number> (1000);
  currentBalance = this.sourceBalance.asObservable();
  signalBalance = signal(1000);
  constructor() { }
  deposit( balance :number) {
     const currentValue = this.sourceBalance.value;
     this.sourceBalance.next(currentValue + balance);
     this.signalBalance.update( x => x + balance);
  }
  withdrawal( balance :number) {
    const currentValue = this.sourceBalance.value;
    this.sourceBalance.next(currentValue - balance);
    this.signalBalance.update( x => x - balance);
 }
  
}
