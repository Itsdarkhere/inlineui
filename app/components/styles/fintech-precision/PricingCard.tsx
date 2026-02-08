/**
 * PricingCard - Fintech Precision Style
 *
 * Trading platform inspired pricing presentation.
 * Sharp edges, monospace prices, yellow featured accent, authoritative design.
 */

import type { ReactNode } from "react";

/**
 * Single feature in the pricing plan
 */
export interface PricingFeature {
  /** Feature description text */
  text: string;
  /** Whether this feature is included in the plan */
  included: boolean;
}

/**
 * Props for the PricingCard component
 */
export interface PricingCardProps {
  /** Name of the pricing plan */
  planName: string;
  /** Optional badge text (e.g., "Popular", "Best Value") */
  badge?: string;
  /** Price amount to display */
  price: string;
  /** Billing period (e.g., "/month", "/year", "one-time") */
  period?: string;
  /** Short description of the plan */
  description?: string;
  /** List of features included/excluded */
  features: PricingFeature[];
  /** CTA button text */
  ctaText: string;
  /** CTA button click handler */
  onCtaClick?: () => void;
  /** Whether this is the highlighted/featured plan */
  featured?: boolean;
  /** Additional content below CTA (e.g., "No credit card required") */
  footnote?: ReactNode;
  /** Additional CSS classes for the container */
  className?: string;
}

/**
 * Fintech Precision PricingCard component.
 * Data-driven, authoritative pricing presentation with yellow accents.
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
        relative flex flex-col p-6 bg-neutral-900 border rounded
        ${featured ? "border-yellow-600 shadow-lg shadow-yellow-600/10" : "border-neutral-800"}
        ${className}
      `}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-950 bg-yellow-600 rounded">
            {badge}
          </span>
        </div>
      )}

      {/* Plan Header */}
      <div className="text-center">
        <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">{planName}</h3>
        {description && (
          <p className="mt-2 text-sm text-neutral-500">{description}</p>
        )}
      </div>

      {/* Price - Monospace, prominent */}
      <div className="mt-6 text-center">
        <span className="text-4xl font-mono font-bold text-neutral-100 tabular-nums">{price}</span>
        {period && <span className="text-neutral-500 ml-1 text-sm">{period}</span>}
      </div>

      {/* Features List */}
      <ul className="mt-8 space-y-3 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            {/* Check/X Icon */}
            {feature.included ? (
              <svg
                className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5"
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
                className="w-5 h-5 text-neutral-600 flex-shrink-0 mt-0.5"
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
                feature.included ? "text-neutral-300" : "text-neutral-600"
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
          mt-8 w-full py-3 px-4 text-sm font-semibold uppercase tracking-wider rounded transition-all duration-100
          focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900
          ${
            featured
              ? "text-neutral-950 bg-yellow-600 hover:bg-yellow-500"
              : "text-neutral-100 bg-neutral-800 border border-neutral-700 hover:bg-neutral-700 hover:border-neutral-600"
          }
        `}
      >
        {ctaText}
      </button>

      {/* Footnote */}
      {footnote && (
        <div className="mt-4 text-center text-xs text-neutral-600">{footnote}</div>
      )}
    </div>
  );
}

export default PricingCard;
