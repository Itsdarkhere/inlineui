/**
 * Badge - Electric Chaos Style
 *
 * Small but LOUD. These badges don't whisper - they announce.
 * Neon colors, glowing effects, bold typography. Every badge
 * fights for attention and wins.
 */

import { type HTMLAttributes, type ReactNode } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Color variant indicating the badge's semantic meaning
   * - default: Electric purple - the signature
   * - primary: Hot pink gradient - impossible to miss
   * - secondary: Cyan glow - cool but loud
   * - success: Acid green - victory in neon
   * - warning: Orange fire - danger is exciting
   * - error: Red alert - maximum drama
   * - info: Cyan pulse - information that demands reading
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
   * - sm: Compact but still glows
   * - md: Default, balanced chaos
   * - lg: Prominent, for hero usage
   */
  size?: "sm" | "md" | "lg";

  /**
   * Whether to show a pulsing dot indicator before the text
   * Useful for status badges - the dot PULSES
   */
  dot?: boolean;

  /**
   * Whether the badge should be rendered as a pill (fully rounded)
   * Electric Chaos loves pills - they're rounder and louder
   */
  pill?: boolean;

  /**
   * Badge contents - typically short text or a number
   */
  children: ReactNode;
}

/**
 * Electric Chaos badge component.
 * Color is not a tool - it's a weapon. Use all of it.
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
  // Size-based classes - tight but readable
  const sizeClasses = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-3 py-1 text-xs",
    lg: "px-4 py-1.5 text-sm",
  };

  // Dot size based on badge size
  const dotSizeClasses = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-2.5 h-2.5",
  };

  // Variant-based classes - NEON EVERYTHING
  const variantClasses = {
    default: [
      "bg-violet-500/20",
      "text-violet-300",
      "border-2 border-violet-500/50",
      "shadow-[0_0_10px_rgba(139,92,246,0.4)]",
    ].join(" "),
    primary: [
      "bg-gradient-to-r from-pink-500/30 to-violet-500/30",
      "text-pink-300",
      "border-2 border-pink-500/50",
      "shadow-[0_0_12px_rgba(236,72,153,0.5)]",
    ].join(" "),
    secondary: [
      "bg-cyan-500/20",
      "text-cyan-300",
      "border-2 border-cyan-500/50",
      "shadow-[0_0_10px_rgba(6,182,212,0.4)]",
    ].join(" "),
    success: [
      "bg-lime-500/20",
      "text-lime-300",
      "border-2 border-lime-500/50",
      "shadow-[0_0_12px_rgba(132,204,22,0.5)]",
    ].join(" "),
    warning: [
      "bg-orange-500/20",
      "text-orange-300",
      "border-2 border-orange-500/50",
      "shadow-[0_0_12px_rgba(249,115,22,0.5)]",
    ].join(" "),
    error: [
      "bg-red-500/20",
      "text-red-300",
      "border-2 border-red-500/50",
      "shadow-[0_0_12px_rgba(239,68,68,0.5)]",
    ].join(" "),
    info: [
      "bg-cyan-500/20",
      "text-cyan-300",
      "border-2 border-cyan-500/50",
      "shadow-[0_0_10px_rgba(6,182,212,0.4)]",
    ].join(" "),
  };

  // Dot colors per variant - GLOWING
  const dotColorClasses = {
    default: "bg-violet-400 shadow-[0_0_6px_rgba(139,92,246,0.8)]",
    primary: "bg-pink-400 shadow-[0_0_6px_rgba(236,72,153,0.8)]",
    secondary: "bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.8)]",
    success: "bg-lime-400 shadow-[0_0_6px_rgba(132,204,22,0.8)]",
    warning: "bg-orange-400 shadow-[0_0_6px_rgba(249,115,22,0.8)]",
    error: "bg-red-400 shadow-[0_0_6px_rgba(239,68,68,0.8)]",
    info: "bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.8)]",
  };

  return (
    <span
      className={[
        // Base structural styles
        "inline-flex items-center gap-1.5",
        // Typography - Space Grotesk, bold, uppercase
        "font-['Space_Grotesk',_sans-serif] font-bold uppercase tracking-wider",
        // Border radius - pill or rounded-xl
        pill ? "rounded-full" : "rounded-xl",
        // Size
        sizeClasses[size],
        // Variant
        variantClasses[variant],
        // Hover - slight intensify
        "transition-all duration-200",
        "hover:scale-105",
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
            // Pulsing animation
            "animate-pulse",
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
