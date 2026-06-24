import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Mountain,
  Heart,
  Sparkles,
  Sunrise,
  BookOpen,
  Flame,
  Stars,
  PenSquare,
  Clock,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Journeys",
  description:
    "Explore transformative journeys of healing, resilience, self-discovery, growth, purpose, and becoming.",
};

const journeys = [
  {
    title: "The Road Through Adversity",
    category: "Resilience",
    duration: "7 Years",
    icon: Mountain,
    description:
      "A story of overcoming setbacks, rebuilding confidence, and discovering inner strength.",
  },
  {
    title: "Learning To Heal",
    category: "Healing",
    duration: "5 Years",
    icon: Heart,
    description:
      "A journey of emotional recovery, forgiveness, self-compassion, and renewal.",
  },
  {
    title: "Discovering Purpose",
    category: "Purpose",
    duration: "Lifetime",
    icon: Flame,
    description:
      "The search for meaning, contribution, fulfillment, and authentic direction.",
  },
  {
    title: "The Reinvention Chapter",
    category: "Transformation",
    duration: "3 Years",
    icon: Sparkles,
    description:
      "A powerful period of personal reinvention and courageous change.",
  },
];

const stages = [
  {
    title: "Awakening",
    icon: Sunrise,
    description:
      "The moment we recognize that change is necessary and growth is possible.",
  },
  {
    title: "Exploration",
    icon: Compass,
    description:
      "A season of questioning, learning, discovery, and uncertainty.",
  },
  {
    title: "Transformation",
    icon: Sparkles,
    description:
      "Old beliefs dissolve and new possibilities begin to emerge.",
  },
  {
    title: "Becoming",
    icon: Stars,
    description:
      "The integration of wisdom, purpose, resilience, and authenticity.",
  },
];

export default function JourneysPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}

      <section className="relative overflow-hidden py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm text-amber-300">
              Transformative Human Experiences
            </span>

            <h1 className="mt-8 font-heading text-5xl font-bold md:text-7xl">
              Journeys of
              <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Becoming
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-300">
              Explore powerful journeys of healing, resilience,
              transformation, self-discovery, growth, and purpose.
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-zinc-400">
              Every life contains chapters that shape identity, challenge
              assumptions, reveal hidden strength, and transform ordinary
              experiences into extraordinary lessons.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}

      <section className="border-y border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-amber-400">500+</h3>
              <p className="mt-3 text-zinc-400">Journey Stories</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-amber-400">40+</h3>
              <p className="mt-3 text-zinc-400">Life Themes</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-amber-400">100+</h3>
              <p className="mt-3 text-zinc-400">Contributors</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-amber-400">∞</h3>
              <p className="mt-3 text-zinc-400">Ways To Grow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Collection */}

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-4xl font-bold">
              Featured Journeys
            </h2>

            <p className="mt-4 text-zinc-400">
              Explore transformational stories from different stages of life.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {journeys.map((journey) => {
              const Icon = journey.icon;

              return (
                <article
                  key={journey.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-amber-500/30"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-12 w-12 text-amber-400" />

                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <Clock size={16} />
                      {journey.duration}
                    </div>
                  </div>

                  <span className="mt-6 inline-block text-sm text-amber-400">
                    {journey.category}
                  </span>

                  <h3 className="mt-3 text-3xl font-bold">
                    {journey.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-zinc-400">
                    {journey.description}
                  </p>

                  <Link
                    href="/stories"
                    className="mt-8 inline-flex items-center gap-2 text-amber-400"
                  >
                    Read Journey
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Stages */}

      <section className="bg-white/[0.02] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-bold">
              Stages of Becoming
            </h2>

            <p className="mt-5 text-zinc-400">
              Growth often unfolds through recognizable phases.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage) => {
              const Icon = stage.icon;

              return (
                <div
                  key={stage.title}
                  className="rounded-3xl border border-white/10 bg-black/40 p-8"
                >
                  <Icon className="h-12 w-12 text-amber-400" />

                  <h3 className="mt-6 text-2xl font-bold">
                    {stage.title}
                  </h3>

                  <p className="mt-4 text-zinc-400">
                    {stage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy */}

      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <BookOpen className="mx-auto h-14 w-14 text-amber-400" />

          <h2 className="mt-8 font-heading text-4xl font-bold">
            Every Journey Matters
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-zinc-400">
            Not every transformation is dramatic. Some occur quietly through
            daily choices, small acts of courage, moments of reflection,
            and gradual healing.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            These journeys deserve to be documented because they reveal the
            remarkable capacity of human beings to adapt, evolve, and grow.
          </p>
        </div>
      </section>

      {/* Community Section */}

      <section className="border-y border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Users className="h-14 w-14 text-amber-400" />

              <h2 className="mt-8 font-heading text-4xl font-bold">
                A Community of Growth
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                Every contributor enriches our understanding of resilience,
                healing, purpose, and transformation.
              </p>

              <p className="mt-6 leading-relaxed text-zinc-400">
                Together we create a living archive that demonstrates how
                extraordinary growth often emerges from ordinary experiences.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
              <h3 className="text-3xl font-bold">
                Share Your Journey
              </h3>

              <p className="mt-4 text-zinc-400">
                Your story may become the encouragement someone else needs.
              </p>

              <Link
                href="/submit-story"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
              >
                Submit Your Story
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}

      <section className="py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <blockquote className="font-heading text-3xl leading-relaxed md:text-5xl">
            “Becoming is not a destination. It is the lifelong art of
            transforming experience into wisdom.”
          </blockquote>

          <p className="mt-8 text-zinc-500">
            The Alchemy of Becoming
          </p>
        </div>
      </section>

      {/* CTA */}

      <section className="border-t border-white/10 py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <PenSquare className="mx-auto h-14 w-14 text-amber-400" />

          <h2 className="mt-8 font-heading text-5xl font-bold">
            Begin Exploring
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            Discover authentic stories of transformation, healing,
            resilience, self-discovery, and purpose.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/stories"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
            >
              Explore Stories
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/about"
              className="rounded-xl border border-white/10 px-8 py-4 transition hover:border-amber-500"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}