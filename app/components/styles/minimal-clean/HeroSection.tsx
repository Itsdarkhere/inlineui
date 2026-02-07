/**
 * HeroSection - Minimal Clean Style
 *
 * A confident, restrained hero with Swiss typography principles.
 * Large type with tight tracking, generous whitespace, no decoration.
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
        py-32 md:py-40
        px-8
        bg-white
        font-['Inter',system-ui,sans-serif]
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
          max-w-3xl mx-auto
          flex flex-col gap-8
          ${alignmentClasses[align]}
        `}
      >
        {/* Main Heading */}
        <h1
          className="
            text-4xl md:text-5xl lg:text-6xl
            font-semibold
            text-[#111]
            tracking-[-0.02em]
            leading-[1.1]
          "
        >
          {heading}
        </h1>

        {/* Subheading */}
        {subheading && (
          <p
            className="
              text-lg md:text-xl
              text-neutral-500
              max-w-xl
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
                px-6 py-3
                text-sm font-medium
                rounded
                transition-opacity duration-100 ease-out
              `;

              const variantClasses =
                button.variant === "primary"
                  ? "text-white bg-[#111] hover:opacity-80"
                  : "text-[#111] bg-white border border-neutral-300 hover:border-neutral-400";

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
          <div className="mt-8 text-sm text-neutral-400">{bottomContent}</div>
        )}
      </div>
    </section>
  );
}

export default HeroSection;
