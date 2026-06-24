"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;

  /**
   * Callback mode
   * Use for client-side filtering, tables, etc.
   */
  onPageChange?: (page: number) => void;

  /**
   * Link mode
   * Example:
   * basePath="/stories"
   * => /stories?page=2
   */
  basePath?: string;

  showSummary?: boolean;
  siblingCount?: number;
  className?: string;

  totalItems?: number;
  itemsPerPage?: number;
}

const DOTS = "...";

function range(start: number, end: number) {
  const length = end - start + 1;

  return Array.from({ length }, (_, idx) => idx + start);
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  basePath,
  showSummary = true,
  siblingCount = 1,
  className = "",
  totalItems,
  itemsPerPage,
}: PaginationProps) {
  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(
      currentPage - siblingCount,
      1
    );

    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPages
    );

    const showLeftDots = leftSiblingIndex > 2;

    const showRightDots =
      rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!showLeftDots && showRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;

      const leftRange = range(
        1,
        leftItemCount
      );

      return [
        ...leftRange,
        DOTS,
        totalPages,
      ];
    }

    if (showLeftDots && !showRightDots) {
      const rightItemCount =
        3 + 2 * siblingCount;

      const rightRange = range(
        totalPages - rightItemCount + 1,
        totalPages
      );

      return [
        firstPageIndex,
        DOTS,
        ...rightRange,
      ];
    }

    if (showLeftDots && showRightDots) {
      const middleRange = range(
        leftSiblingIndex,
        rightSiblingIndex
      );

      return [
        firstPageIndex,
        DOTS,
        ...middleRange,
        DOTS,
        lastPageIndex,
      ];
    }

    return range(1, totalPages);
  }, [
    currentPage,
    siblingCount,
    totalPages,
  ]);

  const createHref = (page: number) => {
    if (!basePath) return "#";

    const separator = basePath.includes("?")
      ? "&"
      : "?";

    return `${basePath}${separator}page=${page}`;
  };

  const goToPage = (page: number) => {
    if (
      page < 1 ||
      page > totalPages ||
      page === currentPage
    ) {
      return;
    }

    onPageChange?.(page);
  };

  const startItem =
    totalItems && itemsPerPage
      ? (currentPage - 1) * itemsPerPage + 1
      : null;

  const endItem =
    totalItems && itemsPerPage
      ? Math.min(
          currentPage * itemsPerPage,
          totalItems
        )
      : null;

  const PageButton = ({
    page,
    active,
  }: {
    page: number;
    active?: boolean;
  }) => {
    const classes = `
      flex
      h-11
      min-w-[44px]
      items-center
      justify-center
      rounded-xl
      border
      px-4
      transition-all
      duration-300
      ${
        active
          ? "border-amber-500 bg-amber-500 text-black"
          : "border-white/10 bg-white/5 text-zinc-300 hover:border-amber-500 hover:text-amber-400"
      }
    `;

    if (basePath) {
      return (
        <Link
          href={createHref(page)}
          className={classes}
        >
          {page}
        </Link>
      );
    }

    return (
      <button
        onClick={() => goToPage(page)}
        className={classes}
      >
        {page}
      </button>
    );
  };

  const NavigationButton = ({
    page,
    disabled,
    icon,
  }: {
    page: number;
    disabled: boolean;
    icon: React.ReactNode;
  }) => {
    const classes = `
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-xl
      border
      transition-all
      ${
        disabled
          ? "cursor-not-allowed border-white/5 text-zinc-700"
          : "border-white/10 bg-white/5 text-zinc-300 hover:border-amber-500 hover:text-amber-400"
      }
    `;

    if (disabled) {
      return (
        <button
          disabled
          className={classes}
        >
          {icon}
        </button>
      );
    }

    if (basePath) {
      return (
        <Link
          href={createHref(page)}
          className={classes}
        >
          {icon}
        </Link>
      );
    }

    return (
      <button
        onClick={() => goToPage(page)}
        className={classes}
      >
        {icon}
      </button>
    );
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Top Summary */}

      {showSummary &&
        totalItems &&
        startItem &&
        endItem && (
          <div className="mb-6 text-center text-sm text-zinc-500">
            Showing{" "}
            <span className="font-semibold text-amber-400">
              {startItem}
            </span>{" "}
            to{" "}
            <span className="font-semibold text-amber-400">
              {endItem}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-amber-400">
              {totalItems}
            </span>{" "}
            results
          </div>
        )}

      {/* Main Pagination */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          flex
          flex-col
          items-center
          justify-center
          gap-6
        "
      >
        {/* Navigation */}

        <div className="flex flex-wrap items-center justify-center gap-2">
          <NavigationButton
            page={currentPage - 1}
            disabled={currentPage === 1}
            icon={<ChevronLeft size={18} />}
          />

          {paginationRange.map(
            (page, index) => {
              if (page === DOTS) {
                return (
                  <div
                    key={`dots-${index}`}
                    className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    text-zinc-500
                  "
                  >
                    <MoreHorizontal size={18} />
                  </div>
                );
              }

              return (
                <PageButton
                  key={page}
                  page={Number(page)}
                  active={
                    Number(page) === currentPage
                  }
                />
              );
            }
          )}

          <NavigationButton
            page={currentPage + 1}
            disabled={
              currentPage === totalPages
            }
            icon={<ChevronRight size={18} />}
          />
        </div>

        {/* Previous / Next Cards */}

        <div className="grid w-full max-w-4xl gap-4 md:grid-cols-2">
          {/* Previous */}

          {currentPage > 1 ? (
            basePath ? (
              <Link
                href={createHref(
                  currentPage - 1
                )}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-5
                  transition-all
                  hover:border-amber-500/40
                "
              >
                <div className="flex items-center gap-3 text-zinc-500">
                  <ArrowLeft size={16} />
                  Previous Page
                </div>

                <p className="mt-2 text-lg font-semibold text-white">
                  Page {currentPage - 1}
                </p>
              </Link>
            ) : (
              <button
                onClick={() =>
                  goToPage(currentPage - 1)
                }
                className="
                  text-left
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-5
                  transition-all
                  hover:border-amber-500/40
                "
              >
                <div className="flex items-center gap-3 text-zinc-500">
                  <ArrowLeft size={16} />
                  Previous Page
                </div>

                <p className="mt-2 text-lg font-semibold text-white">
                  Page {currentPage - 1}
                </p>
              </button>
            )
          ) : (
            <div />
          )}

          {/* Next */}

          {currentPage < totalPages ? (
            basePath ? (
              <Link
                href={createHref(
                  currentPage + 1
                )}
                className="
                  text-right
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-5
                  transition-all
                  hover:border-amber-500/40
                "
              >
                <div className="flex items-center justify-end gap-3 text-zinc-500">
                  Next Page
                  <ArrowRight size={16} />
                </div>

                <p className="mt-2 text-lg font-semibold text-white">
                  Page {currentPage + 1}
                </p>
              </Link>
            ) : (
              <button
                onClick={() =>
                  goToPage(currentPage + 1)
                }
                className="
                  text-right
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-5
                  transition-all
                  hover:border-amber-500/40
                "
              >
                <div className="flex items-center justify-end gap-3 text-zinc-500">
                  Next Page
                  <ArrowRight size={16} />
                </div>

                <p className="mt-2 text-lg font-semibold text-white">
                  Page {currentPage + 1}
                </p>
              </button>
            )
          ) : (
            <div />
          )}
        </div>

        {/* Page Info */}

        <div className="text-center">
          <p className="text-sm text-zinc-500">
            Page{" "}
            <span className="font-semibold text-amber-400">
              {currentPage}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-amber-400">
              {totalPages}
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}