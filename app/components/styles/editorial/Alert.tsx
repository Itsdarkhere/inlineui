/**
 * Alert - Editorial Style
 *
 * Important messages with editorial restraint.
 * Left border accent, clean typography, no heavy backgrounds.
 * Yellow-600 for info/warning, muted colors for others.
 */

import { type HTMLAttributes, type ReactNode } from "react";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Semantic variant determining the alert's purpose and color scheme
   * - info: General information, tips, or neutral announcements
   * - success: Positive outcomes, confirmations
   * - warning: Caution, potential issues
   * - error: Errors, failures, critical problems
   */
  variant?: "info" | "success" | "warning" | "error";

  /**
   * Alert title - short, descriptive headline
   */
  title?: string;

  /**
   * Alert description or main content
   */
  children: ReactNode;

  /**
   * Custom icon to override the default variant icon
   * Set to null to hide the icon entirely
   */
  icon?: ReactNode | null;

  /**
   * Whether to show a dismiss/close button
   */
  dismissible?: boolean;

  /**
   * Callback when the dismiss button is clicked
   */
  onDismiss?: () => void;
}

/**
 * Default icons for each variant
 */
const defaultIcons: Record<AlertProps["variant"] & string, ReactNode> = {
  info: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
        clipRule="evenodd"
      />
    </svg>
  ),
  success: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  ),
  warning: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    </svg>
  ),
  error: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

/**
 * Alert component with editorial styling.
 * Left border accent, restrained colors, refined typography.
 */
export function Alert({
  variant = "info",
  title,
  children,
  icon,
  dismissible = false,
  onDismiss,
  className = "",
  ...props
}: AlertProps) {
  // Variant-based classes - subtle backgrounds, left border accent
  const variantClasses = {
    info: "bg-zinc-50 border-l-yellow-600 text-zinc-700",
    success: "bg-zinc-50 border-l-zinc-700 text-zinc-700",
    warning: "bg-yellow-50/50 border-l-yellow-600 text-zinc-700",
    error: "bg-zinc-50 border-l-zinc-900 text-zinc-700",
  };

  // Icon colors per variant
  const iconColorClasses = {
    info: "text-yellow-600",
    success: "text-zinc-600",
    warning: "text-yellow-600",
    error: "text-zinc-900",
  };

  // Determine which icon to show
  const displayIcon = icon === null ? null : icon ?? defaultIcons[variant];

  return (
    <div
      role="alert"
      className={[
        // Base structural styles
        "flex gap-3",
        "p-4",
        // Left border accent
        "border-l-4",
        // Font
        "font-['Inter',system-ui,sans-serif]",
        // Variant
        variantClasses[variant],
        // Custom classes
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {/* Icon */}
      {displayIcon && (
        <div className={["shrink-0", iconColorClasses[variant]].join(" ")}>
          {displayIcon}
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        {title && (
          <h5 className="font-semibold text-sm text-zinc-900 mb-1">{title}</h5>
        )}
        <div className="text-sm leading-relaxed">{children}</div>
      </div>

      {/* Dismiss button */}
      {dismissible && (
        <button
          type="button"
          onClick={onDismiss}
          className={[
            "shrink-0",
            "p-1 -m-1",
            "text-zinc-400 hover:text-zinc-600",
            "transition-colors duration-150",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-2",
          ].join(" ")}
          aria-label="Dismiss"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default Alert;
