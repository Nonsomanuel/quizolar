import { ExaminationList } from "@/modules/examinations/examination-list"
import { DashboardShell } from "@/modules/dashboard/dashboard-shell"

export default function TeacherExaminationsPage() {
  return <DashboardShell role="teacher"><ExaminationList /></DashboardShell>
}
