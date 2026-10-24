import {
  GraduationCap,
  ClipboardCheck,
  School,
  Timer,
  PenLine,
  NotebookPen,
  ArrowUpRight,
} from "lucide-react";

// Full class strings so Tailwind can detect them
const blue = {
  card: "bg-blue-500/15 border-blue-300/20 hover:border-blue-300/50 hover:shadow-blue-500/25",
  tile: "bg-blue-400/25 text-blue-100 group-hover:bg-blue-400 group-hover:text-blue-950",
};
const emerald = {
  card: "bg-emerald-500/15 border-emerald-300/20 hover:border-emerald-300/50 hover:shadow-emerald-500/25",
  tile: "bg-emerald-400/25 text-emerald-100 group-hover:bg-emerald-400 group-hover:text-emerald-950",
};

const categories = [
  {
    icon: GraduationCap,
    title: "WAEC",
    text: "Past questions and practice for the West African Senior School Certificate.",
    href: "/exams/waec",
    ...blue,
  },
  {
    icon: ClipboardCheck,
    title: "JAMB",
    text: "Prepare for UTME with timed questions across all subjects.",
    href: "/exams/jamb",
    ...emerald,
  },
  {
    icon: School,
    title: "School Exams",
    text: "Quizzes created by your teachers for your class and term.",
    href: "/exams/school",
    ...blue,
  },
  {
    icon: Timer,
    title: "Mock Exams",
    text: "Full-length timed exams that feel like the real thing.",
    href: "/exams/mock",
    ...emerald,
  },
  {
    icon: PenLine,
    title: "Practice Tests",
    text: "Short, untimed tests to build confidence topic by topic.",
    href: "/exams/practice",
    ...blue,
  },
  {
    icon: NotebookPen,
    title: "Assignments",
    text: "Homework and take-home tasks set by your teachers.",
    href: "/exams/assignments",
    ...emerald,
  },
];

export default function ExamCategories() {
  return (
    <section className="w-full rounded-md px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-semibold text-white">
          Exam categories
        </h2>
        <p className="mx-auto mt-2 max-w-md text-center text-base text-white/70">
          Choose what you want to practice or take.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ icon: Icon, title, text, href, card, tile }) => (
            <a
              key={title}
              href={href}
              className={`group relative flex min-h-55 flex-col rounded-2xl border p-8 shadow-lg backdrop-blur-md transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${card}`}
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl transition duration-300 group-hover:rotate-6 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:rotate-0 motion-reduce:group-hover:scale-100 ${tile}`}
              >
                <Icon className="h-8 w-8" aria-hidden="true" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-base text-white/75">{text}</p>

              <ArrowUpRight
                aria-hidden="true"
                className="absolute right-6 top-6 h-6 w-6 text-white/50 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
