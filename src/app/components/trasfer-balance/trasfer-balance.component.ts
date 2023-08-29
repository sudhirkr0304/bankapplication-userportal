import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountserviceService } from 'src/app/service/accountservice.service';

@Component({
  selector: 'app-trasfer-balance',
  templateUrl: './trasfer-balance.component.html',
  styleUrls: ['./trasfer-balance.component.less']
})
export class TrasferBalanceComponent {
  fromAccount:string|null  = null;
  toAccount: string|null = null;
  amount: number|null = null;
  username:string | null  = null;

  constructor( private accountService : AccountserviceService, private router: Router) {

  }

  transferMoney() {
    this.username = localStorage.getItem('username');

    if(this.username == null) {
      this.router.navigate(['/login']);
    }
    if(this.fromAccount == this.toAccount) {
      alert('from and to account should not be same');
    }

    const data = {
      "from" : this.fromAccount,
      "to" : this.toAccount,
      "amount" : this.amount
    }

    this.accountService.tranfer(this.username, data).subscribe(
      (response) => {
        console.log(response);
        alert('Amount transfered successfully');
        this.router.navigate(['/main']);
      },
      (error) => {
        alert(error);
        console.log(error);
      }
    );
    
    
  }

}
