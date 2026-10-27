import Link from "next/link"
import { CheckCircle, GraduationCap } from "lucide-react"

const brandBullets = [
  "Create and manage online assessments",
  "Monitor student performance in real time",
  "Prepare for WAEC and JAMB CBT exams",
]

export function AuthBrandPanel({ title, description, badge = "Smarter assessments. Better outcomes." }: { title: string; description: string; badge?: string }) {
  return (
    <section className="relative hidden min-h-screen overflow-hidden bg-linear-to-br from-[#0f0a1f] via-[#4c1d95] to-[#06010f] p-12 text-white lg:flex lg:flex-col lg:justify-between xl:p-16">
      <div className="absolute -right-24 top-24 size-80 rounded-full bg-purple-400/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 size-80 rounded-full bg-indigo-400/20 blur-3xl" />
      <Link href="/" className="relative z-10 flex w-fit items-center gap-3">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-blue-600"><GraduationCap className="size-7" /></span>
        <span className="text-2xl font-bold tracking-tight">Quizolar</span>
      </Link>
      <div className="relative z-10 max-w-xl">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-purple-100"><CheckCircle className="size-4" />{badge}</span>
        <h1 className="text-4xl font-bold leading-tight tracking-tight xl:text-5xl">{title}</h1>
        <p className="mt-6 max-w-lg text-base leading-8 text-purple-100/90 xl:text-lg">{description}</p>
        <div className="mt-10 flex flex-col gap-4">
          {brandBullets.map((feature) => <div key={feature} className="flex items-center gap-3"><CheckCircle className="size-5 shrink-0 text-purple-200" /><span className="text-sm text-white/90">{feature}</span></div>)}
        </div>
      </div>
      <p className="relative z-10 text-sm text-purple-200/80">© {new Date().getFullYear()} Quizolar. All rights reserved.</p>
    </section>
  )
}

export function AuthMobileBrand() {
  return <Link href="/" className="mb-10 flex items-center gap-2 lg:hidden"><span className="flex size-11 items-center justify-center rounded-xl bg-blue-600 text-white"><GraduationCap className="size-6" /></span><span className="text-2xl font-bold tracking-tight text-foreground">Quizolar</span></Link>
}

export function AuthFooter({ children }: { children: React.ReactNode }) {
  return <div className="mt-10 border-t border-border pt-6 text-center"><p className="text-xs leading-5 text-muted-foreground">{children}</p></div>
}
