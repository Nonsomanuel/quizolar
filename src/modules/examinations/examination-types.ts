export type ExaminationStatus = "draft" | "published" | "completed"

export type ExaminationSettings = {
  maxAttempts: number
  randomizeQuestions: boolean
  randomizeOptions: boolean
  allowReview: boolean
  resultVisibility: "immediately" | "after-review" | "hidden"
}

export type Examination = {
  id: string
  title: string
  description: string
  subjectId: string
  subjectName: string
  classId: string
  className: string
  durationMinutes: number
  totalMarks: number
  questionCount: number
  startAt: string
  endAt: string
  status: ExaminationStatus
  createdAt: string
  updatedAt: string
  instructions: string
  settings: ExaminationSettings
}

export type ExaminationDraftInput = Omit<Examination, "id" | "createdAt" | "updatedAt" | "status"> & { status?: ExaminationStatus }

export const examinationSubjects = [
  { id: "mathematics", name: "Mathematics" },
  { id: "english", name: "English Language" },
  { id: "physics", name: "Physics" },
  { id: "biology", name: "Biology" },
  { id: "basic-science", name: "Basic Science" },
]

export const examinationClasses = [
  { id: "jss1", name: "JSS 1" },
  { id: "jss2", name: "JSS 2" },
  { id: "jss3", name: "JSS 3" },
  { id: "ss1", name: "SS 1" },
  { id: "ss2", name: "SS 2" },
  { id: "ss3", name: "SS 3" },
]
