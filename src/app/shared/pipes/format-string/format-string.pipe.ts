import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Formats content replacing keys in content with the value provided
 * keys in content should be in the following format {{key}}
 */
@Pipe({
  name: 'formatString',
})
export class FormatStringPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, args: any, isHtml?: boolean): any {
    if (value) {
      Object.keys(args).forEach((key) => {
        value = value.replace('{{' + key + '}}', args[key]);
      });
    }

    if (isHtml) {
      value = this.sanitizer.sanitize(SecurityContext.HTML, value);
    }

    return value;
  }
}
