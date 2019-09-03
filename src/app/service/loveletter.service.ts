import { Injectable } from '@angular/core';
import { Rule } from '../model/rule/rule';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoveletterService {
  private url = 'http://127.0.0.1:8080/loveletter';

  constructor(private http: HttpClient) { }

  public getRules(): Observable<Rule> {
    return this.http.get<Rule>(this.url + '/rules');
  }
}
