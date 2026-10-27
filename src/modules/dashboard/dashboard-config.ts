import {
  BarChart3,
  BookOpen,
  BrainCircuit,
  ClipboardCheck,
  GraduationCap,
  LayoutDashboard,
  Library,
  LineChart,
  School,
  Settings,
  ShieldCheck,
  Sparkles,
  Trophy,
  UserRound,
  Users,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type DashboardRole = "admin" | "teacher" | "student"

export type DashboardNavItem = {
  label: string
  href: string
  icon: LucideIcon
}

export type DashboardRoleConfig = {
  label: string
  name: string
  description: string
  nav: DashboardNavItem[]
}

export const dashboardRoles: Record<DashboardRole, DashboardRoleConfig> = {
  admin: {
    label: "School Admin",
    name: "Admin",
    description: "A clear view of your school community and progress.",
    nav: [
      { label: "Overview", href: "/dashboard/admin", icon: LayoutDashboard },
      { label: "Students", href: "/dashboard/admin/students", icon: Users },
      { label: "Teachers", href: "/dashboard/admin/teachers", icon: GraduationCap },
      { label: "Classes", href: "/dashboard/admin/classes", icon: School },
      { label: "Subjects", href: "/dashboard/admin/subjects", icon: BookOpen },
      { label: "Examinations", href: "/dashboard/admin/examinations", icon: ClipboardCheck },
      { label: "Results", href: "/dashboard/admin/results", icon: Trophy },
      { label: "Analytics", href: "/dashboard/admin/analytics", icon: BarChart3 },
      { label: "School Settings", href: "/dashboard/admin/settings", icon: Settings },
    ],
  },
  teacher: {
    label: "Teacher",
    name: "Teacher",
    description: "Plan lessons, manage assessments, and support your learners.",
    nav: [
      { label: "Overview", href: "/dashboard/teacher", icon: LayoutDashboard },
      { label: "My Classes", href: "/dashboard/teacher/classes", icon: School },
      { label: "Subjects", href: "/dashboard/teacher/subjects", icon: BookOpen },
      { label: "Question Bank", href: "/dashboard/teacher/question-bank", icon: Library },
      { label: "Create Examination", href: "/dashboard/teacher/create-examination", icon: Sparkles },
      { label: "Examinations", href: "/dashboard/teacher/examinations", icon: ClipboardCheck },
      { label: "Results", href: "/dashboard/teacher/results", icon: Trophy },
      { label: "Student Performance", href: "/dashboard/teacher/performance", icon: LineChart },
    ],
  },
  student: {
    label: "Student",
    name: "Student",
    description: "Keep learning, take assessments, and track your progress.",
    nav: [
      { label: "Overview", href: "/dashboard/student", icon: LayoutDashboard },
      { label: "My Examinations", href: "/dashboard/student/examinations", icon: ClipboardCheck },
      { label: "Practice Tests", href: "/dashboard/student/practice", icon: BrainCircuit },
      { label: "WAEC CBT", href: "/dashboard/student/waec", icon: ShieldCheck },
      { label: "JAMB CBT", href: "/dashboard/student/jamb", icon: ShieldCheck },
      { label: "My Results", href: "/dashboard/student/results", icon: Trophy },
      { label: "Performance History", href: "/dashboard/student/performance", icon: LineChart },
      { label: "Profile", href: "/dashboard/student/profile", icon: UserRound },
    ],
  },
}

export const overviewData = {
  admin: {
    eyebrow: "School overview",
    title: "Good morning, Admin",
    description: "Here is what is happening across your school today.",
    stats: [
      ["Total students", "1,248", "+8.2% this term", Users],
      ["Teachers", "86", "+4 new this month", GraduationCap],
      ["Active classes", "42", "Across 3 departments", School],
      ["Examinations", "18", "6 scheduled this week", ClipboardCheck],
    ],
    activityTitle: "Upcoming activity",
    activities: ["Mathematics mock examination · Today, 10:00 AM", "Staff performance review · Tomorrow, 2:00 PM", "Term results publishing · Friday, 9:00 AM"],
    actions: ["Add student", "Create examination"],
  },
  teacher: {
    eyebrow: "Teaching overview",
    title: "Good morning, Teacher",
    description: "Pick up where you left off and keep your classes moving forward.",
    stats: [
      ["Active examinations", "6", "2 need review", ClipboardCheck],
      ["Assigned classes", "4", "128 learners total", School],
      ["Submissions", "84", "12 awaiting grading", BookOpen],
      ["Recent results", "91%", "Average class score", Trophy],
    ],
    activityTitle: "Recent activity",
    activities: ["JSS 3 Mathematics · 24 submissions received", "SS 2 Physics · Question bank updated", "JSS 1 Basic Science · Results published"],
    actions: ["Create examination", "Open question bank"],
  },
  student: {
    eyebrow: "Learning overview",
    title: "Good morning, Student",
    description: "Your next milestone is closer than you think. Keep your momentum going.",
    stats: [
      ["Assigned examinations", "4", "2 due this week", ClipboardCheck],
      ["Completed", "12", "+3 this month", Trophy],
      ["Recent score", "86%", "+6% from last test", LineChart],
      ["Practice progress", "68%", "Keep building your streak", BrainCircuit],
    ],
    activityTitle: "Your next steps",
    activities: ["Mathematics mock examination · Due today", "JAMB CBT practice · 25 questions ready", "Physics revision set · Continue from question 14"],
    actions: ["Start an examination", "Take a practice test"],
  },
} as const
