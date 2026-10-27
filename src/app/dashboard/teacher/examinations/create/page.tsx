import { DashboardShell } from "@/modules/dashboard/dashboard-shell"
import { ExaminationForm } from "@/modules/examinations/examination-form"

export default function CreateExaminationPage() {
  return <DashboardShell role="teacher"><ExaminationForm /></DashboardShell>
}
