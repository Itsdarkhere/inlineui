/**
 * Card - Content container with header, body, and footer sections
 *
 * Large surface area component that reveals spacing philosophy, shadow treatment,
 * border approach, and radius choices.
 *
 * Style .md files should define:
 * - Background color (and potential gradients)
 * - Border width, style, and color
 * - Box shadow (depth and spread)
 * - Border radius
 * - Internal spacing (padding scale)
 * - Header/footer separator styling
 * - Hover state (if interactive)
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
 * Main Card container component with neutral styling.
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
        // Variant
        variantClasses[variant],
        // Interactive states
        interactive && "cursor-pointer transition-shadow hover:shadow-md",
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
        // Base structural styles
        "px-4 py-3",
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
        // Base structural styles
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
 * Renders with top border separator by default.
 */
export function CardFooter({
  children,
  className = "",
  ...props
}: CardFooterProps) {
  return (
    <div
      className={[
        // Base structural styles
        "px-4 py-3",
        "border-t border-gray-100",
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
