import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  PenSquare,
  Heart,
  Sparkles,
  Mountain,
  Compass,
  BookOpen,
  Lightbulb,
  CheckCircle,
  HelpCircle,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Submit Your Story",
  description:
    "Share your journey of transformation, healing, resilience, purpose, and self-discovery with The Alchemy of Becoming.",
};

const categories = [
  "Transformation",
  "Healing",
  "Resilience",
  "Self Discovery",
  "Purpose",
  "Growth",
  "Mindset",
  "Relationships",
  "Leadership",
  "Life Lessons",
];

const guidelines = [
  "Write from authentic personal experience.",
  "Focus on lessons, insights, and growth.",
  "Use clear, honest, and meaningful storytelling.",
  "Respect privacy and confidentiality.",
  "Aim to inspire, educate, or encourage others.",
];

const faqs = [
  {
    question: "Can I submit anonymously?",
    answer:
      "Yes. You may choose to publish anonymously or use a pseudonym.",
  },
  {
    question: "How long should my story be?",
    answer:
      "Most submissions range from 800 to 3000 words, though longer stories are welcome.",
  },
  {
    question: "Will my story be edited?",
    answer:
      "Minor edits may be made for clarity, grammar, formatting, and readability while preserving your voice.",
  },
  {
    question: "When will I hear back?",
    answer:
      "Most submissions are reviewed within a few business days.",
  },
];

export default function SubmitStoryPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}

      <section className="relative overflow-hidden py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm text-amber-300">
              Contribute To The Archive
            </span>

            <h1 className="mt-8 font-heading text-5xl font-bold md:text-7xl">
              Share Your
              <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Story of Becoming
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-300">
              Every life contains moments of transformation, healing,
              resilience, growth, and discovery.
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-zinc-400">
              Your experience may provide encouragement, wisdom, and hope for
              someone navigating a similar journey.
            </p>
          </div>
        </div>
      </section>

      {/* Why Share */}

      <section className="border-y border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <Users className="mx-auto h-14 w-14 text-amber-400" />

            <h2 className="mt-8 font-heading text-4xl font-bold">
              Why Share Your Story?
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-lg text-zinc-400">
              Stories connect people through shared experiences. They preserve
              wisdom, inspire courage, and remind us that growth is possible.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <Heart className="h-10 w-10 text-amber-400" />
              <h3 className="mt-6 text-xl font-bold">Inspire</h3>
              <p className="mt-3 text-zinc-400">
                Encourage others through your experiences.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <BookOpen className="h-10 w-10 text-amber-400" />
              <h3 className="mt-6 text-xl font-bold">Preserve</h3>
              <p className="mt-3 text-zinc-400">
                Capture lessons worth remembering.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <Lightbulb className="h-10 w-10 text-amber-400" />
              <h3 className="mt-6 text-xl font-bold">Teach</h3>
              <p className="mt-3 text-zinc-400">
                Share insights gained through experience.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <Sparkles className="h-10 w-10 text-amber-400" />
              <h3 className="mt-6 text-xl font-bold">Transform</h3>
              <p className="mt-3 text-zinc-400">
                Help others discover new possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines */}

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-heading text-4xl font-bold text-center">
            Submission Guidelines
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {guidelines.map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <CheckCircle className="h-6 w-6 text-amber-400" />
                <p className="text-zinc-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Form */}

      <section className="bg-white/[0.02] py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
            <div className="mb-10 text-center">
              <PenSquare className="mx-auto h-14 w-14 text-amber-400" />

              <h2 className="mt-6 text-4xl font-bold">
                Submit Your Story
              </h2>

              <p className="mt-4 text-zinc-400">
                Share your journey with our community.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-amber-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-amber-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Story Title
                </label>

                <input
                  type="text"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-amber-500"
                  placeholder="Title of your story"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Category
                </label>

                <select className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-amber-500">
                  {categories.map((category) => (
                    <option
                      key={category}
                      value={category}
                      className="bg-black"
                    >
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Short Summary
                </label>

                <textarea
                  rows={4}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-amber-500"
                  placeholder="Brief overview of your story"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Your Story
                </label>

                <textarea
                  rows={12}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-amber-500"
                  placeholder="Tell your story..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
              >
                Submit Story
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Story Categories */}

      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-heading text-4xl font-bold">
            Popular Categories
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <div
                key={category}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <p>{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="border-y border-white/10 py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <HelpCircle className="mx-auto h-14 w-14 text-amber-400" />

            <h2 className="mt-8 font-heading text-4xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-16 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold">
                  {faq.question}
                </h3>

                <p className="mt-3 text-zinc-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}

      <section className="py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Compass className="mx-auto h-14 w-14 text-amber-400" />

          <h2 className="mt-8 font-heading text-5xl font-bold">
            Every Journey Has Meaning
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            Your story may become the inspiration, guidance, or encouragement
            someone else needs today.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/stories"
              className="rounded-xl border border-white/10 px-8 py-4 transition hover:border-amber-500"
            >
              Explore Stories
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black hover:bg-amber-400"
            >
              Learn More
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}