import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { SharedServiceService } from '../shared-service.service';
import { AppState } from '../store/app-state';

@Component({
    selector: 'app-account-holder',
    imports: [CommonModule],
    standalone: true, 
    templateUrl: './account-holder.component.html',
    styleUrl: './account-holder.component.css'
})
export class AccountHolderComponent implements OnInit {
  balance = this.store.select(state => state.balance);
  constructor(public store: Store<AppState>) {
  }
  public ngOnInit() {
  }
}
