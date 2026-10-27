import { DashboardOverview } from "@/modules/dashboard/dashboard-overview"
import { DashboardShell } from "@/modules/dashboard/dashboard-shell"

export default function StudentDashboardPage() {
  return <DashboardShell role="student"><DashboardOverview role="student" /></DashboardShell>
}
