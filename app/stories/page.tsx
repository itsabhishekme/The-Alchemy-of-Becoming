import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  Heart,
  Sparkles,
  Mountain,
  Compass,
  Flame,
  Search,
  PenSquare,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Explore inspiring stories of transformation, healing, resilience, purpose, and self-discovery from The Alchemy of Becoming.",
};

const categories = [
  "All Stories",
  "Transformation",
  "Healing",
  "Resilience",
  "Purpose",
  "Self Discovery",
  "Growth",
];

const featuredStory = {
  title: "The Day Failure Became My Teacher",
  category: "Resilience",
  readTime: "8 min read",
  author: "Sophia Carter",
  excerpt:
    "What began as one of the most painful failures of my life ultimately became the experience that transformed my understanding of success, purpose, and resilience.",
};

const stories = [
  {
    title: "Learning To Begin Again",
    category: "Transformation",
    readTime: "6 min read",
    icon: Sparkles,
    excerpt:
      "Starting over felt impossible until I realized reinvention begins with a single decision.",
  },
  {
    title: "The Quiet Power of Healing",
    category: "Healing",
    readTime: "5 min read",
    icon: Heart,
    excerpt:
      "Healing rarely happens all at once. It grows through patience, self-compassion, and courage.",
  },
  {
    title: "Climbing Through Uncertainty",
    category: "Resilience",
    readTime: "9 min read",
    icon: Mountain,
    excerpt:
      "A personal story about navigating adversity and discovering unexpected strength.",
  },
  {
    title: "Finding Direction Again",
    category: "Purpose",
    readTime: "7 min read",
    icon: Compass,
    excerpt:
      "When life felt disconnected, purpose became the compass that guided me forward.",
  },
  {
    title: "The Fire of Reinvention",
    category: "Transformation",
    readTime: "10 min read",
    icon: Flame,
    excerpt:
      "A story about embracing change and becoming someone stronger than I imagined.",
  },
  {
    title: "Small Steps, Lasting Growth",
    category: "Growth",
    readTime: "4 min read",
    icon: Sparkles,
    excerpt:
      "Meaningful transformation often begins with small, consistent actions.",
  },
];

export default function StoriesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}

      <section className="relative overflow-hidden py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm text-amber-300">
              The Living Archive
            </span>

            <h1 className="mt-8 font-heading text-5xl font-bold md:text-7xl">
              Stories of
              <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Becoming
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-300">
              Authentic stories of resilience, healing, transformation,
              self-discovery, purpose, and personal growth.
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-zinc-400">
              Every story preserves a moment of transformation. Together they
              create a living archive of human experience, wisdom, and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}

      <section className="border-y border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-amber-400">500+</h3>
              <p className="mt-3 text-zinc-400">Stories</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-amber-400">40+</h3>
              <p className="mt-3 text-zinc-400">Themes</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-amber-400">100+</h3>
              <p className="mt-3 text-zinc-400">Contributors</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-amber-400">∞</h3>
              <p className="mt-3 text-zinc-400">Possibilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative">
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
              size={20}
            />

            <input
              type="text"
              placeholder="Search stories..."
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-4 outline-none focus:border-amber-500"
            />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="rounded-full border border-white/10 px-5 py-2 text-sm transition hover:border-amber-500 hover:text-amber-400"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story */}

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <span className="text-sm text-amber-400">
              Featured Story
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              {featuredStory.title}
            </h2>

            <div className="mt-4 flex flex-wrap gap-6 text-sm text-zinc-400">
              <span>{featuredStory.category}</span>
              <span>{featuredStory.author}</span>
              <span>{featuredStory.readTime}</span>
            </div>

            <p className="mt-6 max-w-3xl leading-relaxed text-zinc-400">
              {featuredStory.excerpt}
            </p>

            <Link
              href="/stories/failure-became-teacher"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-black hover:bg-amber-400"
            >
              Read Story
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Story Grid */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <h2 className="font-heading text-4xl font-bold">
              Latest Stories
            </h2>

            <p className="mt-3 text-zinc-400">
              Explore stories from across the archive.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => {
              const Icon = story.icon;

              return (
                <article
                  key={story.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-amber-500/30"
                >
                  <Icon className="h-10 w-10 text-amber-400" />

                  <span className="mt-6 inline-block text-sm text-amber-400">
                    {story.category}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold">
                    {story.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-sm text-zinc-500">
                    <Clock3 size={14} />
                    {story.readTime}
                  </div>

                  <p className="mt-4 leading-relaxed text-zinc-400">
                    {story.excerpt}
                  </p>

                  <Link
                    href="/stories/sample-story"
                    className="mt-6 inline-flex items-center gap-2 text-amber-400"
                  >
                    Continue Reading
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy */}

      <section className="bg-white/[0.02] py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <BookOpen className="mx-auto h-14 w-14 text-amber-400" />

          <h2 className="mt-8 font-heading text-4xl font-bold">
            Why Stories Matter
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-zinc-400">
            Stories help us make sense of experience. They preserve lessons,
            inspire resilience, and remind us that transformation is possible.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Every story shared here contributes to a growing archive of wisdom,
            growth, healing, and becoming.
          </p>
        </div>
      </section>

      {/* Newsletter CTA */}

      <section className="border-y border-white/10 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Users className="mx-auto h-14 w-14 text-amber-400" />

          <h2 className="mt-8 text-4xl font-bold">
            Join the Community
          </h2>

          <p className="mt-6 text-zinc-400">
            Receive new stories, reflections, and insights on personal growth,
            resilience, and transformation.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-amber-500"
            />

            <button className="rounded-xl bg-amber-500 px-6 py-3 font-semibold text-black hover:bg-amber-400">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <PenSquare className="mx-auto h-14 w-14 text-amber-400" />

          <h2 className="mt-8 font-heading text-5xl font-bold">
            Share Your Story
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            Your experience could inspire someone navigating a similar journey.
          </p>

          <Link
            href="/submit-story"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black hover:bg-amber-400"
          >
            Submit Story
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}