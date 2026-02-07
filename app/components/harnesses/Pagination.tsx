/**
 * Pagination Harness Component
 *
 * A navigation component for paginated content, showing current page,
 * previous/next controls, and numbered page buttons. This demonstrates
 * how a style handles navigation patterns and state indication.
 *
 * Style .md files should customize:
 * - Current page emphasis (background, border, color)
 * - Disabled state styling for prev/next
 * - Button hover and focus states
 * - Spacing between page numbers
 * - Border and radius treatment
 * - Icon styling for arrows
 * - Overall sizing and padding
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
  const totalNumbers = siblingCount * 2 + 3; // siblings + current + first + last
  const totalBlocks = totalNumbers + 2; // add 2 for potential ellipses

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
    "inline-flex items-center justify-center min-w-[2.5rem] h-10 px-3 text-sm font-medium border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1";

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
        strokeWidth={2}
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
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );

  return (
    <nav
      className={`flex items-center gap-1 ${className}`}
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
                ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
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
              strokeWidth={2}
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
          ${buttonBaseClass} rounded
          ${
            isFirstPage
              ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
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
              className="inline-flex items-center justify-center min-w-[2.5rem] h-10 px-2 text-sm text-gray-500"
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
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
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
              ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
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
                ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
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
              strokeWidth={2}
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
    <div className="space-y-4">
      <div>
        <p className="text-sm text-gray-500 mb-2">Standard pagination:</p>
        <Pagination currentPage={5} totalPages={10} />
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-2">First page (prev disabled):</p>
        <Pagination currentPage={1} totalPages={10} />
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-2">Last page (next disabled):</p>
        <Pagination currentPage={10} totalPages={10} />
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-2">With first/last buttons:</p>
        <Pagination currentPage={5} totalPages={10} showFirstLast />
      </div>
    </div>
  );
}

export type { PaginationProps as Props };
