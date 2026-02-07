/**
 * HeroSection Component Harness
 *
 * A large visual statement section demonstrating typographic scale and hierarchy.
 * Shows how a style handles big, bold marketing content.
 *
 * Style .md files should customize:
 * - Heading typography (font, size, weight, line-height)
 * - Subheading/description typography
 * - Button styling (primary and secondary variants)
 * - Spacing and rhythm between elements
 * - Background treatment (color, gradient, pattern)
 * - Text alignment and layout options
 * - Animation/entrance effects
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
 * HeroSection - Large marketing/landing section
 *
 * Demonstrates how a style handles:
 * - Large-scale typography (h1 equivalent)
 * - Typographic hierarchy (heading vs subheading)
 * - Call-to-action button prominence
 * - Vertical rhythm and spacing
 * - Visual confidence and boldness
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
      className={`relative py-24 px-6 bg-white ${className}`}
    >
      {/* Background Element */}
      {backgroundElement && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {backgroundElement}
        </div>
      )}

      {/* Content */}
      <div
        className={`relative max-w-4xl mx-auto flex flex-col gap-6 ${alignmentClasses[align]}`}
      >
        {/* Main Heading - Shows typographic scale */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
          {heading}
        </h1>

        {/* Subheading - Secondary hierarchy */}
        {subheading && (
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
            {subheading}
          </p>
        )}

        {/* CTA Buttons */}
        {buttons.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-4">
            {buttons.map((button, index) => {
              const buttonClasses =
                button.variant === "primary"
                  ? "px-6 py-3 text-base font-medium text-white bg-gray-900 rounded hover:bg-gray-800 transition-colors"
                  : "px-6 py-3 text-base font-medium text-gray-900 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors";

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

        {/* Bottom Content (social proof, badges, etc.) */}
        {bottomContent && (
          <div className="mt-8 text-gray-500">{bottomContent}</div>
        )}
      </div>
    </section>
  );
}

export default HeroSection;
