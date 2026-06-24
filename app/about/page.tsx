import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Sparkles,
  Compass,
  Mountain,
  Lightbulb,
  PenSquare,
  Globe,
  Users,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The Alchemy of Becoming, a living archive dedicated to transformation, resilience, healing, self-discovery, and the extraordinary journey of becoming.",
};

const values = [
  {
    icon: Heart,
    title: "Authenticity",
    description:
      "We believe authentic stories have the power to connect people across experiences, cultures, and generations.",
  },
  {
    icon: Mountain,
    title: "Resilience",
    description:
      "Every challenge contains lessons that shape character, reveal strength, and inspire transformation.",
  },
  {
    icon: Compass,
    title: "Purpose",
    description:
      "Meaning often emerges from unexpected places. We celebrate journeys that uncover deeper purpose.",
  },
  {
    icon: Sparkles,
    title: "Transformation",
    description:
      "Human beings possess a remarkable capacity to evolve, heal, adapt, and grow.",
  },
];

const pillars = [
  {
    icon: BookOpen,
    title: "Storytelling",
    description:
      "Documenting meaningful experiences that reveal profound truths about the human condition.",
  },
  {
    icon: Lightbulb,
    title: "Wisdom",
    description:
      "Preserving lessons learned through adversity, growth, reflection, and transformation.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Creating a space where diverse voices contribute to a shared archive of becoming.",
  },
  {
    icon: Globe,
    title: "Legacy",
    description:
      "Building a timeless collection of stories that continue inspiring future generations.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}

      <section className="relative overflow-hidden py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm text-amber-300">
              About The Alchemy of Becoming
            </span>

            <h1 className="mt-8 font-heading text-5xl font-bold leading-tight md:text-7xl">
              A Living Archive of
              <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Human Transformation
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl">
              Every life contains moments that transform identity, challenge
              beliefs, reveal hidden strength, and shape the person we become.
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-zinc-400">
              The Alchemy of Becoming exists to preserve those moments through
              meaningful storytelling, thoughtful reflection, and the shared
              wisdom of lived experience.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}

      <section className="border-y border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-4xl font-bold">
                Why We Exist
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                In a world overflowing with information, the most valuable
                knowledge often comes from lived experience.
              </p>

              <p className="mt-6 leading-relaxed text-zinc-400">
                Every person encounters moments that redefine their path.
                Moments of courage. Moments of loss. Moments of healing.
                Moments of clarity.
              </p>

              <p className="mt-6 leading-relaxed text-zinc-400">
                These experiences contain lessons that deserve to be preserved,
                shared, and remembered. They remind us that transformation is
                possible and that growth often emerges from life's most
                challenging seasons.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
              <BookOpen className="h-12 w-12 text-amber-400" />

              <h3 className="mt-6 text-2xl font-bold">
                Our Mission
              </h3>

              <p className="mt-6 leading-relaxed text-zinc-400">
                To document authentic stories of transformation, resilience,
                healing, self-discovery, and purpose while creating a timeless
                archive that inspires growth, empathy, and meaningful
                reflection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-bold">
              Our Core Values
            </h2>

            <p className="mt-5 text-zinc-400">
              The principles guiding every story and reflection.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
                >
                  <Icon className="h-10 w-10 text-amber-400" />

                  <h3 className="mt-6 text-xl font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-zinc-400">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pillars */}

      <section className="bg-white/[0.02] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-bold">
              What We Preserve
            </h2>

            <p className="mt-5 text-zinc-400">
              Four pillars that define The Alchemy of Becoming.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  className="rounded-3xl border border-white/10 bg-black/40 p-8"
                >
                  <Icon className="h-10 w-10 text-amber-400" />

                  <h3 className="mt-6 text-2xl font-bold">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-zinc-400">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision */}

      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Shield className="mx-auto h-14 w-14 text-amber-400" />

          <h2 className="mt-8 font-heading text-4xl font-bold">
            Our Vision
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-zinc-400">
            We envision a future where wisdom is not lost, where personal
            stories are valued as powerful sources of learning, and where
            individuals can find encouragement through the experiences of
            others.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Through storytelling and reflection, we hope to inspire meaningful
            growth, deeper understanding, and a greater appreciation for the
            transformative journey of becoming.
          </p>
        </div>
      </section>

      {/* Quote */}

      <section className="border-y border-white/10 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <blockquote className="font-heading text-3xl leading-relaxed md:text-5xl">
            “Every life contains a story capable of illuminating the path for
            someone else.”
          </blockquote>

          <p className="mt-8 text-zinc-500">
            The Alchemy of Becoming
          </p>
        </div>
      </section>

      {/* CTA */}

      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <PenSquare className="mx-auto h-14 w-14 text-amber-400" />

          <h2 className="mt-8 font-heading text-5xl font-bold">
            Share Your Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            Your experience may provide inspiration, hope, and insight for
            someone navigating a similar path.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/submit-story"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
            >
              Submit Your Story
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