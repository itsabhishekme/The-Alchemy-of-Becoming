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
  Quote,
} from "lucide-react";

export interface RelatedStory {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  publishedAt?: string;
}

interface RelatedStoriesProps {
  currentStorySlug?: string;
  title?: string;
  description?: string;
  stories?: RelatedStory[];
}

const defaultStories: RelatedStory[] = [
  {
    id: "1",
    slug: "learning-to-begin-again",
    title: "Learning To Begin Again",
    excerpt:
      "Sometimes the most courageous step forward is choosing to start over and trust the process of reinvention.",
    category: "Transformation",
    author: "Michael Bennett",
    readTime: "6 min read",
    publishedAt: "January 12, 2026",
  },
  {
    id: "2",
    slug: "the-quiet-power-of-healing",
    title: "The Quiet Power of Healing",
    excerpt:
      "Healing rarely happens all at once. It unfolds through patience, self-compassion, and daily acts of courage.",
    category: "Healing",
    author: "Emma Wilson",
    readTime: "5 min read",
    publishedAt: "January 20, 2026",
  },
  {
    id: "3",
    slug: "climbing-through-uncertainty",
    title: "Climbing Through Uncertainty",
    excerpt:
      "A journey through challenge, adversity, and discovering unexpected resilience during life's most difficult seasons.",
    category: "Resilience",
    author: "James Parker",
    readTime: "9 min read",
    publishedAt: "February 3, 2026",
  },
  {
    id: "4",
    slug: "finding-direction-again",
    title: "Finding Direction Again",
    excerpt:
      "Purpose often reveals itself when we least expect it and guides us toward deeper meaning.",
    category: "Purpose",
    author: "Olivia Hayes",
    readTime: "7 min read",
    publishedAt: "February 10, 2026",
  },
  {
    id: "5",
    slug: "the-fire-of-reinvention",
    title: "The Fire of Reinvention",
    excerpt:
      "Change can feel uncomfortable, but within uncertainty lies the opportunity for transformation.",
    category: "Transformation",
    author: "Daniel Ross",
    readTime: "10 min read",
    publishedAt: "March 1, 2026",
  },
  {
    id: "6",
    slug: "lessons-from-letting-go",
    title: "Lessons From Letting Go",
    excerpt:
      "Growth often begins when we release what no longer aligns with the person we are becoming.",
    category: "Wisdom",
    author: "Grace Morgan",
    readTime: "4 min read",
    publishedAt: "March 15, 2026",
  },
];

const categoryIcons: Record<string, React.ElementType> = {
  Transformation: Sparkles,
  Healing: Heart,
  Resilience: Mountain,
  Purpose: Compass,
  Wisdom: BookOpen,
  Growth: Flame,
};

export default function RelatedStories({
  currentStorySlug,
  title = "Related Stories",
  description = "Continue exploring journeys of transformation, healing, resilience, and becoming.",
  stories = defaultStories,
}: RelatedStoriesProps) {
  const filteredStories = stories
    .filter((story) => story.slug !== currentStorySlug)
    .slice(0, 3);

  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-amber-500/5 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-yellow-500/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm text-amber-300">
            <Quote size={14} />
            Continue Reading
          </span>

          <h2 className="mt-8 font-heading text-4xl font-bold md:text-6xl">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
            {description}
          </p>
        </motion.div>

        {/* Stories Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredStories.map((story, index) => {
            const Icon =
              categoryIcons[story.category] || Sparkles;

            return (
              <motion.article
                key={story.id}
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
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:border-amber-500/30
                  hover:bg-white/10
                "
              >
                {/* Top */}

                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-amber-400
                        to-yellow-500
                        shadow-lg
                        shadow-amber-500/20
                      "
                    >
                      <Icon className="h-7 w-7 text-black" />
                    </div>

                    <span
                      className="
                        rounded-full
                        border
                        border-white/10
                        px-3
                        py-1
                        text-xs
                        text-zinc-400
                      "
                    >
                      {story.category}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-8
                      text-2xl
                      font-bold
                      leading-snug
                      transition
                      group-hover:text-amber-300
                    "
                  >
                    {story.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-zinc-400">
                    {story.excerpt}
                  </p>

                  {/* Meta */}

                  <div
                    className="
                      mt-6
                      flex
                      flex-wrap
                      gap-4
                      text-sm
                      text-zinc-500
                    "
                  >
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      {story.author}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock3 size={14} />
                      {story.readTime}
                    </div>
                  </div>

                  {story.publishedAt && (
                    <p className="mt-3 text-sm text-zinc-600">
                      {story.publishedAt}
                    </p>
                  )}
                </div>

                {/* Footer */}

                <div className="border-t border-white/10 p-6">
                  <Link
                    href={`/stories/${story.slug}`}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      font-medium
                      text-amber-400
                      transition-all
                      hover:gap-3
                    "
                  >
                    Read Story
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <Link
            href="/stories"
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
            Explore All Stories
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Reflection Block */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
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
          <Quote className="mx-auto h-12 w-12 text-amber-400" />

          <blockquote className="mt-8 font-heading text-3xl leading-relaxed md:text-5xl">
            “Every story offers a window into possibility.
            Every experience carries a lesson worth sharing.”
          </blockquote>

          <p className="mt-8 text-zinc-500">
            — The Alchemy of Becoming
          </p>
        </motion.div>
      </div>
    </section>
  );
}