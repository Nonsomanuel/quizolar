export type StudentAttemptStatus = "active" | "submitted"

export type StudentAttempt = {
  id: string
  examinationId: string
  studentId: "demo-student"
  status: StudentAttemptStatus
  startedAt: string
  submittedAt?: string
  answers: Record<string, string>
  remainingSeconds: number
}
