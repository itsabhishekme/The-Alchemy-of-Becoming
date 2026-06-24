"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  X,
  ArrowRight,
  Sparkles,
  BookOpen,
  PenSquare,
  Compass,
  Heart,
  Stars,
} from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

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

const themes = [
  "Transformation",
  "Healing",
  "Resilience",
  "Purpose",
];

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
            }}
            className="
              fixed
              inset-0
              z-40
              bg-black/70
              backdrop-blur-sm
            "
            onClick={onClose}
          />

          {/* Menu */}

          <motion.div
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="
              fixed
              right-0
              top-0
              z-50
              flex
              h-screen
              w-full
              max-w-md
              flex-col
              border-l
              border-white/10
              bg-black
              shadow-2xl
            "
          >
            {/* Background Effects */}

            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-amber-500/10 blur-[120px]" />

              <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-yellow-500/10 blur-[120px]" />
            </div>

            {/* Header */}

            <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-amber-400
                    to-yellow-500
                  "
                >
                  <Sparkles className="h-6 w-6 text-black" />
                </div>

                <div>
                  <h2 className="font-heading text-lg font-bold text-white">
                    The Alchemy
                  </h2>

                  <p className="text-xs text-zinc-500">
                    of Becoming
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  text-white
                "
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation */}

            <div className="relative z-10 flex-1 overflow-y-auto px-6 py-8">
              <nav className="space-y-2">
                {navigation.map((item, index) => {
                  const active =
                    pathname === item.href ||
                    (item.href !== "/" &&
                      pathname.startsWith(item.href));

                  return (
                    <motion.div
                      key={item.href}
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`
                          flex
                          items-center
                          justify-between
                          rounded-2xl
                          px-5
                          py-4
                          transition-all
                          duration-300
                          ${
                            active
                              ? "bg-amber-500/10 text-amber-400"
                              : "text-zinc-300 hover:bg-white/5"
                          }
                        `}
                      >
                        <span className="text-lg">
                          {item.name}
                        </span>

                        <ArrowRight size={18} />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Themes */}

              <div className="mt-10">
                <div className="mb-4 flex items-center gap-2">
                  <Heart className="h-4 w-4 text-amber-400" />

                  <h3 className="text-sm uppercase tracking-widest text-zinc-500">
                    Core Themes
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {themes.map((theme) => (
                    <div
                      key={theme}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        px-4
                        py-2
                        text-sm
                        text-zinc-300
                      "
                    >
                      {theme}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}

              <div
                className="
                  mt-10
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                "
              >
                <Stars className="h-8 w-8 text-amber-400" />

                <blockquote className="mt-4 text-lg leading-relaxed text-zinc-300">
                  “Every story holds the possibility of transformation.”
                </blockquote>

                <p className="mt-4 text-sm text-zinc-500">
                  The Alchemy of Becoming
                </p>
              </div>
            </div>

            {/* Footer Actions */}

            <div className="relative z-10 border-t border-white/10 p-6">
              <div className="grid gap-4">
                <Link
                  href="/stories"
                  onClick={onClose}
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
                    transition
                    hover:border-amber-500
                  "
                >
                  <BookOpen size={18} />
                  Explore Stories
                </Link>

                <Link
                  href="/submit-story"
                  onClick={onClose}
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
                    transition
                    hover:bg-amber-400
                  "
                >
                  <PenSquare size={18} />
                  Share Your Story
                </Link>

                <Link
                  href="/journeys"
                  onClick={onClose}
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
                    text-zinc-300
                    transition
                    hover:border-amber-500
                    hover:text-amber-400
                  "
                >
                  <Compass size={18} />
                  Explore Journeys
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}