/**
 * PricingCard - Minimal Clean Style
 *
 * A restrained, confident pricing card with Swiss precision.
 * Clear hierarchy through size and weight, borders over shadows, subtle radius.
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
        bg-white
        border rounded
        font-['Inter',system-ui,sans-serif]
        ${featured ? "border-[#111]" : "border-neutral-200"}
        ${className}
      `}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span
            className="
              px-3 py-1
              text-xs font-medium
              text-white
              bg-[#111]
              rounded
            "
          >
            {badge}
          </span>
        </div>
      )}

      {/* Plan Header */}
      <div>
        <h3 className="text-base font-medium text-[#111]">{planName}</h3>
        {description && (
          <p className="mt-2 text-sm text-neutral-500">{description}</p>
        )}
      </div>

      {/* Price */}
      <div className="mt-8">
        <span className="text-4xl font-semibold tracking-tight text-[#111]">
          {price}
        </span>
        {period && (
          <span className="ml-1 text-sm text-neutral-400">{period}</span>
        )}
      </div>

      {/* Features List */}
      <ul className="mt-10 space-y-4 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            {/* Check/X Icon */}
            {feature.included ? (
              <svg
                className="w-4 h-4 text-[#111] flex-shrink-0 mt-0.5"
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
                className="w-4 h-4 text-neutral-300 flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
            <span
              className={`
                text-sm
                ${feature.included ? "text-neutral-600" : "text-neutral-300"}
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
          mt-10
          w-full
          py-3 px-4
          text-sm font-medium
          rounded
          transition-opacity duration-100 ease-out
          ${
            featured
              ? "text-white bg-[#111] hover:opacity-80"
              : "text-[#111] bg-white border border-neutral-300 hover:border-neutral-400"
          }
        `}
      >
        {ctaText}
      </button>

      {/* Footnote */}
      {footnote && (
        <div className="mt-4 text-center text-xs text-neutral-400">
          {footnote}
        </div>
      )}
    </div>
  );
}

export default PricingCard;
