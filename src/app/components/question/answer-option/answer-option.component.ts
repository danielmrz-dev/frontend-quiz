import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-answer-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './answer-option.component.html',
  styleUrl: './answer-option.component.scss'
})
export class AnswerOptionComponent {
  @Input({ required: true }) answerOption: string = '';
  @Input({ required: true }) answerText: string = '';
  @Input({ required: true }) answerId: number | null = null;
  @Input() isSelected: boolean = false;
  @Output() onSelect = new EventEmitter<boolean>()

  onChange() {
    this.isSelected = true;
    this.onSelect.emit(this.isSelected)
  }
  
  onBlur() {
    this.isSelected = false;
    this.onSelect.emit(this.isSelected);
  }
}
