"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  Menu,
  X,
  Sparkles,
  PenSquare,
  BookOpen,
  Compass,
} from "lucide-react";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Stories",
    href: "/stories",
  },
  {
    name: "Journeys",
    href: "/journeys",
  },
  {
    name: "Reflections",
    href: "/reflections",
  },
  {
    name: "Categories",
    href: "/categories",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50
          transition-all
          duration-300
          ${isScrolled
            ? "border-b border-white/10 bg-black/80 backdrop-blur-xl"
            : "bg-transparent"
          }
        `}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-20 items-center justify-between">
            {/* ===========================
        Brand Logo
=========================== */}

            <Link
              href="/"
              className="
    group
    relative
    inline-flex
    items-center
    gap-5
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    bg-white/5
    px-5
    py-4
    backdrop-blur-xl
    transition-all
    duration-500
    hover:border-amber-400/40
    hover:bg-white/10
    hover:shadow-2xl
    hover:shadow-amber-500/20
  "
            >

              {/* Background Glow */}
              <div
                className="
      absolute
      -left-16
      top-1/2
      h-32
      w-32
      -translate-y-1/2
      rounded-full
      bg-amber-400/10
      blur-3xl
      opacity-0
      transition-all
      duration-500
      group-hover:opacity-100
    "
              />

              {/* Logo Container */}
              <div
                className="
      relative
      flex
      h-16
      w-16
      items-center
      justify-center
      overflow-hidden
      rounded-2xl
      border
      border-white/20
      bg-gradient-to-br
      from-white
      via-amber-50
      to-yellow-100
      shadow-xl
      shadow-amber-500/20
      transition-all
      duration-500
      group-hover:scale-110
      group-hover:rotate-3
    "
              >

                {/* Decorative Ring */}
                <div
                  className="
        absolute
        inset-0
        rounded-2xl
        ring-1
        ring-amber-300/30
      "
                />

                {/* Logo */}
                <Image
                  src="/logo.png"
                  alt="The Alchemy of Becoming Logo"
                  width={52}
                  height={52}
                  priority
                  className="
        relative
        object-contain
        transition-transform
        duration-500
        group-hover:scale-110
      "
                />

              </div>

              {/* Brand Content */}
              <div className="flex flex-col">

                {/* Small Label */}
                <span
                  className="
        text-[11px]
        uppercase
        tracking-[0.45em]
        text-amber-400
        font-semibold
      "
                >
                  Wellness • Mindfulness
                </span>

                {/* Brand Name */}
                <h2
                  className="
        mt-1
        font-heading
        text-2xl
        font-black
        tracking-wide
        text-white
        transition-all
        duration-300
        group-hover:text-amber-300
      "
                >
                  The Alchemy
                </h2>

                {/* Subtitle */}
                <p
                  className="
        text-sm
        text-zinc-400
        transition-colors
        duration-300
        group-hover:text-zinc-300
      "
                >
                  of Becoming
                </p>

                {/* Decorative Divider */}
                <div
                  className="
        mt-3
        h-[2px]
        w-12
        rounded-full
        bg-gradient-to-r
        from-amber-400
        via-yellow-500
        to-transparent
        transition-all
        duration-500
        group-hover:w-24
      "
                />

              </div>

              {/* Right Arrow */}
              <div
                className="
      hidden
      lg:flex
      items-center
      justify-center
      rounded-full
      bg-white/5
      p-2
      opacity-0
      transition-all
      duration-500
      group-hover:translate-x-1
      group-hover:opacity-100
    "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

            </Link>
            {/* Desktop Navigation */}

            <nav className="hidden items-center gap-2 lg:flex">
              {navigation.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" &&
                    pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      relative
                      rounded-xl
                      px-4
                      py-2
                      text-sm
                      font-medium
                      transition-all
                      duration-300
                      ${active
                        ? "text-amber-400"
                        : "text-zinc-300 hover:text-white"
                      }
                    `}
                  >
                    {item.name}

                    {active && (
                      <motion.div
                        layoutId="active-nav"
                        className="
                          absolute
                          inset-x-2
                          -bottom-1
                          h-[2px]
                          rounded-full
                          bg-amber-400
                        "
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}

            <div className="hidden items-center gap-4 lg:flex">
              <Link
                href="/stories"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  text-zinc-300
                  transition
                  hover:text-white
                "
              >
                <BookOpen size={16} />
                Explore
              </Link>

              <Link
                href="/submit-story"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-amber-500
                  px-5
                  py-3
                  font-semibold
                  text-black
                  transition
                  hover:bg-amber-400
                "
              >
                <PenSquare size={16} />
                Share Story
              </Link>
            </div>

            {/* Mobile Toggle */}

            <button
              onClick={() =>
                setMobileMenu((prev) => !prev)
              }
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                text-white
                lg:hidden
              "
              aria-label="Toggle Menu"
            >
              {mobileMenu ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Spacer */}

      <div className="h-20" />

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              left-0
              right-0
              top-20
              z-40
              border-b
              border-white/10
              bg-black/95
              backdrop-blur-xl
              lg:hidden
            "
          >
            <div className="mx-auto max-w-7xl px-6 py-8">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => {
                  const active =
                    pathname === item.href ||
                    (item.href !== "/" &&
                      pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`
                        rounded-xl
                        px-4
                        py-3
                        transition
                        ${active
                          ? "bg-amber-500/10 text-amber-400"
                          : "text-zinc-300 hover:bg-white/5"
                        }
                      `}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-8 grid gap-4">
                <Link
                  href="/stories"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-white/10
                    px-5
                    py-4
                    text-white
                  "
                >
                  <Compass size={18} />
                  Explore Stories
                </Link>

                <Link
                  href="/submit-story"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-amber-500
                    px-5
                    py-4
                    font-semibold
                    text-black
                  "
                >
                  <PenSquare size={18} />
                  Share Your Story
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}