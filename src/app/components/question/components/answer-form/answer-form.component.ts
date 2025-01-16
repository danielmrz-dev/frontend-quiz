import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnswerOptionComponent } from '../answer-option/answer-option.component';
import { PurpleButtonComponent } from '../../../purple-button/purple-button.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IQuestion } from '../../../../interfaces/question.interface';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { QuizScoreService } from '../../../../services/quiz-score.service';

@Component({
  selector: 'app-answer-form',
  standalone: true,
  imports: [CommonModule, AnswerOptionComponent, PurpleButtonComponent, ReactiveFormsModule],
  templateUrl: './answer-form.component.html',
  styleUrl: './answer-form.component.scss'
})
export class AnswerFormComponent {
  selectedAnswerId: number | null = null;
  questionForm!: FormGroup;
  showError: boolean = false;
  answerIsCorrect: boolean | null = null;
  correctAnswerId: number | null = null;
  currentQuestionId!: string;
  currentQuestionIndex: number = 0;
  
  @Input({ required: true }) questions: IQuestion[] = []
  @Input({ required: true }) question!: IQuestion;
  @Output() questionId = new EventEmitter<number>();

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _quizScoreService: QuizScoreService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {
    this.questionForm = _fb.group({
      answer: ['', [Validators.required]]
    });
    
    this.updateQuestion(0);
  }

  get answer(): FormControl {
    return this.questionForm.get('answer') as FormControl;
  }


  private checkAnswer() {
    if (this.selectedAnswerId !== null) {
        const selectedAnswer = this.question.options[this.selectedAnswerId];
        const respostaCorretaIndex = this.question.options.findIndex(
            (answer) => answer === this.question.answer
        );
        const isCorrect = selectedAnswer === this.question.answer;
        this.answerIsCorrect = isCorrect;
        this.correctAnswerId = respostaCorretaIndex;
    }
  }
  
  onSelect(id: number | null) {
    this.selectedAnswerId = id;
  }

  convertIndexToLetter(index: number): string {
    return String.fromCharCode(65 + index)
  }

  submitAnswer() {
    if (this.answer.untouched) {
      this.showError = true;
      this.questionForm.reset();
    } else {
      this.showError = false;
      this.checkAnswer();
      this.answer.disable();
      if (this.answerIsCorrect === true) {
        this._quizScoreService.increaseScore();
      }
    }
  }

  updateQuestion(index: number) {
    this.currentQuestionIndex = index;
    this.question = this.questions[index];
    this.resetState();
  }

  resetState() {
    this.selectedAnswerId = null;
    this.answerIsCorrect = null;
    this.correctAnswerId = null;
    this.showError = false;
    this.questionForm.reset();
    this.questionForm.enable();
  }

  goToNextQuestion(): void {
    const nextIndex = this.currentQuestionIndex + 1;
    if (nextIndex < this.questions.length) {
      this.updateQuestion(nextIndex);
      this.questionId.emit(nextIndex);
    } else {
      const subject = this.route.snapshot.params
      this.router.navigate(['score'], subject)
    }
  }
}
