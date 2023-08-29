import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],
})
export class RegistrationComponent {
  username!: string;
  password!: string;
  name!: string;

  constructor(private http: HttpClient ,private userService: RegistrationService,private router: Router) {}

  register() {
    const user = { username: this.username, password: this.password, name: this.name };
    // Add other user-related fields to the 'user' object if needed

    this.userService.register(user).subscribe(
      (response) => {
        alert('Registration successfull');
        this.router.navigate(['/login']); 
      },
      (error) => {
        alert("registration failed");
        console.log(error);
      }
    );

  }
}

