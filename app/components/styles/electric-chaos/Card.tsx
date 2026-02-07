/**
 * Card - Electric Chaos Style
 *
 * Content container that DEMANDS attention. Black backgrounds with
 * neon borders, gradient accents, glowing shadows. Dense and chaotic
 * but intentionally so.
 */

import { type HTMLAttributes, type ReactNode } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Card contents - can include CardHeader, CardBody, CardFooter
   * or any arbitrary content
   */
  children: ReactNode;

  /**
   * Whether the card has interactive hover states
   * Useful for clickable cards or cards that link somewhere
   */
  interactive?: boolean;

  /**
   * Visual variant for different card purposes
   * - default: Black with purple glow
   * - elevated: Intense multi-color glow, maximum drama
   * - outlined: Thick gradient border, no fill
   */
  variant?: "default" | "elevated" | "outlined";
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Header content - typically a title, subtitle, or action buttons
   */
  children: ReactNode;
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Main card content
   */
  children: ReactNode;
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Footer content - typically actions, metadata, or links
   */
  children: ReactNode;
}

/**
 * Main Card container component.
 * Pure black backgrounds with color explosions. Gradients everywhere.
 */
export function Card({
  children,
  interactive = false,
  variant = "default",
  className = "",
  ...props
}: CardProps) {
  // Variant classes - black backgrounds, neon everything
  const variantClasses = {
    default: [
      "bg-black/90",
      "border-2 border-violet-500/50",
      // Purple glow
      "shadow-[0_0_20px_rgba(139,92,246,0.3),0_0_40px_rgba(139,92,246,0.1)]",
    ].join(" "),
    elevated: [
      "bg-black",
      "border-2 border-pink-500/50",
      // Multi-color glow - purple, pink, cyan
      "shadow-[0_0_30px_rgba(139,92,246,0.4),0_0_60px_rgba(236,72,153,0.3),0_0_90px_rgba(6,182,212,0.2)]",
    ].join(" "),
    outlined: [
      "bg-transparent",
      // Thick border with gradient effect via multiple shadows
      "border-3 border-violet-500",
      "shadow-[inset_0_0_20px_rgba(139,92,246,0.2),0_0_15px_rgba(139,92,246,0.3)]",
    ].join(" "),
  };

  // Interactive hover - intensify the glow, slight scale
  const interactiveClasses = interactive
    ? [
        "cursor-pointer",
        "transition-all duration-300 ease-out",
        "hover:scale-[1.02]",
        "hover:border-pink-500/70",
        "hover:shadow-[0_0_40px_rgba(236,72,153,0.5),0_0_80px_rgba(139,92,246,0.3)]",
      ].join(" ")
    : "";

  return (
    <div
      className={[
        // Base structural styles
        "overflow-hidden",
        // Heavy border radius
        "rounded-2xl",
        // Font family - Space Grotesk for body
        "font-['Space_Grotesk',_sans-serif]",
        // Text color - white that cuts through
        "text-white",
        // Variant
        variantClasses[variant],
        // Interactive states
        interactiveClasses,
        // Custom classes
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Card header section.
 * Gradient border separator, dense padding.
 */
export function CardHeader({
  children,
  className = "",
  ...props
}: CardHeaderProps) {
  return (
    <div
      className={[
        // Tight but punchy padding
        "px-5 py-4",
        // Gradient bottom border - purple to pink
        "border-b-2 border-violet-500/40",
        // Subtle gradient background
        "bg-gradient-to-r from-violet-900/20 via-transparent to-pink-900/20",
        // Custom classes
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Card body section.
 * Main content area - dark with subtle texture.
 */
export function CardBody({
  children,
  className = "",
  ...props
}: CardBodyProps) {
  return (
    <div
      className={[
        // Generous padding for content
        "px-5 py-5",
        // Text styling
        "text-gray-100",
        "leading-relaxed",
        // Custom classes
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Card footer section.
 * Gradient background for visual hierarchy.
 */
export function CardFooter({
  children,
  className = "",
  ...props
}: CardFooterProps) {
  return (
    <div
      className={[
        // Padding matches header
        "px-5 py-4",
        // Top border separator
        "border-t-2 border-violet-500/40",
        // Gradient background - darker, electric
        "bg-gradient-to-r from-violet-950/50 via-black to-pink-950/50",
        // Custom classes
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
