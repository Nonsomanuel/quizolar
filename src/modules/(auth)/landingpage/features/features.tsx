import {
  FilePlus2,
  CheckCheck,
  GraduationCap,
  Target,
  MonitorCheck,
  Zap,
  BarChart3,
  UserPlus,
  type LucideIcon,
} from "lucide-react";

type Feature = { icon: LucideIcon; title: string; text: string };

type Group = {
  icon: LucideIcon;
  features: [Feature, Feature];
  // Full class strings so Tailwind can detect them
  card: string;
  tile: string;
  glow: string;
  divider: string;
};

const groups: Group[] = [
  {
    icon: FilePlus2,
    card: "bg-blue-500/15 border-blue-300/20 hover:border-blue-300/50",
    tile: "bg-blue-400/25 text-blue-100 group-hover:bg-blue-400 group-hover:text-blue-950",
    glow: "hover:shadow-blue-500/25",
    divider: "border-blue-200/15",
    features: [
      {
        icon: FilePlus2,
        title: "Create unlimited exams",
        text: "Create CBT exams in minutes.",
      },
      {
        icon: CheckCheck,
        title: "Automatic grading",
        text: "Students receive results instantly.",
      },
    ],
  },
  {
    icon: GraduationCap,
    card: "bg-emerald-500/15 border-emerald-300/20 hover:border-emerald-300/50",
    tile: "bg-emerald-400/25 text-emerald-100 group-hover:bg-emerald-400 group-hover:text-emerald-950",
    glow: "hover:shadow-emerald-500/25",
    divider: "border-emerald-200/15",
    features: [
      {
        icon: GraduationCap,
        title: "WAEC practice",
        text: "Prepare students for WAEC exams.",
      },
      {
        icon: Target,
        title: "Smart scoring",
        text: "Instant scores plus a breakdown of strengths and weak areas.",
      },
    ],
  },
  {
    icon: MonitorCheck,
    card: "bg-blue-500/15 border-blue-300/20 hover:border-blue-300/50",
    tile: "bg-blue-400/25 text-blue-100 group-hover:bg-blue-400 group-hover:text-blue-950",
    glow: "hover:shadow-blue-500/25",
    divider: "border-blue-200/15",
    features: [
      {
        icon: MonitorCheck,
        title: "JAMB CBT",
        text: "Real CBT simulation.",
      },
      {
        icon: Zap,
        title: "Instant results",
        text: "Students receive results instantly.",
      },
    ],
  },
  {
    icon: BarChart3,
    card: "bg-emerald-500/15 border-emerald-300/20 hover:border-emerald-300/50",
    tile: "bg-emerald-400/25 text-emerald-100 group-hover:bg-emerald-400 group-hover:text-emerald-950",
    glow: "hover:shadow-emerald-500/25",
    divider: "border-emerald-200/15",
    features: [
      {
        icon: BarChart3,
        title: "Student analytics",
        text: "Track performance across classes.",
      },
      {
        icon: UserPlus,
        title: "Invite students",
        text: "Invite students via links or access codes.",
      },
    ],
  },
];

export default function FeatureCards() {
  return (
    <div className="mx-auto mt-6 w-full max-w-6xl px-6 text-white sm:px-10">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {groups.map((group, g) => (
          <div
            key={g}
            className={`group flex h-full flex-col rounded-2xl border p-6 shadow-lg backdrop-blur-md transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${group.card} ${group.glow}`}
          >
            {group.features.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className={
                  i === 0
                    ? "flex flex-1 flex-col"
                    : `mt-6 flex flex-1 flex-col border-t pt-6 ${group.divider}`
                }
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl transition duration-300 ${group.tile}`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/75">
                  {text}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
