/**
 * PreviewBox - Platform Component
 *
 * A neutral container for displaying styled component previews.
 * Uses a clean, minimal design that doesn't compete with the components inside.
 */

import type { ReactNode } from "react";

export interface PreviewBoxProps {
  /** The component preview content */
  children: ReactNode;
  /** Optional additional CSS classes */
  className?: string;
}

/**
 * PreviewBox container component.
 * Provides a neutral background for displaying styled components.
 */
export function PreviewBox({ children, className = "" }: PreviewBoxProps) {
  return (
    <div
      className={[
        // White background for neutral preview area
        "bg-white",
        // Subtle border - no rounded corners per platform styling
        "border border-[#e5e5e5]",
        // Comfortable padding for component display
        "p-8",
        // Custom classes
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

export default PreviewBox;
