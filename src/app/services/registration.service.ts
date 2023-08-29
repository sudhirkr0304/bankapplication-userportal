import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {

    const url = `${this.baseUrl}/user/register`;
    console.log(url);
    return this.http.post<any>(url, user);
  }
}
