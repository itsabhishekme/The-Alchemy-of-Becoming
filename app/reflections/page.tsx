import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Heart,
  Lightbulb,
  Sparkles,
  Compass,
  Sunrise,
  PenSquare,
  Quote,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Reflections",
  description:
    "Explore profound reflections on growth, healing, resilience, purpose, transformation, and the lifelong journey of becoming.",
};

const reflections = [
  {
    title: "Growth Begins With Awareness",
    category: "Self Discovery",
    readTime: "4 min read",
    icon: Compass,
    excerpt:
      "Transformation often starts when we become aware of the stories we tell ourselves and the beliefs shaping our decisions.",
  },
  {
    title: "The Quiet Strength of Healing",
    category: "Healing",
    readTime: "6 min read",
    icon: Heart,
    excerpt:
      "Healing rarely announces itself. It often arrives through small moments of courage, compassion, and patience.",
  },
  {
    title: "Resilience Is Built, Not Found",
    category: "Resilience",
    readTime: "5 min read",
    icon: Sparkles,
    excerpt:
      "Strength emerges through experience. Every challenge becomes part of the foundation that supports future growth.",
  },
  {
    title: "Purpose Reveals Itself Gradually",
    category: "Purpose",
    readTime: "7 min read",
    icon: Sunrise,
    excerpt:
      "Many people search for purpose as if it were hidden. More often, purpose unfolds through action and service.",
  },
];

const wisdomPrinciples = [
  {
    title: "Self Awareness",
    description:
      "Understanding ourselves creates the foundation for meaningful transformation.",
    icon: Brain,
  },
  {
    title: "Compassion",
    description:
      "Growth becomes sustainable when accompanied by kindness toward ourselves and others.",
    icon: Heart,
  },
  {
    title: "Curiosity",
    description:
      "Remaining open to learning keeps us evolving throughout every stage of life.",
    icon: Lightbulb,
  },
  {
    title: "Purpose",
    description:
      "A meaningful direction helps transform experiences into wisdom and contribution.",
    icon: Compass,
  },
];

const quotes = [
  {
    text: "Transformation is rarely a single moment. It is usually a collection of small decisions repeated over time.",
  },
  {
    text: "The person you become is shaped as much by reflection as by experience.",
  },
  {
    text: "Every challenge carries within it the possibility of growth.",
  },
];

export default function ReflectionsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}

      <section className="relative overflow-hidden py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm text-amber-300">
              Wisdom • Insight • Growth
            </span>

            <h1 className="mt-8 font-heading text-5xl font-bold md:text-7xl">
              Reflections on
              <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Becoming
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-300">
              A collection of insights, lessons, observations, and reflections
              inspired by personal growth, resilience, healing, purpose, and
              transformation.
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-zinc-400">
              Reflection transforms experience into wisdom. These essays and
              insights explore the lessons hidden within everyday life and the
              extraordinary journey of becoming.
            </p>
          </div>
        </div>
      </section>

      {/* Reflection Statistics */}

      <section className="border-y border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-amber-400">250+</h3>
              <p className="mt-3 text-zinc-400">Reflections</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-amber-400">50+</h3>
              <p className="mt-3 text-zinc-400">Topics</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-amber-400">1000+</h3>
              <p className="mt-3 text-zinc-400">Insights Shared</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-amber-400">∞</h3>
              <p className="mt-3 text-zinc-400">Lessons To Learn</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reflections */}

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-4xl font-bold">
              Featured Reflections
            </h2>

            <p className="mt-4 text-zinc-400">
              Thoughtful perspectives on growth and transformation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {reflections.map((reflection) => {
              const Icon = reflection.icon;

              return (
                <article
                  key={reflection.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-amber-500/30"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-12 w-12 text-amber-400" />

                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <Clock size={14} />
                      {reflection.readTime}
                    </div>
                  </div>

                  <span className="mt-6 inline-block text-sm text-amber-400">
                    {reflection.category}
                  </span>

                  <h3 className="mt-3 text-3xl font-bold">
                    {reflection.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-zinc-400">
                    {reflection.excerpt}
                  </p>

                  <Link
                    href="/stories"
                    className="mt-8 inline-flex items-center gap-2 text-amber-400"
                  >
                    Read Reflection
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wisdom Principles */}

      <section className="bg-white/[0.02] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-bold">
              Principles of Growth
            </h2>

            <p className="mt-4 text-zinc-400">
              Foundational ideas that guide meaningful transformation.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {wisdomPrinciples.map((principle) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  className="rounded-3xl border border-white/10 bg-black/40 p-8"
                >
                  <Icon className="h-12 w-12 text-amber-400" />

                  <h3 className="mt-6 text-2xl font-bold">
                    {principle.title}
                  </h3>

                  <p className="mt-4 text-zinc-400">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quotes Section */}

      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <Quote className="mx-auto h-14 w-14 text-amber-400" />

            <h2 className="mt-8 font-heading text-4xl font-bold">
              Moments of Wisdom
            </h2>
          </div>

          <div className="mt-16 space-y-8">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
              >
                <blockquote className="text-2xl leading-relaxed text-zinc-200">
                  "{quote.text}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection Philosophy */}

      <section className="border-y border-white/10 py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <BookOpen className="mx-auto h-14 w-14 text-amber-400" />

          <h2 className="mt-8 font-heading text-4xl font-bold">
            Why Reflection Matters
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-zinc-400">
            Experience alone does not guarantee wisdom. Reflection helps us
            understand our experiences, uncover lessons, and integrate growth
            into our lives.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Through reflection, setbacks become teachers, successes become
            sources of gratitude, and ordinary moments reveal extraordinary
            meaning.
          </p>
        </div>
      </section>

      {/* CTA Section */}

      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <PenSquare className="mx-auto h-14 w-14 text-amber-400" />

          <h2 className="mt-8 font-heading text-5xl font-bold">
            Share Your Reflection
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            Your insights, lessons, and observations may inspire someone else's
            journey toward growth, healing, and transformation.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/submit-story"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
            >
              Share Your Reflection
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/stories"
              className="rounded-xl border border-white/10 px-8 py-4 transition hover:border-amber-500"
            >
              Explore Stories
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}