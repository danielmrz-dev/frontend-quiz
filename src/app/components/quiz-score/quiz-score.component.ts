import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CardComponent } from "../card/card.component";
import { PurpleButtonComponent } from "../purple-button/purple-button.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { QuizScoreService } from '../../services/quiz-score.service';

@Component({
  selector: 'app-quiz-score',
  standalone: true,
  imports: [HeaderComponent, CardComponent, PurpleButtonComponent, RouterLink],
  templateUrl: './quiz-score.component.html',
  styleUrl: './quiz-score.component.scss'
})
export class QuizScoreComponent {

  score!: number
  constructor(private readonly _quizScoreService: QuizScoreService) {
    this.score = _quizScoreService.currentScore
  }
}
