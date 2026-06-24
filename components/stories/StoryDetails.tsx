"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock3,
  User,
  Eye,
  Share2,
  Bookmark,
  Heart,
  MessageCircle,
  ArrowLeft,
  Sparkles,
  Quote,
  BookOpen,
  Compass,
  Mountain,
  Flame,
  Brain,
  Sunrise,
} from "lucide-react";

export interface StoryContent {
  type: "paragraph" | "quote" | "heading";
  content: string;
}

export interface StoryDetailsData {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole?: string;
  publishedAt: string;
  readTime: string;
  views?: number;
  image?: string;
  tags?: string[];
  content: StoryContent[];
}

interface StoryDetailsProps {
  story: StoryDetailsData;
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

const categoryGradients: Record<string, string> = {
  Transformation:
    "from-amber-400/20 via-yellow-500/10 to-orange-500/10",
  Healing:
    "from-pink-400/20 via-rose-500/10 to-red-500/10",
  Resilience:
    "from-green-400/20 via-emerald-500/10 to-lime-500/10",
  Purpose:
    "from-blue-400/20 via-cyan-500/10 to-sky-500/10",
  Growth:
    "from-orange-400/20 via-yellow-500/10 to-amber-500/10",
  Wisdom:
    "from-indigo-400/20 via-violet-500/10 to-purple-500/10",
  Mindset:
    "from-purple-400/20 via-fuchsia-500/10 to-pink-500/10",
  Reinvention:
    "from-red-400/20 via-orange-500/10 to-yellow-500/10",
};

export default function StoryDetails({
  story,
}: StoryDetailsProps) {
  const CategoryIcon =
    categoryIcons[story.category] || Sparkles;

  const gradient =
    categoryGradients[story.category] ||
    categoryGradients.Transformation;

  return (
    <article className="relative overflow-hidden">
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div
          className={`
            absolute
            inset-0
            bg-gradient-to-b
            ${gradient}
          `}
        />

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[180px]" />
      </div>

      {/* Hero Section */}

      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 py-20">
          {/* Back Button */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
          >
            <Link
              href="/stories"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-5
                py-3
                text-zinc-300
                backdrop-blur
                transition
                hover:border-amber-500
                hover:text-amber-400
              "
            >
              <ArrowLeft size={16} />
              Back to Stories
            </Link>
          </motion.div>

          {/* Category */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="mt-10"
          >
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-amber-500/20
                bg-amber-500/10
                px-5
                py-2
                text-sm
                text-amber-300
              "
            >
              <CategoryIcon size={14} />
              {story.category}
            </span>
          </motion.div>

          {/* Title */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
              mt-8
              font-heading
              text-5xl
              font-bold
              leading-tight
              md:text-7xl
            "
          >
            {story.title}
          </motion.h1>

          {/* Excerpt */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
            className="
              mt-8
              max-w-4xl
              text-xl
              leading-relaxed
              text-zinc-300
            "
          >
            {story.excerpt}
          </motion.p>

          {/* Author Meta */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
            }}
            className="
              mt-12
              flex
              flex-wrap
              gap-6
              text-zinc-400
            "
          >
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{story.author}</span>
            </div>

            {story.authorRole && (
              <div>{story.authorRole}</div>
            )}

            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {story.publishedAt}
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={16} />
              {story.readTime}
            </div>

            {story.views && (
              <div className="flex items-center gap-2">
                <Eye size={16} />
                {story.views.toLocaleString()} views
              </div>
            )}
          </motion.div>
        </div>

        {/* Cover Image */}

        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.5,
            }}
            className="
              overflow-hidden
              rounded-[40px]
              border
              border-white/10
            "
          >
            {story.image ? (
              <img
                src={story.image}
                alt={story.title}
                className="
                  h-[500px]
                  w-full
                  object-cover
                "
              />
            ) : (
              <div
                className={`
                  flex
                  h-[500px]
                  items-center
                  justify-center
                  bg-gradient-to-br
                  ${gradient}
                `}
              >
                <div
                  className="
                    flex
                    h-32
                    w-32
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-amber-400
                    to-yellow-500
                  "
                >
                  <CategoryIcon
                    className="h-16 w-16 text-black"
                  />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
            {/* Main Content */}

            <div>
              <div
                className="
                  prose
                  prose-invert
                  max-w-none
                "
              >
                {story.content.map(
                  (block, index) => {
                    if (
                      block.type === "heading"
                    ) {
                      return (
                        <motion.h2
                          key={index}
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          className="
                            mt-14
                            text-3xl
                            font-bold
                          "
                        >
                          {block.content}
                        </motion.h2>
                      );
                    }

                    if (
                      block.type === "quote"
                    ) {
                      return (
                        <motion.blockquote
                          key={index}
                          initial={{
                            opacity: 0,
                          }}
                          whileInView={{
                            opacity: 1,
                          }}
                          viewport={{
                            once: true,
                          }}
                          className="
                            my-12
                            rounded-3xl
                            border
                            border-white/10
                            bg-white/5
                            p-8
                            backdrop-blur
                          "
                        >
                          <Quote className="h-8 w-8 text-amber-400" />

                          <p
                            className="
                              mt-4
                              text-2xl
                              italic
                              leading-relaxed
                            "
                          >
                            {block.content}
                          </p>
                        </motion.blockquote>
                      );
                    }

                    return (
                      <motion.p
                        key={index}
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        className="
                          mt-8
                          text-lg
                          leading-relaxed
                          text-zinc-300
                        "
                      >
                        {block.content}
                      </motion.p>
                    );
                  }
                )}
              </div>

              {/* Tags */}

              {story.tags &&
                story.tags.length > 0 && (
                  <div className="mt-16">
                    <h3 className="mb-5 text-xl font-semibold">
                      Related Themes
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      {story.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            px-4
                            py-2
                            text-sm
                            text-zinc-300
                          "
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
            </div>

            {/* Sidebar */}

            <aside className="space-y-6">
              <div
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur
                "
              >
                <h3 className="font-semibold">
                  Story Actions
                </h3>

                <div className="mt-5 grid gap-3">
                  <button
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-white/10
                      px-4
                      py-3
                      transition
                      hover:border-amber-500
                    "
                  >
                    <Heart size={18} />
                    Appreciate Story
                  </button>

                  <button
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-white/10
                      px-4
                      py-3
                      transition
                      hover:border-amber-500
                    "
                  >
                    <Bookmark size={18} />
                    Save Story
                  </button>

                  <button
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-white/10
                      px-4
                      py-3
                      transition
                      hover:border-amber-500
                    "
                  >
                    <Share2 size={18} />
                    Share Story
                  </button>

                  <button
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-white/10
                      px-4
                      py-3
                      transition
                      hover:border-amber-500
                    "
                  >
                    <MessageCircle size={18} />
                    Reflect
                  </button>
                </div>
              </div>

              <div
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur
                "
              >
                <h3 className="font-semibold">
                  Reflection
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  Consider how this story connects
                  with your own experiences,
                  challenges, and moments of
                  transformation.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </article>
  );
}