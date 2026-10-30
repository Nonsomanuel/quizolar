import Link from "next/link"
import { ArrowUpRight, CalendarDays, CheckCircle2 } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { dashboardRoles, overviewData, type DashboardRole } from "./dashboard-config"

export function DashboardOverview({ role }: { role: DashboardRole }) {
  const data = overviewData[role]
  const config = dashboardRoles[role]
  const actionLinks: Record<DashboardRole, string[]> = {
    admin: ["/dashboard/admin/students", "/dashboard/teacher/examinations/create"],
    teacher: ["/dashboard/teacher/examinations/create", "/dashboard/teacher/question-bank"],
    student: ["/dashboard/student/examinations", "/dashboard/student/practice"],
  }

  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div><p className="mb-2 text-sm font-semibold text-primary">{data.eyebrow}</p><h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">{data.title}</h1><p className="mt-2 max-w-2xl text-muted-foreground">{data.description}</p></div>
        <div className="flex flex-wrap gap-3">{data.actions.map((action, index) => <Link key={action} href={actionLinks[role][index]} className={cn(buttonVariants({ variant: index === 0 ? "default" : "outline" }))}>{action}<ArrowUpRight data-icon="inline-end" /></Link>)}</div>
      </section>
      <div className="rounded-xl border border-dashed bg-card px-4 py-3 text-sm text-muted-foreground"><span className="font-semibold text-foreground">Preview workspace:</span> The figures and activity below are mock data for the {config.label.toLowerCase()} experience and will be replaced with live records later.</div>
      <section aria-label="Summary" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{data.stats.map(([label, value, detail, Icon]) => <Card key={label} size="sm"><CardContent className="flex items-start justify-between gap-4"><div><p className="text-sm text-muted-foreground">{label}</p><p className="mt-2 font-heading text-3xl font-bold tracking-tight">{value}</p><p className="mt-1 text-xs text-muted-foreground">{detail}</p></div><div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon /></div></CardContent></Card>)}</section>
      <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]"><Card><CardHeader><div className="flex items-center justify-between gap-4"><div><CardTitle>{data.activityTitle}</CardTitle><CardDescription className="mt-1">A preview of the latest workspace activity.</CardDescription></div><CalendarDays className="text-muted-foreground" /></div></CardHeader><CardContent><div className="flex flex-col gap-1">{data.activities.map((activity) => <div key={activity} className="flex items-center gap-3 rounded-xl border-b px-1 py-4 last:border-0"><div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><CheckCircle2 /></div><p className="text-sm font-medium">{activity}</p></div>)}</div></CardContent></Card><Card id="quick-actions"><CardHeader><CardTitle>Quick actions</CardTitle><CardDescription className="mt-1">Shortcuts for your most common tasks.</CardDescription></CardHeader><CardContent className="flex flex-col gap-3">{data.actions.map((action, index) => <Link key={action} href={actionLinks[role][index]} className={cn(buttonVariants({ variant: index === 0 ? "gradient" : "outline" }), "w-full justify-between")}>{action}<ArrowUpRight data-icon="inline-end" /></Link>)}<p className="pt-2 text-xs leading-relaxed text-muted-foreground">Open a workspace to continue with this role&apos;s next task.</p></CardContent></Card></div>
    </div>
  )
}
