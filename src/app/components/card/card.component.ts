import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardBgDirective } from './card-bg.directive';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf, NgClass, CardBgDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() cardIcon: string = '';
  @Input() cardText: string = '';
  @Input() isCardOnHeader: boolean = false;
}
