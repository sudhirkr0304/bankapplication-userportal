import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {

    const url = `${this.baseUrl}/user/login`;
    console.log(url);
    return this.http.post<any>(url, user);

  }
}
