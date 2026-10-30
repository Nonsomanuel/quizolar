import { DashboardShell } from "@/modules/dashboard/dashboard-shell"
import { StudentCbtWorkspace } from "@/modules/student-examinations/student-cbt-workspace"
import { getStudentExamination } from "@/modules/student-examinations/student-examination-service"

export default async function StudentSessionPage({ params }: { params: Promise<{ examId: string }> }) {
  const { examId } = await params
  const examination = getStudentExamination(examId)
  if (!examination) return <DashboardShell role="student"><StudentCbtWorkspace examId={examId} title="Examination unavailable" subject="" durationMinutes={0} /></DashboardShell>
  return <DashboardShell role="student"><StudentCbtWorkspace examId={examId} title={examination.title} subject={examination.subjectName} durationMinutes={examination.durationMinutes} /></DashboardShell>
}
