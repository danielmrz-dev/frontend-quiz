import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCardBg]',
  standalone: true
})
export class CardBgDirective {

  @Input() appCardBg: string = ''
  @HostBinding('class') get classes(): string {
    switch (this.appCardBg) {
      case 'HTML':
        return 'bg-orange-opaque';
      case 'CSS':
        return 'bg-green-opaque';
      case 'JavaScript':
        return 'bg-blue-opaque';
      case 'Accessibility':
        return 'bg-purple-opaque';
      default:
        return '';
    }
  }

}
