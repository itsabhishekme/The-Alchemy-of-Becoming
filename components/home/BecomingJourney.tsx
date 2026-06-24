"use client";

import { motion } from "framer-motion";
import {
  Sunrise,
  Compass,
  Mountain,
  Heart,
  Sparkles,
  Stars,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const journeyStages = [
  {
    id: "01",
    title: "Awakening",
    icon: Sunrise,
    description:
      "Every transformation begins with awareness. A realization emerges that life can be different, deeper, and more meaningful.",
    quote:
      "Growth begins the moment we recognize that change is possible.",
  },
  {
    id: "02",
    title: "Exploration",
    icon: Compass,
    description:
      "Questions replace certainty. Curiosity expands. We begin searching for truth, purpose, and understanding.",
    quote:
      "The journey of becoming starts when we dare to ask new questions.",
  },
  {
    id: "03",
    title: "Challenge",
    icon: Mountain,
    description:
      "Obstacles appear. Adversity tests resolve. Difficult experiences reveal strengths we never knew existed.",
    quote:
      "Every challenge contains the seeds of transformation.",
  },
  {
    id: "04",
    title: "Healing",
    icon: Heart,
    description:
      "Old wounds receive attention. Compassion grows. We learn that healing is not weakness but courage.",
    quote:
      "Healing creates space for the future version of ourselves.",
  },
  {
    id: "05",
    title: "Transformation",
    icon: Sparkles,
    description:
      "New beliefs, habits, and perspectives emerge. Identity evolves through experience and reflection.",
    quote:
      "Transformation happens when experience becomes wisdom.",
  },
  {
    id: "06",
    title: "Becoming",
    icon: Stars,
    description:
      "Growth integrates into daily life. Purpose, resilience, and authenticity become part of who we are.",
    quote:
      "Becoming is not an ending. It is the beginning of a deeper journey.",
  },
];

export default function BecomingJourney() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm text-amber-300">
            The Human Journey
          </span>

          <h2 className="mt-8 font-heading text-4xl font-bold md:text-6xl">
            The Path of
            <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Becoming
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
            Though every story is unique, many journeys of growth follow
            recognizable patterns. These stages represent the universal
            experiences that shape transformation and reveal the remarkable
            resilience of the human spirit.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">
          {/* Center Line */}

          <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-amber-500/0 via-amber-500/40 to-amber-500/0 lg:block" />

          <div className="space-y-16">
            {journeyStages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className={`relative flex flex-col items-center gap-10 lg:flex-row ${
                    index % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}

                  <div className="w-full lg:w-1/2">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                      <span className="text-sm font-semibold text-amber-400">
                        Stage {stage.id}
                      </span>

                      <h3 className="mt-3 text-3xl font-bold">
                        {stage.title}
                      </h3>

                      <p className="mt-5 leading-relaxed text-zinc-400">
                        {stage.description}
                      </p>

                      <blockquote className="mt-6 border-l-2 border-amber-500 pl-4 italic text-zinc-300">
                        "{stage.quote}"
                      </blockquote>
                    </div>
                  </div>

                  {/* Center Icon */}

                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-amber-500/20 bg-gradient-to-br from-amber-400 to-yellow-500 shadow-lg shadow-amber-500/20">
                    <Icon className="h-10 w-10 text-black" />
                  </div>

                  {/* Spacer */}

                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Reflection Section */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-28 max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur"
        >
          <h3 className="font-heading text-3xl font-bold md:text-4xl">
            Every Journey Is Different
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
            No two stories unfold in exactly the same way. Some journeys move
            quickly. Others require years of patience and perseverance.
            Yet every experience contributes to the person we become.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
            Through transformation, healing, resilience, and purpose, we
            discover that becoming is not a destination but a lifelong process
            of growth and renewal.
          </p>
        </motion.div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <Link
            href="/journeys"
            className="inline-flex items-center gap-3 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
          >
            Explore More Journeys
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}