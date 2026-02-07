/**
 * HeroSection - Electric Chaos Style
 *
 * A screaming, in-your-face hero that grabs attention and doesn't let go.
 * Massive typography, neon gradients, pulsing glows.
 * This is the main stage at 2 AM.
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
        py-32 md:py-40 lg:py-48
        px-8
        bg-black
        overflow-hidden
        ${className}
      `}
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="
            absolute -top-1/4 -left-1/4
            w-1/2 h-1/2
            bg-purple-600/30
            rounded-full
            blur-[100px]
          "
        />
        <div
          className="
            absolute -bottom-1/4 -right-1/4
            w-1/2 h-1/2
            bg-pink-600/30
            rounded-full
            blur-[100px]
          "
        />
        <div
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-1/3 h-1/3
            bg-cyan-500/20
            rounded-full
            blur-[80px]
          "
        />
      </div>

      {/* Grid overlay for texture */}
      <div
        className="
          absolute inset-0
          opacity-[0.03]
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

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
          max-w-5xl mx-auto
          flex flex-col gap-8
          ${alignmentClasses[align]}
        `}
      >
        {/* Floating badge */}
        <div
          className="
            inline-flex
            px-5 py-2
            text-xs font-black uppercase tracking-[0.3em]
            text-cyan-400
            bg-cyan-500/10
            border-2 border-cyan-500/50
            rounded-full
            shadow-[0_0_20px_rgba(6,182,212,0.3)]
            animate-pulse
          "
        >
          NOW LIVE
        </div>

        {/* Main Heading */}
        <h1
          className="
            text-5xl md:text-7xl lg:text-8xl xl:text-9xl
            font-black
            leading-[0.9]
            tracking-[-0.02em]
            text-transparent bg-clip-text
            bg-gradient-to-br from-white via-purple-200 to-purple-400
            drop-shadow-[0_0_40px_rgba(139,92,246,0.5)]
            font-['Unbounded',system-ui,sans-serif]
          "
        >
          {heading}
        </h1>

        {/* Subheading */}
        {subheading && (
          <p
            className="
              text-xl md:text-2xl lg:text-3xl
              text-white/60
              max-w-2xl
              leading-relaxed
              font-['Space_Grotesk',system-ui,sans-serif]
            "
          >
            {subheading}
          </p>
        )}

        {/* CTA Buttons */}
        {buttons.length > 0 && (
          <div className="flex flex-wrap gap-6 mt-8">
            {buttons.map((button, index) => {
              const baseClasses = `
                px-8 py-4
                text-base font-black uppercase tracking-widest
                rounded-2xl
                border-2
                transition-all duration-300 ease-out
                font-['Space_Grotesk',system-ui,sans-serif]
              `;

              const variantClasses =
                button.variant === "primary"
                  ? `
                    text-black
                    bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500
                    border-purple-400
                    shadow-[0_0_40px_rgba(139,92,246,0.6),0_0_80px_rgba(236,72,153,0.4)]
                    hover:scale-110
                    hover:shadow-[0_0_60px_rgba(139,92,246,0.8),0_0_100px_rgba(236,72,153,0.6)]
                    active:scale-95
                  `
                  : `
                    text-white
                    bg-transparent
                    border-white/30
                    hover:border-cyan-400
                    hover:text-cyan-400
                    hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]
                    hover:scale-105
                    active:scale-95
                  `;

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
          <div
            className="
              mt-12
              text-sm
              text-white/40
              font-['Space_Grotesk',system-ui,sans-serif]
              uppercase tracking-widest
            "
          >
            {bottomContent}
          </div>
        )}

        {/* Decorative elements */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>
    </section>
  );
}

export default HeroSection;
