import { DashboardShell } from "@/modules/dashboard/dashboard-shell"
import { StudentExaminationDetails } from "@/modules/student-examinations/student-examination-details"

export default async function StudentExaminationDetailsPage({ params }: { params: Promise<{ examId: string }> }) {
  const { examId } = await params
  return <DashboardShell role="student"><StudentExaminationDetails examId={examId} /></DashboardShell>
}
