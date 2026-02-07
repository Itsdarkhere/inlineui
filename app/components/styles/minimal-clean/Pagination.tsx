/**
 * Pagination Component - Minimal Clean Style
 *
 * Swiss-inspired pagination with restrained styling. Black and white palette,
 * subtle borders, no colored accents. Borders over shadows. Fast 100ms
 * transitions. Current page indicated by solid fill, not color.
 */

import type { ReactNode } from "react";

/**
 * Props for the Pagination component.
 */
export interface PaginationProps {
  /** Current active page (1-indexed) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Handler called when page changes */
  onPageChange?: (page: number) => void;
  /** Number of page buttons to show around current page */
  siblingCount?: number;
  /** Show first/last page buttons */
  showFirstLast?: boolean;
  /** Optional class name for the container */
  className?: string;
  /** Custom previous button content */
  prevLabel?: ReactNode;
  /** Custom next button content */
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
 * Pagination component for navigating between pages.
 * Shows numbered buttons with optional ellipses for long page lists.
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

  const buttonBaseClass =
    "inline-flex items-center justify-center min-w-[2.25rem] h-9 px-2.5 text-sm font-medium border transition-all duration-100 focus:outline-none focus:ring-1 focus:ring-[#111] focus:ring-offset-1";

  const defaultPrevLabel = (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
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
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5l7 7-7 7"
      />
    </svg>
  );

  const doubleChevronLeft = (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 19l-7-7 7-7M18 19l-7-7 7-7"
      />
    </svg>
  );

  const doubleChevronRight = (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 5l7 7-7 7M6 5l7 7-7 7"
      />
    </svg>
  );

  return (
    <nav
      className={`flex items-center gap-0.5 font-[Inter,system-ui,sans-serif] ${className}`}
      aria-label="Pagination"
    >
      {/* First Page Button */}
      {showFirstLast && (
        <button
          type="button"
          onClick={() => handlePageClick(1)}
          disabled={isFirstPage}
          className={`
            ${buttonBaseClass} rounded
            ${
              isFirstPage
                ? "bg-white text-gray-300 border-gray-100 cursor-not-allowed"
                : "bg-white text-[#111] border-gray-200 hover:border-[#111]"
            }
          `}
          aria-label="First page"
        >
          {doubleChevronLeft}
        </button>
      )}

      {/* Previous Button */}
      <button
        type="button"
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={isFirstPage}
        className={`
          ${buttonBaseClass} rounded
          ${
            isFirstPage
              ? "bg-white text-gray-300 border-gray-100 cursor-not-allowed"
              : "bg-white text-[#111] border-gray-200 hover:border-[#111]"
          }
        `}
        aria-label="Previous page"
      >
        {prevLabel ?? defaultPrevLabel}
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-0.5 mx-1">
        {pages.map((page, index) =>
          page === "ellipsis" ? (
            <span
              key={`ellipsis-${index}`}
              className="inline-flex items-center justify-center min-w-[2.25rem] h-9 px-1 text-sm text-gray-400"
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
                ${buttonBaseClass} rounded
                ${
                  page === currentPage
                    ? "bg-[#111] text-white border-[#111]"
                    : "bg-white text-[#111] border-gray-200 hover:border-[#111]"
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
          ${buttonBaseClass} rounded
          ${
            isLastPage
              ? "bg-white text-gray-300 border-gray-100 cursor-not-allowed"
              : "bg-white text-[#111] border-gray-200 hover:border-[#111]"
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
            ${buttonBaseClass} rounded
            ${
              isLastPage
                ? "bg-white text-gray-300 border-gray-100 cursor-not-allowed"
                : "bg-white text-[#111] border-gray-200 hover:border-[#111]"
            }
          `}
          aria-label="Last page"
        >
          {doubleChevronRight}
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
    <div className="space-y-6 font-[Inter,system-ui,sans-serif]">
      <div>
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Standard pagination:</p>
        <Pagination currentPage={5} totalPages={10} />
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">First page (prev disabled):</p>
        <Pagination currentPage={1} totalPages={10} />
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Last page (next disabled):</p>
        <Pagination currentPage={10} totalPages={10} />
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">With first/last buttons:</p>
        <Pagination currentPage={5} totalPages={10} showFirstLast />
      </div>
    </div>
  );
}

export type { PaginationProps as Props };
