import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-checkbook',
  templateUrl: './request-checkbook.component.html',
  styleUrls: ['./request-checkbook.component.less']
})
export class RequestCheckbookComponent {
fromAccount: any;
 
constructor(private router: Router) {

}


  requestCheck() {

    if(this.fromAccount != undefined) {
      alert('check request sent successfully');
      this.router.navigate(['/main']);
    }
    else {
      alert('error sending check request');
    }
    
  }

}
