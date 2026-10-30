"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ChevronDown, LogOut, Menu, PanelLeftClose, PanelLeftOpen, Sparkles, UserRound, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { dashboardRoles, type DashboardRole } from "./dashboard-config"

type DashboardShellProps = {
  role: DashboardRole
  children: React.ReactNode
}

export function DashboardShell({ role, children }: DashboardShellProps) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const config = dashboardRoles[role]

  return (
    <div className="min-h-screen bg-muted/30">
      <aside className={cn("fixed inset-y-0 left-0 z-40 hidden border-r bg-card transition-[width] duration-200 lg:flex lg:flex-col", collapsed ? "w-20" : "w-64")}>
        <SidebarContent config={config} pathname={pathname} collapsed={collapsed} />
        <button type="button" onClick={() => setCollapsed((value) => !value)} className="mx-3 mb-4 flex min-h-10 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20" aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}>
          {collapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
        </button>
      </aside>

      {mobileOpen && <button type="button" className="fixed inset-0 z-40 bg-foreground/30 lg:hidden" aria-label="Close navigation" onClick={() => setMobileOpen(false)} />}
      <aside className={cn("fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-card shadow-xl transition-transform lg:hidden", mobileOpen ? "translate-x-0" : "-translate-x-full")}>
        <div className="flex items-center justify-end p-4"><Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)} aria-label="Close navigation"><X /></Button></div>
        <SidebarContent config={config} pathname={pathname} onNavigate={() => setMobileOpen(false)} />
      </aside>

      <div className={cn("min-h-screen transition-[padding] duration-200", collapsed ? "lg:pl-20" : "lg:pl-64")}>
        <header className="sticky top-0 z-30 flex min-h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur sm:px-6 lg:px-8">
          <div className="flex items-center gap-3"><Button variant="outline" size="icon" className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu /></Button><div className="hidden text-sm text-muted-foreground sm:block">{config.label} workspace</div></div>
          <div className="relative"><Button variant="ghost" className="gap-3 px-2" onClick={() => setProfileOpen((value) => !value)} aria-expanded={profileOpen} aria-haspopup="menu"><span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">{config.name.slice(0, 1)}</span><span className="hidden text-left sm:block"><span className="block text-sm font-semibold">{config.name} account</span><span className="block text-xs text-muted-foreground">{config.label}</span></span><ChevronDown className="hidden sm:block" /></Button>{profileOpen && <div className="absolute right-0 top-12 z-50 w-56 rounded-xl border bg-popover p-1.5 text-popover-foreground shadow-lg" role="menu"><Link href="#profile" role="menuitem" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-accent"><UserRound /> Profile</Link><button type="button" role="menuitem" className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-destructive hover:bg-destructive/10"><LogOut /> Sign out</button></div>}</div>
        </header>
        <main className="mx-auto w-full max-w-[1600px] p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}

function SidebarContent({ config, pathname, collapsed = false, onNavigate }: { config: (typeof dashboardRoles)[DashboardRole]; pathname: string; collapsed?: boolean; onNavigate?: () => void }) {
  return <div className="flex min-h-0 flex-1 flex-col"><div className={cn("flex h-20 items-center border-b px-5", collapsed ? "justify-center px-2" : "gap-3")}><div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm"><Sparkles /></div>{!collapsed && <div><p className="font-heading text-lg font-bold tracking-tight">Quizolar</p><p className="text-xs text-muted-foreground">{config.label}</p></div>}</div><nav aria-label={`${config.label} navigation`} className="flex-1 overflow-y-auto p-3"><div className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Workspace</div><div className="flex flex-col gap-1">{config.nav.map((item) => { const active = pathname === item.href || pathname.startsWith(`${item.href}/`); const Icon = item.icon; return <Link key={item.href} href={item.href} onClick={onNavigate} aria-current={active ? "page" : undefined} title={collapsed ? item.label : undefined} className={cn("flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20", collapsed && "justify-center px-0", active ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground")}><Icon />{!collapsed && <span>{item.label}</span>}</Link> })}</div></nav>{!collapsed && <div className="m-3 rounded-xl bg-primary/5 p-4"><p className="text-sm font-semibold">Make every quiz count.</p><p className="mt-1 text-xs leading-relaxed text-muted-foreground">Mock content is shown here while your workspace is being connected.</p></div>}</div>
}
