/**
 * HeroSection - Fintech Precision Style
 *
 * Bold, data-driven hero for trading platforms and financial applications.
 * Large typography, yellow accent CTAs, authoritative presence.
 */

import type { ReactNode } from "react";

/**
 * CTA button configuration
 */
export interface HeroButton {
  /** Button text */
  label: string;
  /** Click handler */
  onClick?: () => void;
  /** URL for link-style buttons */
  href?: string;
  /** Visual variant of the button */
  variant: "primary" | "secondary";
}

/**
 * Props for the HeroSection component
 */
export interface HeroSectionProps {
  /** Main headline - the big statement */
  heading: string;
  /** Supporting text below the heading */
  subheading?: string;
  /** Array of CTA buttons (typically 1-2) */
  buttons?: HeroButton[];
  /** Text alignment */
  align?: "left" | "center" | "right";
  /** Additional content below buttons (e.g., social proof, badges) */
  bottomContent?: ReactNode;
  /** Background element or decoration */
  backgroundElement?: ReactNode;
  /** Additional CSS classes for the container */
  className?: string;
}

/**
 * Fintech Precision HeroSection component.
 * Authoritative, data-driven presentation with strong visual hierarchy.
 */
export function HeroSection({
  heading,
  subheading,
  buttons = [],
  align = "center",
  bottomContent,
  backgroundElement,
  className = "",
}: HeroSectionProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <section
      className={`relative py-20 px-6 bg-neutral-950 ${className}`}
    >
      {/* Background Element */}
      {backgroundElement && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {backgroundElement}
        </div>
      )}

      {/* Grid pattern overlay for that trading terminal feel */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(neutral-800 1px, transparent 1px), linear-gradient(90deg, neutral-800 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Content */}
      <div
        className={`relative max-w-4xl mx-auto flex flex-col gap-6 ${alignmentClasses[align]}`}
      >
        {/* Main Heading - Bold, commanding */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100 tracking-tight leading-tight">
          {heading}
        </h1>

        {/* Subheading - Clear, supportive */}
        {subheading && (
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed">
            {subheading}
          </p>
        )}

        {/* CTA Buttons */}
        {buttons.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-4">
            {buttons.map((button, index) => {
              const buttonClasses =
                button.variant === "primary"
                  ? "px-6 py-3 text-sm font-semibold uppercase tracking-wider text-neutral-950 bg-yellow-600 rounded hover:bg-yellow-500 transition-colors duration-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                  : "px-6 py-3 text-sm font-semibold uppercase tracking-wider text-neutral-100 bg-transparent border border-neutral-600 rounded hover:bg-neutral-800 hover:border-neutral-500 transition-all duration-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950";

              if (button.href) {
                return (
                  <a
                    key={index}
                    href={button.href}
                    className={buttonClasses}
                    onClick={button.onClick}
                  >
                    {button.label}
                  </a>
                );
              }

              return (
                <button
                  key={index}
                  onClick={button.onClick}
                  className={buttonClasses}
                >
                  {button.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Bottom Content (social proof, badges, stats) */}
        {bottomContent && (
          <div className="mt-10 text-neutral-500">{bottomContent}</div>
        )}
      </div>
    </section>
  );
}

export default HeroSection;
