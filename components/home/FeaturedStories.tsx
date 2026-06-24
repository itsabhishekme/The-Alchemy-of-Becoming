"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  User,
  Sparkles,
  Heart,
  Mountain,
  Compass,
  Flame,
  BookOpen,
} from "lucide-react";

const featuredStory = {
  title: "The Day Failure Became My Teacher",
  category: "Resilience",
  author: "Sophia Carter",
  readTime: "8 min read",
  excerpt:
    "What began as one of the most painful failures of my life ultimately became the experience that transformed my understanding of success, purpose, and resilience.",
  slug: "the-day-failure-became-my-teacher",
};

const stories = [
  {
    title: "Learning To Begin Again",
    category: "Transformation",
    author: "Michael Bennett",
    readTime: "6 min read",
    icon: Sparkles,
    slug: "learning-to-begin-again",
    excerpt:
      "Starting over felt impossible until I discovered that reinvention begins with a single courageous decision.",
  },
  {
    title: "The Quiet Power of Healing",
    category: "Healing",
    author: "Emma Wilson",
    readTime: "5 min read",
    icon: Heart,
    slug: "the-quiet-power-of-healing",
    excerpt:
      "Healing rarely arrives all at once. It grows through patience, compassion, and small acts of courage.",
  },
  {
    title: "Climbing Through Uncertainty",
    category: "Resilience",
    author: "James Parker",
    readTime: "9 min read",
    icon: Mountain,
    slug: "climbing-through-uncertainty",
    excerpt:
      "A personal story about navigating adversity and discovering unexpected strength.",
  },
  {
    title: "Finding Direction Again",
    category: "Purpose",
    author: "Olivia Hayes",
    readTime: "7 min read",
    icon: Compass,
    slug: "finding-direction-again",
    excerpt:
      "When life felt disconnected, purpose became the compass guiding me toward clarity and meaning.",
  },
  {
    title: "The Fire of Reinvention",
    category: "Transformation",
    author: "Daniel Ross",
    readTime: "10 min read",
    icon: Flame,
    slug: "the-fire-of-reinvention",
    excerpt:
      "A powerful story about embracing change and becoming someone stronger than imagined.",
  },
  {
    title: "Lessons From Letting Go",
    category: "Growth",
    author: "Grace Morgan",
    readTime: "4 min read",
    icon: BookOpen,
    slug: "lessons-from-letting-go",
    excerpt:
      "Sometimes growth begins when we release what no longer serves our future.",
  },
];

export default function FeaturedStories() {
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
            Featured Collection
          </span>

          <h2 className="mt-8 font-heading text-4xl font-bold md:text-6xl">
            Stories That Illuminate
            <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              The Journey of Becoming
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
            Explore authentic stories of resilience, healing, transformation,
            purpose, and self-discovery from people navigating life's most
            meaningful experiences.
          </p>
        </motion.div>

        {/* Featured Story */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur">
            <div className="grid lg:grid-cols-2">
              {/* Left */}

              <div className="flex items-center p-10 md:p-14">
                <div>
                  <span className="inline-flex rounded-full bg-amber-500/10 px-4 py-2 text-sm text-amber-400">
                    Featured Story
                  </span>

                  <h3 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                    {featuredStory.title}
                  </h3>

                  <div className="mt-6 flex flex-wrap gap-5 text-sm text-zinc-400">
                    <div className="flex items-center gap-2">
                      <User size={15} />
                      {featuredStory.author}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock3 size={15} />
                      {featuredStory.readTime}
                    </div>

                    <span>{featuredStory.category}</span>
                  </div>

                  <p className="mt-8 text-lg leading-relaxed text-zinc-400">
                    {featuredStory.excerpt}
                  </p>

                  <Link
                    href={`/stories/${featuredStory.slug}`}
                    className="mt-10 inline-flex items-center gap-3 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
                  >
                    Read Story
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Right Visual */}

              <div className="relative min-h-[400px] bg-gradient-to-br from-amber-400/20 via-yellow-500/10 to-transparent">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 p-8 shadow-2xl shadow-amber-500/20">
                    <Sparkles className="h-24 w-24 text-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Story Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => {
            const Icon = story.icon;

            return (
              <motion.article
                key={story.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-300 hover:border-amber-500/30 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-10 w-10 text-amber-400" />

                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                    {story.category}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold transition group-hover:text-amber-300">
                  {story.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-zinc-500">
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    {story.author}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 size={14} />
                    {story.readTime}
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-zinc-400">
                  {story.excerpt}
                </p>

                <Link
                  href={`/stories/${story.slug}`}
                  className="mt-8 inline-flex items-center gap-2 text-amber-400 transition hover:gap-3"
                >
                  Continue Reading
                  <ArrowRight size={16} />
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 text-center"
        >
          <Link
            href="/stories"
            className="inline-flex items-center gap-3 rounded-xl border border-white/10 px-8 py-4 font-semibold transition hover:border-amber-500 hover:text-amber-400"
          >
            View All Stories
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}