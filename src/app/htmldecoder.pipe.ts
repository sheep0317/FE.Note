import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'htmldecoder'
})
export class HtmldecoderPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(value: string, ...args: string[]): any {
    var doc = new DOMParser().parseFromString(value, "text/html");
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
