/**
 * Card - Corporate Classic Style
 *
 * Professional content container with clean borders and subtle shadows.
 * Fortune 500 aesthetic with gray borders and minimal elevation.
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
 * Corporate Classic Card container component.
 * Clean, professional design with subtle borders and shadows.
 */
export function Card({
  children,
  interactive = false,
  variant = "default",
  className = "",
  ...props
}: CardProps) {
  const variantClasses = {
    default: "bg-white border border-gray-200 shadow-sm",
    elevated: "bg-white border border-gray-100 shadow-md",
    outlined: "bg-white border border-gray-300 shadow-none",
  };

  return (
    <div
      className={[
        // Base structural styles
        "overflow-hidden",
        // Subtle border radius (8px for cards)
        "rounded-lg",
        // Variant
        variantClasses[variant],
        // Interactive states
        interactive && "cursor-pointer transition-shadow duration-150 hover:shadow-md",
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
        // Padding - generous professional spacing
        "px-6 py-4",
        // Border separator
        "border-b border-gray-200",
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
        // Padding - generous professional spacing
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
 * Renders with top border separator and subtle background.
 */
export function CardFooter({
  children,
  className = "",
  ...props
}: CardFooterProps) {
  return (
    <div
      className={[
        // Padding - generous professional spacing
        "px-6 py-4",
        // Border separator and subtle background
        "border-t border-gray-200",
        "bg-gray-50",
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
