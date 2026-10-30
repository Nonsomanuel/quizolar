"use client"

import Link from "next/link"
import { Construction, RotateCcw } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { studentAttemptService } from "./student-attempt-service"

export function StudentSessionPlaceholder({ examId }: { examId: string }) {
  const attempt = studentAttemptService.getActive(examId)
  return <main className="flex min-h-[60vh] items-center justify-center"><Card className="w-full max-w-xl"><CardHeader className="items-center text-center"><div className="rounded-full bg-primary/10 p-4 text-primary"><Construction className="size-8" /></div><CardTitle>CBT workspace coming next</CardTitle><CardDescription>{attempt ? "Your local demonstration attempt is saved and ready to resume." : "The examination session could not be found in this browser."}</CardDescription></CardHeader><CardContent className="flex flex-col gap-4 text-center"><p className="text-sm leading-6 text-muted-foreground">Question navigation, answer capture, timer controls, and submission will be implemented in the next development phase. Nothing is submitted to a server in this prototype.</p><Link href={`/dashboard/student/examinations/${examId}`} className="inline-flex h-9 items-center justify-center rounded-md border bg-background px-4 text-sm font-medium hover:bg-muted"><RotateCcw className="mr-2 size-4" />Return to instructions</Link></CardContent></Card></main>
}
