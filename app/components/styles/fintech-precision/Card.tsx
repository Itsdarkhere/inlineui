/**
 * Card - Fintech Precision Style
 *
 * Bloomberg/trading platform inspired card design.
 * 1px borders, subtle elevation, sharp corners, structured separators.
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
   * - elevated: Higher visual prominence with stronger shadow
   * - outlined: Border-focused with minimal shadow
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
 * Main Card container component with fintech precision styling.
 */
export function Card({
  children,
  interactive = false,
  variant = "default",
  className = "",
  ...props
}: CardProps) {
  const variantClasses = {
    default: "bg-neutral-900 border border-neutral-800 shadow-sm",
    elevated: "bg-neutral-900 border border-neutral-700 shadow-lg shadow-black/20",
    outlined: "bg-neutral-950 border border-neutral-700 shadow-none",
  };

  return (
    <div
      className={[
        // Base structural styles
        "overflow-hidden",
        // Sharp radius - professional
        "rounded",
        // Variant
        variantClasses[variant],
        // Interactive states - subtle, instant feedback
        interactive && "cursor-pointer transition-all duration-100 hover:border-neutral-600 hover:shadow-md",
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
 * Renders with bottom border separator.
 */
export function CardHeader({
  children,
  className = "",
  ...props
}: CardHeaderProps) {
  return (
    <div
      className={[
        // Padding - compact but readable
        "px-4 py-3",
        // Border separator
        "border-b border-neutral-800",
        // Background subtle differentiation
        "bg-neutral-900/50",
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
 * Card body section - main content area with consistent padding.
 */
export function CardBody({
  children,
  className = "",
  ...props
}: CardBodyProps) {
  return (
    <div
      className={[
        // Padding - generous for content
        "px-4 py-4",
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
 * Renders with top border separator.
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
        "px-4 py-3",
        // Border separator
        "border-t border-neutral-800",
        // Subtle background
        "bg-neutral-950/50",
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
