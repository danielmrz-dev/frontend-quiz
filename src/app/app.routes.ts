import { Routes, withComponentInputBinding } from '@angular/router';
import { PickASubjectComponent } from './components/pick-a-subject/pick-a-subject.component';
import { QuestionComponent } from './components/question/question.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
    {
        path: '',
        component: PickASubjectComponent
    },
    {
        path: 'questions/:subject',
        component: QuestionComponent,
    },
];
