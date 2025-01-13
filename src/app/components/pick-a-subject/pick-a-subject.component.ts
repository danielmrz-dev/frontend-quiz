import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';
import { SubjectsService } from '../../services/subjects.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-pick-a-subject',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './pick-a-subject.component.html',
  styleUrl: './pick-a-subject.component.scss'
})
export class PickASubjectComponent implements OnInit {

  constructor(private readonly _subjectsService: SubjectsService) {}

  quizzes: any = []
  ngOnInit(): void {
    this._subjectsService.getSubjectsList().subscribe((value) => {
      console.log(value);
      this.quizzes = value.quizzes.map((quiz: any) => quiz)
    })
  }
  
}
