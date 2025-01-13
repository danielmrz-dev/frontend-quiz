import { Component } from '@angular/core';
import { SwitchButtonComponent } from './components/switch-button/switch-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SwitchButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
