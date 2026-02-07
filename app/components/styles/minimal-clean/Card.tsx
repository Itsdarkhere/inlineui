/**
 * Card - Minimal Clean Style
 *
 * Swiss-inspired content container. Borders over shadows, generous whitespace,
 * precise alignment. Every element earns its place.
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
   * - default: Standard content card
   * - elevated: Higher visual prominence with subtle shadow
   * - outlined: Border-focused with no shadow
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
 * Clean white background, subtle borders, generous spacing.
 */
export function Card({
  children,
  interactive = false,
  variant = "default",
  className = "",
  ...props
}: CardProps) {
  // Variant classes - borders over shadows, pure white backgrounds
  const variantClasses = {
    default: "bg-white border border-neutral-200",
    elevated: "bg-white border border-neutral-100 shadow-sm",
    outlined: "bg-white border border-neutral-300",
  };

  // Interactive hover - subtle border darkening
  const interactiveClasses = interactive
    ? "cursor-pointer transition-colors duration-100 ease-out hover:border-neutral-400"
    : "";

  return (
    <div
      className={[
        // Base structural styles
        "overflow-hidden",
        // Subtle border radius
        "rounded",
        // Font family
        "font-sans",
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
 * Clean separator, balanced padding.
 */
export function CardHeader({
  children,
  className = "",
  ...props
}: CardHeaderProps) {
  return (
    <div
      className={[
        // Generous padding
        "px-5 py-4",
        // Subtle bottom border separator
        "border-b border-neutral-100",
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
 * Main content area with consistent, generous padding.
 */
export function CardBody({
  children,
  className = "",
  ...props
}: CardBodyProps) {
  return (
    <div
      className={[
        // Generous padding - sections breathe
        "px-5 py-5",
        // Text color - near-black
        "text-neutral-900",
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
 * Subtle separator, neutral background for visual hierarchy.
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
        "border-t border-neutral-100",
        // Subtle background for hierarchy (gray for secondary info)
        "bg-neutral-50",
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
