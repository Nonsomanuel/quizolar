"use client"

import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getStudentExamQuestions } from "./student-examination-service"
import { studentAttemptService } from "./student-attempt-service"
import { calculateStudentResult } from "./student-grading-service"

export function StudentResults({ examId, title }: { examId: string; title: string }) {
  const attempt = studentAttemptService.getLatest(examId)
  const questions = getStudentExamQuestions(examId)
  if (!attempt || attempt.status !== "submitted") return <main className="mx-auto flex min-h-[60vh] max-w-2xl items-center justify-center px-4"><Card className="w-full"><CardHeader><CardTitle>Results unavailable</CardTitle><CardDescription>Submit a local attempt before viewing results.</CardDescription></CardHeader><CardContent><Link href={`/dashboard/student/examinations/${examId}`} className="inline-flex h-9 items-center justify-center rounded-md border px-4 text-sm font-medium"><ArrowLeft className="mr-2 size-4" />Return to instructions</Link></CardContent></Card></main>
  const result = calculateStudentResult(questions, attempt)
  const stats = [["Answered", result.answered], ["Correct", result.correct], ["Incorrect", result.incorrect], ["Unanswered", result.unanswered]]
  return <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-8"><div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><Badge variant="secondary">Local demonstration result</Badge><h1 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h1><p className="mt-1 text-muted-foreground">Calculated in this browser from the submitted answers.</p></div><Link href={`/dashboard/student/examinations/${examId}`} className="inline-flex h-9 items-center justify-center self-start rounded-md border px-4 text-sm font-medium"><ArrowLeft className="mr-2 size-4" />Instructions</Link></div><Card><CardHeader className="items-center text-center"><CheckCircle2 className="size-10 text-primary" /><CardTitle className="text-4xl">{result.percentage}%</CardTitle><CardDescription>{result.marksEarned} of {result.maximumMarks} marks</CardDescription></CardHeader><CardContent className="grid gap-3 sm:grid-cols-4">{stats.map(([label, value]) => <div key={label} className="rounded-lg border p-4 text-center"><strong className="block text-2xl">{value}</strong><span className="text-sm text-muted-foreground">{label}</span></div>)}</CardContent></Card><p className="text-sm text-muted-foreground">This result is not authoritative and is not shared with a teacher. Reliable grading and deadline enforcement require a backend.</p></main>
}
