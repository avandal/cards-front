import { Component, OnInit } from '@angular/core';
import { LoveletterService } from '../service/loveletter.service';
import { Rule } from '../model/rule/rule';

@Component({
  selector: 'app-loveletter',
  templateUrl: './loveletter.component.html',
  styleUrls: ['./loveletter.component.scss']
})
export class LoveLetterComponent implements OnInit {
  rule: Rule;

  constructor(private loveLetterService: LoveletterService) { }

  ngOnInit() {
    this.loveLetterService.getRules().subscribe((rule: Rule) => {
      rule.proceedings = this.markdown(rule.proceedings);
      this.rule = rule;
    });
  }

  private markdown(lines: string[]): string[] {
    const ret: string[] = [];
    for (const line of lines) {
      const parsed = line.replace(/\*\*(\S(.*?\S)?)\*\*/gm, '<strong>$1</strong>');
      ret.push(parsed);
    }

    return ret;
  }
}
