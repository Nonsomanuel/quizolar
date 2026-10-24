import {
  UserPlus,
  FilePenLine,
  Share2,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

const steps: Array<{ icon: LucideIcon; title: string; text: string }> = [
  {
    icon: UserPlus,
    title: "Create account",
    text: "Sign up for a free account in seconds.",
  },
  {
    icon: FilePenLine,
    title: "Create quiz",
    text: "Design your quiz with our easy-to-use editor.",
  },
  {
    icon: Share2,
    title: "Invite students",
    text: "Share the quiz link with your students.",
  },
  {
    icon: BarChart3,
    title: "Review results",
    text: "Analyze performance and get detailed insights.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full rounded-md  px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-semibold text-white">
          How it works
        </h2>
        <p className="mx-auto mt-2 max-w-md text-center text-base text-white">
          From sign-up to results in four simple steps.
        </p>

        <ol className="relative mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Connector line behind the icons (desktop only) */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-8 hidden border-t-2 border-dashed border-neutral-300 lg:block"
          />

          {steps.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white ring-8 ring-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-semibold text-black ring-2 ring-black">
                  {i + 1}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 max-w-[16rem] text-base text-white">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
