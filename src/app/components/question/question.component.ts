import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CardComponent } from "../card/card.component";
import { SubjectsService } from '../../services/subjects.service';
import { CommonModule } from '@angular/common';
import { IQuestion } from '../../interfaces/question.interface';
import { AnswerOptionComponent } from "./answer-option/answer-option.component";
import { PurpleButtonComponent } from "../purple-button/purple-button.component";
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [HeaderComponent, CardComponent, CommonModule, AnswerOptionComponent, PurpleButtonComponent, RouterLink],
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
  nextQuestion: number = 0;

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
  

  convertIndexToLetter(index: number): string {
    return String.fromCharCode(65 + index)
  }

  onOptionSelected(answerId: number) {
    this.selectedAnswerId = answerId;
  }

  goToNextQuestion(): string {
    let currentIdNumber = Number(this.currentQuestionId);
    if (currentIdNumber < 10) {
      currentIdNumber++;
    }
    return currentIdNumber.toString()
  }

  checkAnswer() {
    const correctAnwswer = this.currentQuestion.answer;
    const selectedAnswer = this.currentQuestion.options[this.selectedAnswerId!];

    // Implementar a lógica para caso a resposta esteja correta;

  }

}
