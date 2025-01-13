import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';
import { SubjectsService } from '../../services/subjects.service';
import { Observable, of, take } from 'rxjs';
import { QuizList } from '../../types/quiz-list.interface';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-pick-a-subject',
  standalone: true,
  imports: [CardComponent, CommonModule, RouterLink, HeaderComponent],
  templateUrl: './pick-a-subject.component.html',
  styleUrl: './pick-a-subject.component.scss'
})
export class PickASubjectComponent {
  
  quizzes: Observable<QuizList> = of([]);

  constructor(private readonly _subjectsService: SubjectsService) {
    this.quizzes = this._subjectsService.getSubjectsList();
  }
}
