import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AnswerOptionComponent } from '../answer-option/answer-option.component';
import { PurpleButtonComponent } from '../../../purple-button/purple-button.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IQuestion } from '../../../../interfaces/question.interface';

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

  @Input({ required: true }) question!: IQuestion;

  constructor(private readonly _fb: FormBuilder) {
    this.questionForm = _fb.group({
      answer: ['', [Validators.required]]
    })
  }

  get answer(): FormControl {
    return this.questionForm.get('answer') as FormControl;
  }

  onSelect(id: number | null) {
    this.selectedAnswerId = id;
    console.log(id);
    
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

  private checkAnswer() {
    if (this.selectedAnswerId !== null) {
      const selectedAnswer = this.question.options[this.selectedAnswerId];
      const isCorrect = selectedAnswer === this.question.answer;
      this.answerIsCorrect = isCorrect;
    }
  }
  

}
