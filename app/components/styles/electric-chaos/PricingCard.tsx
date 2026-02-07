/**
 * PricingCard - Electric Chaos Style
 *
 * A pricing card that screams value. Literally screams.
 * Neon gradients, glowing borders, badges that rotate.
 * Your wallet is about to have a rave.
 */

import type { ReactNode } from "react";

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingCardProps {
  planName: string;
  badge?: string;
  price: string;
  period?: string;
  description?: string;
  features: PricingFeature[];
  ctaText: string;
  onCtaClick?: () => void;
  featured?: boolean;
  footnote?: ReactNode;
  className?: string;
}

export function PricingCard({
  planName,
  badge,
  price,
  period,
  description,
  features,
  ctaText,
  onCtaClick,
  featured = false,
  footnote,
  className = "",
}: PricingCardProps) {
  return (
    <div
      className={`
        relative
        flex flex-col
        p-8
        bg-black
        border-2 rounded-2xl
        font-['Space_Grotesk',system-ui,sans-serif]
        transition-all duration-500 ease-out
        hover:scale-[1.02]
        ${
          featured
            ? `
              border-purple-500
              shadow-[0_0_40px_rgba(139,92,246,0.4),0_0_80px_rgba(139,92,246,0.2)]
              hover:shadow-[0_0_60px_rgba(139,92,246,0.6),0_0_100px_rgba(139,92,246,0.3)]
            `
            : `
              border-white/20
              hover:border-cyan-500/50
              hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]
            `
        }
        ${className}
      `}
    >
      {/* Background gradient for featured */}
      {featured && (
        <div
          className="
            absolute inset-0
            bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10
            rounded-2xl
            pointer-events-none
          "
        />
      )}

      {/* Badge */}
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span
            className="
              px-5 py-2
              text-xs font-black uppercase tracking-[0.2em]
              text-black
              bg-gradient-to-r from-lime-400 via-green-400 to-lime-400
              border-2 border-lime-300
              rounded-full
              shadow-[0_0_20px_rgba(132,204,22,0.6)]
              rotate-[-2deg]
              inline-block
            "
          >
            {badge}
          </span>
        </div>
      )}

      {/* Plan Header */}
      <div className="relative">
        <h3
          className={`
            text-xl font-black uppercase tracking-wider
            ${
              featured
                ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
                : "text-white"
            }
            font-['Unbounded',system-ui,sans-serif]
          `}
        >
          {planName}
        </h3>
        {description && (
          <p className="mt-3 text-sm text-white/50">{description}</p>
        )}
      </div>

      {/* Price */}
      <div className="relative mt-8">
        <span
          className={`
            text-6xl font-black tracking-tight
            ${
              featured
                ? `
                  text-transparent bg-clip-text
                  bg-gradient-to-br from-white via-purple-200 to-purple-400
                  drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]
                `
                : "text-white"
            }
            font-['Unbounded',system-ui,sans-serif]
          `}
        >
          {price}
        </span>
        {period && (
          <span className="ml-2 text-base text-white/40 uppercase tracking-widest">
            {period}
          </span>
        )}
      </div>

      {/* Divider */}
      <div
        className={`
          mt-8 h-0.5
          ${
            featured
              ? "bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
              : "bg-white/10"
          }
        `}
      />

      {/* Features List */}
      <ul className="relative mt-8 space-y-4 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-4">
            {/* Check/X Icon */}
            {feature.included ? (
              <div
                className="
                  flex-shrink-0
                  w-6 h-6
                  flex items-center justify-center
                  bg-gradient-to-br from-lime-400 to-green-500
                  rounded-lg
                  shadow-[0_0_10px_rgba(132,204,22,0.5)]
                "
              >
                <svg
                  className="w-3.5 h-3.5 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            ) : (
              <div
                className="
                  flex-shrink-0
                  w-6 h-6
                  flex items-center justify-center
                  bg-white/5
                  border border-white/10
                  rounded-lg
                "
              >
                <svg
                  className="w-3.5 h-3.5 text-white/20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            )}
            <span
              className={`
                text-sm
                ${feature.included ? "text-white/80" : "text-white/30 line-through"}
              `}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onClick={onCtaClick}
        className={`
          relative
          mt-10
          w-full
          py-4 px-6
          text-sm font-black uppercase tracking-[0.2em]
          rounded-xl
          border-2
          transition-all duration-300 ease-out
          hover:scale-105
          active:scale-95
          ${
            featured
              ? `
                text-black
                bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500
                border-purple-400
                shadow-[0_0_30px_rgba(139,92,246,0.5)]
                hover:shadow-[0_0_50px_rgba(139,92,246,0.7),0_0_80px_rgba(236,72,153,0.5)]
              `
              : `
                text-white
                bg-transparent
                border-white/30
                hover:border-cyan-400
                hover:text-cyan-400
                hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]
              `
          }
        `}
      >
        {ctaText}
      </button>

      {/* Footnote */}
      {footnote && (
        <div
          className="
            mt-6
            text-center text-xs text-white/30
            uppercase tracking-widest
          "
        >
          {footnote}
        </div>
      )}

      {/* Decorative corner elements for featured */}
      {featured && (
        <>
          <div className="absolute top-4 left-4 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
          <div className="absolute top-4 right-4 w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
        </>
      )}
    </div>
  );
}

export default PricingCard;
