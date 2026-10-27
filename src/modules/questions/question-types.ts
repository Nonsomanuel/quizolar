export type QuestionType = "multiple-choice" | "true-false"
export type QuestionDifficulty = "easy" | "medium" | "hard"
export type AnswerOption = { id: string; text: string }

type QuestionBase = { id: string; questionText: string; subjectId: string; subjectName: string; topic: string; difficulty: QuestionDifficulty; marks: number; explanation: string; createdAt: string; updatedAt: string }
export type MultipleChoiceQuestion = QuestionBase & { type: "multiple-choice"; options: AnswerOption[]; correctOptionId: string }
export type TrueFalseQuestion = QuestionBase & { type: "true-false"; options: [AnswerOption, AnswerOption]; correctOptionId: "true" | "false" }
export type Question = MultipleChoiceQuestion | TrueFalseQuestion
export type QuestionInput = Omit<Question, "id" | "createdAt" | "updatedAt"> 

export const questionSubjects = [
  { id: "mathematics", name: "Mathematics" }, { id: "english", name: "English Language" }, { id: "physics", name: "Physics" }, { id: "biology", name: "Biology" }, { id: "basic-science", name: "Basic Science" },
]
