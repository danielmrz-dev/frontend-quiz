import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";
import { QuizList } from "../types/quiz-list.interface";
import { IQuestion } from "../interfaces/question.interface";
import { IQuiz } from "../interfaces/quiz.interface";

@Injectable({
    providedIn: 'root'
})
export class SubjectsService {

    constructor(private readonly _http: HttpClient) { }
    getSubjectsList(): Observable<QuizList> {
        return this._http.get<QuizList>("data.json");
    }

    getSubjectQuestionsAndAnswers(subject: string): Observable<IQuiz | undefined> {
        return this._http.get<QuizList>("data.json").pipe(
            map((quizList) => {
                const quizFound = quizList.find((quiz) => quiz.title === subject);
                return quizFound;
            })
        )
    }
}