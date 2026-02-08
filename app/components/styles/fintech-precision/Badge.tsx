/**
 * Badge - Fintech Precision Style
 *
 * Trading platform inspired status indicators.
 * Uppercase, tight tracking, sharp corners, semantic colors.
 * Green for profit/active, red for loss/error, yellow for important.
 */

import { type HTMLAttributes, type ReactNode } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Color variant indicating the badge's semantic meaning
   * - default: Neutral, general-purpose
   * - primary: Brand/accent color (yellow)
   * - secondary: Muted, less emphasis
   * - success: Positive status (profit, active, online)
   * - warning: Caution status (pending, attention needed)
   * - error: Negative status (loss, failed, critical)
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
 * Fintech Precision badge component.
 * All-caps, tight tracking, terminal-style status indicators.
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
  // Size-based classes - compact, efficient
  const sizeClasses = {
    sm: "px-1.5 py-0.5 text-[10px]",
    md: "px-2 py-0.5 text-[11px]",
    lg: "px-2.5 py-1 text-xs",
  };

  // Dot size based on badge size
  const dotSizeClasses = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-2 h-2",
  };

  // Variant-based classes - semantic colors for trading context
  const variantClasses = {
    default: "bg-neutral-800 text-neutral-300 border-neutral-700",
    primary: "bg-yellow-600/20 text-yellow-500 border-yellow-600/50",
    secondary: "bg-neutral-900 text-neutral-500 border-neutral-800",
    success: "bg-emerald-950 text-emerald-400 border-emerald-800",
    warning: "bg-amber-950 text-amber-400 border-amber-800",
    error: "bg-red-950 text-red-400 border-red-800",
    info: "bg-blue-950 text-blue-400 border-blue-800",
  };

  // Dot colors per variant
  const dotColorClasses = {
    default: "bg-neutral-500",
    primary: "bg-yellow-500",
    secondary: "bg-neutral-600",
    success: "bg-emerald-400",
    warning: "bg-amber-400",
    error: "bg-red-400",
    info: "bg-blue-400",
  };

  return (
    <span
      className={[
        // Base structural styles
        "inline-flex items-center gap-1.5",
        // Typography - uppercase, tracking, monospace feel
        "font-semibold uppercase tracking-wider",
        // Border
        "border",
        // Border radius - sharp or pill
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
