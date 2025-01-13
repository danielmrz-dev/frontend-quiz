import { IQuestion as IQuestion } from "./question.interface"

export interface IQuiz {
    title: string
    icon: string
    questions: IQuestion[]
}

