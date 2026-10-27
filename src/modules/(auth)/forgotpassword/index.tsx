"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AcademicCapIcon,
  ArrowLeftIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  EnvelopeIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSubmitted(false);

    const normalizedEmail = email.trim();

    if (!normalizedEmail) {
      setError("Please enter your email address.");
      return;
    }

    // Firebase password reset will be implemented later.
    console.log("Password reset requested for:", normalizedEmail);

    setSubmitted(true);
  }

  function handleResend() {
    setError("");
    setSubmitted(false);

    // Firebase resend functionality will be added later.
    console.log("Resend password reset requested for:", email.trim());

    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-slate-50 lg:grid lg:grid-cols-2">
      {/* LEFT BRAND PANEL */}
      <section className="relative hidden min-h-screen overflow-hidden bg-linear-to-br from-[#0f0a1f] via-[#4c1d95] to-[#020005] p-12 text-white lg:flex lg:flex-col lg:justify-between xl:p-16">
        {/* Background decorations */}
        <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl" />

        {/* Logo */}
        <Link href="/" className="relative z-10 flex w-fit items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600">
            <AcademicCapIcon className="h-7 w-7" />
          </div>

          <span className="text-2xl font-bold tracking-tight">Quizolar</span>
        </Link>

        {/* Main content */}
        <div className="relative z-10 max-w-xl">
          <h1 className="flex gap-4 text-4xl font-bold leading-tight tracking-tight xl:text-5xl">
            Your account security matters.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-purple-100/90 xl:text-lg">
            {"Forgot your password? Don't worry. You can recover access"}
            to your Quizolar account and get back to managing assessments and
            learning.
          </p>

          <div className="mt-10 space-y-5">
            {[
              "Recover access to your account",
              "Keep your school and learning activities secure",
              "Return to your workspace with confidence",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircleIcon className="h-5 w-5 shrink-0 text-purple-200" />
                <span className="text-sm text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="relative z-10 text-sm text-purple-200/80">
          © {new Date().getFullYear()} Quizolar. All rights reserved.
        </p>
      </section>

      {/* RIGHT FORM PANEL */}
      <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-10 lg:px-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <Link
            href="/"
            className="mb-10 flex items-center justify-center gap-2 lg:hidden"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-violet-700 to-purple-500 text-white">
              <AcademicCapIcon className="h-7 w-7" />
            </div>

            <span className="text-2xl font-bold text-slate-900">Quizolar</span>
          </Link>

          {/* Icon */}
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
            <LockClosedIcon className="h-7 w-7" />
          </div>

          {!submitted ? (
            <>
              {/* Heading */}
              <div className="mb-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-violet-700">
                  Account recovery
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Forgot your password?
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                  It happens! Enter the email address associated with
                  {"your account and we'll help you reset your password."}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
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
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                    />
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                  >
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-700 to-purple-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-600/25 focus:outline-none focus:ring-4 focus:ring-violet-500/25"
                >
                  Send reset instructions
                  <ArrowPathIcon className="h-4 w-4 transition group-hover:rotate-12" />
                </button>
              </form>
            </>
          ) : (
            /* SUCCESS STATE */
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <CheckCircleIcon className="h-8 w-8" />
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">
                Request submitted
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Check your inbox
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                If an account is associated with this email address,
                {"you'll receive instructions to reset your password."}
              </p>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-start gap-3">
                  <EnvelopeIcon className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" />

                  <div className="min-w-0">
                    <p className="text-xs font-medium text-slate-500">
                      Email address
                    </p>
                    <p className="mt-1 break-all text-sm font-semibold text-slate-800">
                      {email.trim()}
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                {"Check your spam folder if you don't see the email."}
                You can also request another reset link.
              </p>

              <button
                type="button"
                onClick={handleResend}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-violet-300 hover:bg-violet-50"
              >
                <ArrowPathIcon className="h-4 w-4" />
                Resend reset instructions
              </button>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setError("");
                }}
                className="mt-3 w-full rounded-xl px-5 py-3 text-sm font-semibold text-violet-700 transition hover:bg-violet-50"
              >
                Use a different email
              </button>
            </div>
          )}

          {/* Back to login */}
          <Link
            href="/login"
            className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-violet-700"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to sign in
          </Link>

          {/* Footer */}
          <div className="mt-10 border-t border-slate-200 pt-6 text-center">
            <p className="text-xs leading-5 text-slate-400">
              Need help accessing your account? Contact your school
              administrator or Quizolar support.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
