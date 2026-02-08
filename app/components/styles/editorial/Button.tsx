/**
 * Button - Editorial Style
 *
 * Sophisticated, authoritative buttons inspired by prestigious publications.
 * Sharp corners, thin borders, restrained hover states.
 * Yellow-600 (#CA8A04) used sparingly for primary accent.
 */

import { type ButtonHTMLAttributes, type ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual variant determining the button's role and emphasis
   * - primary: Main call-to-action, uses brand yellow accent
   * - secondary: Supporting actions, neutral styling
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
 * Editorial button component.
 * Commands respect without raising its voice. Sharp, refined, timeless.
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
  // Size-based classes - balanced proportions, sans-serif for UI
  const sizeClasses = {
    sm: "px-4 py-1.5 text-xs uppercase tracking-widest",
    md: "px-5 py-2 text-sm uppercase tracking-widest",
    lg: "px-8 py-3 text-sm uppercase tracking-widest",
  };

  // Variant-based classes - neutrals + yellow-600 accent
  const variantClasses = {
    primary: [
      "bg-zinc-900 text-white",
      "border border-zinc-900",
    ].join(" "),
    secondary: [
      "bg-zinc-100 text-zinc-900",
      "border border-zinc-200",
    ].join(" "),
    outline: [
      "bg-transparent text-zinc-900",
      "border border-zinc-300",
    ].join(" "),
    ghost: [
      "bg-transparent text-zinc-700",
      "border border-transparent",
    ].join(" "),
    destructive: [
      "bg-zinc-900 text-white",
      "border border-zinc-900",
    ].join(" "),
  };

  // Hover states - subtle darkening, no scaling
  const hoverClasses = {
    primary: "hover:bg-yellow-600 hover:border-yellow-600",
    secondary: "hover:bg-zinc-200 hover:border-zinc-300",
    outline: "hover:bg-zinc-50 hover:border-zinc-400",
    ghost: "hover:bg-zinc-100",
    destructive: "hover:bg-red-700 hover:border-red-700",
  };

  // Active states - deeper press
  const activeClasses = {
    primary: "active:bg-yellow-700",
    secondary: "active:bg-zinc-300",
    outline: "active:bg-zinc-100",
    ghost: "active:bg-zinc-200",
    destructive: "active:bg-red-800",
  };

  return (
    <button
      className={[
        // Base structural styles
        "inline-flex items-center justify-center gap-2",
        // Typography - Inter for UI elements, medium weight
        "font-['Inter',system-ui,sans-serif] font-medium",
        // Sharp corners - sophisticated, no radius
        "rounded-none",
        // Fast transitions (100-200ms), ease-out
        "transition-all duration-150 ease-out",
        // Focus ring - subtle, offset
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-2",
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
