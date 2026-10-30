import { DashboardShell } from "@/modules/dashboard/dashboard-shell"
import { StudentSessionPlaceholder } from "@/modules/student-examinations/student-session-placeholder"

export default async function StudentSessionPage({ params }: { params: Promise<{ examId: string }> }) {
  const { examId } = await params
  return <DashboardShell role="student"><StudentSessionPlaceholder examId={examId} /></DashboardShell>
}
