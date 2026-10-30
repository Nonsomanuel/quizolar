import type { StudentAttempt } from "./student-attempt-types"

const STORAGE_KEY = "quizolar:student-demo-attempts"

function readStore(): StudentAttempt[] {
  if (typeof window === "undefined") return []
  try {
    const parsed: unknown = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]")
    return Array.isArray(parsed) ? (parsed as StudentAttempt[]) : []
  } catch {
    return []
  }
}

function writeStore(attempts: StudentAttempt[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(attempts))
}

export const studentAttemptService = {
  getActive(examinationId: string) {
    return readStore().find((attempt) => attempt.examinationId === examinationId && attempt.studentId === "demo-student" && attempt.status === "active")
  },
  create(examinationId: string, durationMinutes: number) {
    const existing = this.getActive(examinationId)
    if (existing) return existing
    const attempt: StudentAttempt = { id: `attempt-${crypto.randomUUID()}`, examinationId, studentId: "demo-student", status: "active", startedAt: new Date().toISOString(), answers: {}, remainingSeconds: durationMinutes * 60 }
    writeStore([...readStore(), attempt])
    return attempt
  },
}
