import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  username!: string;
  password:string | undefined;

  constructor(private http: HttpClient,private userService: LoginService,private router: Router) {}

  login() {
    const user = { username: this.username, password: this.password };

    this.userService.login(user).subscribe(
      (response) => {
        alert('login successfull');
        console.log(response);
        localStorage.setItem('id',response.id);
        localStorage.setItem('name',response.name);
        localStorage.setItem('username',response.username);
        localStorage.setItem('primaryAccountBalance',response.primaryAccountBalance);
        localStorage.setItem('savingAccountBalance',response.savingAccountBalance);
        this.router.navigate(['/main']);
      },
      (error) => {
        alert('login failed');
        console.log(error);
      }
    );


  }



}
