/**
 * NavigationBar - Minimal Clean Style
 *
 * Swiss-inspired horizontal navigation with restrained aesthetics.
 * Borders over shadows, type hierarchy through weight, generous spacing.
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
        px-8 py-5
        bg-white
        border-b border-neutral-200
        font-['Inter',system-ui,sans-serif]
        ${className}
      `}
    >
      {/* Logo Area */}
      <div className="flex items-center gap-12">
        <div className="text-lg font-medium tracking-tight text-[#111]">
          {logo}
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`
                  text-sm tracking-normal
                  transition-opacity duration-100 ease-out
                  ${
                    link.isActive
                      ? "text-[#111] font-medium"
                      : "text-neutral-500 hover:text-[#111]"
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
      <div className="flex items-center gap-6">
        {/* Search Input */}
        {showSearch && (
          <div className="hidden sm:block">
            <input
              type="text"
              placeholder={searchPlaceholder}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="
                w-48
                px-4 py-2
                text-sm text-[#111]
                placeholder-neutral-400
                bg-white
                border border-neutral-200
                rounded
                outline-none
                transition-colors duration-100 ease-out
                focus:border-neutral-400
              "
            />
          </div>
        )}

        {/* Additional Right Content */}
        {rightContent}

        {/* CTA Button */}
        {ctaText && (
          <button
            onClick={onCtaClick}
            className="
              px-5 py-2.5
              text-sm font-medium
              text-white
              bg-[#111]
              rounded
              transition-opacity duration-100 ease-out
              hover:opacity-80
            "
          >
            {ctaText}
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavigationBar;
