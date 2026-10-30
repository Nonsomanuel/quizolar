import type { StudentAttempt } from "./student-attempt-types"

const STORAGE_KEY = "quizolar:student-demo-attempts"

function readStore(): StudentAttempt[] {
  if (typeof window === "undefined") return []
  try {
    const parsed: unknown = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]")
    if (!Array.isArray(parsed)) return []
    return parsed.filter((item): item is StudentAttempt => item && typeof item === "object" && typeof item.id === "string" && typeof item.examinationId === "string" && typeof item.startedAt === "string" && (item.status === "active" || item.status === "submitted")).map((attempt) => ({ ...attempt, answers: attempt.answers && typeof attempt.answers === "object" ? attempt.answers : {}, flaggedQuestionIds: Array.isArray(attempt.flaggedQuestionIds) ? attempt.flaggedQuestionIds : [], remainingSeconds: Number.isFinite(attempt.remainingSeconds) ? attempt.remainingSeconds : 0 }))
  } catch {
    return []
  }
}

function writeStore(attempts: StudentAttempt[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(attempts))
}

export const studentAttemptService = {
  list() { return readStore() },
  getById(id: string) { return readStore().find((attempt) => attempt.id === id) },
  getActive(examinationId: string) { return readStore().find((attempt) => attempt.examinationId === examinationId && attempt.studentId === "demo-student" && attempt.status === "active") },
  getLatest(examinationId: string) { return readStore().filter((attempt) => attempt.examinationId === examinationId && attempt.studentId === "demo-student").sort((a, b) => Date.parse(b.startedAt) - Date.parse(a.startedAt))[0] },
  create(examinationId: string, durationMinutes: number) {
    const existing = this.getActive(examinationId)
    if (existing) return existing
    const attempt: StudentAttempt = { id: `attempt-${crypto.randomUUID()}`, examinationId, studentId: "demo-student", status: "active", startedAt: new Date().toISOString(), answers: {}, flaggedQuestionIds: [], remainingSeconds: Math.max(0, durationMinutes * 60) }
    writeStore([...readStore(), attempt])
    return attempt
  },
  update(id: string, patch: Partial<Pick<StudentAttempt, "answers" | "flaggedQuestionIds" | "remainingSeconds">>) {
    const attempts = readStore().map((attempt) => attempt.id === id && attempt.status === "active" ? { ...attempt, ...patch } : attempt)
    writeStore(attempts)
    return attempts.find((attempt) => attempt.id === id)
  },
  submit(id: string) {
    const attempts = readStore()
    const current = attempts.find((attempt) => attempt.id === id)
    if (!current || current.status === "submitted") return current
    const submitted = { ...current, status: "submitted" as const, submittedAt: new Date().toISOString(), remainingSeconds: Math.max(0, current.remainingSeconds) }
    writeStore(attempts.map((attempt) => attempt.id === id ? submitted : attempt))
    return submitted
  },
}
