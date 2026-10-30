import type { StudentExamQuestion } from "./student-examination-service"
import type { StudentAttempt } from "./student-attempt-types"

export type StudentResult = { answered: number; correct: number; incorrect: number; unanswered: number; marksEarned: number; maximumMarks: number; percentage: number }

export function calculateStudentResult(questions: StudentExamQuestion[], attempt: StudentAttempt): StudentResult {
  let correct = 0
  let marksEarned = 0
  for (const question of questions) {
    const answer = attempt.answers[question.id]
    if (!answer) continue
    if (answer === question.correctOptionId) { correct += 1; marksEarned += question.marks }
  }
  const answered = questions.filter((question) => Boolean(attempt.answers[question.id])).length
  const maximumMarks = questions.reduce((total, question) => total + question.marks, 0)
  const percentage = maximumMarks > 0 ? Math.round((marksEarned / maximumMarks) * 100) : 0
  return { answered, correct, incorrect: answered - correct, unanswered: questions.length - answered, marksEarned, maximumMarks, percentage }
}
