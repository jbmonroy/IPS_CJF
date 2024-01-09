import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly API = 'https://bj82lmgx-3000.usw3.devtunnels.ms/api/data/'
  private _http = inject(HttpClient)
  public getData(): Observable<any> {
    return this._http.get(`${this.API}`)
  }
  public getDataFiltered(param: string): Observable<any> {
    return this._http.get(`${this.API}filter/${param}`)
  }

  constructor() { }
}
