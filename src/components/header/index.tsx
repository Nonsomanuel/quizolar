"use client";

import { useState } from "react";
import Link from "next/link";
// import Image from "next/image";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  {
    name: "Product",
    children: [
      {
        name: "Features",
        href: "#features",
      },
      {
        name: "For Schools",
        href: "#features",
      },
      {
        name: "Mock Exams",
        href: "#exams",
      },
    ],
  },
  {
    name: "Solutions",
    href: "#how-it-works",
  },
  {
    name: "Pricing",
    href: "#faq",
  },
  {
    name: "Resources",
    href: "#testimonials",
  },
  {
    name: "About",
    href: "#testimonials",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <nav
        className="
        mx-auto 
        flex 
        max-w-7xl 
        items-center 
        justify-between 
        px-6 
        py-6 
        lg:px-8
        "
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-2">
            <div
              className="
              flex 
              h-10 
              w-10 
              items-center 
              justify-center 
              rounded-xl 
              bg-blue-600 
              text-white 
              font-bold
            "
            >
              {/* Q */}
              <AcademicCapIcon className="h-7 w-7" />
            </div>

            <span
              className="
              text-xl 
              font-bold 
              text-white
            "
            >
              Quizolar
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="
            rounded-md 
            p-2.5 
            text-white
            "
          >
            <span className="sr-only">Open menu</span>

            <Bars3Icon className="h-7 w-7" />
          </button>
        </div>

        {/* Desktop Navigation */}

        <div
          className="
          hidden 
          lg:flex 
          lg:items-center 
          lg:gap-x-10
          "
        >
          {navigation.map((item) =>
            item.children ? (
              <Disclosure key={item.name} as="div" className="relative">
                {({ open }) => (
                  <>
                    <DisclosureButton
                      className="
                      flex 
                      items-center 
                      gap-1 
                      text-sm 
                      font-semibold 
                      text-white
                      hover:text-blue-200
                      "
                    >
                      {item.name}

                      <ChevronDownIcon
                        className={`
                        h-4 
                        w-4 
                        transition
                        ${open ? "rotate-180" : ""}
                        `}
                      />
                    </DisclosureButton>

                    <DisclosurePanel
                      className="
                      absolute 
                      top-8 
                      left-0 
                      w-48 
                      rounded-xl 
                      bg-white 
                      p-3 
                      shadow-lg
                      "
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="
                            block
                            rounded-lg
                            px-3
                            py-2
                            text-sm
                            font-medium
                            text-slate-700
                            hover:bg-blue-50
                            hover:text-blue-600
                            "
                        >
                          {child.name}
                        </Link>
                      ))}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="
                  text-sm 
                  font-semibold 
                  text-white
                  hover:text-blue-200
                  "
              >
                {item.name}
              </Link>
            ),
          )}
        </div>

        {/* Desktop Actions */}

        <div
          className="
          hidden 
          lg:flex 
          lg:flex-1 
          lg:justify-end 
          lg:items-center 
          lg:gap-6
          "
        >
          <Link
            href="/login"
            className="
            text-sm 
            font-semibold 
            text-white
            hover:text-blue-200
            "
          >
            Log in
          </Link>

          <Link
            href="/signup"
            className="
            rounded-lg 
            bg-blue-600 
            px-5 
            py-2.5 
            text-sm 
            font-semibold 
            text-white
            hover:bg-blue-700
            transition
            "
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        {/* Overlay */}

        <div
          className="
          fixed 
          inset-0 
          z-40 
          bg-black/40
          "
        />

        <DialogPanel
          className="
          fixed 
          right-0 
          top-0 
          z-50 
          h-full 
          w-full 
          max-w-sm 
          overflow-y-auto 
          bg-white 
          p-6
          "
        >
          <div
            className="
            flex 
            items-center 
            justify-between
            "
          >
            <Link
              href="/"
              className="
              text-xl 
              font-bold 
              text-slate-900
              "
            >
              Quizolar
            </Link>

            <button onClick={() => setMobileMenuOpen(false)} className="p-2">
              <XMarkIcon className="h-7 w-7 text-slate-700" />
            </button>
          </div>

          <div className="mt-8 space-y-5">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name}>
                  <p
                    className="
                  mb-2 
                  font-semibold 
                  text-slate-900
                  "
                  >
                    {item.name}
                  </p>

                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="
                        block 
                        py-2 
                        text-slate-600
                        "
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                  block
                  font-semibold
                  text-slate-900
                  "
                >
                  {item.name}
                </Link>
              ),
            )}

            <Link
              href="/login"
              className="
            block 
            pt-5 
            font-semibold 
            text-slate-900
            "
            >
              Log in
            </Link>

            <Link
              href="/signup"
              className="
            mt-4 
            block 
            rounded-lg 
            bg-blue-600 
            px-5 
            py-3 
            text-center 
            font-semibold 
            text-white
            "
            >
              Get Started
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
