import { examinationQuestionService } from "@/modules/examinations/examination-question-service"
import { examinationService } from "@/modules/examinations/examination-service"
import type { Examination } from "@/modules/examinations/examination-types"

export type StudentExamAvailability = "available" | "upcoming" | "closed" | "invalid"
export type StudentExamQuestion = { id: string; questionText: string; type: "multiple-choice" | "true-false"; options: { id: string; text: string }[]; correctOptionId: string; marks: number }

export function getStudentExaminations() {
  return examinationService.list().filter((exam) => exam.status === "published")
}

export function getStudentExamination(id: string) {
  const examination = examinationService.getById(id)
  return examination?.status === "published" ? examination : undefined
}

export function getExamAvailability(examination: Examination, now = new Date()): StudentExamAvailability {
  const questions = examinationQuestionService.list(examination.id)
  if (questions.length === 0 || examination.questionCount <= 0 || examination.totalMarks <= 0 || examination.durationMinutes <= 0) return "invalid"
  const start = new Date(examination.startAt)
  const end = new Date(examination.endAt)
  if (Number.isNaN(start.valueOf()) || Number.isNaN(end.valueOf()) || end <= start) return "invalid"
  if (now < start) return "upcoming"
  if (now > end) return "closed"
  return "available"
}

export function getStudentExamQuestions(examinationId: string): StudentExamQuestion[] {
  return examinationQuestionService.list(examinationId).map(({ question, ...assignment }) => ({ id: assignment.questionId, questionText: question.questionText, type: question.type, options: question.options, correctOptionId: question.correctOptionId, marks: assignment.marksOverride ?? question.marks }))
}
