import { getLocaleCurrencyCode } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountserviceService } from '../service/accountservice.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent {
  
  id:string | null = null;
  name:string | null = null;
  username:string | null  = null;
  primaryAccountBalance:number | null = null;
  savingAccountBalance:number | null = null;

  constructor(private router: Router, private accountService: AccountserviceService) {
  }

  ngOnInit() {
    this.username = localStorage.getItem('username');

    if(this.username == null) {
      this.router.navigate(['/login']);
    }
    else {
      this.accountService.getAccountDetails(this.username).subscribe(
        (response) => {
          console.log(response);
          this.id = response.id;
          this.name = response.name;
          this.primaryAccountBalance = response.primaryAccountBalance;
          this.savingAccountBalance = response.savingAccountBalance;
        },
        (error) => {
          console.log(error);
        }
      );
    }
    




    
  }


}
