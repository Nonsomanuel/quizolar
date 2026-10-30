import type { Question } from "@/modules/questions/question-types"
import type { AssignedQuestion, ExaminationQuestion } from "./examination-question-types"
import { assignedMarks } from "./examination-question-types"
import { questionService } from "@/modules/questions/question-service"

const STORAGE_KEY = "quizolar:examination-questions"

function readStore(): ExaminationQuestion[] {
  if (typeof window === "undefined") return []
  try {
    const value = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]")
    return Array.isArray(value) ? value : []
  } catch {
    return []
  }
}

function writeStore(value: ExaminationQuestion[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
}

function ordered(value: ExaminationQuestion[], examinationId: string) {
  return value.filter((item) => item.examinationId === examinationId).sort((a, b) => a.position - b.position)
}

export const examinationQuestionService = {
  list(examinationId: string): AssignedQuestion[] {
    const questions = questionService.list()
    return ordered(readStore(), examinationId).flatMap((association) => {
      const question = questions.find((item) => item.id === association.questionId)
      return question ? [{ ...association, question }] : []
    })
  },
  add(examinationId: string, questionIds: string[]): AssignedQuestion[] {
    const current = readStore()
    const existing = new Set(ordered(current, examinationId).map((item) => item.questionId))
    const now = new Date().toISOString()
    let position = ordered(current, examinationId).length
    for (const questionId of questionIds) {
      if (existing.has(questionId)) continue
      current.push({ id: `exam-question-${crypto.randomUUID()}`, examinationId, questionId, position, createdAt: now, updatedAt: now })
      existing.add(questionId)
      position += 1
    }
    writeStore(current)
    return this.list(examinationId)
  },
  remove(examinationId: string, associationId: string) {
    const next = readStore().filter((item) => item.id !== associationId)
    const remaining = ordered(next, examinationId).map((item, position) => ({ ...item, position, updatedAt: new Date().toISOString() }))
    writeStore([...next.filter((item) => item.examinationId !== examinationId), ...remaining])
    return this.list(examinationId)
  },
  move(examinationId: string, associationId: string, direction: -1 | 1) {
    const current = ordered(readStore(), examinationId)
    const index = current.findIndex((item) => item.id === associationId)
    const target = index + direction
    if (index < 0 || target < 0 || target >= current.length) return this.list(examinationId)
    const moved = current[index]
    current[index] = current[target]
    current[target] = moved
    const all = readStore().filter((item) => item.examinationId !== examinationId)
    writeStore([...all, ...current.map((item, position) => ({ ...item, position, updatedAt: new Date().toISOString() }))])
    return this.list(examinationId)
  },
  updateMarks(examinationId: string, associationId: string, value: number | undefined) {
    const next = readStore().map((item) => item.id === associationId && item.examinationId === examinationId ? { ...item, marksOverride: value, updatedAt: new Date().toISOString() } : item)
    writeStore(next)
    return this.list(examinationId)
  },
  total(assigned: AssignedQuestion[]) {
    return assigned.reduce((sum, item) => sum + assignedMarks(item, item.question), 0)
  },
}

export type { Question }
