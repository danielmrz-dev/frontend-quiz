import { Component, Input } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SubjectsService } from '../../services/subjects.service';
import { CommonModule } from '@angular/common';
import { IQuestion } from '../../interfaces/question.interface';
import { AnswerFormComponent } from "./components/answer-form/answer-form.component";

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [HeaderComponent, CommonModule, AnswerFormComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {


  headerTitle: string = '';
  headerIcon: string = '';
  questions: IQuestion[] = [];
  currentQuestion: IQuestion = {} as IQuestion;
  selectedAnswerId: number | null = null;
  correctAnswer: boolean = false;
  isQuestionAnswered: boolean = false;
  currentQuestionId: number = 0;
  
  @Input() set subject(pickedSubject: string) {
    this.headerTitle = pickedSubject;
    this._subjectService.getSubjectQuestionsAndAnswers(pickedSubject).subscribe((quiz) => {
      if (!quiz) return;
      this.headerIcon = quiz.icon;
      this.questions = quiz.questions;
      this.currentQuestion = quiz.questions[+this.currentQuestionId];
    })
  }

  constructor(private readonly _subjectService: SubjectsService) {}

  onOptionSelected(answerId: number) {
    this.selectedAnswerId = answerId;
  }

  getQuestionId(index: number) {
    this.currentQuestionId = index;
    this.currentQuestion = this.questions[index];
  }
}
