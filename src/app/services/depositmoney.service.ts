import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepositmoneyService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  deposit(deposit: any): Observable<any> {

    const url = `${this.baseUrl}/account/deposit`;
    console.log(url);
    return this.http.post<any>(url, deposit);

  }

  withdraw(withdraw: any): Observable<any> {

    const url = `${this.baseUrl}/account/withdraw`;
    console.log(url);
    return this.http.post<any>(url, withdraw);

  }
}
