import { Star, Quote, School, BookOpen, GraduationCap } from "lucide-react";

const blue = {
  card: "bg-blue-500/15 border-blue-300/20 hover:border-blue-300/50 hover:shadow-blue-500/25",
  quoteIcon: "text-blue-200/30",
  tile: "bg-blue-400/25 text-blue-100",
  divider: "border-blue-200/15",
};
const emerald = {
  card: "bg-emerald-500/15 border-emerald-300/20 hover:border-emerald-300/50 hover:shadow-emerald-500/25",
  quoteIcon: "text-emerald-200/30",
  tile: "bg-emerald-400/25 text-emerald-100",
  divider: "border-emerald-200/15",
};

const testimonials = [
  {
    text: "Managing exams has never been easier.",
    role: "Principal",
    icon: School,
    ...blue,
  },
  {
    text: "Our students improved significantly.",
    role: "Teacher",
    icon: BookOpen,
    ...emerald,
  },
  {
    text: "The CBT experience feels exactly like JAMB.",
    role: "Student",
    icon: GraduationCap,
    ...blue,
  },
];

export default function Testimonials() {
  return (
    <section className="w-full rounded-md px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-semibold text-white">
          What people are saying
        </h2>
        <p className="mx-auto mt-2 max-w-md text-center text-base text-white/70">
          Trusted by principals, teachers and students.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => {
            const Icon = t.icon;
            return (
              <figure
                key={t.role}
                className={`relative flex h-full flex-col rounded-2xl border p-8 shadow-lg backdrop-blur-md transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${t.card}`}
              >
                <Quote
                  aria-hidden="true"
                  className={`absolute right-6 top-6 h-10 w-10 ${t.quoteIcon}`}
                />

                <div
                  className="flex gap-1"
                  role="img"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      aria-hidden="true"
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <blockquote className="mt-6 flex-1 text-xl font-medium leading-snug text-white">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                <figcaption
                  className={`mt-8 flex items-center gap-3 border-t pt-6 ${t.divider}`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${t.tile}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-base font-semibold text-white">
                    {t.role}
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
