"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  X,
  Clock3,
  Sparkles,
  Heart,
  Compass,
  Mountain,
  BookOpen,
  ArrowRight,
  Filter,
} from "lucide-react";

export interface SearchSuggestion {
  id: string;
  title: string;
  category: string;
  href?: string;
}

interface SearchBarProps {
  placeholder?: string;
  className?: string;

  /**
   * Called whenever user types
   */
  onSearch?: (query: string) => void;

  /**
   * Called when search is submitted
   */
  onSubmit?: (query: string) => void;

  /**
   * Enable search button
   */
  showButton?: boolean;

  /**
   * Show category filters
   */
  showFilters?: boolean;

  /**
   * Initial value
   */
  initialValue?: string;

  /**
   * Suggestions
   */
  suggestions?: SearchSuggestion[];
}

const defaultSuggestions: SearchSuggestion[] = [
  {
    id: "1",
    title: "The Day Failure Became My Teacher",
    category: "Resilience",
    href: "/stories/the-day-failure-became-my-teacher",
  },
  {
    id: "2",
    title: "The Quiet Power of Healing",
    category: "Healing",
    href: "/stories/the-quiet-power-of-healing",
  },
  {
    id: "3",
    title: "Finding Direction Again",
    category: "Purpose",
    href: "/stories/finding-direction-again",
  },
  {
    id: "4",
    title: "Learning To Begin Again",
    category: "Transformation",
    href: "/stories/learning-to-begin-again",
  },
];

const categories = [
  "All",
  "Transformation",
  "Healing",
  "Resilience",
  "Purpose",
  "Self Discovery",
  "Wisdom",
];

const categoryIcons: Record<string, React.ElementType> = {
  Transformation: Sparkles,
  Healing: Heart,
  Resilience: Mountain,
  Purpose: Compass,
  Wisdom: BookOpen,
};

export default function SearchBar({
  placeholder = "Search stories, reflections, journeys...",
  className = "",
  onSearch,
  onSubmit,
  showButton = true,
  showFilters = true,
  initialValue = "",
  suggestions = defaultSuggestions,
}: SearchBarProps) {
  const [query, setQuery] = useState(initialValue);
  const [selectedCategory, setSelectedCategory] =
    useState("All");
  const [isFocused, setIsFocused] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent
    ) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(
          event.target as Node
        )
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const filteredSuggestions = useMemo(() => {
    if (!query.trim()) return suggestions;

    return suggestions.filter(
      (item) =>
        item.title
          .toLowerCase()
          .includes(query.toLowerCase()) ||
        item.category
          .toLowerCase()
          .includes(query.toLowerCase())
    );
  }, [query, suggestions]);

  const handleSearch = (
    value: string
  ) => {
    setQuery(value);
    onSearch?.(value);
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    onSubmit?.(query);
  };

  const clearSearch = () => {
    setQuery("");
    onSearch?.("");
  };

  return (
    <div
      ref={searchRef}
      className={`relative w-full ${className}`}
    >
      {/* Main Search Container */}

      <motion.div
        animate={{
          scale: isFocused ? 1.01 : 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className="
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
        "
      >
        <form onSubmit={handleSubmit}>
          {/* Search Row */}

          <div className="flex flex-col lg:flex-row">
            <div className="relative flex-1">
              <Search
                className="
                  absolute
                  left-5
                  top-1/2
                  -translate-y-1/2
                  text-zinc-500
                "
                size={20}
              />

              <input
                type="text"
                value={query}
                onChange={(e) =>
                  handleSearch(e.target.value)
                }
                onFocus={() =>
                  setIsFocused(true)
                }
                placeholder={placeholder}
                className="
                  h-16
                  w-full
                  bg-transparent
                  pl-14
                  pr-12
                  text-white
                  outline-none
                  placeholder:text-zinc-500
                "
              />

              {query && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-zinc-500
                    transition
                    hover:text-white
                  "
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {showButton && (
              <div className="border-t border-white/10 lg:border-l lg:border-t-0">
                <button
                  type="submit"
                  className="
                    flex
                    h-16
                    items-center
                    justify-center
                    gap-2
                    px-8
                    font-semibold
                    text-black
                    transition
                    bg-amber-500
                    hover:bg-amber-400
                  "
                >
                  Search
                  <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Filters */}

          {showFilters && (
            <div
              className="
                border-t
                border-white/10
                px-5
                py-4
              "
            >
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 text-zinc-500">
                  <Filter size={14} />
                  <span className="text-sm">
                    Filter:
                  </span>
                </div>

                {categories.map((category) => {
                  const active =
                    selectedCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() =>
                        setSelectedCategory(
                          category
                        )
                      }
                      className={`
                        rounded-full
                        px-4
                        py-2
                        text-sm
                        transition-all
                        ${
                          active
                            ? "bg-amber-500 text-black"
                            : "border border-white/10 bg-white/5 text-zinc-300 hover:border-amber-500"
                        }
                      `}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </form>
      </motion.div>

      {/* Suggestions Dropdown */}

      <AnimatePresence>
        {isFocused &&
          filteredSuggestions.length > 0 && (
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 10,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                absolute
                left-0
                right-0
                top-full
                z-50
                mt-3
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-black/95
                backdrop-blur-xl
              "
            >
              <div className="p-4">
                <div className="mb-3 flex items-center gap-2 text-sm text-zinc-500">
                  <Clock3 size={14} />
                  Suggested Stories
                </div>

                <div className="space-y-2">
                  {filteredSuggestions.map(
                    (item) => {
                      const Icon =
                        categoryIcons[
                          item.category
                        ] || Sparkles;

                      const content = (
                        <>
                          <div
                            className="
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-xl
                              bg-amber-500/10
                            "
                          >
                            <Icon
                              size={18}
                              className="text-amber-400"
                            />
                          </div>

                          <div className="flex-1">
                            <h4 className="font-medium text-white">
                              {item.title}
                            </h4>

                            <p className="text-sm text-zinc-500">
                              {item.category}
                            </p>
                          </div>

                          <ArrowRight
                            size={16}
                            className="text-zinc-500"
                          />
                        </>
                      );

                      return item.href ? (
                        <Link
                          key={item.id}
                          href={item.href}
                          className="
                            flex
                            items-center
                            gap-4
                            rounded-2xl
                            p-4
                            transition
                            hover:bg-white/5
                          "
                        >
                          {content}
                        </Link>
                      ) : (
                        <button
                          key={item.id}
                          className="
                            flex
                            w-full
                            items-center
                            gap-4
                            rounded-2xl
                            p-4
                            text-left
                            transition
                            hover:bg-white/5
                          "
                        >
                          {content}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>
            </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
}