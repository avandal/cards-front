import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {
  constructor() {}

  transform(value: string): string {
    const ret = value.replace(/\*\*\*(\S(.*?\S)?)\*\*\*/gm, '<strong>$1</strong>')
      .replace(/__(\S(.*?\S)?)__/gm, '<strong>$1</strong>')
      .replace(/\*(\S(.*?\S)?)\*/gm, '<em>$1</em>')
      .replace(/_(\S(.*?\S)?)_/gm, '<em>$1</em>');
    return ret;
  }

}
