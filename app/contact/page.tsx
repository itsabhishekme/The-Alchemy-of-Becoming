import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  MessageSquare,
  Users,
  Globe,
  ArrowRight,
  Heart,
  BookOpen,
  PenSquare,
  HelpCircle,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Connect with The Alchemy of Becoming. Share your story, collaborate, ask questions, or join our growing community dedicated to transformation and personal growth.",
};

const faqs = [
  {
    question: "How can I submit my story?",
    answer:
      "You can submit your personal story through our story submission page. We welcome authentic experiences related to transformation, healing, resilience, self-discovery, and purpose.",
  },
  {
    question: "Do you accept guest contributors?",
    answer:
      "Yes. We actively collaborate with writers, storytellers, coaches, educators, and individuals who have meaningful experiences to share.",
  },
  {
    question: "Can I remain anonymous?",
    answer:
      "Absolutely. Contributors may choose to publish stories anonymously or under a pseudonym if preferred.",
  },
  {
    question: "How long does review take?",
    answer:
      "Most submissions are reviewed within a few business days, depending on volume and editorial requirements.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}

      <section className="relative overflow-hidden py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm text-amber-300">
              Contact The Alchemy of Becoming
            </span>

            <h1 className="mt-8 font-heading text-5xl font-bold leading-tight md:text-7xl">
              Let's Start a
              <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Meaningful Conversation
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl">
              Whether you want to share your journey, collaborate on a project,
              ask a question, or simply connect, we'd love to hear from you.
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-zinc-400">
              Every message represents a unique story, perspective, or
              opportunity to contribute to our growing archive of human
              transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <Mail className="h-12 w-12 text-amber-400" />
              <h3 className="mt-6 text-xl font-bold">Email Us</h3>
              <p className="mt-4 text-zinc-400">
                Reach out for general inquiries, partnerships, or feedback.
              </p>
              <p className="mt-4 text-amber-400">
                hello@alchemyofbecoming.com
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <PenSquare className="h-12 w-12 text-amber-400" />
              <h3 className="mt-6 text-xl font-bold">Submit Stories</h3>
              <p className="mt-4 text-zinc-400">
                Share your journey of growth, healing, resilience, or purpose.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <Users className="h-12 w-12 text-amber-400" />
              <h3 className="mt-6 text-xl font-bold">Collaborate</h3>
              <p className="mt-4 text-zinc-400">
                Partner with us on storytelling, education, and community
                projects.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <Globe className="h-12 w-12 text-amber-400" />
              <h3 className="mt-6 text-xl font-bold">Community</h3>
              <p className="mt-4 text-zinc-400">
                Join a growing archive dedicated to personal transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Side */}

            <div>
              <h2 className="font-heading text-4xl font-bold">
                Send a Message
              </h2>

              <p className="mt-6 leading-relaxed text-zinc-400">
                We'd love to hear your thoughts, ideas, questions, or story
                proposals. Fill out the form and we'll get back to you as soon
                as possible.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <Heart className="mt-1 h-6 w-6 text-amber-400" />
                  <div>
                    <h3 className="font-semibold">Authentic Stories</h3>
                    <p className="text-zinc-400">
                      Every story matters and has the power to inspire others.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <BookOpen className="mt-1 h-6 w-6 text-amber-400" />
                  <div>
                    <h3 className="font-semibold">Shared Wisdom</h3>
                    <p className="text-zinc-400">
                      Lessons learned through experience can transform lives.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Sparkles className="mt-1 h-6 w-6 text-amber-400" />
                  <div>
                    <h3 className="font-semibold">Meaningful Growth</h3>
                    <p className="text-zinc-400">
                      We celebrate the remarkable journey of becoming.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Form */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <form className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Write your message..."
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
                >
                  Send Message
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}

      <section className="bg-white/[0.02] py-28">
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

      {/* CTA */}

      <section className="border-t border-white/10 py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <MessageSquare className="mx-auto h-14 w-14 text-amber-400" />

          <h2 className="mt-8 font-heading text-5xl font-bold">
            Every Story Begins With a Conversation
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            Connect with us and become part of a growing collection of stories,
            wisdom, healing, resilience, and transformation.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/submit-story"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
            >
              Share Your Story
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