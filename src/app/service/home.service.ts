import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Obj {
  string: string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url = 'http://127.0.0.1:8080/home';

  constructor(private http: HttpClient) { }

  public hello() {
    return this.http.get(this.url + '/hello', { responseType: 'text' });
  }

  public hello2(): Observable<Obj> {
    return this.http.get<Obj>(this.url + '/hello2');
  }
}
