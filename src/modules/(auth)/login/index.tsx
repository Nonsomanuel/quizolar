"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AcademicCapIcon,
  ArrowRightIcon,
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  EnvelopeIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Firebase Authentication will be connected here.
    console.log({
      email,
      password,
      rememberMe,
    });
  }

  return (
    <main className="min-h-screen bg-slate-50 lg:grid lg:grid-cols-2">
      {/* LEFT PANEL */}
      <section className="relative hidden min-h-screen overflow-hidden bg-linear-to-br from-[#0f0a1f] via-[#4c1d95] to-[#06010f] p-12 text-white lg:flex lg:flex-col lg:justify-between xl:p-16">
        {/* Background decorations */}
        <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl" />

        {/* Brand */}
        <Link href="/" className="relative z-10 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 ">
            <AcademicCapIcon className="h-7 w-7" />
          </div>

          <span className="text-2xl font-bold tracking-tight">Quizolar</span>
        </Link>

        {/* Hero content */}
        <div className="relative z-10 max-w-xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-purple-100">
            <CheckCircleIcon className="h-4 w-4" />
            Smarter assessments. Better outcomes.
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight xl:text-5xl">
            Welcome back to a smarter way to learn.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-purple-100/90 xl:text-lg">
            Create exams, manage students, track performance, and prepare for
            WAEC and JAMB — all in one place.
          </p>

          {/* Feature highlights */}
          <div className="mt-10 space-y-4">
            {[
              "Create and manage online assessments",
              "Monitor student performance in real time",
              "Prepare for WAEC and JAMB CBT exams",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircleIcon className="h-5 w-5 shrink-0 text-purple-200" />
                <span className="text-sm text-white/90">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="relative z-10 text-sm text-purple-200/80">
          © {new Date().getFullYear()} Quizolar. All rights reserved.
        </p>
      </section>

      {/* RIGHT PANEL */}
      <section className="flex min-h-screen bg-gray-100 items-center justify-center px-5 py-10 sm:px-10 lg:px-12">
        <div className="w-full max-w-md">
          {/* Mobile brand */}
          <Link href="/" className="mb-10 flex items-center gap-2 lg:hidden">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
              <AcademicCapIcon className="h-7 w-7" />
            </div>

            <span className="text-2xl font-bold tracking-tight text-slate-900">
              Quizolar
            </span>
          </Link>

          {/* Heading */}
          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-900">
              Your learning workspace
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
              Sign in to Quizolar
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-700 sm:text-base">
              Welcome back! Enter your details to access your account.
            </p>
          </div>

          {/* Login form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email address
              </label>

              <div className="relative">
                <EnvelopeIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@school.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <Link
                  href="/auth/forgot-password"
                  className="text-sm font-semibold text-blue-700 transition hover:text-violet-900"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <LockClosedIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label className="flex w-fit cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 accent-violet-700 focus:ring-violet-500"
              />

              <span className="text-sm text-slate-600">Remember me</span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-700 to-purple-800 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-600/25 focus:outline-none focus:ring-4 focus:ring-violet-500/25"
            >
              Sign in
              <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </form>

          {/* Registration link */}
          <p className="mt-8 text-center text-sm text-gray-700">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/register"
              className="font-semibold text-blue-700 transition hover:text-violet-900"
            >
              Create an account
            </Link>
          </p>

          {/* Footer */}
          <div className="mt-10 border-t border-slate-200 pt-6 text-center">
            <p className="text-xs leading-5 text-gray-700">
              By continuing, you agree to Quizolar&apos;s{" "}
              <Link
                href="/terms"
                className="underline underline-offset-2 hover:text-slate-600"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-2 hover:text-slate-600"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
