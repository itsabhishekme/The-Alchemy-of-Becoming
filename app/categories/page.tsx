import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Heart,
  Compass,
  Mountain,
  BookOpen,
  Lightbulb,
  Flame,
  Leaf,
  PenSquare,
  Brain,
  Sunrise,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Explore transformational stories through themes of resilience, healing, self-discovery, purpose, growth, and the remarkable journey of becoming.",
};

const categories = [
  {
    title: "Transformation",
    icon: Sparkles,
    stories: 124,
    description:
      "Stories of profound change, reinvention, personal evolution, and life-altering experiences.",
  },
  {
    title: "Healing",
    icon: Heart,
    stories: 98,
    description:
      "Journeys of emotional recovery, self-compassion, forgiveness, and renewal.",
  },
  {
    title: "Self Discovery",
    icon: Compass,
    stories: 112,
    description:
      "Explorations of identity, purpose, meaning, and personal truth.",
  },
  {
    title: "Resilience",
    icon: Mountain,
    stories: 136,
    description:
      "Accounts of perseverance, courage, endurance, and overcoming adversity.",
  },
  {
    title: "Wisdom",
    icon: Lightbulb,
    stories: 75,
    description:
      "Lessons learned through experience, reflection, and meaningful insight.",
  },
  {
    title: "Purpose",
    icon: Flame,
    stories: 89,
    description:
      "Stories revealing calling, direction, fulfillment, and meaningful contribution.",
  },
  {
    title: "Growth",
    icon: Leaf,
    stories: 143,
    description:
      "Continuous journeys of learning, improvement, and personal development.",
  },
  {
    title: "Mindset",
    icon: Brain,
    stories: 91,
    description:
      "Powerful shifts in thinking that transformed lives and unlocked potential.",
  },
];

export default function CategoriesPage() {
  const totalStories = categories.reduce(
    (sum, category) => sum + category.stories,
    0
  );

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}

      <section className="relative overflow-hidden py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm text-amber-300">
              Explore Human Transformation
            </span>

            <h1 className="mt-8 font-heading text-5xl font-bold leading-tight md:text-7xl">
              Categories of
              <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Becoming
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl">
              Discover stories through themes that define personal growth,
              resilience, healing, purpose, and transformation.
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-zinc-400">
              Every journey is unique, yet common threads connect human
              experience. Explore the categories that illuminate the many paths
              people take toward becoming their truest selves.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}

      <section className="border-y border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-amber-400">
                {totalStories}+
              </h3>
              <p className="mt-3 text-zinc-400">Stories Archived</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-amber-400">
                {categories.length}
              </h3>
              <p className="mt-3 text-zinc-400">Core Categories</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-amber-400">
                50+
              </h3>
              <p className="mt-3 text-zinc-400">Contributors</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-amber-400">
                Infinite
              </h3>
              <p className="mt-3 text-zinc-400">Possibilities for Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-4xl font-bold">
              Explore Categories
            </h2>

            <p className="mt-4 text-zinc-400">
              Browse stories by themes that shape the human journey.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.title}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-amber-500/30 hover:bg-white/10"
                >
                  <Icon className="h-12 w-12 text-amber-400 transition-transform duration-300 group-hover:scale-110" />

                  <div className="mt-6">
                    <span className="text-sm text-amber-400">
                      {category.stories} Stories
                    </span>

                    <h3 className="mt-2 text-2xl font-bold">
                      {category.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-zinc-400">
                      {category.description}
                    </p>

                    <Link
                      href={`/stories?category=${encodeURIComponent(
                        category.title
                      )}`}
                      className="mt-6 inline-flex items-center gap-2 text-amber-400"
                    >
                      Explore Category
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}

      <section className="bg-white/[0.02] py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <BookOpen className="mx-auto h-14 w-14 text-amber-400" />

          <h2 className="mt-8 font-heading text-4xl font-bold">
            Every Category Tells a Story
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-zinc-400">
            Categories are more than organizational tools. They are reflections
            of universal human experiences that connect us across cultures,
            generations, and circumstances.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Whether through healing, resilience, purpose, or transformation,
            each category reveals a different facet of what it means to grow,
            adapt, and evolve.
          </p>
        </div>
      </section>

      {/* Journey Section */}

      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <Sunrise className="mx-auto h-14 w-14 text-amber-400" />

            <h2 className="mt-8 font-heading text-4xl font-bold">
              The Journey of Becoming
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-zinc-400">
              Growth is rarely linear. A person may move through healing,
              discover resilience, uncover purpose, and eventually experience
              transformation. These categories often overlap, reflecting the
              complexity and beauty of human development.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <section className="border-t border-white/10 py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <PenSquare className="mx-auto h-14 w-14 text-amber-400" />

          <h2 className="mt-8 font-heading text-5xl font-bold">
            Your Story Matters
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            Every transformation contributes to our collective understanding of
            growth, healing, and purpose. Share your experience and become part
            of this living archive.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/submit-story"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
            >
              Share Your Journey
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/stories"
              className="rounded-xl border border-white/10 px-8 py-4 transition hover:border-amber-500"
            >
              Browse Stories
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}