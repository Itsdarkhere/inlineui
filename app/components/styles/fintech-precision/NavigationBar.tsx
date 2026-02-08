/**
 * NavigationBar - Fintech Precision Style
 *
 * Bloomberg/trading platform inspired navigation.
 * Dark background, yellow accents, compact layout, keyboard-first feel.
 */

import type { ReactNode } from "react";

/**
 * Individual navigation link item
 */
export interface NavLink {
  /** Display text for the link */
  label: string;
  /** URL or route path */
  href: string;
  /** Whether this link is currently active */
  isActive?: boolean;
}

/**
 * Props for the NavigationBar component
 */
export interface NavigationBarProps {
  /** Logo content - can be text, image, or custom element */
  logo: ReactNode;
  /** Array of navigation links to display */
  links: NavLink[];
  /** Whether to show the search input */
  showSearch?: boolean;
  /** Placeholder text for search input */
  searchPlaceholder?: string;
  /** Callback when search value changes */
  onSearchChange?: (value: string) => void;
  /** Text for the primary CTA button */
  ctaText?: string;
  /** Callback when CTA button is clicked */
  onCtaClick?: () => void;
  /** Additional content for the right side (e.g., avatar, dropdown) */
  rightContent?: ReactNode;
  /** Additional CSS classes for the container */
  className?: string;
}

/**
 * Fintech Precision NavigationBar component.
 * Terminal-inspired, dark theme with yellow accent highlights.
 */
export function NavigationBar({
  logo,
  links,
  showSearch = false,
  searchPlaceholder = "Search...",
  onSearchChange,
  ctaText,
  onCtaClick,
  rightContent,
  className = "",
}: NavigationBarProps) {
  return (
    <nav
      className={`flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-neutral-950 ${className}`}
    >
      {/* Logo Area */}
      <div className="flex items-center gap-8">
        <div className="text-lg font-semibold text-neutral-100 tracking-tight">{logo}</div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={[
                  "px-3 py-1.5 text-sm font-medium rounded transition-all duration-100",
                  link.isActive
                    ? "text-yellow-500 bg-yellow-600/10"
                    : "text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800",
                ].join(" ")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-3">
        {/* Search Input */}
        {showSearch && (
          <div className="hidden sm:block">
            <div className="relative">
              <svg
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder={searchPlaceholder}
                onChange={(e) => onSearchChange?.(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-sm bg-neutral-900 border border-neutral-700 rounded text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-100"
              />
            </div>
          </div>
        )}

        {/* Additional Right Content */}
        {rightContent}

        {/* CTA Button */}
        {ctaText && (
          <button
            onClick={onCtaClick}
            className="px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-neutral-950 bg-yellow-600 rounded hover:bg-yellow-500 transition-colors duration-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
          >
            {ctaText}
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavigationBar;
