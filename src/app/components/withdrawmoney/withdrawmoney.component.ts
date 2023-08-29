import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DepositmoneyService } from 'src/app/services/depositmoney.service';

@Component({
  selector: 'app-withdrawmoney',
  templateUrl: './withdrawmoney.component.html',
  styleUrls: ['./withdrawmoney.component.less']
})
export class WithdrawmoneyComponent {
  selectedAccountType!:string;
  amount!:number;
  username:string | null = null;

  constructor(private depositService:DepositmoneyService,private router: Router) {

  }

  ngOnInit() {
    this.username = localStorage.getItem('username');

    if(this.username == null) {
      this.router.navigate(['/login']);
    }
  }

  withdrawMoney() {
    const withdraw = { 
      username: localStorage.getItem('username'),
      accountType: this.selectedAccountType,
      amount: this.amount
    };

    this.depositService.withdraw(withdraw).subscribe(
      (response) => {
        console.log(response);
        alert('balance successfully withdrawn');
        this.router.navigate(['/main']);
      },
      (error) => {
        alert('some error in adding balance')
        console.log(error);
      }
    )
  }

}
