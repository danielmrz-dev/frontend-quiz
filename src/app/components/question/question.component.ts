import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CardComponent } from "../card/card.component";
import { SubjectsService } from '../../services/subjects.service';
import { CommonModule } from '@angular/common';
import { IQuestion } from '../../interfaces/question.interface';
import { AnswerOptionComponent } from "./components/answer-option/answer-option.component";
import { PurpleButtonComponent } from "../purple-button/purple-button.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AnswerFormComponent } from "./components/answer-form/answer-form.component";

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [HeaderComponent, CardComponent, CommonModule, AnswerOptionComponent, PurpleButtonComponent, RouterLink, AnswerFormComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent implements OnInit {

  headerTitle: string = '';
  headerIcon: string = '';
  questions: IQuestion[] = [];
  currentQuestion: IQuestion = {} as IQuestion;
  currentQuestionId: string = '1';
  selectedAnswerId: number | null = null;
  correctAnswer: boolean = false;
  isQuestionAnswered: boolean = false;

  @Input() set subject(pickedSubject: string) {
    this.headerTitle = pickedSubject;
    this._subjectService.getSubjectQuestionsAndAnswers(pickedSubject).subscribe((quiz) => {
      if (!quiz) return;
      this.headerIcon = quiz.icon;
      this.questions = quiz.questions;
      this.currentQuestion = quiz.questions[+this.currentQuestionId];
    })
  }

  @Input() set questionId(questionId: string) {
    this.currentQuestionId = questionId;

    // Implementar aqui as mudanças que acontecem quando a pergunta muda
    // alert("Questão nova");
    this.isQuestionAnswered = false;
    
  }
  
  constructor(
    private readonly _subjectService: SubjectsService,
    private readonly route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.currentQuestionId = params['questionId'];
      this.currentQuestion = this.questions[+this.currentQuestionId];
    });
  }

  onOptionSelected(answerId: number) {
    this.selectedAnswerId = answerId;
  }
}
