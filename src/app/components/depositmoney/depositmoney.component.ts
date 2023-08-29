import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DepositmoneyService } from 'src/app/services/depositmoney.service';

@Component({
  selector: 'app-depositmoney',
  templateUrl: './depositmoney.component.html',
  styleUrls: ['./depositmoney.component.less']
})
export class DepositmoneyComponent {
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


  depositMoney() {
    const deposit = { 
      username: localStorage.getItem('username'),
      accountType: this.selectedAccountType,
      amount: this.amount
    };

    this.depositService.deposit(deposit).subscribe(
      (response) => {
        console.log(response);
        alert('balance successfully added');
        this.router.navigate(['/main']);
      },
      (error) => {
        alert('some error in adding balance')
        console.log(error);
      }
    )
  }

}
