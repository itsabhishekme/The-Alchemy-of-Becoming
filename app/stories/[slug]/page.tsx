import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock3,
  User,
  Tag,
  Share2,
  BookOpen,
  Heart,
  Sparkles,
} from "lucide-react";

interface StoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const stories = [
  {
    slug: "the-day-failure-became-my-teacher",
    title: "The Day Failure Became My Teacher",
    excerpt:
      "A story about resilience, purpose, and discovering strength through adversity.",
    author: "Sophia Carter",
    category: "Resilience",
    readTime: "8 min read",
    publishedAt: "January 15, 2026",
    tags: ["resilience", "growth", "purpose"],
    content: `
      Failure is often misunderstood.

      Most people view it as an ending, a verdict, or a sign that something has gone wrong.
      Yet many of life's greatest lessons emerge precisely when things do not unfold according to plan.

      There was a time when I believed success would arrive through certainty.
      I imagined a straight path marked by achievements, recognition, and progress.

      Instead, life introduced setbacks.

      Plans collapsed.
      Expectations dissolved.
      Confidence disappeared.

      For a while, I interpreted these experiences as evidence that I was moving in the wrong direction.

      Looking back now, I see something very different.

      Those failures forced me to develop resilience.

      They taught me patience.
      They revealed weaknesses that required attention.
      They encouraged humility.

      Most importantly, they shifted my understanding of success itself.

      Success stopped being about avoiding mistakes.
      It became about learning from them.

      Growth rarely emerges from comfort.
      It often appears when circumstances challenge our assumptions and require adaptation.

      Failure became a teacher because it asked better questions than success ever could.

      What truly matters?
      What kind of person are you becoming?
      What lessons remain unseen?

      The answers were not immediate.

      They emerged gradually through reflection, persistence, and courage.

      Every setback became part of a larger story.

      A story not about defeat but transformation.

      Today I no longer fear failure in the same way.

      I recognize it as a companion on the journey of becoming.

      Sometimes painful.
      Often uncomfortable.

      Yet almost always meaningful.
    `,
  },
];

export async function generateMetadata({
  params,
}: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;

  const story = stories.find((s) => s.slug === slug);

  if (!story) {
    return {
      title: "Story Not Found",
    };
  }

  return {
    title: story.title,
    description: story.excerpt,
    keywords: [...story.tags, story.category],
    openGraph: {
      title: story.title,
      description: story.excerpt,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

export default async function StoryPage({
  params,
}: StoryPageProps) {
  const { slug } = await params;

  const story = stories.find((s) => s.slug === slug);

  if (!story) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Story Not Found</h1>

          <Link
            href="/stories"
            className="mt-8 inline-flex items-center gap-2 text-amber-400"
          >
            <ArrowLeft size={18} />
            Back to Stories
          </Link>
        </div>
      </main>
    );
  }

  const paragraphs = story.content
    .trim()
    .split("\n")
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}

      <section className="relative overflow-hidden py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/stories"
            className="mb-10 inline-flex items-center gap-2 text-zinc-400 transition hover:text-amber-400"
          >
            <ArrowLeft size={18} />
            Back to Stories
          </Link>

          <span className="inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm text-amber-300">
            {story.category}
          </span>

          <h1 className="mt-8 font-heading text-5xl font-bold leading-tight md:text-7xl">
            {story.title}
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-zinc-300">
            {story.excerpt}
          </p>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <User size={16} />
              {story.author}
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {story.publishedAt}
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={16} />
              {story.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Story Content */}

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <article className="prose prose-invert prose-lg max-w-none">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="mb-8 text-lg leading-relaxed text-zinc-300"
              >
                {paragraph}
              </p>
            ))}
          </article>

          {/* Tags */}

          <div className="mt-16 border-t border-white/10 pt-10">
            <div className="flex flex-wrap gap-3">
              {story.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm"
                >
                  <Tag size={14} />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share */}

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="flex items-center gap-3">
              <Share2 className="text-amber-400" />
              <h3 className="text-2xl font-bold">
                Share This Story
              </h3>
            </div>

            <p className="mt-4 text-zinc-400">
              If this story resonated with you, consider sharing it
              with someone who might benefit from its message.
            </p>
          </div>
        </div>
      </section>

      {/* Related Stories */}

      <section className="border-y border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-4xl font-bold">
            Related Stories
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Learning To Begin Again",
                icon: Sparkles,
              },
              {
                title: "The Quiet Power of Healing",
                icon: Heart,
              },
              {
                title: "Finding Purpose Through Change",
                icon: BookOpen,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8"
                >
                  <Icon className="h-10 w-10 text-amber-400" />

                  <h3 className="mt-6 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <Link
                    href="/stories"
                    className="mt-6 inline-flex items-center gap-2 text-amber-400"
                  >
                    Read Story
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-heading text-5xl font-bold">
            Share Your Story
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Every transformation contains lessons worth preserving.
            Contribute your journey to The Alchemy of Becoming.
          </p>

          <Link
            href="/submit-story"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
          >
            Submit Story
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}