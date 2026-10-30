import { DashboardShell } from "@/modules/dashboard/dashboard-shell"
import { getStudentExamination } from "@/modules/student-examinations/student-examination-service"
import { StudentResults } from "@/modules/student-examinations/student-results"

export default async function StudentResultsPage({ params }: { params: Promise<{ examId: string }> }) {
  const { examId } = await params
  const examination = getStudentExamination(examId)
  return <DashboardShell role="student"><StudentResults examId={examId} title={examination?.title ?? "Examination results"} /></DashboardShell>
}
