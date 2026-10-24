"use client";

import {
  ChartBarIcon,
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

// On mobile/tablet the tags sit in a wrapped row above the dashboard.
// From lg up they float around the dashboard card.
const tags = [
  {
    label: "Create Exams",
    Icon: ClipboardDocumentListIcon,
    position: "lg:-left-4 lg:top-16",
    motion: "lg:animate-bounce",
  },
  {
    label: "Analytics",
    Icon: ChartBarIcon,
    position: "lg:-right-4 lg:top-20",
    motion: "lg:animate-pulse",
  },
  {
    label: "Results",
    Icon: DocumentTextIcon,
    position: "lg:-left-6 lg:bottom-20",
    motion: "lg:animate-bounce",
  },
  {
    label: "Performance",
    Icon: AcademicCapIcon,
    position: "lg:-right-6 lg:bottom-20",
    motion: "lg:animate-pulse",
  },
  {
    label: "Student Management",
    Icon: UserGroupIcon,
    position: "lg:-bottom-5 lg:left-1/2 lg:-translate-x-1/2",
    motion: "",
  },
];

const menuItems = [
  "Dashboard",
  "Create Exam",
  "Students",
  "Results",
  "Analytics",
  "Settings",
];

const stats = [
  { label: "Total Students", value: "2,540", color: "text-white" },
  { label: "Exams Created", value: "126", color: "text-white" },
  { label: "Pass Rate", value: "89%", color: "text-green-400" },
  { label: "Active Exams", value: "18", color: "text-white" },
];

const recentExams = [
  "WAEC Mathematics Mock",
  "JAMB English CBT",
  "SS3 Physics Test",
  "Junior Secondary Assessment",
];

const platformStats = [
  { value: "10,000+", label: "Students Tested" },
  { value: "500+", label: "Schools" },
  { value: "100,000+", label: "Exams Completed" },
  { value: "99.9%", label: "Platform Uptime" },
];

export default function Dashboard() {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b py-16 sm:py-20 lg:w-4/5 lg:py-24">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/30 blur-[100px] sm:h-96 sm:w-96 lg:h-125 lg:w-125 lg:blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Everything Schools Need in One Powerful Dashboard
          </h2>

          <p className="mt-4 text-base leading-7 text-purple-100 sm:mt-6 sm:text-lg sm:leading-8">
            Create exams, monitor student performance, analyze results, and
            manage your entire CBT system from a single intuitive dashboard.
          </p>
        </div>

        {/* Dashboard Area */}
        <div className="relative mt-10 flex flex-col items-center sm:mt-16 lg:mt-24">
          {/* Floating Tags */}
          <div className="mb-6 flex flex-wrap justify-center gap-2 sm:gap-3 lg:contents">
            {tags.map(({ label, Icon, position, motion }) => (
              <div
                key={label}
                className={`rounded-2xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-xl sm:px-4 sm:py-3 lg:absolute lg:z-20 motion-reduce:animate-none ${position} ${motion}`}
              >
                <div className="flex items-center gap-2 text-sm text-white sm:text-base">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Dashboard Card */}
          <div className="relative w-full max-w-6xl rounded-2xl border border-white/10 bg-white/10 p-2 shadow-[0_0_50px_rgba(139,92,246,0.4)] backdrop-blur-xl sm:rounded-3xl sm:p-4 sm:shadow-[0_0_80px_rgba(139,92,246,0.45)] lg:rotate-1">
            <div className="overflow-hidden rounded-xl bg-slate-950 sm:rounded-2xl">
              {/* Top Bar */}
              <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3 sm:px-5 sm:py-4">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-3 text-sm font-semibold text-white md:hidden">
                  Quizolar
                </span>
              </div>

              {/* Dashboard Content */}
              <div className="grid grid-cols-12 md:min-h-150">
                {/* Sidebar (hidden on mobile) */}
                <div className="col-span-3 hidden border-r border-slate-800 bg-slate-900 p-4 md:block lg:p-5">
                  <div className="mb-8 text-xl font-bold text-white">
                    Quizolar
                  </div>

                  <div className="space-y-2 lg:space-y-3">
                    {menuItems.map((item) => (
                      <div
                        key={item}
                        className="rounded-lg px-3 py-2.5 text-sm text-slate-300 transition hover:bg-slate-800 lg:px-4 lg:py-3 lg:text-base"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Area */}
                <div className="col-span-12 min-w-0 p-4 sm:p-6 md:col-span-9">
                  <h3 className="mb-4 text-xl font-bold text-white sm:mb-6 sm:text-2xl">
                    School Overview
                  </h3>

                  {/* Stat Cards */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
                    {stats.map(({ label, value, color }) => (
                      <div
                        key={label}
                        className="rounded-xl bg-slate-900 p-4 sm:p-5"
                      >
                        <p className="text-xs text-slate-400 sm:text-sm">
                          {label}
                        </p>
                        <h4
                          className={`mt-2 text-2xl font-bold sm:text-3xl ${color}`}
                        >
                          {value}
                        </h4>
                      </div>
                    ))}
                  </div>

                  {/* Charts */}
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:gap-6 lg:grid-cols-2">
                    <div className="h-56 rounded-xl bg-slate-900 p-4 sm:h-64 sm:p-5">
                      <div className="mb-4 text-white">Exam Performance</div>

                      <div className="flex h-32 items-end gap-2 sm:h-40 sm:gap-4">
                        {[40, 70, 55, 90, 80, 100].map((height, index) => (
                          <div
                            key={index}
                            className="w-full rounded-t-lg bg-linear-to-t from-purple-600 to-purple-400"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="h-56 rounded-xl bg-slate-900 p-4 sm:h-64 sm:p-5">
                      <div className="mb-4 text-white">Student Activity</div>

                      <div className="flex h-[calc(100%-2.5rem)] items-center justify-center">
                        <div className="h-28 w-28 rounded-full border-14 border-purple-500 border-t-transparent sm:h-36 sm:w-36 sm:border-18 lg:h-40 lg:w-40" />
                      </div>
                    </div>
                  </div>

                  {/* Recent Exams */}
                  <div className="mt-4 rounded-xl bg-slate-900 p-4 sm:mt-6 sm:p-5">
                    <h4 className="mb-4 font-semibold text-white">
                      Recent Exams
                    </h4>

                    <div className="space-y-3">
                      {recentExams.map((exam) => (
                        <div
                          key={exam}
                          className="flex items-center justify-between gap-3 rounded-lg bg-slate-800 p-3 sm:p-4"
                        >
                          <span className="min-w-0 text-sm text-slate-300 sm:text-base">
                            {exam}
                          </span>

                          <span className="shrink-0 rounded-full bg-green-500/20 px-2.5 py-1 text-xs text-green-400 sm:px-3 sm:text-sm">
                            Active
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 gap-6 sm:mt-20 sm:gap-8 md:grid-cols-4 lg:mt-24">
          {platformStats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                {value}
              </h3>
              <p className="mt-2 text-sm text-purple-200 sm:text-base">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
