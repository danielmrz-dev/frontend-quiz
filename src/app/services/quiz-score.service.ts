import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class QuizScoreService {
    currentScore: number = 0

    increaseScore(): void {
        this.currentScore = this.currentScore + 1;
    }
}