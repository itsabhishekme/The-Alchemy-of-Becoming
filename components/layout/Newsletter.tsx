"use client";

import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
  BookOpen,
  Sparkles,
  Heart,
  Compass,
  Quote,
  Stars,
} from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "New Stories",
    description:
      "Receive powerful stories of resilience, healing, and transformation.",
  },
  {
    icon: Sparkles,
    title: "Reflections",
    description:
      "Explore meaningful insights and lessons from lived experiences.",
  },
  {
    icon: Heart,
    title: "Inspiration",
    description:
      "Discover perspectives that encourage growth and self-discovery.",
  },
  {
    icon: Compass,
    title: "Guidance",
    description:
      "Find wisdom for navigating your own journey of becoming.",
  },
];

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Effects */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[180px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08),transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Main Newsletter Card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
          "
        >
          <div className="grid gap-0 lg:grid-cols-2">
            {/* Left Content */}

            <div className="p-10 md:p-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm text-amber-300">
                <Stars size={14} />
                Join the Archive
              </div>

              <h2 className="mt-8 font-heading text-4xl font-bold md:text-6xl">
                Stay Connected to the
                <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Journey of Becoming
                </span>
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-zinc-400">
                Receive carefully curated stories, reflections, wisdom,
                and transformative insights directly in your inbox.
              </p>

              <div className="mt-10">
                <form className="space-y-4">
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                      size={18}
                    />

                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="
                        w-full
                        rounded-xl
                        border
                        border-white/10
                        bg-black/40
                        py-4
                        pl-12
                        pr-4
                        text-white
                        outline-none
                        transition
                        placeholder:text-zinc-500
                        focus:border-amber-500
                      "
                    />
                  </div>

                  <button
                    type="submit"
                    className="
                      inline-flex
                      w-full
                      items-center
                      justify-center
                      gap-3
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
                </form>

                <p className="mt-4 text-sm text-zinc-500">
                  No spam. Only meaningful stories, wisdom, and inspiration.
                </p>
              </div>
            </div>

            {/* Right Side */}

            <div className="border-t border-white/10 p-10 lg:border-l lg:border-t-0 md:p-16">
              <div className="grid gap-6">
                {benefits.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        p-6
                      "
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-xl
                            bg-gradient-to-br
                            from-amber-400
                            to-yellow-500
                          "
                        >
                          <Icon className="h-6 w-6 text-black" />
                        </div>

                        <div>
                          <h3 className="font-semibold text-white">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Quote */}

              <div
                className="
                  mt-8
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                "
              >
                <Quote className="h-8 w-8 text-amber-400" />

                <blockquote className="mt-4 text-lg leading-relaxed text-zinc-300">
                  “Every story carries a lesson. Every lesson carries the
                  possibility of transformation.”
                </blockquote>

                <p className="mt-4 text-sm text-zinc-500">
                  — The Alchemy of Becoming
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 grid gap-8 md:grid-cols-4"
        >
          <div className="text-center">
            <h3 className="text-4xl font-bold text-amber-400">
              500+
            </h3>

            <p className="mt-3 text-zinc-500">
              Stories Preserved
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-amber-400">
              50+
            </h3>

            <p className="mt-3 text-zinc-500">
              Growth Themes
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-amber-400">
              100+
            </h3>

            <p className="mt-3 text-zinc-500">
              Contributors
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-amber-400">
              ∞
            </h3>

            <p className="mt-3 text-zinc-500">
              Possibilities
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}