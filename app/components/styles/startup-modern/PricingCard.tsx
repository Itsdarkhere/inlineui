/**
 * PricingCard - Startup Modern Style
 *
 * Clean pricing cards with clear hierarchy.
 * Featured cards use yellow-600 border and badge.
 * Generous padding, subtle shadows.
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
 * PricingCard - Plan/pricing display component with startup-modern styling
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
        relative flex flex-col p-8 bg-white border rounded-xl
        ${featured ? "border-yellow-600 shadow-lg ring-1 ring-yellow-600" : "border-gray-200 shadow-sm"}
        ${className}
      `}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 text-xs font-semibold text-white bg-yellow-600 rounded-full shadow-sm">
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
        <span className="text-5xl font-bold text-gray-900 tracking-tight">{price}</span>
        {period && <span className="text-gray-500 ml-1 text-base">{period}</span>}
      </div>

      {/* Features List */}
      <ul className="mt-8 space-y-4 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            {/* Check/X Icon */}
            {feature.included ? (
              <svg
                className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5"
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
                className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5"
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
          mt-8 w-full py-3 px-4 text-sm font-medium rounded-md transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2
          ${
            featured
              ? "text-white bg-yellow-600 hover:bg-yellow-700 shadow-sm hover:shadow-md"
              : "text-gray-900 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400"
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
