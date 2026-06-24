"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Heart,
  Compass,
  Mountain,
  Flame,
  Brain,
  Sunrise,
  BookOpen,
} from "lucide-react";

const transformations = [
  {
    title: "Transformation",
    icon: Sparkles,
    stories: "124 Stories",
    description:
      "Profound experiences of change, reinvention, and personal evolution that redefine identity and possibility.",
    color:
      "from-amber-400/20 to-yellow-500/10",
  },
  {
    title: "Healing",
    icon: Heart,
    stories: "98 Stories",
    description:
      "Journeys of emotional recovery, forgiveness, self-compassion, and the restoration of hope.",
    color:
      "from-rose-400/20 to-pink-500/10",
  },
  {
    title: "Self Discovery",
    icon: Compass,
    stories: "112 Stories",
    description:
      "Explorations of identity, purpose, values, and the search for authentic meaning.",
    color:
      "from-blue-400/20 to-cyan-500/10",
  },
  {
    title: "Resilience",
    icon: Mountain,
    stories: "136 Stories",
    description:
      "Stories of perseverance, courage, endurance, and strength forged through adversity.",
    color:
      "from-green-400/20 to-emerald-500/10",
  },
  {
    title: "Purpose",
    icon: Flame,
    stories: "89 Stories",
    description:
      "Journeys revealing calling, contribution, fulfillment, and meaningful direction.",
    color:
      "from-orange-400/20 to-red-500/10",
  },
  {
    title: "Mindset",
    icon: Brain,
    stories: "91 Stories",
    description:
      "Transformative shifts in thinking that unlock growth, confidence, and possibility.",
    color:
      "from-violet-400/20 to-purple-500/10",
  },
  {
    title: "Growth",
    icon: Sunrise,
    stories: "143 Stories",
    description:
      "Continuous learning, development, adaptation, and the lifelong process of becoming.",
    color:
      "from-yellow-400/20 to-orange-500/10",
  },
  {
    title: "Wisdom",
    icon: BookOpen,
    stories: "75 Stories",
    description:
      "Insights and lessons gathered through experience, reflection, and meaningful living.",
    color:
      "from-indigo-400/20 to-blue-500/10",
  },
];

export default function TransformationGrid() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-amber-500/5 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm text-amber-300">
            Paths of Growth
          </span>

          <h2 className="mt-8 font-heading text-4xl font-bold md:text-6xl">
            Explore the Many Forms
            <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              of Becoming
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
            Human transformation takes many forms. Explore stories and
            reflections organized around the themes that most often shape
            personal growth and meaningful change.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {transformations.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
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
                  delay: index * 0.08,
                }}
                className="
                  group
                  relative
                  overflow-hidden
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
                {/* Gradient Overlay */}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative z-10">
                  {/* Icon */}

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-lg shadow-amber-500/20">
                    <Icon className="h-8 w-8 text-black" />
                  </div>

                  {/* Meta */}

                  <p className="mt-6 text-sm font-medium text-amber-400">
                    {item.stories}
                  </p>

                  {/* Title */}

                  <h3 className="mt-3 text-2xl font-bold">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-5 leading-relaxed text-zinc-400">
                    {item.description}
                  </p>

                  {/* Link */}

                  <Link
                    href={`/categories`}
                    className="
                      mt-8
                      inline-flex
                      items-center
                      gap-2
                      text-amber-400
                      transition-all
                      hover:gap-3
                    "
                  >
                    Explore Theme
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Reflection Section */}

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
            rounded-[32px]
            border
            border-white/10
            bg-white/5
            p-10
            text-center
            backdrop-blur
            md:p-14
          "
        >
          <h3 className="font-heading text-3xl font-bold md:text-4xl">
            Transformation Is Not One Thing
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
            Some journeys begin through hardship. Others emerge through
            curiosity, opportunity, reflection, or love. Yet every experience
            contributes to the ongoing process of becoming.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
            By exploring different themes of transformation, we gain a deeper
            understanding of ourselves and the shared human experience.
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
            href="/categories"
            className="
              inline-flex
              items-center
              gap-3
              rounded-xl
              border
              border-white/10
              px-8
              py-4
              font-semibold
              transition
              hover:border-amber-500
              hover:text-amber-400
            "
          >
            View All Categories
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}