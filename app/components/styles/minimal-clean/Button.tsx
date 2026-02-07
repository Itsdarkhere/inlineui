/**
 * Button - Minimal Clean Style
 *
 * Swiss-inspired, restrained button design. Clarity over decoration.
 * Uses borders over shadows, subtle radius, fast transitions.
 */

import { type ButtonHTMLAttributes, type ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual variant determining the button's role and emphasis
   * - primary: Main call-to-action, highest visual weight
   * - secondary: Supporting actions, moderate emphasis
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
 * Minimal Clean button component.
 * Restrained Swiss aesthetic with precise typography and subtle interactions.
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
  // Size-based classes - generous padding, clear hierarchy
  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs tracking-wide",
    md: "px-4 py-2 text-sm tracking-wide",
    lg: "px-6 py-2.5 text-sm tracking-wide",
  };

  // Variant-based classes - black/white/gray palette, borders over shadows
  const variantClasses = {
    primary: [
      "bg-neutral-900 text-white",
      "border border-neutral-900",
    ].join(" "),
    secondary: [
      "bg-neutral-100 text-neutral-900",
      "border border-neutral-200",
    ].join(" "),
    outline: [
      "bg-transparent text-neutral-900",
      "border border-neutral-300",
    ].join(" "),
    ghost: [
      "bg-transparent text-neutral-700",
      "border border-transparent",
    ].join(" "),
    destructive: [
      "bg-neutral-900 text-white",
      "border border-neutral-900",
    ].join(" "),
  };

  // Hover states - subtle, confident transitions
  const hoverClasses = {
    primary: "hover:bg-neutral-800 hover:border-neutral-800",
    secondary: "hover:bg-neutral-200 hover:border-neutral-300",
    outline: "hover:bg-neutral-50 hover:border-neutral-400",
    ghost: "hover:bg-neutral-100",
    destructive: "hover:bg-red-600 hover:border-red-600",
  };

  // Active states - minimal feedback
  const activeClasses = {
    primary: "active:bg-neutral-950",
    secondary: "active:bg-neutral-300",
    outline: "active:bg-neutral-100",
    ghost: "active:bg-neutral-200",
    destructive: "active:bg-red-700",
  };

  return (
    <button
      className={[
        // Base structural styles
        "inline-flex items-center justify-center gap-2",
        // Typography - Inter font, medium weight
        "font-sans font-medium",
        // Subtle border radius (not bubbly, not sharp)
        "rounded",
        // Fast transitions (100-150ms), ease-out
        "transition-all duration-100 ease-out",
        // Focus ring - subtle, offset
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2",
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
