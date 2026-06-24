"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  Sparkles,
  Heart,
  Compass,
  Mountain,
  Flame,
  Brain,
  Sunrise,
  BookOpen,
  Filter,
  RotateCcw,
} from "lucide-react";

export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  count?: number;
  description?: string;
}

interface CategoryFilterProps {
  categories?: CategoryItem[];
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
  showSearch?: boolean;
  showCounts?: boolean;
  showDescription?: boolean;
  className?: string;
}

const defaultCategories: CategoryItem[] = [
  {
    id: "all",
    name: "All Stories",
    slug: "all",
    count: 500,
    description: "Explore every story in the archive.",
  },
  {
    id: "transformation",
    name: "Transformation",
    slug: "transformation",
    count: 124,
    description:
      "Stories of reinvention, growth, and personal evolution.",
  },
  {
    id: "healing",
    name: "Healing",
    slug: "healing",
    count: 98,
    description:
      "Journeys of recovery, hope, and emotional restoration.",
  },
  {
    id: "resilience",
    name: "Resilience",
    slug: "resilience",
    count: 136,
    description:
      "Stories of perseverance through adversity and challenge.",
  },
  {
    id: "purpose",
    name: "Purpose",
    slug: "purpose",
    count: 89,
    description:
      "Discovering meaning, direction, and fulfillment.",
  },
  {
    id: "self-discovery",
    name: "Self Discovery",
    slug: "self-discovery",
    count: 112,
    description:
      "Exploring identity, values, and authentic living.",
  },
  {
    id: "mindset",
    name: "Mindset",
    slug: "mindset",
    count: 91,
    description:
      "Transformative shifts in perspective and thinking.",
  },
  {
    id: "growth",
    name: "Growth",
    slug: "growth",
    count: 143,
    description:
      "Continuous learning and lifelong development.",
  },
  {
    id: "wisdom",
    name: "Wisdom",
    slug: "wisdom",
    count: 75,
    description:
      "Lessons gathered through experience and reflection.",
  },
];

const categoryIcons: Record<string, React.ElementType> = {
  all: Filter,
  transformation: Sparkles,
  healing: Heart,
  resilience: Mountain,
  purpose: Flame,
  "self-discovery": Compass,
  mindset: Brain,
  growth: Sunrise,
  wisdom: BookOpen,
};

export default function CategoryFilter({
  categories = defaultCategories,
  selectedCategory = "all",
  onCategoryChange,
  showSearch = true,
  showCounts = true,
  showDescription = true,
  className = "",
}: CategoryFilterProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return categories;

    return categories.filter(
      (category) =>
        category.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        category.description
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
  }, [categories, searchTerm]);

  const activeCategory =
    categories.find(
      (category) => category.slug === selectedCategory
    ) || categories[0];

  return (
    <section className={`w-full ${className}`}>
      {/* Header */}

      <div className="mb-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm text-amber-300">
              Explore Categories
            </span>

            <h2 className="mt-4 font-heading text-3xl font-bold text-white md:text-4xl">
              Discover Stories by Theme
            </h2>

            <p className="mt-3 max-w-2xl text-zinc-400">
              Explore the many dimensions of personal growth,
              transformation, resilience, healing, purpose,
              and becoming.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center">
            <div className="text-3xl font-bold text-amber-400">
              {categories.reduce(
                (acc, category) => acc + (category.count || 0),
                0
              )}
            </div>

            <p className="text-sm text-zinc-500">
              Stories Archived
            </p>
          </div>
        </div>
      </div>

      {/* Search */}

      {showSearch && (
        <div className="mb-8">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              size={18}
            />

            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/5
                py-4
                pl-12
                pr-12
                text-white
                outline-none
                transition
                placeholder:text-zinc-500
                focus:border-amber-500
              "
            />

            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-zinc-500
                  hover:text-white
                "
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Category Pills */}

      <div className="mb-10 flex flex-wrap gap-3">
        {filteredCategories.map((category) => {
          const Icon =
            categoryIcons[category.slug] || Sparkles;

          const isActive =
            selectedCategory === category.slug;

          return (
            <button
              key={category.id}
              onClick={() =>
                onCategoryChange?.(category.slug)
              }
              className={`
                relative
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                px-5
                py-3
                transition-all
                duration-300
                ${
                  isActive
                    ? "border-amber-500 bg-amber-500 text-black"
                    : "border-white/10 bg-white/5 text-zinc-300 hover:border-amber-500/40 hover:text-white"
                }
              `}
            >
              <Icon size={16} />

              <span className="font-medium">
                {category.name}
              </span>

              {showCounts && category.count && (
                <span
                  className={`
                    rounded-full
                    px-2
                    py-0.5
                    text-xs
                    ${
                      isActive
                        ? "bg-black/20"
                        : "bg-white/10"
                    }
                  `}
                >
                  {category.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Category Card */}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory.slug}
          initial={{
            opacity: 0,
            y: 20,
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
            duration: 0.3,
          }}
          className="
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur
          "
        >
          <div className="p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-4">
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
                    "
                  >
                    {(() => {
                      const ActiveIcon =
                        categoryIcons[
                          activeCategory.slug
                        ] || Sparkles;

                      return (
                        <ActiveIcon className="h-7 w-7 text-black" />
                      );
                    })()}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {activeCategory.name}
                    </h3>

                    {showCounts &&
                      activeCategory.count && (
                        <p className="text-zinc-500">
                          {activeCategory.count} stories
                        </p>
                      )}
                  </div>
                </div>

                {showDescription &&
                  activeCategory.description && (
                    <p className="mt-6 max-w-3xl leading-relaxed text-zinc-400">
                      {activeCategory.description}
                    </p>
                  )}
              </div>

              <button
                onClick={() =>
                  onCategoryChange?.("all")
                }
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/10
                  px-5
                  py-3
                  text-zinc-300
                  transition
                  hover:border-amber-500
                  hover:text-amber-400
                "
              >
                <RotateCcw size={16} />
                Reset Filter
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Category Stats Grid */}

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {filteredCategories.slice(0, 4).map((category) => {
          const Icon =
            categoryIcons[category.slug] || Sparkles;

          return (
            <motion.div
              key={category.id}
              whileHover={{
                y: -5,
              }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur
              "
            >
              <Icon className="h-8 w-8 text-amber-400" />

              <h4 className="mt-4 font-semibold text-white">
                {category.name}
              </h4>

              <p className="mt-2 text-2xl font-bold text-amber-400">
                {category.count || 0}
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                Published Stories
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}