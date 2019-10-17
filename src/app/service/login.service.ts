import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlApi } from '../global';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  public authenticate(login: string, password: string) {
      this.http.get(UrlApi.AUTH, {params: { login: login, password: password }}).subscribe(response => {
        console.log(response);
      });
  }
}
