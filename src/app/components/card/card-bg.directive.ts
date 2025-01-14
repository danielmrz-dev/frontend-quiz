import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCardBg]',
  standalone: true
})
export class CardBgDirective {

  @Input() appCardBg: string = ''
  @HostBinding('class') get classes(): string {
    switch (this.appCardBg.toLowerCase()) {
      case 'html':
        return 'bg-orange-opaque';
      case 'css':
        return 'bg-green-opaque';
      case 'javascript':
        return 'bg-blue-opaque';
      case 'accessibility':
        return 'bg-purple-opaque';
      default:
        return '';
    }
  }

}
