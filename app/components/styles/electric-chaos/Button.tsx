/**
 * Button - Electric Chaos Style
 *
 * LOUD. BOLD. UNAPOLOGETIC. This button screams from across the room.
 * Neon gradients, colored shadows that glow, bouncy transitions, ALL-CAPS.
 * Design rules exist to be broken.
 */

import { type ButtonHTMLAttributes, type ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual variant determining the button's role and emphasis
   * - primary: Electric purple with hot pink gradient - maximum impact
   * - secondary: Cyan with acid green accents - still loud
   * - outline: Thick neon border with transparent background
   * - ghost: Glowing text, minimal but visible
   * - destructive: Orange to hot pink gradient - dangerous and exciting
   */
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";

  /**
   * Size preset controlling padding, font-size, and minimum dimensions
   * - sm: Compact but still punchy
   * - md: Default, balanced chaos
   * - lg: Hero-sized, impossible to ignore
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
 * Electric Chaos button component.
 * More is more. If it's not making someone uncomfortable, you're not trying hard enough.
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
  // Size-based classes - tight padding, big text
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Variant-based classes - LOUD colors, gradients, glowing shadows
  const variantClasses = {
    primary: [
      // Electric purple to hot pink gradient
      "bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500",
      "text-white",
      "border-2 border-violet-400",
      // Glowing purple shadow
      "shadow-[0_0_20px_rgba(139,92,246,0.5),0_0_40px_rgba(139,92,246,0.3)]",
    ].join(" "),
    secondary: [
      // Cyan to acid green gradient
      "bg-gradient-to-r from-cyan-500 via-teal-500 to-lime-500",
      "text-black",
      "border-2 border-cyan-400",
      // Glowing cyan shadow
      "shadow-[0_0_20px_rgba(6,182,212,0.5),0_0_40px_rgba(6,182,212,0.3)]",
    ].join(" "),
    outline: [
      "bg-transparent",
      "text-violet-400",
      // Thick neon border
      "border-3 border-violet-500",
      // Subtle glow
      "shadow-[0_0_15px_rgba(139,92,246,0.4)]",
    ].join(" "),
    ghost: [
      "bg-transparent",
      "text-pink-400",
      "border-2 border-transparent",
      // Text glow effect via shadow
      "drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]",
    ].join(" "),
    destructive: [
      // Orange to hot pink gradient
      "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500",
      "text-white",
      "border-2 border-orange-400",
      // Glowing orange shadow
      "shadow-[0_0_20px_rgba(249,115,22,0.5),0_0_40px_rgba(249,115,22,0.3)]",
    ].join(" "),
  };

  // Hover states - grow, intensify, MORE
  const hoverClasses = {
    primary: [
      "hover:scale-105",
      "hover:shadow-[0_0_30px_rgba(139,92,246,0.7),0_0_60px_rgba(236,72,153,0.5)]",
      "hover:border-pink-400",
    ].join(" "),
    secondary: [
      "hover:scale-105",
      "hover:shadow-[0_0_30px_rgba(6,182,212,0.7),0_0_60px_rgba(132,204,22,0.5)]",
      "hover:border-lime-400",
    ].join(" "),
    outline: [
      "hover:scale-105",
      "hover:bg-violet-500/20",
      "hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]",
      "hover:text-violet-300",
    ].join(" "),
    ghost: [
      "hover:scale-105",
      "hover:text-pink-300",
      "hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.8)]",
      "hover:bg-pink-500/10",
    ].join(" "),
    destructive: [
      "hover:scale-105",
      "hover:shadow-[0_0_30px_rgba(249,115,22,0.7),0_0_60px_rgba(236,72,153,0.5)]",
      "hover:border-pink-400",
    ].join(" "),
  };

  // Active states - press down, flash
  const activeClasses = {
    primary: "active:scale-95 active:shadow-[0_0_40px_rgba(139,92,246,0.9)]",
    secondary: "active:scale-95 active:shadow-[0_0_40px_rgba(6,182,212,0.9)]",
    outline: "active:scale-95 active:bg-violet-500/30",
    ghost: "active:scale-95 active:text-pink-200",
    destructive: "active:scale-95 active:shadow-[0_0_40px_rgba(249,115,22,0.9)]",
  };

  // Focus states - visible and electric
  const focusClasses = {
    primary: "focus-visible:ring-4 focus-visible:ring-pink-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    secondary: "focus-visible:ring-4 focus-visible:ring-lime-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    outline: "focus-visible:ring-4 focus-visible:ring-violet-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    ghost: "focus-visible:ring-4 focus-visible:ring-pink-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    destructive: "focus-visible:ring-4 focus-visible:ring-orange-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
  };

  return (
    <button
      className={[
        // Base structural styles
        "inline-flex items-center justify-center gap-2",
        // Typography - Unbounded for PUNCH, ALL CAPS, tight tracking
        "font-['Unbounded',_'Space_Grotesk',_sans-serif] font-bold uppercase tracking-wide",
        // Heavy border radius
        "rounded-xl",
        // Bouncy transitions (300-500ms)
        "transition-all duration-300 ease-out",
        // Focus
        "focus:outline-none",
        focusClasses[variant],
        // Disabled state - dimmed but still visible
        "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none disabled:scale-100",
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
