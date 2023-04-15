interface QuizData {
    title: string;
    subtitle: string;
    quizID: string;
    content: Content[];
    answers: Answer[];
}

interface Answer {
    text: string;
    image: string;
    alt: string;
    combination: string[];
}

interface Content {
    ID: number;
    text: string;
    questions: Question[];
}

interface Question {
    text: string;
    image: string;
    alt: string;
    credit: string;
}

export type { QuizData, Answer, Content, Question}
