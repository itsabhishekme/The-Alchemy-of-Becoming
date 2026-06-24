"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PenSquare,
  BookOpen,
  Sparkles,
  Heart,
  Users,
  Mail,
  Compass,
  Stars,
} from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Discover Wisdom",
    description:
      "Explore authentic stories filled with lessons, insights, and life-changing experiences.",
  },
  {
    icon: Heart,
    title: "Find Inspiration",
    description:
      "Learn from journeys of healing, resilience, growth, and transformation.",
  },
  {
    icon: Sparkles,
    title: "Embrace Growth",
    description:
      "Develop deeper self-awareness through meaningful reflections and stories.",
  },
  {
    icon: Users,
    title: "Join Community",
    description:
      "Become part of a growing archive celebrating the human journey.",
  },
];

export default function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 py-32">
      {/* Background Effects */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-yellow-500/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08),transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Main CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm text-amber-300">
            <Stars size={16} />
            The Journey Continues
          </div>

          <h2 className="mt-8 font-heading text-5xl font-bold leading-tight md:text-7xl">
            Every Story Has the Power
            <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              to Change a Life
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl">
            Within every challenge, setback, triumph, and transformation lies
            wisdom worth sharing. Together we create a living archive of human
            growth, resilience, healing, and becoming.
          </p>

          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-zinc-400">
            Whether you are seeking inspiration, reflecting on your own journey,
            or ready to share your story, there is a place for you here.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/stories"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
            >
              <BookOpen size={18} />
              Explore Stories
            </Link>

            <Link
              href="/submit-story"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 px-8 py-4 font-semibold transition hover:border-amber-500"
            >
              <PenSquare size={18} />
              Share Your Story
            </Link>
          </div>
        </motion.div>

        {/* Benefits Grid */}

        <div className="mt-28 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
              >
                <Icon className="h-10 w-10 text-amber-400" />

                <h3 className="mt-6 text-xl font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-relaxed text-zinc-400">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Newsletter Block */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28"
        >
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 md:p-16 backdrop-blur">
            <div className="mx-auto max-w-4xl text-center">
              <Mail className="mx-auto h-14 w-14 text-amber-400" />

              <h3 className="mt-8 font-heading text-4xl font-bold md:text-5xl">
                Stay Connected to the Journey
              </h3>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
                Receive inspiring stories, thoughtful reflections, and
                meaningful insights directly in your inbox.
              </p>

              <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="
                    flex-1
                    rounded-xl
                    border
                    border-white/10
                    bg-black/40
                    px-5
                    py-4
                    outline-none
                    transition
                    focus:border-amber-500
                  "
                />

                <button
                  type="button"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
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
                  Subscribe
                  <ArrowRight size={18} />
                </button>
              </div>

              <p className="mt-4 text-sm text-zinc-500">
                No spam. Only meaningful stories, reflections, and insights.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quote Block */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto mt-28 max-w-4xl text-center"
        >
          <Compass className="mx-auto h-12 w-12 text-amber-400" />

          <blockquote className="mt-8 font-heading text-3xl leading-relaxed md:text-5xl">
            “Becoming is not about reaching a final destination.
            It is about continually discovering who you are capable of being.”
          </blockquote>

          <p className="mt-8 text-zinc-500">
            — The Alchemy of Becoming
          </p>
        </motion.div>

        {/* Final CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 text-center"
        >
          <Link
            href="/journeys"
            className="
              inline-flex
              items-center
              gap-3
              rounded-xl
              bg-gradient-to-r
              from-amber-400
              to-yellow-500
              px-8
              py-4
              font-semibold
              text-black
              shadow-lg
              shadow-amber-500/20
              transition
              hover:scale-105
            "
          >
            Continue the Journey
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}