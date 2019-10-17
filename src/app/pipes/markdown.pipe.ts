import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {
  constructor() {}

  transform(value: string): string {
    const ret = value
      .replace(/\*\*(\S)\*\*/gm, '<strong>$1</strong>')
      .replace(/\*\*(\S(.*?\S)?)\*\*/gm, '<strong>$1</strong>')
      .replace(/\*(\S)\*/gm, '<em>$1</em>')
      .replace(/\*(\S(.*?\S)?)\*/gm, '<em>$1</em>')
      .replace(/__(\S)__/gm, '<u>$1</u>')
      .replace(/__(\S(.*?\S)?)__/gm, '<u>$1</u>')
      .replace(/~~(\S)~~/gm, '<s>$1</s>')
      .replace(/~~(\S(.*?\S)?)~~/gm, '<s>$1</s>');
    return ret;
  }

}
