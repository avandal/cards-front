import { Component, OnInit } from '@angular/core';
import { LoveletterService } from '../service/loveletter.service';
import { Card } from '../model/card';
import { Rule } from '../model/rule';
import { Utils } from '../utils';

@Component({
  selector: 'app-loveletter',
  templateUrl: './loveletter.component.html',
  styleUrls: ['./loveletter.component.scss']
})
export class LoveLetterComponent implements OnInit {
  rule: Rule;
  deck: Card[];

  constructor(private loveLetterService: LoveletterService) { }

  ngOnInit() {
    this.loveLetterService.getRules().subscribe((rule: Rule) => {
      this.rule = rule;
    });

    this.loveLetterService.getDeck().subscribe((deck: Card[]) => {
      Utils.shuffle(deck);
      this.deck = deck;
    });
  }
}
