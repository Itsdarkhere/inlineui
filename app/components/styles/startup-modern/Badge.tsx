/**
 * Badge - Startup Modern Style
 *
 * Clean, compact badge design with pill shapes and subtle colors.
 * Primary badges use yellow-600 accent. Status badges use semantic colors.
 * Slightly rounded or fully rounded (pill) options.
 */

import { type HTMLAttributes, type ReactNode } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Color variant indicating the badge's semantic meaning
   * - default: Neutral, general-purpose
   * - primary: Brand/accent color (yellow-600)
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
 * Badge component with startup-modern styling.
 * Yellow-600 primary accent, clean semantic colors for status.
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
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-0.5 text-xs",
    lg: "px-3 py-1 text-sm",
  };

  // Dot size based on badge size
  const dotSizeClasses = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-2.5 h-2.5",
  };

  // Variant-based classes - subtle backgrounds with matching text
  const variantClasses = {
    default: "bg-gray-100 text-gray-700 border-gray-200",
    primary: "bg-yellow-100 text-yellow-800 border-yellow-200",
    secondary: "bg-gray-50 text-gray-600 border-gray-100",
    success: "bg-green-100 text-green-800 border-green-200",
    warning: "bg-amber-100 text-amber-800 border-amber-200",
    error: "bg-red-100 text-red-800 border-red-200",
    info: "bg-blue-100 text-blue-800 border-blue-200",
  };

  // Dot colors per variant
  const dotColorClasses = {
    default: "bg-gray-500",
    primary: "bg-yellow-600",
    secondary: "bg-gray-400",
    success: "bg-green-500",
    warning: "bg-amber-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  return (
    <span
      className={[
        // Base structural styles
        "inline-flex items-center gap-1.5",
        "font-medium",
        "border",
        // Border radius - pill or slightly rounded
        pill ? "rounded-full" : "rounded-md",
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
