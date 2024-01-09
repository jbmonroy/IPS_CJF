import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API = 'https://bj82lmgx-3000.usw3.devtunnels.ms/api/auth/'
  private _http = inject(HttpClient)
  public logIn(body: { email: string, password: string }): Observable<any> {
    return this._http.post(`${this.API}log-in`, body)
  }
  public cryptPass(body: { password: string }): Observable<any> {
    return this._http.post(`${this.API}crypt-pass`, body)
  }
  public logOut():void {
    sessionStorage.removeItem('token')
  }
  constructor() { }
}
