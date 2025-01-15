import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-answer-option',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './answer-option.component.html',
  styleUrl: './answer-option.component.scss'
})
export class AnswerOptionComponent {
  @Input({ required: true }) answerOption: string = '';
  @Input({ required: true }) answerText: string = '';
  @Input({ required: true }) answerId: number | null = null;
  @Input({ required: true }) selectedAnswerId: number | null = null;
  @Input({ required: true }) formGroup!: FormGroup;
  @Input({ required: true }) answerIsCorrect: boolean | null = null;
  @Output() onSelect = new EventEmitter<number | null>();

  onChange(id: number | null) {
    if (this.formGroup) {
      this.formGroup.get('answer')?.setValue(id);
      // this.formGroup.get('answer')?.markAsTouched();
      this.onSelect.emit(id);
    }
  }
}
