import { DashboardShell } from "@/modules/dashboard/dashboard-shell"
import { ExaminationDetails } from "@/modules/examinations/examination-details"

export default async function ExaminationDetailsPage({ params }: { params: Promise<{ examId: string }> }) {
  const { examId } = await params
  return <DashboardShell role="teacher"><ExaminationDetails examinationId={examId} /></DashboardShell>
}
