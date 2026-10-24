"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// NOTE: answers are placeholder copy - edit them to match your product.
const faqs = [
  {
    q: "How do I create exams?",
    a: "Sign in, open the exam editor, add your questions and options, set the time limit, and publish. You can then share the exam with students using a link or an access code.",
  },
  {
    q: "Can students use phones?",
    a: "Yes. Exams run in the browser, so students can take them on a phone, tablet or computer without installing anything.",
  },
  {
    q: "How secure are exams?",
    a: "Exams are only available to students who have your link or access code, and results are stored against each student's attempt. Add any extra protections you offer here, such as time limits or question shuffling.",
  },
  {
    q: "Can schools customize branding?",
    a: "Describe here what schools can change, for example their logo, colors or school name on exams and result pages.",
  },
  {
    q: "Can I export results?",
    a: "Describe here which formats you support (for example CSV or PDF) and where to find the export option.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full rounded-md px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-semibold text-white">
          Frequently asked questions
        </h2>
        <p className="mx-auto mt-2 max-w-md text-center text-base text-white/70">
          Quick answers to common questions.
        </p>

        <div className="mt-12 space-y-4">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <div
                key={q}
                className={`rounded-2xl border backdrop-blur-md transition duration-300 ${
                  isOpen
                    ? "border-blue-300/50 bg-blue-500/15 shadow-lg shadow-blue-500/20"
                    : "border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={`faq-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    <span className="text-lg font-semibold text-white">
                      {q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition duration-300 motion-reduce:transition-none ${
                        isOpen
                          ? "rotate-180 bg-blue-400 text-blue-950"
                          : "bg-white/10 text-white"
                      }`}
                    >
                      <ChevronDown className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </button>
                </h3>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  inert={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-base leading-relaxed text-white/80">
                      {a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
