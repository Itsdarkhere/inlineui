/**
 * NavigationBar - Editorial Style
 *
 * Navigation with publication-inspired sophistication.
 * Serif logo, clean links, thin bottom border.
 * Yellow-600 accent on hover and active states.
 */

import type { ReactNode } from "react";

export interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface NavigationBarProps {
  logo: ReactNode;
  links: NavLink[];
  showSearch?: boolean;
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;
  ctaText?: string;
  onCtaClick?: () => void;
  rightContent?: ReactNode;
  className?: string;
}

/**
 * NavigationBar - Horizontal navigation component
 * Editorial aesthetic: serif logo, refined links, yellow accents.
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
      className={`
        flex items-center justify-between
        px-8 py-4
        border-b border-zinc-200
        bg-white
        font-['Inter',system-ui,sans-serif]
        ${className}
      `}
    >
      {/* Logo Area */}
      <div className="flex items-center gap-10">
        <div className="font-['Playfair_Display',Georgia,serif] text-2xl font-bold text-zinc-900 tracking-tight">
          {logo}
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`
                  text-sm tracking-wide
                  transition-colors duration-150
                  ${
                    link.isActive
                      ? "text-zinc-900 font-medium border-b-2 border-yellow-600 pb-0.5"
                      : "text-zinc-600 hover:text-zinc-900"
                  }
                `}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-5">
        {/* Search Input */}
        {showSearch && (
          <div className="hidden sm:block">
            <input
              type="text"
              placeholder={searchPlaceholder}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className={[
                "px-4 py-2",
                "text-sm",
                "border border-zinc-300",
                "rounded-none",
                "bg-white text-zinc-900",
                "placeholder-zinc-400",
                "focus:outline-none focus:border-yellow-600",
                "transition-colors duration-150",
              ].join(" ")}
            />
          </div>
        )}

        {/* Additional Right Content */}
        {rightContent}

        {/* CTA Button */}
        {ctaText && (
          <button
            onClick={onCtaClick}
            className={[
              "px-5 py-2",
              "text-xs font-medium uppercase tracking-widest",
              "text-white bg-zinc-900",
              "rounded-none border border-zinc-900",
              "hover:bg-yellow-600 hover:border-yellow-600",
              "transition-colors duration-150",
            ].join(" ")}
          >
            {ctaText}
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavigationBar;
