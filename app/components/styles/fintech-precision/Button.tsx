/**
 * Button - Fintech Precision Style
 *
 * Bloomberg/trading platform inspired button design.
 * Sharp corners (2-4px), fast transitions (100-150ms), data-driven confidence.
 * Yellow-600 (#CA8A04) for primary actions, neutrals for everything else.
 */

import { type ButtonHTMLAttributes, type ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual variant determining the button's role and emphasis
   * - primary: Main call-to-action, yellow accent - highest visual weight
   * - secondary: Supporting actions, neutral emphasis
   * - outline: Bordered style with transparent background
   * - ghost: Minimal style, text-only appearance
   * - destructive: Dangerous actions (delete, remove, etc.)
   */
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";

  /**
   * Size preset controlling padding, font-size, and minimum dimensions
   * - sm: Compact, for dense UIs or inline actions
   * - md: Default, balanced for most use cases
   * - lg: Prominent, for hero sections or primary CTAs
   */
  size?: "sm" | "md" | "lg";

  /**
   * Whether the button should span the full width of its container
   */
  fullWidth?: boolean;

  /**
   * Optional icon to render before the button text
   */
  iconLeft?: ReactNode;

  /**
   * Optional icon to render after the button text
   */
  iconRight?: ReactNode;

  /**
   * Button contents
   */
  children: ReactNode;
}

/**
 * Fintech Precision button component.
 * Data-driven, authoritative aesthetic with sharp edges and yellow accents.
 */
export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  iconLeft,
  iconRight,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  // Size-based classes - compact, efficient
  const sizeClasses = {
    sm: "px-2.5 py-1 text-xs font-medium tracking-wide uppercase",
    md: "px-4 py-2 text-sm font-medium tracking-wide uppercase",
    lg: "px-6 py-2.5 text-sm font-semibold tracking-wide uppercase",
  };

  // Variant-based classes - yellow accent for primary, neutrals for rest
  const variantClasses = {
    primary: [
      "bg-yellow-600 text-neutral-950",
      "border border-yellow-600",
    ].join(" "),
    secondary: [
      "bg-neutral-800 text-neutral-100",
      "border border-neutral-700",
    ].join(" "),
    outline: [
      "bg-transparent text-neutral-100",
      "border border-neutral-600",
    ].join(" "),
    ghost: [
      "bg-transparent text-neutral-400",
      "border border-transparent",
    ].join(" "),
    destructive: [
      "bg-red-600 text-white",
      "border border-red-600",
    ].join(" "),
  };

  // Hover states - instant, confident feedback
  const hoverClasses = {
    primary: "hover:bg-yellow-500 hover:border-yellow-500",
    secondary: "hover:bg-neutral-700 hover:border-neutral-600",
    outline: "hover:bg-neutral-800 hover:border-neutral-500 hover:text-neutral-50",
    ghost: "hover:bg-neutral-800 hover:text-neutral-200",
    destructive: "hover:bg-red-500 hover:border-red-500",
  };

  // Active states - subtle depression effect
  const activeClasses = {
    primary: "active:bg-yellow-700",
    secondary: "active:bg-neutral-900",
    outline: "active:bg-neutral-700",
    ghost: "active:bg-neutral-700",
    destructive: "active:bg-red-700",
  };

  return (
    <button
      className={[
        // Base structural styles
        "inline-flex items-center justify-center gap-2",
        // Typography - IBM Plex Sans aesthetic
        "font-sans font-medium",
        // Sharp radius (2-4px) - professional, not playful
        "rounded",
        // Fast transitions (100ms), linear timing
        "transition-all duration-100 ease-linear",
        // Focus ring - yellow accent for consistency
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
        // Disabled state
        "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
        // Size
        sizeClasses[size],
        // Variant
        variantClasses[variant],
        // Hover (only if not disabled)
        !disabled && hoverClasses[variant],
        // Active
        !disabled && activeClasses[variant],
        // Full width
        fullWidth && "w-full",
        // Custom classes
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={disabled}
      {...props}
    >
      {iconLeft && <span className="shrink-0 -ml-0.5">{iconLeft}</span>}
      {children}
      {iconRight && <span className="shrink-0 -mr-0.5">{iconRight}</span>}
    </button>
  );
}

export default Button;
