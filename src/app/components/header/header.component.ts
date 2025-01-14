import { Component, Input } from '@angular/core';
import { SwitchButtonComponent } from './components/switch-button/switch-button.component';
import { CardComponent } from "../card/card.component";
import { SubjectsService } from '../../services/subjects.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SwitchButtonComponent, CardComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input({ required: true }) headerTitle: string = '';
  @Input({ required: true }) headerIcon: string = '';
  @Input() showCard: boolean = false;

}
