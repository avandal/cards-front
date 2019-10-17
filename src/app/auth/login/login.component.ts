import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: string;
  public password: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  public clicked(): void {
    this.loginService.authenticate(this.login, this.password);
  }

}
