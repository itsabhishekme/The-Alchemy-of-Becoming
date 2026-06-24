"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Grid3X3,
  LayoutGrid,
  Search,
  Sparkles,
  Filter,
  BookOpen,
} from "lucide-react";
import StoryCard, {
  StoryCardData,
} from "@/components/stories/StoryCard";

export interface StoryGridProps {
  stories?: StoryCardData[];
  title?: string;
  description?: string;
  showSearch?: boolean;
  showFilters?: boolean;
  showFeatured?: boolean;
  className?: string;
}

const sampleStories: StoryCardData[] = [
  {
    id: "1",
    slug: "the-day-failure-became-my-teacher",
    title: "The Day Failure Became My Teacher",
    excerpt:
      "What began as one of the most painful failures of my life became the experience that transformed my understanding of success, resilience, and purpose.",
    category: "Resilience",
    author: "Sophia Carter",
    readTime: "8 min read",
    publishedAt: "June 14, 2026",
    featured: true,
    views: 1842,
    tags: [
      "resilience",
      "growth",
      "mindset",
      "transformation",
    ],
  },
  {
    id: "2",
    slug: "learning-to-begin-again",
    title: "Learning To Begin Again",
    excerpt:
      "Starting over felt impossible until I discovered that reinvention begins with a single courageous step forward.",
    category: "Transformation",
    author: "Michael Bennett",
    readTime: "6 min read",
    publishedAt: "May 22, 2026",
    views: 1220,
    tags: ["change", "growth"],
  },
  {
    id: "3",
    slug: "the-quiet-power-of-healing",
    title: "The Quiet Power of Healing",
    excerpt:
      "Healing is rarely dramatic. More often, it grows through patience, compassion, and small acts of courage.",
    category: "Healing",
    author: "Emma Wilson",
    readTime: "5 min read",
    publishedAt: "May 18, 2026",
    views: 960,
    tags: ["healing", "hope"],
  },
  {
    id: "4",
    slug: "finding-direction-again",
    title: "Finding Direction Again",
    excerpt:
      "Purpose became the compass that guided me through uncertainty and toward a more meaningful life.",
    category: "Purpose",
    author: "Olivia Hayes",
    readTime: "7 min read",
    publishedAt: "April 12, 2026",
    views: 1430,
    tags: ["purpose", "meaning"],
  },
  {
    id: "5",
    slug: "climbing-through-uncertainty",
    title: "Climbing Through Uncertainty",
    excerpt:
      "A personal story about adversity, perseverance, and discovering strength where none seemed possible.",
    category: "Resilience",
    author: "James Parker",
    readTime: "9 min read",
    publishedAt: "March 30, 2026",
    views: 1750,
    tags: ["challenge", "courage"],
  },
  {
    id: "6",
    slug: "lessons-from-letting-go",
    title: "Lessons From Letting Go",
    excerpt:
      "Growth often begins when we release what no longer aligns with the future we hope to create.",
    category: "Wisdom",
    author: "Grace Morgan",
    readTime: "4 min read",
    publishedAt: "March 11, 2026",
    views: 840,
    tags: ["wisdom", "reflection"],
  },
];

const categories = [
  "All",
  "Transformation",
  "Healing",
  "Resilience",
  "Purpose",
  "Wisdom",
];

