import type { Examination, ExaminationDraftInput } from "./examination-types"

const STORAGE_KEY = "quizolar:teacher-examinations"

const mockExaminations: Examination[] = [
  { id: "exam-1", title: "JSS 3 Mathematics Mock", description: "A revision assessment covering algebra and geometry.", subjectId: "mathematics", subjectName: "Mathematics", classId: "jss3", className: "JSS 3", durationMinutes: 90, totalMarks: 60, questionCount: 30, startAt: "2026-11-03T10:00:00.000Z", endAt: "2026-11-03T11:30:00.000Z", status: "published", createdAt: "2026-10-12T08:00:00.000Z", updatedAt: "2026-10-18T09:30:00.000Z", instructions: "Answer all questions.", settings: { maxAttempts: 1, randomizeQuestions: true, randomizeOptions: false, allowReview: true, resultVisibility: "immediately" } },
  { id: "exam-2", title: "SS 2 Physics: Motion", description: "Formative assessment on motion and forces.", subjectId: "physics", subjectName: "Physics", classId: "ss2", className: "SS 2", durationMinutes: 45, totalMarks: 40, questionCount: 20, startAt: "2026-11-08T09:00:00.000Z", endAt: "2026-11-08T09:45:00.000Z", status: "draft", createdAt: "2026-10-20T12:00:00.000Z", updatedAt: "2026-10-20T12:00:00.000Z", instructions: "Show your working where necessary.", settings: { maxAttempts: 2, randomizeQuestions: false, randomizeOptions: false, allowReview: true, resultVisibility: "after-review" } },
  { id: "exam-3", title: "JSS 1 Basic Science Term Review", description: "End-of-unit review for the first term.", subjectId: "basic-science", subjectName: "Basic Science", classId: "jss1", className: "JSS 1", durationMinutes: 60, totalMarks: 50, questionCount: 25, startAt: "2026-10-15T10:00:00.000Z", endAt: "2026-10-15T11:00:00.000Z", status: "completed", createdAt: "2026-09-28T10:00:00.000Z", updatedAt: "2026-10-16T14:00:00.000Z", instructions: "Read each question carefully.", settings: { maxAttempts: 1, randomizeQuestions: true, randomizeOptions: true, allowReview: false, resultVisibility: "immediately" } },
]

function readStore(): Examination[] {
  if (typeof window === "undefined") return mockExaminations
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (!saved) return mockExaminations
  try { return JSON.parse(saved) as Examination[] } catch { return mockExaminations }
}

function writeStore(examinations: Examination[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(examinations))
}

export const examinationService = {
  list(): Examination[] { return readStore() },
  getById(id: string): Examination | undefined { return readStore().find((exam) => exam.id === id) },
  createDraft(input: ExaminationDraftInput): Examination {
    const now = new Date().toISOString()
    const examination: Examination = { ...input, id: `exam-${crypto.randomUUID()}`, status: input.status ?? "draft", createdAt: now, updatedAt: now }
    writeStore([examination, ...readStore()])
    return examination
  },
  update(id: string, input: Partial<ExaminationDraftInput>): Examination | undefined {
    const updated = readStore().map((exam) => exam.id === id && exam.status !== "completed" ? { ...exam, ...input, updatedAt: new Date().toISOString() } : exam)
    const result = updated.find((exam) => exam.id === id)
    writeStore(updated)
    return result
  },
  duplicate(id: string): Examination | undefined {
    const source = readStore().find((exam) => exam.id === id)
    if (!source) return undefined
    return this.createDraft({ ...source, title: `${source.title} (Copy)`, status: "draft" })
  },
  deleteDraft(id: string): boolean {
    const current = readStore()
    const target = current.find((exam) => exam.id === id)
    if (!target || target.status !== "draft") return false
    writeStore(current.filter((exam) => exam.id !== id))
    return true
  },
}
