/**
 * Badge - Small accent element for labels, counts, and status indicators
 *
 * Compact inline element that shows the secondary palette and how tiny
 * elements are treated. Can be used inline with text or standalone.
 *
 * Style .md files should define:
 * - Colors (background and text for each variant)
 * - Border width, style, and color
 * - Border radius (pill vs. rounded vs. square)
 * - Typography (font-size, font-weight, letter-spacing, text-transform)
 * - Padding scale
 * - Optional dot/indicator styling
 */

import { type HTMLAttributes, type ReactNode } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Color variant indicating the badge's semantic meaning
   * - default: Neutral, general-purpose
   * - primary: Brand/accent color
   * - secondary: Muted, less emphasis
   * - success: Positive status (complete, active, online)
   * - warning: Caution status (pending, attention needed)
   * - error: Negative status (failed, offline, critical)
   * - info: Informational (new, updated, beta)
   */
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "info";

  /**
   * Size preset controlling padding and font-size
   * - sm: Compact, for dense lists or table cells
   * - md: Default, balanced for most use cases
   * - lg: Prominent, for standalone or hero usage
   */
  size?: "sm" | "md" | "lg";

  /**
   * Whether to show a dot indicator before the text
   * Useful for status badges (online, offline, etc.)
   */
  dot?: boolean;

  /**
   * Whether the badge should be rendered as a pill (fully rounded)
   * vs. using the default border-radius
   */
  pill?: boolean;

  /**
   * Badge contents - typically short text or a number
   */
  children: ReactNode;
}

/**
 * Badge component with neutral styling.
 * All visual aesthetics should be applied via style .md customization.
 */
export function Badge({
  variant = "default",
  size = "md",
  dot = false,
  pill = false,
  children,
  className = "",
  ...props
}: BadgeProps) {
  // Size-based classes (structural only)
  const sizeClasses = {
    sm: "px-1.5 py-0.5 text-xs",
    md: "px-2 py-0.5 text-xs",
    lg: "px-2.5 py-1 text-sm",
  };

  // Dot size based on badge size
  const dotSizeClasses = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-2.5 h-2.5",
  };

  // Variant-based classes (neutral/minimal styling)
  const variantClasses = {
    default: "bg-gray-100 text-gray-700 border-gray-200",
    primary: "bg-gray-900 text-white border-gray-900",
    secondary: "bg-gray-50 text-gray-600 border-gray-100",
    success: "bg-gray-100 text-gray-700 border-gray-200",
    warning: "bg-gray-100 text-gray-700 border-gray-200",
    error: "bg-gray-100 text-gray-700 border-gray-200",
    info: "bg-gray-100 text-gray-700 border-gray-200",
  };

  // Dot colors per variant (neutral - styles will override)
  const dotColorClasses = {
    default: "bg-gray-500",
    primary: "bg-white",
    secondary: "bg-gray-400",
    success: "bg-gray-500",
    warning: "bg-gray-500",
    error: "bg-gray-500",
    info: "bg-gray-500",
  };

  return (
    <span
      className={[
        // Base structural styles
        "inline-flex items-center gap-1.5",
        "font-medium",
        "border",
        // Border radius
        pill ? "rounded-full" : "rounded",
        // Size
        sizeClasses[size],
        // Variant
        variantClasses[variant],
        // Custom classes
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {dot && (
        <span
          className={[
            "rounded-full shrink-0",
            dotSizeClasses[size],
            dotColorClasses[variant],
          ].join(" ")}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}

export default Badge;
