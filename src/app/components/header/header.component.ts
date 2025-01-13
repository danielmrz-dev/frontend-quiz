import { Component } from '@angular/core';
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

  constructor(
    private readonly _subjectsService: SubjectsService,
  ) {}

}
