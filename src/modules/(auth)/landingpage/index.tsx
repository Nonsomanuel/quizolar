"use client";

// import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import { Separator } from "@/components/ui/separator";
import Dashboard from "./dashboard/dashboard";
import HowItWorks from "./how_it_works/howItworks";
import ExamCategories from "./examcategories/examCategories";
import FeatureCards from "./features/features";
import Testimonials from "./testimonials/testimonials";
import FAQ from "./faq/faq";
import CTA from "./cta/cta";
import Footer from "@/components/footer/footer";

export default function LandingPage() {
  return (
    <div
      // overflow-x-clip stops any stray child (glow, rotated card, floating tags)
      // from creating a horizontal scrollbar, without breaking sticky headers.
      className="flex min-h-screen w-full flex-col items-center overflow-x-clip py-2"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(/images/quizolarBgimage.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header section */}
      <div className="mb-10 w-full sm:mb-16 lg:mb-20">
        <Header />
      </div>

      {/* Dashboard section */}
      <Dashboard />

      {/* Hero text + buttons */}
      <div className="flex w-full flex-col items-center justify-center px-4 py-8 text-center sm:px-8 sm:py-10 lg:px-20">
        <h2 className="mt-4 max-w-2xl text-base text-white sm:mt-6 sm:text-lg">
          The all-in-one examination platform for schools, teachers and
          students. Create CBT exams, track performance and prepare students for
          WAEC and JAMB.
        </h2>
        <div className="mt-6 flex w-full max-w-sm flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4">
          <Link
            href="/signup"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
          >
            Start Free Trial
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
          >
            Book Demo
          </Link>
        </div>
      </div>

      {/* Feature section */}
      <Separator className="mx-auto w-5/6 max-w-2/3 sm:w-full" />
      <div id="features" className="w-full">
        <FeatureCards />
      </div>

      {/* How it works */}
      <Separator className="mx-auto my-6 w-5/6 max-w-2/3 sm:w-full" />
      <div id="how-it-works" className="w-full">
        <HowItWorks />
      </div>

      {/* Exam Categories */}
      <Separator className="mx-auto my-6 w-5/6 max-w-2/3 sm:w-full" />
      <div id="exams" className="w-full">
        <ExamCategories />
      </div>

      {/* Testimonials */}
      <Separator className="mx-auto my-6 w-5/6 max-w-2/3 sm:w-full" />
      <div id="testimonials" className="w-full">
        <Testimonials />
      </div>

      {/* FAQ */}
      <Separator className="mx-auto my-6 w-5/6 max-w-2/3 sm:w-full" />
      <div id="faq" className="w-full">
        <FAQ />
      </div>

      {/* CTA */}
      <Separator className="mx-auto my-6 w-5/6 max-w-2/3 sm:w-full" />
      <div className="w-full">
        <CTA />
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
