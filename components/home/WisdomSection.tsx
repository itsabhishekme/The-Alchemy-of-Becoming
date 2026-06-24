"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Quote,
  BookOpen,
  Brain,
  Heart,
  Lightbulb,
  Compass,
  Sparkles,
  Stars,
} from "lucide-react";

const wisdomCards = [
  {
    icon: Brain,
    title: "Self Awareness",
    description:
      "Growth begins when we develop a deeper understanding of our thoughts, emotions, habits, and motivations.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description:
      "Healing and transformation flourish when kindness becomes part of our relationship with ourselves and others.",
  },
  {
    icon: Compass,
    title: "Purpose",
    description:
      "Meaning emerges through contribution, curiosity, and the pursuit of what truly matters.",
  },
  {
    icon: Lightbulb,
    title: "Insight",
    description:
      "Reflection transforms experience into wisdom and reveals lessons hidden within everyday life.",
  },
];

const reflections = [
  {
    quote:
      "Transformation rarely happens in a single moment. It emerges through countless small choices repeated over time.",
  },
  {
    quote:
      "The greatest lessons often arrive disguised as challenges, uncertainty, and unexpected change.",
  },
  {
    quote:
      "Every experience contains wisdom waiting to be discovered through reflection and awareness.",
  },
];

export default function WisdomSection() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Effects */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 h-[400px] w-[400px] rounded-full bg-amber-500/5 blur-[140px]" />

        <div className="absolute right-0 bottom-1/4 h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm text-amber-300">
            <Stars size={14} />
            Reflections & Wisdom
          </span>

          <h2 className="mt-8 font-heading text-4xl font-bold md:text-6xl">
            Lessons Hidden Within
            <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              The Human Experience
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
            Through reflection, ordinary experiences reveal extraordinary
            lessons. These insights illuminate the journey of growth,
            resilience, healing, and becoming.
          </p>
        </motion.div>

        {/* Wisdom Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {wisdomCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:border-amber-500/30
                  hover:bg-white/10
                "
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-lg shadow-amber-500/20">
                  <Icon className="h-8 w-8 text-black" />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Reflection */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur md:p-16">
            <div className="mx-auto max-w-4xl text-center">
              <Quote className="mx-auto h-14 w-14 text-amber-400" />

              <blockquote className="mt-8 font-heading text-3xl leading-relaxed md:text-5xl">
                “Wisdom is not the accumulation of information. It is the
                ability to transform experience into understanding.”
              </blockquote>

              <p className="mt-8 text-zinc-500">
                — The Alchemy of Becoming
              </p>
            </div>
          </div>
        </motion.div>

        {/* Reflection Grid */}

        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {reflections.map((reflection, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur
              "
            >
              <Sparkles className="h-8 w-8 text-amber-400" />

              <p className="mt-6 text-lg leading-relaxed text-zinc-300">
                {reflection.quote}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Wisdom Philosophy */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mx-auto
            mt-24
            max-w-5xl
            text-center
          "
        >
          <BookOpen className="mx-auto h-14 w-14 text-amber-400" />

          <h3 className="mt-8 font-heading text-4xl font-bold">
            Why Reflection Matters
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
            Reflection bridges the gap between experience and wisdom. Without
            reflection, moments pass unnoticed. With reflection, they become
            sources of growth, insight, and transformation.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
            By pausing to consider what life is teaching us, we discover deeper
            meaning, cultivate resilience, and become more intentional in the
            people we are becoming.
          </p>
        </motion.div>

        {/* CTA */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 text-center"
        >
          <Link
            href="/reflections"
            className="
              inline-flex
              items-center
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
            Explore Reflections
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}