import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-purple-button',
  standalone: true,
  imports: [],
  templateUrl: './purple-button.component.html',
  styleUrl: './purple-button.component.scss'
})
export class PurpleButtonComponent {
  @Input({ required: true }) buttonText: string = ''
}
