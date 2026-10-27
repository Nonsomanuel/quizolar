import { DashboardOverview } from "@/modules/dashboard/dashboard-overview"
import { DashboardShell } from "@/modules/dashboard/dashboard-shell"

export default function TeacherDashboardPage() {
  return <DashboardShell role="teacher"><DashboardOverview role="teacher" /></DashboardShell>
}
