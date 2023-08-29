import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountserviceService } from 'src/app/service/accountservice.service';
import { DepositmoneyService } from 'src/app/services/depositmoney.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.less'],
})
export class TransactionListComponent {
  transactions:any = [];
  username: string | null = null;
  constructor(
    private router: Router,
    private accountService: AccountserviceService
  ) {}

  ngOnInit() {
    this.username = localStorage.getItem('username');

    if (this.username == null) {
      this.router.navigate(['/login']);
    }

    this.accountService.showTransactions(this.username).subscribe(
      (response) => {
        console.log(response);
        this.transactions = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
