/**
 * Pagination Component - Electric Chaos Style
 *
 * NAVIGATION THAT SCREAMS. Neon buttons with glowing borders on pure black.
 * Electric purple, acid green, hot pink, cyan, orange. Heavy border radius,
 * dramatic hover states with scale transforms, 400ms bouncy animations.
 * Current page GLOWS. Disabled states still look cool. Nothing subtle.
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

  const colors = {
    purple: "#8B5CF6",
    pink: "#EC4899",
    green: "#84CC16",
    cyan: "#06B6D4",
    orange: "#F97316",
  };

  const defaultPrevLabel = (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={3}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );

  const defaultNextLabel = (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={3}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );

  const doubleChevronLeft = (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={3}
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
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={3}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 5l7 7-7 7M6 5l7 7-7 7"
      />
    </svg>
  );

  const buttonBaseClass =
    "inline-flex items-center justify-center min-w-[3rem] h-12 px-3 text-base font-bold rounded-xl transition-all duration-400 focus:outline-none";

  const getButtonStyle = (isActive: boolean, isDisabled: boolean) => {
    if (isDisabled) {
      return {
        background: "rgba(50, 50, 50, 0.5)",
        border: "2px solid rgba(100, 100, 100, 0.3)",
        color: "rgba(100, 100, 100, 0.5)",
        cursor: "not-allowed",
      };
    }
    if (isActive) {
      return {
        background: `linear-gradient(135deg, ${colors.purple}, ${colors.pink})`,
        border: `2px solid ${colors.pink}`,
        color: "white",
        boxShadow: `0 0 30px ${colors.purple}80, 0 0 60px ${colors.pink}40`,
        transform: "scale(1.1)",
      };
    }
    return {
      background: "rgba(0, 0, 0, 0.5)",
      border: `2px solid ${colors.purple}`,
      color: colors.purple,
      boxShadow: `0 0 15px ${colors.purple}30`,
    };
  };

  return (
    <nav
      className={`flex items-center gap-2 font-[Space_Grotesk,system-ui,sans-serif] p-4 rounded-2xl ${className}`}
      style={{
        background: "linear-gradient(180deg, #0a0a0a 0%, #1a0a2e 100%)",
        boxShadow: "0 0 40px rgba(139, 92, 246, 0.2)",
      }}
      aria-label="Pagination"
    >
      {/* First Page Button */}
      {showFirstLast && (
        <button
          type="button"
          onClick={() => handlePageClick(1)}
          disabled={isFirstPage}
          className={buttonBaseClass}
          style={{
            ...getButtonStyle(false, isFirstPage),
            transition: "all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
          onMouseEnter={(e) => {
            if (!isFirstPage) {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.borderColor = colors.cyan;
              e.currentTarget.style.color = colors.cyan;
              e.currentTarget.style.boxShadow = `0 0 25px ${colors.cyan}50`;
            }
          }}
          onMouseLeave={(e) => {
            if (!isFirstPage) {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.borderColor = colors.purple;
              e.currentTarget.style.color = colors.purple;
              e.currentTarget.style.boxShadow = `0 0 15px ${colors.purple}30`;
            }
          }}
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
        className={buttonBaseClass}
        style={{
          ...getButtonStyle(false, isFirstPage),
          transition: "all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
        onMouseEnter={(e) => {
          if (!isFirstPage) {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.borderColor = colors.green;
            e.currentTarget.style.color = colors.green;
            e.currentTarget.style.boxShadow = `0 0 25px ${colors.green}50`;
          }
        }}
        onMouseLeave={(e) => {
          if (!isFirstPage) {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.borderColor = colors.purple;
            e.currentTarget.style.color = colors.purple;
            e.currentTarget.style.boxShadow = `0 0 15px ${colors.purple}30`;
          }
        }}
        aria-label="Previous page"
      >
        {prevLabel ?? defaultPrevLabel}
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2 mx-2">
        {pages.map((page, index) =>
          page === "ellipsis" ? (
            <span
              key={`ellipsis-${index}`}
              className="inline-flex items-center justify-center min-w-[3rem] h-12 text-lg font-bold"
              style={{
                color: colors.orange,
                textShadow: `0 0 10px ${colors.orange}50`,
              }}
              aria-hidden="true"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => handlePageClick(page)}
              className={`${buttonBaseClass} font-[Unbounded,system-ui,sans-serif]`}
              style={{
                ...getButtonStyle(page === currentPage, false),
                transition: "all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              onMouseEnter={(e) => {
                if (page !== currentPage) {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.borderColor = colors.pink;
                  e.currentTarget.style.color = colors.pink;
                  e.currentTarget.style.boxShadow = `0 0 25px ${colors.pink}50`;
                }
              }}
              onMouseLeave={(e) => {
                if (page !== currentPage) {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.borderColor = colors.purple;
                  e.currentTarget.style.color = colors.purple;
                  e.currentTarget.style.boxShadow = `0 0 15px ${colors.purple}30`;
                }
              }}
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
        className={buttonBaseClass}
        style={{
          ...getButtonStyle(false, isLastPage),
          transition: "all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
        onMouseEnter={(e) => {
          if (!isLastPage) {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.borderColor = colors.green;
            e.currentTarget.style.color = colors.green;
            e.currentTarget.style.boxShadow = `0 0 25px ${colors.green}50`;
          }
        }}
        onMouseLeave={(e) => {
          if (!isLastPage) {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.borderColor = colors.purple;
            e.currentTarget.style.color = colors.purple;
            e.currentTarget.style.boxShadow = `0 0 15px ${colors.purple}30`;
          }
        }}
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
          className={buttonBaseClass}
          style={{
            ...getButtonStyle(false, isLastPage),
            transition: "all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
          onMouseEnter={(e) => {
            if (!isLastPage) {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.borderColor = colors.cyan;
              e.currentTarget.style.color = colors.cyan;
              e.currentTarget.style.boxShadow = `0 0 25px ${colors.cyan}50`;
            }
          }}
          onMouseLeave={(e) => {
            if (!isLastPage) {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.borderColor = colors.purple;
              e.currentTarget.style.color = colors.purple;
              e.currentTarget.style.boxShadow = `0 0 15px ${colors.purple}30`;
            }
          }}
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
    <div
      className="space-y-8 font-[Space_Grotesk,system-ui,sans-serif] p-8 rounded-3xl"
      style={{
        background: "linear-gradient(180deg, #0a0a0a 0%, #1a0a2e 100%)",
      }}
    >
      <div>
        <p
          className="text-xs font-bold uppercase tracking-[0.3em] mb-4"
          style={{ color: "#8B5CF6" }}
        >
          STANDARD PAGINATION
        </p>
        <Pagination currentPage={5} totalPages={10} />
      </div>
      <div>
        <p
          className="text-xs font-bold uppercase tracking-[0.3em] mb-4"
          style={{ color: "#EC4899" }}
        >
          FIRST PAGE (PREV DISABLED)
        </p>
        <Pagination currentPage={1} totalPages={10} />
      </div>
      <div>
        <p
          className="text-xs font-bold uppercase tracking-[0.3em] mb-4"
          style={{ color: "#84CC16" }}
        >
          LAST PAGE (NEXT DISABLED)
        </p>
        <Pagination currentPage={10} totalPages={10} />
      </div>
      <div>
        <p
          className="text-xs font-bold uppercase tracking-[0.3em] mb-4"
          style={{ color: "#06B6D4" }}
        >
          WITH FIRST/LAST BUTTONS
        </p>
        <Pagination currentPage={5} totalPages={10} showFirstLast />
      </div>
    </div>
  );
}

export type { PaginationProps as Props };
