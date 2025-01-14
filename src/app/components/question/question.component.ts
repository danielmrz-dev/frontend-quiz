import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CardComponent } from "../card/card.component";
import { SubjectsService } from '../../services/subjects.service';
import { Observable, of } from 'rxjs';
import { IQuiz } from '../../interfaces/quiz.interface';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [HeaderComponent, CardComponent, TitleCasePipe, CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {

  _subjectTitle: string = '';
  subjectIcon: string = '';
  subjectBgColor: string = '';
  quiz$: Observable<IQuiz | undefined> = of();

  @Input() set subject(pickedSubject: string) {
    this.quiz$ = this._subjectService.getSubjectQuestionsAndAnswers(pickedSubject);
    this._subjectTitle = pickedSubject;
  }
  
  constructor(private readonly _subjectService: SubjectsService) {}

}
