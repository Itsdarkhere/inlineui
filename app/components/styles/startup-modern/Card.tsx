/**
 * Card - Startup Modern Style
 *
 * Clean card surfaces with subtle shadows and rounded corners.
 * White cards on gray-50 backgrounds for layered depth.
 * Generous padding, clear visual groupings.
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
   * - default: Standard content card with subtle shadow
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
 * Main Card container component with startup-modern styling.
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
        // Rounded corners (rounded-lg = 8px for cards)
        "rounded-lg",
        // Variant
        variantClasses[variant],
        // Interactive states with smooth transitions
        interactive && "cursor-pointer transition-all duration-150 ease-out hover:shadow-md hover:border-gray-300",
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
 * Renders with bottom border separator by default.
 */
export function CardHeader({
  children,
  className = "",
  ...props
}: CardHeaderProps) {
  return (
    <div
      className={[
        // Generous padding (24px horizontal, 16px vertical)
        "px-6 py-4",
        // Subtle separator
        "border-b border-gray-100",
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
        // Generous padding (24px all around)
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
        // Generous padding
        "px-6 py-4",
        // Top separator
        "border-t border-gray-100",
        // Subtle background for distinction
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
