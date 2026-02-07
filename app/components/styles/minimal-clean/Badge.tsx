/**
 * Badge - Minimal Clean Style
 *
 * Swiss-inspired label element. Restrained color usage - semantic colors
 * only for meaning, not decoration. Subtle border radius, tight typography.
 */

import { type HTMLAttributes, type ReactNode } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Color variant indicating the badge's semantic meaning
   * - default: Neutral, general-purpose
   * - primary: Brand/accent color (near-black)
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
   * Note: Minimal-clean avoids fully rounded corners per style guide
   */
  pill?: boolean;

  /**
   * Badge contents - typically short text or a number
   */
  children: ReactNode;
}

/**
 * Minimal Clean badge component.
 * Semantic colors used sparingly for meaning. Borders define shape.
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
  // Size-based classes - compact, precise typography
  const sizeClasses = {
    sm: "px-1.5 py-0.5 text-[10px] tracking-wide",
    md: "px-2 py-0.5 text-[11px] tracking-wide",
    lg: "px-2.5 py-1 text-xs tracking-wide",
  };

  // Dot size based on badge size
  const dotSizeClasses = {
    sm: "w-1 h-1",
    md: "w-1.5 h-1.5",
    lg: "w-2 h-2",
  };

  // Variant-based classes - semantic colors for meaning
  // Black/white/gray for neutral, muted colors for semantic
  const variantClasses = {
    default: "bg-neutral-100 text-neutral-600 border-neutral-200",
    primary: "bg-neutral-900 text-white border-neutral-900",
    secondary: "bg-neutral-50 text-neutral-500 border-neutral-100",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200",
    warning: "bg-amber-50 text-amber-700 border-amber-200",
    error: "bg-red-50 text-red-700 border-red-200",
    info: "bg-neutral-100 text-neutral-600 border-neutral-200",
  };

  // Dot colors per variant - matches semantic meaning
  const dotColorClasses = {
    default: "bg-neutral-400",
    primary: "bg-white",
    secondary: "bg-neutral-400",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    error: "bg-red-500",
    info: "bg-neutral-500",
  };

  return (
    <span
      className={[
        // Base structural styles
        "inline-flex items-center gap-1.5",
        // Typography - Inter font, medium weight, uppercase for labels
        "font-sans font-medium uppercase",
        // Border
        "border",
        // Border radius - subtle, not fully rounded unless pill
        // Style guide says avoid rounded-full on rectangles
        pill ? "rounded-full" : "rounded-sm",
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
