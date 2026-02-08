/**
 * HeroSection - Startup Modern Style
 *
 * Bold, confident hero section with clear hierarchy.
 * Yellow-600 primary CTA, generous white space.
 * Large typography with tight tracking for headlines.
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
 * HeroSection - Large marketing/landing section with startup-modern styling
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
        {/* Main Heading - Large, bold, tight tracking */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1]">
          {heading}
        </h1>

        {/* Subheading - Relaxed, readable */}
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
                  ? "px-6 py-3 text-base font-medium text-white bg-yellow-600 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 transition-all duration-150 shadow-sm hover:shadow-md"
                  : "px-6 py-3 text-base font-medium text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 transition-all duration-150";

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
          <div className="mt-10 text-gray-500">{bottomContent}</div>
        )}
      </div>
    </section>
  );
}

export default HeroSection;
