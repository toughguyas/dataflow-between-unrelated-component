import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountHolderComponent } from "./account-holder/account-holder.component";
import { SharedServiceService } from './shared-service.service';
import { TransactionComponent } from "./transaction/transaction.component";

@Component({
    selector: 'app-root',
    imports: [AccountHolderComponent, TransactionComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dataflow-between-unrelated-component';
  constructor(public sharedServiceService: SharedServiceService) {
  }
}
