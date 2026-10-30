import type { Question } from "@/modules/questions/question-types"

export type ExaminationQuestion = {
  id: string
  examinationId: string
  questionId: string
  position: number
  marksOverride?: number
  createdAt: string
  updatedAt: string
}

export type AssignedQuestion = ExaminationQuestion & { question: Question }

export function assignedMarks(association: ExaminationQuestion, question: Question) {
  return association.marksOverride ?? question.marks
}
