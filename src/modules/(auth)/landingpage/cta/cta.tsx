import { ArrowRight, CalendarDays } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-6 sm:px-10">
      <div className="mx-auto px-6 text-center sm:px-12 sm:py-8">
        <div className="">
          <h2 className="mx-auto font-bold leading-tight text-white sm:text-[16px] lg:text-[24px]">
            Ready to Transform
            <br className="hidden sm:block" /> Your School&apos;s Examination
            Process?
          </h2>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/signup"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-700 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:w-auto"
            >
              Start Free Today
              <ArrowRight
                aria-hidden="true"
                className="h-5 w-5 transition duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
              />
            </a>

            <a
              href="/demo"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/70 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:w-auto"
            >
              <CalendarDays className="h-5 w-5" aria-hidden="true" />
              Book Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
