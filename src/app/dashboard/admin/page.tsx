import { DashboardOverview } from "@/modules/dashboard/dashboard-overview"
import { DashboardShell } from "@/modules/dashboard/dashboard-shell"

export default function AdminDashboardPage() {
  return <DashboardShell role="admin"><DashboardOverview role="admin" /></DashboardShell>
}
