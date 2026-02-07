/**
 * NavigationBar - Electric Chaos Style
 *
 * A loud, pulsing navigation that demands attention.
 * Neon glows, gradient borders, bouncy hover states.
 * This navbar walks into the room and owns it.
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
  searchPlaceholder = "SEARCH...",
  onSearchChange,
  ctaText,
  onCtaClick,
  rightContent,
  className = "",
}: NavigationBarProps) {
  return (
    <nav
      className={`
        relative
        flex items-center justify-between
        px-8 py-4
        bg-black
        border-b-2 border-purple-500/50
        font-['Space_Grotesk',system-ui,sans-serif]
        overflow-hidden
        ${className}
      `}
    >
      {/* Animated gradient background glow */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10
          pointer-events-none
        "
      />

      {/* Logo Area */}
      <div className="relative flex items-center gap-12">
        <div
          className="
            text-2xl font-black tracking-tight
            text-transparent bg-clip-text
            bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400
            drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]
            font-['Unbounded',system-ui,sans-serif]
          "
        >
          {logo}
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`
                  relative
                  px-4 py-2
                  text-sm font-bold uppercase tracking-widest
                  transition-all duration-300 ease-out
                  rounded-xl
                  ${
                    link.isActive
                      ? `
                        text-black
                        bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500
                        shadow-[0_0_20px_rgba(139,92,246,0.6),0_0_40px_rgba(236,72,153,0.4)]
                      `
                      : `
                        text-white/80
                        hover:text-white
                        hover:bg-white/10
                        hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]
                        hover:scale-110
                      `
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
      <div className="relative flex items-center gap-6">
        {/* Search Input */}
        {showSearch && (
          <div className="hidden sm:block">
            <input
              type="text"
              placeholder={searchPlaceholder}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="
                w-48
                px-5 py-3
                text-sm font-bold text-white uppercase tracking-wider
                placeholder-purple-400/50
                bg-black/50
                border-2 border-purple-500/50
                rounded-xl
                outline-none
                transition-all duration-300 ease-out
                focus:border-purple-500
                focus:shadow-[0_0_20px_rgba(139,92,246,0.5),inset_0_0_20px_rgba(139,92,246,0.1)]
                focus:scale-105
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
              relative
              px-6 py-3
              text-sm font-black uppercase tracking-widest
              text-black
              bg-gradient-to-r from-lime-400 via-lime-500 to-green-400
              rounded-2xl
              border-2 border-lime-400
              shadow-[0_0_30px_rgba(132,204,22,0.6),0_0_60px_rgba(132,204,22,0.3)]
              transition-all duration-300 ease-out
              hover:scale-110
              hover:shadow-[0_0_40px_rgba(132,204,22,0.8),0_0_80px_rgba(132,204,22,0.5)]
              active:scale-95
            "
          >
            {ctaText}
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="
          md:hidden
          p-3
          text-purple-400
          rounded-xl
          border-2 border-purple-500/50
          transition-all duration-300
          hover:bg-purple-500/20
          hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]
        "
        aria-label="Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
}

export default NavigationBar;
