"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Compass,
  Heart,
  Sparkles,
  Stars,
  PenSquare,
  Quote,
} from "lucide-react";

const stats = [
  {
    value: "500+",
    label: "Stories Preserved",
  },
  {
    value: "50+",
    label: "Growth Themes",
  },
  {
    value: "100+",
    label: "Contributors",
  },
  {
    value: "∞",
    label: "Possibilities",
  },
];

const highlights = [
  {
    icon: Sparkles,
    title: "Transformation",
  },
  {
    icon: Heart,
    title: "Healing",
  },
  {
    icon: Compass,
    title: "Purpose",
  },
  {
    icon: BookOpen,
    title: "Wisdom",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Effects */}

      <div className="absolute inset-0 -z-20">
        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-amber-500/10 blur-[180px]" />

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[160px]" />

        <div className="absolute bottom-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/5 blur-[200px]" />
      </div>

      {/* Decorative Grid */}

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
          linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">
        <div className="w-full">
          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm text-amber-300">
              <Stars size={16} />
              A Living Archive of Human Transformation
            </span>
          </motion.div>

          {/* Main Heading */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="mx-auto mt-10 max-w-6xl text-center"
          >
            <h1 className="font-heading text-6xl font-bold leading-tight md:text-8xl lg:text-9xl">
              The Alchemy
              <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                of Becoming
              </span>
            </h1>

            <p className="mx-auto mt-10 max-w-4xl text-xl leading-relaxed text-zinc-300 md:text-2xl">
              Stories of transformation, reinvention, resilience, healing,
              self-discovery, purpose, and the courageous evolution of the
              human spirit.
            </p>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-zinc-400">
              The Alchemy of Becoming is a living archive dedicated to
              documenting personal growth, emotional resilience,
              life-changing experiences, wisdom, and human transformation.
              Through authentic stories and profound reflections, we preserve
              the lessons that emerge from adversity and celebrate the
              remarkable power of becoming.
            </p>
          </motion.div>

          {/* Highlight Categories */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="mt-14 flex flex-wrap justify-center gap-4"
          >
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-5
                    py-3
                    backdrop-blur
                  "
                >
                  <Icon className="h-4 w-4 text-amber-400" />

                  <span className="text-sm text-zinc-300">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="mt-16 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/stories"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-amber-500
                px-8
                py-4
                font-semibold
                text-black
                transition
                hover:bg-amber-400
              "
            >
              Explore Stories
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/submit-story"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-xl
                border
                border-white/10
                px-8
                py-4
                font-semibold
                transition
                hover:border-amber-500
              "
            >
              <PenSquare size={18} />
              Share Your Journey
            </Link>
          </motion.div>

          {/* Stats */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
            className="mt-24 grid gap-8 border-t border-white/10 pt-12 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-amber-400">
                  {stat.value}
                </h3>

                <p className="mt-3 text-zinc-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Quote */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 1,
            }}
            className="mx-auto mt-24 max-w-4xl text-center"
          >
            <Quote className="mx-auto h-10 w-10 text-amber-400" />

            <blockquote className="mt-8 font-heading text-3xl leading-relaxed md:text-5xl">
              “Every experience carries within it the possibility of
              transformation. Every story holds the power to illuminate a
              path.”
            </blockquote>

            <p className="mt-8 text-zinc-500">
              — The Alchemy of Becoming
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}