"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock3,
  User,
  Sparkles,
  Heart,
  Mountain,
  Compass,
  Flame,
  Brain,
  Sunrise,
  BookOpen,
  Bookmark,
  Share2,
  Eye,
  Quote,
} from "lucide-react";

export interface StoryCardData {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  publishedAt: string;
  image?: string;
  views?: number;
  featured?: boolean;
  tags?: string[];
}

interface StoryCardProps {
  story: StoryCardData;
  featured?: boolean;
  showImage?: boolean;
  showTags?: boolean;
  showActions?: boolean;
  showExcerpt?: boolean;
  className?: string;
}

const categoryIcons: Record<string, React.ElementType> = {
  Transformation: Sparkles,
  Healing: Heart,
  Resilience: Mountain,
  Purpose: Compass,
  Growth: Sunrise,
  Wisdom: BookOpen,
  Mindset: Brain,
  Reinvention: Flame,
};

const categoryColors: Record<string, string> = {
  Transformation:
    "from-amber-400/20 to-yellow-500/10",
  Healing:
    "from-pink-400/20 to-rose-500/10",
  Resilience:
    "from-green-400/20 to-emerald-500/10",
  Purpose:
    "from-blue-400/20 to-cyan-500/10",
  Growth:
    "from-orange-400/20 to-yellow-500/10",
  Wisdom:
    "from-indigo-400/20 to-violet-500/10",
  Mindset:
    "from-purple-400/20 to-fuchsia-500/10",
  Reinvention:
    "from-red-400/20 to-orange-500/10",
};

export default function StoryCard({
  story,
  featured = false,
  showImage = true,
  showTags = true,
  showActions = true,
  showExcerpt = true,
  className = "",
}: StoryCardProps) {
  const Icon =
    categoryIcons[story.category] || Sparkles;

  const gradient =
    categoryColors[story.category] ||
    "from-amber-400/20 to-yellow-500/10";

  return (
    <motion.article
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        backdrop-blur
        transition-all
        duration-300
        hover:border-amber-500/30
        hover:bg-white/10
        ${featured ? "lg:col-span-2" : ""}
        ${className}
      `}
    >
      {/* Gradient Overlay */}

      <div
        className={`
          absolute
          inset-0
          bg-gradient-to-br
          ${gradient}
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        `}
      />

      {/* Featured Badge */}

      {(featured || story.featured) && (
        <div className="absolute left-6 top-6 z-20">
          <span
            className="
              rounded-full
              bg-amber-500
              px-4
              py-2
              text-xs
              font-semibold
              text-black
            "
          >
            Featured Story
          </span>
        </div>
      )}

      {/* Hero Visual */}

      {showImage && (
        <div
          className="
            relative
            h-60
            overflow-hidden
            border-b
            border-white/10
          "
        >
          {story.image ? (
            <img
              src={story.image}
              alt={story.title}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />
          ) : (
            <div
              className={`
                flex
                h-full
                items-center
                justify-center
                bg-gradient-to-br
                ${gradient}
              `}
            >
              <div
                className="
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-amber-400
                  to-yellow-500
                  shadow-2xl
                  shadow-amber-500/20
                "
              >
                <Icon className="h-12 w-12 text-black" />
              </div>
            </div>
          )}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/80
              via-black/20
              to-transparent
            "
          />

          <div className="absolute bottom-5 left-5">
            <span
              className="
                rounded-full
                border
                border-white/10
                bg-black/50
                px-4
                py-2
                text-sm
                text-white
                backdrop-blur
              "
            >
              {story.category}
            </span>
          </div>
        </div>
      )}

      {/* Content */}

      <div className="relative z-10 p-8">
        {/* Meta */}

        <div className="flex flex-wrap gap-5 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <User size={14} />
            {story.author}
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={14} />
            {story.readTime}
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={14} />
            {story.publishedAt}
          </div>

          {story.views && (
            <div className="flex items-center gap-2">
              <Eye size={14} />
              {story.views.toLocaleString()}
            </div>
          )}
        </div>

        {/* Title */}

        <h2
          className={`
            mt-6
            font-bold
            leading-tight
            transition
            group-hover:text-amber-300
            ${
              featured
                ? "text-4xl md:text-5xl"
                : "text-2xl"
            }
          `}
        >
          {story.title}
        </h2>

        {/* Excerpt */}

        {showExcerpt && (
          <p
            className={`
              mt-6
              leading-relaxed
              text-zinc-400
              ${
                featured
                  ? "text-lg"
                  : ""
              }
            `}
          >
            {story.excerpt}
          </p>
        )}

        {/* Tags */}

        {showTags &&
          story.tags &&
          story.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {story.tags.map((tag) => (
                <span
                  key={tag}
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
                  #{tag}
                </span>
              ))}
            </div>
          )}

        {/* Quote Block */}

        {featured && (
          <div
            className="
              mt-8
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-6
            "
          >
            <Quote className="h-7 w-7 text-amber-400" />

            <blockquote className="mt-4 text-lg leading-relaxed text-zinc-300">
              Every challenge carries within it the
              possibility of transformation and growth.
            </blockquote>
          </div>
        )}

        {/* Footer */}

        <div
          className="
            mt-8
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Read More */}

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
            Read Full Story
            <ArrowRight size={16} />
          </Link>

          {/* Actions */}

          {showActions && (
            <div className="flex items-center gap-3">
              <button
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  text-zinc-400
                  transition
                  hover:border-amber-500
                  hover:text-amber-400
                "
                aria-label="Save Story"
              >
                <Bookmark size={16} />
              </button>

              <button
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  text-zinc-400
                  transition
                  hover:border-amber-500
                  hover:text-amber-400
                "
                aria-label="Share Story"
              >
                <Share2 size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}