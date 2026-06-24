import Link from "next/link";
import {
  BookOpen,
  Compass,
  Heart,
  Mail,
  PenSquare,
  Sparkles,
  ArrowRight,
  Quote,
} from "lucide-react";

const navigation = [
  {
    title: "Explore",
    links: [
      {
        name: "Stories",
        href: "/stories",
      },
      {
        name: "Journeys",
        href: "/journeys",
      },
      {
        name: "Reflections",
        href: "/reflections",
      },
      {
        name: "Categories",
        href: "/categories",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Submit Story",
        href: "/submit-story",
      },
      {
        name: "About",
        href: "/about",
      },
      {
        name: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    title: "Themes",
    links: [
      {
        name: "Transformation",
        href: "/categories",
      },
      {
        name: "Healing",
        href: "/categories",
      },
      {
        name: "Resilience",
        href: "/categories",
      },
      {
        name: "Purpose",
        href: "/categories",
      },
    ],
  },
];

const principles = [
  {
    icon: Sparkles,
    title: "Transformation",
  },
  {
    icon: Heart,
    title: "Healing",
  },
  {
    icon: Compass,
    title: "Purpose",
  },
  {
    icon: BookOpen,
    title: "Wisdom",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      {/* Background Effects */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-amber-500/5 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-yellow-500/5 blur-[120px]" />
      </div>

      {/* Newsletter Section */}

      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur md:p-14">
            <div className="mx-auto max-w-4xl text-center">
              <Mail className="mx-auto h-14 w-14 text-amber-400" />

              <h2 className="mt-8 font-heading text-4xl font-bold text-white md:text-5xl">
                Stay Connected to the Journey
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
                Receive inspiring stories, thoughtful reflections, and
                meaningful insights about transformation, healing, resilience,
                and becoming.
              </p>

              <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="
                    flex-1
                    rounded-xl
                    border
                    border-white/10
                    bg-black/40
                    px-5
                    py-4
                    text-white
                    outline-none
                    transition
                    placeholder:text-zinc-500
                    focus:border-amber-500
                  "
                />

                <button
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-amber-500
                    px-8
                    py-4
                    font-semibold
                    text-black
                    transition
                    hover:bg-amber-400
                  "
                >
                  Subscribe
                  <ArrowRight size={18} />
                </button>
              </div>

              <p className="mt-4 text-sm text-zinc-500">
                No spam. Only meaningful stories and reflections.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Brand */}

          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-amber-400
                  to-yellow-500
                  shadow-lg
                  shadow-amber-500/20
                "
              >
                <Sparkles className="h-8 w-8 text-black" />
              </div>

              <div>
                <h3 className="font-heading text-3xl font-bold text-white">
                  The Alchemy
                </h3>

                <p className="text-zinc-400">
                  of Becoming
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-xl leading-relaxed text-zinc-400">
              A living archive dedicated to documenting personal growth,
              resilience, healing, transformation, wisdom, purpose, and the
              courageous evolution of the human spirit.
            </p>

            {/* Principles */}

            <div className="mt-10 flex flex-wrap gap-3">
              {principles.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-4
                      py-2
                    "
                  >
                    <Icon className="h-4 w-4 text-amber-400" />

                    <span className="text-sm text-zinc-300">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation */}

          <div className="lg:col-span-7">
            <div className="grid gap-10 md:grid-cols-3">
              {navigation.map((section) => (
                <div key={section.title}>
                  <h4 className="text-lg font-semibold text-white">
                    {section.title}
                  </h4>

                  <ul className="mt-6 space-y-4">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="
                            text-zinc-400
                            transition
                            hover:text-amber-400
                          "
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote Section */}

        <div className="mt-20 border-t border-white/10 pt-16">
          <div className="mx-auto max-w-4xl text-center">
            <Quote className="mx-auto h-10 w-10 text-amber-400" />

            <blockquote className="mt-8 font-heading text-2xl leading-relaxed text-white md:text-4xl">
              “Every experience carries within it the possibility of
              transformation. Every story holds the power to illuminate a path.”
            </blockquote>

            <p className="mt-8 text-zinc-500">
              — The Alchemy of Becoming
            </p>
          </div>
        </div>

        {/* Bottom Footer */}

        <div className="mt-20 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} The Alchemy of Becoming.
              All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-zinc-500 transition hover:text-amber-400"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-zinc-500 transition hover:text-amber-400"
              >
                Terms of Service
              </Link>

              <Link
                href="/contact"
                className="text-zinc-500 transition hover:text-amber-400"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Final CTA */}

        <div className="mt-16 text-center">
          <Link
            href="/submit-story"
            className="
              inline-flex
              items-center
              gap-3
              rounded-xl
              bg-gradient-to-r
              from-amber-400
              to-yellow-500
              px-8
              py-4
              font-semibold
              text-black
              shadow-lg
              shadow-amber-500/20
              transition
              hover:scale-105
            "
          >
            <PenSquare size={18} />
            Share Your Story
          </Link>
        </div>
      </div>
    </footer>
  );
}