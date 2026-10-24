"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AcademicCapIcon,
  ArrowRightIcon,
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
  LockClosedIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

type UserRole = "school_admin" | "teacher" | "student";

interface RegisterFormData {
  fullName: string;
  schoolName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

const roles: {
  value: UserRole;
  title: string;
  description: string;
  icon: typeof AcademicCapIcon;
}[] = [
  {
    value: "school_admin",
    title: "School Admin",
    description: "Manage your school and staff.",
    icon: BuildingOffice2Icon,
  },
  {
    value: "teacher",
    title: "Teacher",
    description: "Create exams and track results.",
    icon: UserIcon,
  },
  {
    value: "student",
    title: "Student",
    description: "Take exams and practise CBT.",
    icon: AcademicCapIcon,
  },
];

const initialFormData: RegisterFormData = {
  fullName: "",
  schoolName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
};

export default function SignUpPage() {
  const [selectedRole, setSelectedRole] = useState<UserRole | "">("");
  const [formData, setFormData] = useState<RegisterFormData>(initialFormData);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10";

  const needsSchoolName =
    selectedRole === "school_admin" || selectedRole === "teacher";

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
    setSuccess(false);
  }

  function handleRoleChange(role: UserRole) {
    setSelectedRole(role);
    setError("");
    setSuccess(false);

    // School name is not needed for student self-registration.
    if (role === "student") {
      setFormData((previous) => ({
        ...previous,
        schoolName: "",
      }));
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!selectedRole) {
      setError("Please select your account type.");
      return;
    }

    if (!formData.fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (selectedRole === "school_admin" && !formData.schoolName.trim()) {
      setError("Please enter your school name.");
      return;
    }

    if (selectedRole === "teacher" && !formData.schoolName.trim()) {
      setError("Please enter your school name.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Your password must contain at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Your passwords do not match.");
      return;
    }

    if (!formData.acceptTerms) {
      setError("Please accept the Terms of Service to continue.");
      return;
    }

    // Temporary UI-only submission.
    // Firebase Authentication will be connected later.
    console.log("Registration details:", {
      fullName: formData.fullName.trim(),
      schoolName: formData.schoolName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      role: selectedRole,
      acceptTerms: formData.acceptTerms,
    });

    // Never log or persist the user's password unnecessarily.
    setSuccess(true);
  }

  return (
    <main className="min-h-screen bg-gray-100 lg:grid lg:grid-cols-2">
      {/* LEFT BRAND PANEL */}
      <section className="relative hidden min-h-screen overflow-hidden bg-linear-to-br from-[#0f0a1f] via-[#4c1d95] to-[#04000e] p-12 text-white lg:flex lg:flex-col lg:justify-between xl:p-16">
        {/* Decorative gradients */}
        <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl" />

        {/* Logo */}
        <Link href="/" className="relative z-10 flex w-fit items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600">
            <AcademicCapIcon className="h-7 w-7" />
          </div>

          <span className="text-2xl font-bold tracking-tight">Quizolar</span>
        </Link>

        {/* Brand content */}
        <div className="relative z-10 max-w-xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-purple-100">
            <CheckCircleIcon className="h-4 w-4" />
            Your journey starts here
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight xl:text-5xl">
            Make every assessment count.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-purple-100/90 xl:text-lg">
            Join Quizolar to create online exams, manage students, track
            performance, and prepare learners for WAEC and JAMB.
          </p>

          <div className="mt-10 space-y-5">
            {[
              {
                title: "Simplify exam management",
                description:
                  "Create and organize assessments from one workspace.",
              },
              {
                title: "Understand student performance",
                description:
                  "Use results and analytics to identify learning gaps.",
              },
              {
                title: "Prepare students for success",
                description:
                  "Support WAEC and JAMB CBT practice in one platform.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <CheckCircleIcon className="mt-1 h-5 w-5 shrink-0 text-purple-200" />

                <div>
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-purple-100/80">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="relative z-10 text-sm text-purple-200/80">
          © {new Date().getFullYear()} Quizolar. All rights reserved.
        </p>
      </section>

      {/* RIGHT REGISTRATION PANEL */}
      <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-10 lg:px-12">
        <div className="w-full max-w-lg">
          {/* Mobile logo */}
          <Link
            href="/"
            className="mb-8 flex items-center justify-center gap-2 lg:hidden"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-violet-700 to-purple-500 text-white">
              <AcademicCapIcon className="h-7 w-7" />
            </div>

            <span className="text-2xl font-bold text-slate-900">Quizolar</span>
          </Link>

          {/* Heading */}
          <div className="mb-7">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-900">
              Get started for free
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
              Create your account
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
              Choose your account type and join Quizolar today.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* ACCOUNT TYPE */}
            <fieldset>
              <legend className="mb-3 text-sm font-semibold text-slate-700">
                I&apos;m signing up as
              </legend>

              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {roles.map((role) => {
                  const RoleIcon = role.icon;
                  const isSelected = selectedRole === role.value;

                  return (
                    <button
                      key={role.value}
                      type="button"
                      onClick={() => handleRoleChange(role.value)}
                      aria-pressed={isSelected}
                      className={`flex min-w-0 flex-col items-center rounded-xl border p-3 text-center transition sm:p-4 ${
                        isSelected
                          ? "border-violet-600 bg-violet-50 ring-2 ring-violet-600/10"
                          : "border-slate-200 bg-white hover:border-violet-300 hover:bg-violet-50/50"
                      }`}
                    >
                      <div
                        className={`mb-2 flex h-10 w-10 items-center justify-center rounded-xl ${
                          isSelected
                            ? "bg-violet-600 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <RoleIcon className="h-5 w-5" />
                      </div>

                      <span
                        className={`text-xs font-semibold sm:text-sm ${
                          isSelected ? "text-violet-800" : "text-slate-700"
                        }`}
                      >
                        {role.title}
                      </span>

                      <span className="mt-1 hidden text-xs leading-4 text-slate-500 sm:block">
                        {role.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* FULL NAME */}
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Full name
              </label>

              <div className="relative">
                <UserIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* SCHOOL NAME */}
            {needsSchoolName && (
              <div>
                <label
                  htmlFor="schoolName"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  {selectedRole === "school_admin"
                    ? "School name"
                    : "School name (or institution)"}
                </label>

                <div className="relative">
                  <BuildingOffice2Icon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                  <input
                    id="schoolName"
                    name="schoolName"
                    type="text"
                    autoComplete="organization"
                    placeholder="Enter your school name"
                    value={formData.schoolName}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                {selectedRole === "teacher" && (
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    School membership and verification can be completed after
                    registration.
                  </p>
                )}
              </div>
            )}

            {/* STUDENT INFORMATION */}
            {selectedRole === "student" && (
              <div className="rounded-xl border border-violet-100 bg-violet-50/70 p-3">
                <p className="text-sm leading-6 text-violet-900">
                  You can join your school or access assigned exams after
                  registration, depending on your school&apos;s setup.
                </p>
              </div>
            )}

            {/* EMAIL */}
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* PHONE */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Phone number
              </label>

              <div className="relative">
                <PhoneIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+234 801 234 5678"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Password
              </label>

              <div className="relative">
                <LockClosedIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="At least 8 characters"
                  value={formData.password}
                  onChange={handleChange}
                  minLength={8}
                  required
                  className={`${inputClass} pr-12`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((previous) => !previous)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Confirm password
              </label>

              <div className="relative">
                <LockClosedIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  minLength={8}
                  required
                  className={`${inputClass} pr-12`}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword((previous) => !previous)
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  {showConfirmPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* TERMS */}
            <div className="pt-1">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  required
                  className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 accent-violet-700"
                />

                <span className="text-sm leading-6 text-slate-600">
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="font-semibold text-blue-900 hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-blue-900 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
            </div>

            {/* ERROR */}
            {error && (
              <div
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </div>
            )}

            {/* TEMPORARY SUCCESS */}
            {success && (
              <div
                role="status"
                className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
              >
                Form validation successful. Account creation will be available
                after authentication is connected.
              </div>
            )}

            {/* SUBMIT */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-700 to-purple-800 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-600/25 focus:outline-none focus:ring-4 focus:ring-violet-500/25"
            >
              Create account
              <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </form>

          {/* LOGIN LINK */}
          <p className="mt-7 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="font-semibold text-blue-900 hover:text-violet-900"
            >
              Sign in
            </Link>
          </p>

          {/* FOOTER */}
          <div className="mt-8 border-t border-slate-200 pt-5 text-center">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} Quizolar. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
