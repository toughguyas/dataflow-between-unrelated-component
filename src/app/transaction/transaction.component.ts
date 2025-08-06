import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app-state';
import { deposit, withdrawal } from '../store/balance.actions';

@Component({
    selector: 'app-transaction',
    imports: [ReactiveFormsModule],
    standalone: true, 
    templateUrl: './transaction.component.html',
    styleUrl: './transaction.component.css'
})
export class TransactionComponent {
  formValue = new FormControl();
  constructor(public store: Store<AppState>) {
  }
  onDeposit() {
    const value: number = this.formValue.value;
    this.store.dispatch(deposit({userInput: value}));
  }
  onWithdraw() {
    const value: number = this.formValue.value;
    this.store.dispatch(withdrawal({userInput: value}));
  }

}
