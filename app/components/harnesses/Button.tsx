/**
 * Button - Primary action element
 *
 * The most important UI element. This harness provides the structural foundation
 * for buttons across all variants and sizes.
 *
 * Style .md files should define:
 * - Colors (background, text, border for each variant)
 * - Border width and style
 * - Box shadows (rest, hover, active, focus)
 * - Border radius
 * - Hover and active state transformations
 * - Focus ring styles
 * - Typography (font-family, font-weight, letter-spacing)
 * - Transition timing and easing
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
 * Base button component with neutral styling.
 * All visual aesthetics should be applied via style .md customization.
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
  // Size-based classes (structural only)
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Variant-based classes (neutral/minimal styling)
  const variantClasses = {
    primary: "bg-gray-900 text-white border border-gray-900",
    secondary: "bg-gray-100 text-gray-900 border border-gray-200",
    outline: "bg-transparent text-gray-900 border border-gray-300",
    ghost: "bg-transparent text-gray-700 border border-transparent",
    destructive: "bg-gray-900 text-white border border-gray-900",
  };

  // Hover states (neutral)
  const hoverClasses = {
    primary: "hover:bg-gray-800",
    secondary: "hover:bg-gray-200",
    outline: "hover:bg-gray-50",
    ghost: "hover:bg-gray-100",
    destructive: "hover:bg-gray-800",
  };

  return (
    <button
      className={[
        // Base structural styles
        "inline-flex items-center justify-center gap-2",
        "font-medium",
        "transition-colors duration-150",
        "focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        // Size
        sizeClasses[size],
        // Variant
        variantClasses[variant],
        // Hover (only if not disabled)
        !disabled && hoverClasses[variant],
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
