/**
 * Alert - Electric Chaos Style
 *
 * Notifications that DEMAND attention. No subtle hints here -
 * these alerts scream their message with neon gradients, glowing
 * borders, and colors that pulse with energy.
 */

import { type HTMLAttributes, type ReactNode } from "react";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Semantic variant determining the alert's purpose and color scheme
   * - info: Cyan lightning - information that electrifies
   * - success: Acid green victory - celebrate LOUDLY
   * - warning: Orange fire - danger is exciting
   * - error: Red and pink chaos - errors have never looked this good
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
 * Default icons for each variant - bold, electric SVG icons
 */
const defaultIcons: Record<string, ReactNode> = {
  info: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  ),
  success: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  ),
  warning: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  ),
  error: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

/**
 * Electric Chaos alert component.
 * Animation should be felt in your chest. These alerts PULSE.
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
  // Variant-based classes - NEON EVERYTHING, glowing borders
  const variantClasses = {
    info: [
      "bg-gradient-to-r from-cyan-950/80 via-black/90 to-cyan-950/80",
      "border-2 border-cyan-500/60",
      "text-cyan-100",
      "shadow-[0_0_20px_rgba(6,182,212,0.4),inset_0_0_30px_rgba(6,182,212,0.1)]",
    ].join(" "),
    success: [
      "bg-gradient-to-r from-lime-950/80 via-black/90 to-lime-950/80",
      "border-2 border-lime-500/60",
      "text-lime-100",
      "shadow-[0_0_20px_rgba(132,204,22,0.4),inset_0_0_30px_rgba(132,204,22,0.1)]",
    ].join(" "),
    warning: [
      "bg-gradient-to-r from-orange-950/80 via-black/90 to-orange-950/80",
      "border-2 border-orange-500/60",
      "text-orange-100",
      "shadow-[0_0_20px_rgba(249,115,22,0.4),inset_0_0_30px_rgba(249,115,22,0.1)]",
    ].join(" "),
    error: [
      "bg-gradient-to-r from-red-950/80 via-black/90 to-pink-950/80",
      "border-2 border-red-500/60",
      "text-red-100",
      "shadow-[0_0_20px_rgba(239,68,68,0.4),0_0_40px_rgba(236,72,153,0.2),inset_0_0_30px_rgba(239,68,68,0.1)]",
    ].join(" "),
  };

  // Icon colors per variant - GLOWING
  const iconColorClasses = {
    info: "text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]",
    success: "text-lime-400 drop-shadow-[0_0_8px_rgba(132,204,22,0.8)]",
    warning: "text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]",
    error: "text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]",
  };

  // Title colors - bright and bold
  const titleColorClasses = {
    info: "text-cyan-300",
    success: "text-lime-300",
    warning: "text-orange-300",
    error: "text-red-300",
  };

  // Dismiss button colors
  const dismissColorClasses = {
    info: "text-cyan-400/60 hover:text-cyan-300 hover:drop-shadow-[0_0_6px_rgba(6,182,212,0.8)]",
    success: "text-lime-400/60 hover:text-lime-300 hover:drop-shadow-[0_0_6px_rgba(132,204,22,0.8)]",
    warning: "text-orange-400/60 hover:text-orange-300 hover:drop-shadow-[0_0_6px_rgba(249,115,22,0.8)]",
    error: "text-red-400/60 hover:text-red-300 hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.8)]",
  };

  // Determine which icon to show
  const displayIcon = icon === null ? null : icon ?? defaultIcons[variant];

  return (
    <div
      role="alert"
      className={[
        // Base structural styles
        "flex gap-4",
        // Generous padding
        "p-5",
        // Heavy border radius
        "rounded-2xl",
        // Font family
        "font-['Space_Grotesk',_sans-serif]",
        // Variant
        variantClasses[variant],
        // Hover - subtle intensify
        "transition-all duration-300",
        "hover:scale-[1.01]",
        // Custom classes
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {/* Icon - larger, glowing */}
      {displayIcon && (
        <div className={["shrink-0 mt-0.5", iconColorClasses[variant]].join(" ")}>
          {displayIcon}
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        {title && (
          <h5
            className={[
              // Unbounded for titles - LOUD
              "font-['Unbounded',_'Space_Grotesk',_sans-serif] font-bold text-base uppercase tracking-wide mb-2",
              titleColorClasses[variant],
            ].join(" ")}
          >
            {title}
          </h5>
        )}
        <div className="text-sm leading-relaxed opacity-90">{children}</div>
      </div>

      {/* Dismiss button */}
      {dismissible && (
        <button
          type="button"
          onClick={onDismiss}
          className={[
            "shrink-0",
            "p-1.5 -m-1",
            // Bouncy transition
            "transition-all duration-300",
            // Hover scale
            "hover:scale-110",
            // Focus ring
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg",
            // Color
            dismissColorClasses[variant],
          ].join(" ")}
          aria-label="Dismiss"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default Alert;
