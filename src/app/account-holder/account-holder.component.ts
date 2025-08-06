import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedServiceService } from '../shared-service.service';

@Component({
    selector: 'app-account-holder',
    imports: [],
    templateUrl: './account-holder.component.html',
    styleUrl: './account-holder.component.css'
})
export class AccountHolderComponent implements OnInit, OnDestroy {
  balance :number = 1000;
  constructor(public sharedServiceService: SharedServiceService) {
  }
  public destroy$ = new Subject<void>();
  public ngOnInit() {
    this.sharedServiceService.currentBalance.pipe(takeUntil(this.destroy$)).subscribe(value => this.balance = value);
  }
  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
