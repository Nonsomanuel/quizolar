"use client"

import Link from "next/link"
import { CalendarDays, Clock3, FileQuestion, Search, TriangleAlert } from "lucide-react"
import { useMemo, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardShell } from "@/modules/dashboard/dashboard-shell"
import { getExamAvailability, getStudentExaminations } from "./student-examination-service"
import type { Examination } from "@/modules/examinations/examination-types"

const dateFormatter = new Intl.DateTimeFormat("en-NG", { dateStyle: "medium", timeStyle: "short" })

function ExamCard({ exam }: { exam: Examination }) {
  const availability = getExamAvailability(exam)
  const action = availability === "available" ? "View instructions" : availability === "upcoming" ? "View details" : "View status"
  return <Card className="flex h-full flex-col">
    <CardHeader className="gap-3"><div className="flex items-start justify-between gap-4"><Badge variant={availability === "available" ? "default" : "secondary"}>{availability}</Badge><span className="text-xs text-muted-foreground">{exam.className}</span></div><CardTitle>{exam.title}</CardTitle><CardDescription>{exam.subjectName} · Demonstration examination</CardDescription></CardHeader>
    <CardContent className="flex flex-1 flex-col gap-5"><div className="grid grid-cols-3 gap-3 text-sm"><span><Clock3 className="mb-1 size-4 text-primary" />{exam.durationMinutes} min</span><span><FileQuestion className="mb-1 size-4 text-primary" />{exam.questionCount} questions</span><span><span className="mb-1 block font-semibold text-primary">{exam.totalMarks}</span>total marks</span></div><p className="flex items-start gap-2 text-xs text-muted-foreground"><CalendarDays className="mt-0.5 size-4 shrink-0" />{dateFormatter.format(new Date(exam.startAt))} – {dateFormatter.format(new Date(exam.endAt))}</p><Link href={`/dashboard/student/examinations/${exam.id}`} className="mt-auto inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">{action}</Link></CardContent>
  </Card>
}

export function StudentExaminationList() {
  const [query, setQuery] = useState("")
  const [subject, setSubject] = useState("all")
  const examinations = getStudentExaminations()
  const subjects = [...new Set(examinations.map((exam) => exam.subjectName))]
  const filtered = useMemo(() => examinations.filter((exam) => exam.title.toLowerCase().includes(query.toLowerCase()) && (subject === "all" || exam.subjectName === subject)), [examinations, query, subject])
  const groups = { available: filtered.filter((exam) => getExamAvailability(exam) === "available"), upcoming: filtered.filter((exam) => getExamAvailability(exam) === "upcoming"), completed: filtered.filter((exam) => ["closed", "invalid"].includes(getExamAvailability(exam))) }
  return <DashboardShell role="student"><main className="flex flex-col gap-8"><header className="flex flex-col gap-2"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">My examinations</p><h1 className="text-3xl font-semibold tracking-tight">Examination centre</h1><p className="max-w-2xl text-muted-foreground">Review your assigned assessments and start an available examination. Records shown here are local demonstration data for this prototype.</p></header><section aria-label="Examination filters" className="flex flex-col gap-3 rounded-2xl border bg-card p-4 sm:flex-row"><label className="flex flex-1 items-center gap-2 rounded-lg border px-3"><Search className="size-4 text-muted-foreground" /><span className="sr-only">Search examinations</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by title" className="w-full bg-transparent py-2 text-sm outline-none" /></label><label className="flex items-center gap-2 text-sm"><span className="sr-only">Filter by subject</span><select value={subject} onChange={(event) => setSubject(event.target.value)} className="rounded-lg border bg-background px-3 py-2"><option value="all">All subjects</option>{subjects.map((item) => <option key={item} value={item}>{item}</option>)}</select></label></section><div className="flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-muted-foreground"><TriangleAlert className="size-4 shrink-0 text-primary" />Student records are not shared with teacher accounts. A published examination is visible here as a clearly labelled demo assignment.</div>{([['Available now', groups.available], ['Upcoming', groups.upcoming], ['Closed or needs setup', groups.completed]] as const).map(([label, items]) => <section key={label} className="flex flex-col gap-4"><div className="flex items-end justify-between"><div><h2 className="text-xl font-semibold">{label}</h2><p className="text-sm text-muted-foreground">{items.length} examination{items.length === 1 ? "" : "s"}</p></div></div>{items.length ? <div className="grid gap-4 lg:grid-cols-2">{items.map((exam) => <ExamCard key={exam.id} exam={exam} />)}</div> : <Card><CardContent className="py-8 text-center text-sm text-muted-foreground">No examinations in this group.</CardContent></Card>}</section>)}</main></DashboardShell>
}
