import { Routes } from '@angular/router';
import { PickASubjectComponent } from './components/pick-a-subject/pick-a-subject.component';
import { QuestionComponent } from './components/question/question.component';
import { QuizScoreComponent } from './components/quiz-score/quiz-score.component';

export const routes: Routes = [
    {
        path: '',
        component: PickASubjectComponent
    },
    {
        path: 'questions/:subject',
        component: QuestionComponent,
    },
    {
        path: 'score',
        component: QuizScoreComponent,
    },
];
