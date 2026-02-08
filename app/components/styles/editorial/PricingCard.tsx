/**
 * PricingCard - Editorial Style
 *
 * Pricing display with publication-level hierarchy and restraint.
 * Serif plan names, clean feature lists, yellow accent for featured.
 * Sharp corners, thin borders, no heavy shadows.
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

/**
 * PricingCard - Plan/pricing display component
 * Editorial aesthetic: serif headings, refined layout, subtle accents.
 */
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
        relative flex flex-col p-8
        bg-white
        border
        rounded-none
        font-['Inter',system-ui,sans-serif]
        ${featured ? "border-2 border-zinc-900" : "border-zinc-200"}
        ${className}
      `}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 text-[10px] font-semibold uppercase tracking-widest text-white bg-yellow-600">
            {badge}
          </span>
        </div>
      )}

      {/* Plan Header */}
      <div className={featured ? "text-center" : ""}>
        <h3 className="font-['Playfair_Display',Georgia,serif] text-2xl font-bold text-zinc-900">
          {planName}
        </h3>
        {description && (
          <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{description}</p>
        )}
      </div>

      {/* Price */}
      <div className={`mt-6 ${featured ? "text-center" : ""}`}>
        <span className="font-['Playfair_Display',Georgia,serif] text-5xl font-bold text-zinc-900">
          {price}
        </span>
        {period && <span className="text-zinc-500 ml-2 text-sm">{period}</span>}
      </div>

      {/* Divider */}
      <div className="mt-8 mb-6 border-t border-zinc-200" />

      {/* Features List */}
      <ul className="space-y-3 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            {/* Check/X Icon */}
            {feature.included ? (
              <svg
                className="w-5 h-5 text-zinc-700 flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-zinc-300 flex-shrink-0 mt-0.5"
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
            )}
            <span
              className={`text-sm ${
                feature.included ? "text-zinc-700" : "text-zinc-400"
              }`}
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
          mt-8 w-full py-3 px-4
          text-sm font-medium uppercase tracking-widest
          rounded-none border
          transition-colors duration-150
          ${
            featured
              ? "text-white bg-zinc-900 border-zinc-900 hover:bg-yellow-600 hover:border-yellow-600"
              : "text-zinc-900 bg-white border-zinc-300 hover:border-zinc-900"
          }
        `}
      >
        {ctaText}
      </button>

      {/* Footnote */}
      {footnote && (
        <div className="mt-4 text-center text-xs text-zinc-400">{footnote}</div>
      )}
    </div>
  );
}

export default PricingCard;