export default function StoryGrid({
  stories = sampleStories,
  title = "Stories of Becoming",
  description = "Explore authentic journeys of transformation, resilience, healing, self-discovery, and purpose.",
  showSearch = true,
  showFilters = true,
  showFeatured = true,
  className = "",
}: StoryGridProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] =
    useState("All");
  const [compactView, setCompactView] =
    useState(false);

  const filteredStories = useMemo(() => {
    return stories.filter((story) => {
      const matchesSearch =
        story.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        story.excerpt
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        story.author
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" ||
        story.category === activeCategory;

      return (
        matchesSearch && matchesCategory
      );
    });
  }, [
    stories,
    search,
    activeCategory,
  ]);

  const featuredStory =
    filteredStories.find(
      (story) => story.featured
    ) || filteredStories[0];

  const regularStories =
    filteredStories.filter(
      (story) =>
        story.id !== featuredStory?.id
    );

  return (
    <section
      className={`relative py-20 ${className}`}
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-amber-500/5 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-yellow-500/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm text-amber-300">
            <BookOpen size={14} />
            Story Archive
          </span>

          <h2 className="mt-8 font-heading text-4xl font-bold md:text-6xl">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
            {description}
          </p>
        </div>

        {/* Controls */}

        <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}

            {showSearch && (
              <div className="relative w-full lg:max-w-md">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                />

                <input
                  type="text"
                  placeholder="Search stories..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-black/30
                    py-3
                    pl-11
                    pr-4
                    text-white
                    outline-none
                    transition
                    focus:border-amber-500
                  "
                />
              </div>
            )}

            {/* View Toggle */}

            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  setCompactView(false)
                }
                className={`
                  flex h-11 w-11 items-center justify-center rounded-xl border
                  ${
                    !compactView
                      ? "border-amber-500 bg-amber-500 text-black"
                      : "border-white/10 text-zinc-400"
                  }
                `}
              >
                <LayoutGrid size={18} />
              </button>

              <button
                onClick={() =>
                  setCompactView(true)
                }
                className={`
                  flex h-11 w-11 items-center justify-center rounded-xl border
                  ${
                    compactView
                      ? "border-amber-500 bg-amber-500 text-black"
                      : "border-white/10 text-zinc-400"
                  }
                `}
              >
                <Grid3X3 size={18} />
              </button>
            </div>
          </div>

          {/* Categories */}

          {showFilters && (
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-zinc-500">
                <Filter size={14} />
              </div>

              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() =>
                    setActiveCategory(
                      category
                    )
                  }
                  className={`
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    transition
                    ${
                      activeCategory ===
                      category
                        ? "bg-amber-500 text-black"
                        : "border border-white/10 bg-white/5 text-zinc-300 hover:border-amber-500"
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Results Count */}

        <div className="mt-8 flex items-center justify-between">
          <p className="text-zinc-500">
            Showing{" "}
            <span className="font-semibold text-amber-400">
              {filteredStories.length}
            </span>{" "}
            stories
          </p>
        </div>

        {/* Featured Story */}

        {showFeatured &&
          featuredStory && (
            <div className="mt-10">
              <StoryCard
                featured
                story={featuredStory}
              />
            </div>
          )}

        {/* Grid */}

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${compactView}`}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className={`
              mt-10
              grid
              gap-8
              ${
                compactView
                  ? "md:grid-cols-2 xl:grid-cols-4"
                  : "md:grid-cols-2 xl:grid-cols-3"
              }
            `}
          >
            {(showFeatured
              ? regularStories
              : filteredStories
            ).map((story) => (
              <StoryCard
                key={story.id}
                story={story}
                featured={false}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}

        {filteredStories.length === 0 && (
          <div
            className="
              mt-20
              rounded-[32px]
              border
              border-white/10
              bg-white/5
              p-14
              text-center
              backdrop-blur
            "
          >
            <Sparkles className="mx-auto h-14 w-14 text-amber-400" />

            <h3 className="mt-6 text-3xl font-bold">
              No Stories Found
            </h3>

            <p className="mt-4 text-zinc-400">
              Try adjusting your search or
              selecting another category.
            </p>
          </div>
        )}

        {/* Bottom CTA */}

        <div className="mt-24 text-center">
          <div
            className="
              mx-auto
              max-w-4xl
              rounded-[32px]
              border
              border-white/10
              bg-white/5
              p-10
              backdrop-blur
            "
          >
            <Sparkles className="mx-auto h-12 w-12 text-amber-400" />

            <h3 className="mt-6 text-3xl font-bold">
              Every Story Matters
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              The Alchemy of Becoming exists
              because people are willing to
              share the lessons hidden within
              their journeys.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}