import { notFound } from "next/navigation"
import { DashboardShell } from "@/modules/dashboard/dashboard-shell"
import { ExaminationForm } from "@/modules/examinations/examination-form"
import { examinationService } from "@/modules/examinations/examination-service"

export default async function ExaminationEditPage({ params }: { params: Promise<{ examId: string }> }) {
  const { examId } = await params
  const examination = examinationService.getById(examId)
  if (!examination || examination.status === "completed") notFound()
  return <DashboardShell role="teacher"><ExaminationForm existing={examination} /></DashboardShell>
}
