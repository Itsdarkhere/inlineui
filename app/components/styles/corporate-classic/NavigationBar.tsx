/**
 * NavigationBar - Corporate Classic Style
 *
 * Professional horizontal navigation with clean borders and yellow-600 CTA.
 * White background, subtle shadow, gray-900 logo text.
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
 * Corporate Classic NavigationBar component.
 * Professional styling with yellow-600 CTA button.
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
      className={`flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white shadow-sm ${className}`}
    >
      {/* Logo Area */}
      <div className="flex items-center gap-10">
        <div className="text-xl font-semibold text-gray-900 tracking-tight">{logo}</div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors duration-150 ${
                  link.isActive
                    ? "text-gray-900 border-b-2 border-yellow-600 pb-0.5"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        {/* Search Input */}
        {showSearch && (
          <div className="hidden sm:block">
            <input
              type="text"
              placeholder={searchPlaceholder}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="px-3 py-1.5 text-sm border border-gray-300 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-colors"
            />
          </div>
        )}

        {/* Additional Right Content */}
        {rightContent}

        {/* CTA Button */}
        {ctaText && (
          <button
            onClick={onCtaClick}
            className="px-4 py-2 text-sm font-medium text-white bg-yellow-600 rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 transition-colors"
          >
            {ctaText}
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavigationBar;
