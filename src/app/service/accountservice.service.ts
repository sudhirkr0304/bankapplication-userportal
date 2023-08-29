import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAccountDetails(username: string): Observable<any> {

    const url = `${this.baseUrl}/user/details?username=${username}`;
    console.log(url);
    return this.http.get(url);

  }

  showTransactions(username: any): Observable<any> {

    const url = `${this.baseUrl}/account/transaction?username=${username}`;
    console.log(url);
    return this.http.get(url);

  }

  tranfer(username: any, data:any): Observable<any> {

    const url = `${this.baseUrl}/account/transfer?username=${username}`;
    console.log(url);
    return this.http.post<any>(url, data);

  }

  
}
