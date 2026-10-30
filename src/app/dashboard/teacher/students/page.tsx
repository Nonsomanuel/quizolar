import { Users, Search, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardShell } from "@/modules/dashboard/dashboard-shell"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const assignedStudents = [
  { name: "Amina Yusuf", className: "JSS 3", status: "On track", score: "86%" },
  { name: "Daniel Okafor", className: "JSS 3", status: "Needs review", score: "68%" },
  { name: "Fatima Bello", className: "SS 2", status: "On track", score: "91%" },
  { name: "Ibrahim Musa", className: "SS 2", status: "On track", score: "79%" },
]

export default function TeacherStudentsPage() {
  return <DashboardShell role="teacher"><main className="flex flex-col gap-6"><header className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="mb-2 text-sm font-semibold text-primary">Assigned learners</p><h1 className="font-heading text-3xl font-bold tracking-tight">Students</h1><p className="mt-2 max-w-2xl text-muted-foreground">Monitor students connected to your assigned classes without changing school-wide records.</p></div><Link href="/dashboard/teacher/classes" className={cn(buttonVariants({ variant: "outline" }))}>View my classes<ArrowUpRight data-icon="inline-end" /></Link></header><div className="rounded-xl border border-dashed bg-card px-4 py-3 text-sm text-muted-foreground"><strong className="text-foreground">Teacher view:</strong> Only students from your assigned classes are shown in this frontend demonstration.</div><div className="grid gap-4 sm:grid-cols-3"><Card><CardContent className="p-5"><Users className="size-5 text-primary" /><p className="mt-3 text-sm text-muted-foreground">Assigned students</p><p className="mt-1 text-3xl font-bold">{assignedStudents.length}</p></CardContent></Card><Card><CardContent className="p-5"><p className="text-sm text-muted-foreground">Classes represented</p><p className="mt-1 text-3xl font-bold">2</p></CardContent></Card><Card><CardContent className="p-5"><p className="text-sm text-muted-foreground">Average score</p><p className="mt-1 text-3xl font-bold">81%</p></CardContent></Card></div><Card><CardHeader><div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center"><div><CardTitle>Assigned students</CardTitle><CardDescription>Search and review learner progress.</CardDescription></div><label className="flex items-center gap-2 rounded-lg border px-3"><Search className="size-4 text-muted-foreground" /><span className="sr-only">Search assigned students</span><input placeholder="Search students" className="w-48 bg-transparent py-2 text-sm outline-none" /></label></div></CardHeader><CardContent><div className="flex flex-col gap-2">{assignedStudents.map((student) => <div key={student.name} className="flex flex-col gap-3 rounded-xl border p-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-semibold">{student.name}</p><p className="text-sm text-muted-foreground">{student.className}</p></div><div className="flex items-center gap-3"><Badge variant={student.status === "On track" ? "secondary" : "default"}>{student.status}</Badge><span className="text-sm font-semibold">{student.score}</span></div></div>)}</div></CardContent></Card></main></DashboardShell>
}
