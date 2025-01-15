import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AnswerOptionComponent } from '../answer-option/answer-option.component';
import { PurpleButtonComponent } from '../../../purple-button/purple-button.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IQuestion } from '../../../../interfaces/question.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-answer-form',
  standalone: true,
  imports: [CommonModule, AnswerOptionComponent, PurpleButtonComponent, ReactiveFormsModule, RouterLink],
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
  
  @Input({ required: true }) questions: IQuestion[] = []
  @Input({ required: true }) question!: IQuestion;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _route: ActivatedRoute
  ) {
    this.questionForm = _fb.group({
      answer: ['', [Validators.required]]
    });
    this._route.params.subscribe((params) => {
      this.currentQuestionId = params['questionId'];
    })
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
    }
  }

  goToNextQuestion(): string {
    let currentIdNumber = Number(this.currentQuestionId);
    if (currentIdNumber < 10) {
      currentIdNumber++;
    }
    return currentIdNumber.toString();
  }
}
