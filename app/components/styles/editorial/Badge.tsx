/**
 * Badge - Editorial Style
 *
 * Small accent elements with typographic refinement.
 * Uppercase small caps, minimal styling, yellow accent for primary.
 * Inspired by category labels and bylines in publications.
 */

import { type HTMLAttributes, type ReactNode } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Color variant indicating the badge's semantic meaning
   * - default: Neutral, general-purpose
   * - primary: Brand/accent color (yellow-600)
   * - secondary: Muted, less emphasis
   * - success: Positive status
   * - warning: Caution status
   * - error: Negative status
   * - info: Informational
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
   */
  dot?: boolean;

  /**
   * Whether the badge should be rendered as a pill (fully rounded)
   * vs. using the default sharp corners
   */
  pill?: boolean;

  /**
   * Badge contents - typically short text or a number
   */
  children: ReactNode;
}

/**
 * Badge component with editorial styling.
 * Restrained, typographic, with occasional yellow accent.
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
  // Size-based classes
  const sizeClasses = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-2.5 py-0.5 text-[11px]",
    lg: "px-3 py-1 text-xs",
  };

  // Dot size based on badge size
  const dotSizeClasses = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-2 h-2",
  };

  // Variant-based classes - neutrals + yellow-600 accent
  const variantClasses = {
    default: "bg-zinc-100 text-zinc-700 border-zinc-200",
    primary: "bg-yellow-600 text-white border-yellow-600",
    secondary: "bg-zinc-50 text-zinc-500 border-zinc-100",
    success: "bg-zinc-100 text-zinc-700 border-zinc-200",
    warning: "bg-yellow-50 text-yellow-800 border-yellow-200",
    error: "bg-zinc-100 text-zinc-700 border-zinc-200",
    info: "bg-zinc-100 text-zinc-700 border-zinc-200",
  };

  // Dot colors per variant
  const dotColorClasses = {
    default: "bg-zinc-500",
    primary: "bg-white",
    secondary: "bg-zinc-400",
    success: "bg-emerald-500",
    warning: "bg-yellow-600",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  return (
    <span
      className={[
        // Base structural styles
        "inline-flex items-center gap-1.5",
        // Typography - uppercase, tracked, sans-serif
        "font-['Inter',system-ui,sans-serif] font-semibold uppercase tracking-wider",
        // Border
        "border",
        // Border radius - sharp by default, pill if specified
        pill ? "rounded-full" : "rounded-none",
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
