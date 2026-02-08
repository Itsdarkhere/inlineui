/**
 * HeroSection - Editorial Style
 *
 * Large visual statement with publication-level typography.
 * Playfair Display for headlines, tight tracking, generous whitespace.
 * Yellow-600 accent line optional, confident without being loud.
 */

import type { ReactNode } from "react";

export interface HeroButton {
  label: string;
  onClick?: () => void;
  href?: string;
  variant: "primary" | "secondary";
}

export interface HeroSectionProps {
  heading: string;
  subheading?: string;
  buttons?: HeroButton[];
  align?: "left" | "center" | "right";
  bottomContent?: ReactNode;
  backgroundElement?: ReactNode;
  className?: string;
}

/**
 * HeroSection - Large marketing/landing section
 * Editorial aesthetic: serif headlines, restrained buttons, timeless feel.
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
      className={`
        relative
        py-28 md:py-36
        px-8
        bg-white
        ${className}
      `}
    >
      {/* Background Element */}
      {backgroundElement && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {backgroundElement}
        </div>
      )}

      {/* Content */}
      <div
        className={`
          relative
          max-w-4xl mx-auto
          flex flex-col gap-8
          ${alignmentClasses[align]}
        `}
      >
        {/* Yellow accent line above heading */}
        <div className="w-16 h-1 bg-yellow-600" />

        {/* Main Heading - Playfair Display, bold, tight tracking */}
        <h1
          className="
            font-['Playfair_Display',Georgia,serif]
            text-5xl md:text-6xl lg:text-7xl
            font-bold
            text-zinc-900
            tracking-tight
            leading-[1.1]
          "
        >
          {heading}
        </h1>

        {/* Subheading - Inter, relaxed, muted */}
        {subheading && (
          <p
            className="
              font-['Inter',system-ui,sans-serif]
              text-xl md:text-2xl
              text-zinc-500
              max-w-2xl
              leading-relaxed
              font-normal
            "
          >
            {subheading}
          </p>
        )}

        {/* CTA Buttons */}
        {buttons.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-4">
            {buttons.map((button, index) => {
              const baseClasses = `
                px-8 py-3
                text-sm font-medium uppercase tracking-widest
                rounded-none border
                font-['Inter',system-ui,sans-serif]
                transition-colors duration-150
              `;

              const variantClasses =
                button.variant === "primary"
                  ? "text-white bg-zinc-900 border-zinc-900 hover:bg-yellow-600 hover:border-yellow-600"
                  : "text-zinc-900 bg-white border-zinc-300 hover:border-zinc-900";

              const buttonClasses = `${baseClasses} ${variantClasses}`;

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

        {/* Bottom Content */}
        {bottomContent && (
          <div className="mt-10 text-sm text-zinc-400 font-['Inter',system-ui,sans-serif] uppercase tracking-widest">
            {bottomContent}
          </div>
        )}
      </div>
    </section>
  );
}

export default HeroSection;
