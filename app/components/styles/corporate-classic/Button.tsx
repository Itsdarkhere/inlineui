/**
 * Button - Corporate Classic Style
 *
 * Fortune 500, law firm aesthetic. Professional and trustworthy.
 * Uses yellow-600 (#CA8A04) as accent, neutrals for everything else.
 * Inter font, subtle radius (4px), minimal shadows.
 */

import { type ButtonHTMLAttributes, type ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual variant determining the button's role and emphasis
   * - primary: Main call-to-action, highest visual weight (yellow-600)
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
 * Corporate Classic button component.
 * Professional, trustworthy design with yellow-600 accent for primary actions.
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
  // Size-based classes - professional proportions
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  // Variant-based classes - yellow-600 accent, neutral palette
  const variantClasses = {
    primary: [
      "bg-yellow-600 text-white",
      "border border-yellow-600",
    ].join(" "),
    secondary: [
      "bg-gray-100 text-gray-900",
      "border border-gray-200",
    ].join(" "),
    outline: [
      "bg-transparent text-gray-900",
      "border border-gray-300",
    ].join(" "),
    ghost: [
      "bg-transparent text-gray-700",
      "border border-transparent",
    ].join(" "),
    destructive: [
      "bg-red-600 text-white",
      "border border-red-600",
    ].join(" "),
  };

  // Hover states - subtle, professional
  const hoverClasses = {
    primary: "hover:bg-yellow-700 hover:border-yellow-700",
    secondary: "hover:bg-gray-200 hover:border-gray-300",
    outline: "hover:bg-gray-50 hover:border-gray-400",
    ghost: "hover:bg-gray-100",
    destructive: "hover:bg-red-700 hover:border-red-700",
  };

  // Active states - confident feedback
  const activeClasses = {
    primary: "active:bg-yellow-800",
    secondary: "active:bg-gray-300",
    outline: "active:bg-gray-100",
    ghost: "active:bg-gray-200",
    destructive: "active:bg-red-800",
  };

  return (
    <button
      className={[
        // Base structural styles
        "inline-flex items-center justify-center gap-2",
        // Typography - Inter font, medium weight, tight tracking
        "font-sans font-medium tracking-tight",
        // Subtle border radius (4px)
        "rounded",
        // Transitions - 150ms, ease-out
        "transition-colors duration-150 ease-out",
        // Focus ring - yellow-600 accent
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-2",
        // Disabled state
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
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
      {iconLeft && <span className="shrink-0">{iconLeft}</span>}
      {children}
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </button>
  );
}

export default Button;
