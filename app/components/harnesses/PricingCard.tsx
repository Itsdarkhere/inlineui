/**
 * PricingCard Component Harness
 *
 * A marketing component showing plan/pricing information.
 * Demonstrates how a style handles hierarchy, emphasis, and selling.
 *
 * Style .md files should customize:
 * - Card background, border, and shadow treatment
 * - Price typography (size, weight, color)
 * - Plan name and badge styling
 * - Feature list bullet/check styling
 * - CTA button prominence
 * - Highlighted/featured plan treatment
 * - Spacing and internal rhythm
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
 * PricingCard - Plan/pricing display component
 *
 * Demonstrates how a style handles:
 * - Visual hierarchy (plan name vs price vs features)
 * - Emphasis states (featured vs standard plans)
 * - List styling (checkmarks, bullets)
 * - Card treatment (borders, shadows, radius)
 * - CTA button in marketing context
 * - Badge/label styling
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
        relative flex flex-col p-6 bg-white border rounded
        ${featured ? "border-gray-900 shadow-lg" : "border-gray-200"}
        ${className}
      `}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 text-xs font-medium text-white bg-gray-900 rounded-full">
            {badge}
          </span>
        </div>
      )}

      {/* Plan Header */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900">{planName}</h3>
        {description && (
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        )}
      </div>

      {/* Price */}
      <div className="mt-6 text-center">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        {period && <span className="text-gray-500 ml-1">{period}</span>}
      </div>

      {/* Features List */}
      <ul className="mt-8 space-y-3 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            {/* Check/X Icon */}
            {feature.included ? (
              <svg
                className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5"
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
                className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5"
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
                feature.included ? "text-gray-700" : "text-gray-400"
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
          mt-8 w-full py-3 px-4 text-sm font-medium rounded transition-colors
          ${
            featured
              ? "text-white bg-gray-900 hover:bg-gray-800"
              : "text-gray-900 bg-white border border-gray-300 hover:bg-gray-50"
          }
        `}
      >
        {ctaText}
      </button>

      {/* Footnote */}
      {footnote && (
        <div className="mt-4 text-center text-xs text-gray-500">{footnote}</div>
      )}
    </div>
  );
}

export default PricingCard;
