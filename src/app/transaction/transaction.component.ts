import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SharedServiceService } from '../shared-service.service';

@Component({
    selector: 'app-transaction',
    imports: [ReactiveFormsModule],
    templateUrl: './transaction.component.html',
    styleUrl: './transaction.component.css'
})
export class TransactionComponent {
  formValue = new FormControl();
  constructor(public sharedServiceService: SharedServiceService) {
  }
  onDeposit() {
    // this.sharedServiceService.balance = this.sharedServiceService.balance + this.formValue.value; // first way transfer data
    // this.sharedServiceService.deposit(this.formValue.value); // 2nd way
    this.sharedServiceService.deposit(this.formValue.value);
  }
  onWithdraw() {
    // this.sharedServiceService.balance = this.sharedServiceService.balance - this.formValue.value; //  first way transfer data
    // this.sharedServiceService.withdrawal(this.formValue.value); // 2nd way
    this.sharedServiceService.withdrawal(this.formValue.value);
  }

}
