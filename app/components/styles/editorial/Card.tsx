/**
 * Card - Editorial Style
 *
 * Content containers with thin borders, no shadows (except elevated).
 * Sharp corners, subtle separators, warm white backgrounds.
 * Inspired by newspaper layout and magazine article cards.
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
   * - default: Standard content card with thin border
   * - elevated: Higher visual prominence with subtle shadow
   * - outlined: Stronger border emphasis
   */
  variant?: "default" | "elevated" | "outlined";
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/**
 * Main Card container component.
 * Sharp, sophisticated, lets content speak.
 */
export function Card({
  children,
  interactive = false,
  variant = "default",
  className = "",
  ...props
}: CardProps) {
  const variantClasses = {
    default: "bg-white border border-zinc-200 shadow-none",
    elevated: "bg-white border border-zinc-100 shadow-md",
    outlined: "bg-white border-2 border-zinc-300 shadow-none",
  };

  return (
    <div
      className={[
        // Base structural styles
        "overflow-hidden",
        // Sharp corners - no radius for editorial sophistication
        "rounded-none",
        // Font base
        "font-['Inter',system-ui,sans-serif]",
        // Variant
        variantClasses[variant],
        // Interactive states - subtle, no bounce
        interactive && "cursor-pointer transition-all duration-150 ease-out hover:border-zinc-400",
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
 * Card header section - typically contains title and optional actions.
 * Uses subtle bottom border separator.
 */
export function CardHeader({
  children,
  className = "",
  ...props
}: CardHeaderProps) {
  return (
    <div
      className={[
        // Padding
        "px-6 py-4",
        // Bottom separator - thin, subtle
        "border-b border-zinc-100",
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
 * Card body section - main content area with generous padding.
 */
export function CardBody({
  children,
  className = "",
  ...props
}: CardBodyProps) {
  return (
    <div
      className={[
        // Generous padding for reading comfort
        "px-6 py-5",
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
 * Card footer section - typically contains actions or metadata.
 * Uses subtle top border separator.
 */
export function CardFooter({
  children,
  className = "",
  ...props
}: CardFooterProps) {
  return (
    <div
      className={[
        // Padding
        "px-6 py-4",
        // Top separator
        "border-t border-zinc-100",
        // Subtle background differentiation
        "bg-zinc-50/50",
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
