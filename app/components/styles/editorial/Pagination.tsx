/**
 * Pagination - Editorial Style
 *
 * Navigation with editorial restraint and sharp aesthetics.
 * Thin borders, sharp corners, yellow-600 for current page.
 * No rounded corners, subtle hover states.
 */

import type { ReactNode } from "react";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  siblingCount?: number;
  showFirstLast?: boolean;
  className?: string;
  prevLabel?: ReactNode;
  nextLabel?: ReactNode;
}

/**
 * Generates the range of page numbers to display.
 */
function getPageNumbers(
  currentPage: number,
  totalPages: number,
  siblingCount: number
): (number | "ellipsis")[] {
  const totalNumbers = siblingCount * 2 + 3;
  const totalBlocks = totalNumbers + 2;

  if (totalPages <= totalBlocks) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const showLeftEllipsis = leftSiblingIndex > 2;
  const showRightEllipsis = rightSiblingIndex < totalPages - 1;

  const pages: (number | "ellipsis")[] = [];

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftRange = Array.from(
      { length: 3 + 2 * siblingCount },
      (_, i) => i + 1
    );
    pages.push(...leftRange, "ellipsis", totalPages);
  } else if (showLeftEllipsis && !showRightEllipsis) {
    const rightStart = totalPages - (2 + 2 * siblingCount);
    const rightRange = Array.from(
      { length: 3 + 2 * siblingCount },
      (_, i) => rightStart + i
    );
    pages.push(1, "ellipsis", ...rightRange);
  } else {
    const middleRange = Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, i) => leftSiblingIndex + i
    );
    pages.push(1, "ellipsis", ...middleRange, "ellipsis", totalPages);
  }

  return pages;
}

/**
 * Pagination component with editorial styling.
 * Sharp corners, thin borders, yellow accent for active.
 */
export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showFirstLast = false,
  className = "",
  prevLabel,
  nextLabel,
}: PaginationProps) {
  const pages = getPageNumbers(currentPage, totalPages, siblingCount);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageClick = (page: number) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange?.(page);
    }
  };

  const buttonBaseClass = [
    "inline-flex items-center justify-center",
    "min-w-[2.5rem] h-10",
    "px-3",
    "text-sm font-medium",
    "border border-zinc-300",
    "rounded-none",
    "font-['Inter',system-ui,sans-serif]",
    "transition-colors duration-100",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-1",
  ].join(" ");

  const defaultPrevLabel = (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );

  const defaultNextLabel = (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );

  return (
    <nav
      className={`flex items-center gap-1 font-['Inter',system-ui,sans-serif] ${className}`}
      aria-label="Pagination"
    >
      {/* First Page Button */}
      {showFirstLast && (
        <button
          type="button"
          onClick={() => handlePageClick(1)}
          disabled={isFirstPage}
          className={`
            ${buttonBaseClass}
            ${
              isFirstPage
                ? "bg-zinc-100 text-zinc-300 border-zinc-200 cursor-not-allowed"
                : "bg-white text-zinc-700 hover:bg-zinc-50 hover:border-zinc-400"
            }
          `}
          aria-label="First page"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M11 19l-7-7 7-7M18 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Previous Button */}
      <button
        type="button"
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={isFirstPage}
        className={`
          ${buttonBaseClass}
          ${
            isFirstPage
              ? "bg-zinc-100 text-zinc-300 border-zinc-200 cursor-not-allowed"
              : "bg-white text-zinc-700 hover:bg-zinc-50 hover:border-zinc-400"
          }
        `}
        aria-label="Previous page"
      >
        {prevLabel ?? defaultPrevLabel}
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {pages.map((page, index) =>
          page === "ellipsis" ? (
            <span
              key={`ellipsis-${index}`}
              className="inline-flex items-center justify-center min-w-[2.5rem] h-10 px-2 text-sm text-zinc-400"
              aria-hidden="true"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => handlePageClick(page)}
              className={`
                ${buttonBaseClass}
                ${
                  page === currentPage
                    ? "bg-zinc-900 text-white border-zinc-900"
                    : "bg-white text-zinc-700 hover:bg-zinc-50 hover:border-zinc-400"
                }
              `}
              aria-current={page === currentPage ? "page" : undefined}
              aria-label={`Page ${page}`}
            >
              {page}
            </button>
          )
        )}
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={isLastPage}
        className={`
          ${buttonBaseClass}
          ${
            isLastPage
              ? "bg-zinc-100 text-zinc-300 border-zinc-200 cursor-not-allowed"
              : "bg-white text-zinc-700 hover:bg-zinc-50 hover:border-zinc-400"
          }
        `}
        aria-label="Next page"
      >
        {nextLabel ?? defaultNextLabel}
      </button>

      {/* Last Page Button */}
      {showFirstLast && (
        <button
          type="button"
          onClick={() => handlePageClick(totalPages)}
          disabled={isLastPage}
          className={`
            ${buttonBaseClass}
            ${
              isLastPage
                ? "bg-zinc-100 text-zinc-300 border-zinc-200 cursor-not-allowed"
                : "bg-white text-zinc-700 hover:bg-zinc-50 hover:border-zinc-400"
            }
          `}
          aria-label="Last page"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M13 5l7 7-7 7M6 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </nav>
  );
}

/**
 * Example usage demonstrating various pagination states.
 */
export function PaginationExample() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
          Standard pagination
        </p>
        <Pagination currentPage={5} totalPages={10} />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
          First page (prev disabled)
        </p>
        <Pagination currentPage={1} totalPages={10} />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
          With first/last buttons
        </p>
        <Pagination currentPage={5} totalPages={10} showFirstLast />
      </div>
    </div>
  );
}

export type { PaginationProps as Props };
