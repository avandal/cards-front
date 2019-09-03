import { Component, OnInit } from '@angular/core';
import { HomeService, Obj } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  message: string;
  message2: string;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.hello().subscribe((s: string) => {
      this.message = s;
    });

    this.homeService.hello2().subscribe((s: Obj) => {
      this.message2 = s.string;
    });
  }

}
