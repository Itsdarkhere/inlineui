/**
 * Dialog Component - Minimal Clean Style
 *
 * A modal dialog with Swiss-inspired restraint. Pure white background,
 * subtle borders, and fast transitions. No decoration for decoration's sake.
 */

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

/** Props for the Dialog component */
export interface DialogProps {
  /** The trigger element that opens the dialog */
  trigger: React.ReactNode;
  /** Title displayed at the top of the dialog */
  title: string;
  /** Optional description text below the title */
  description?: string;
  /** Main content of the dialog body */
  children: React.ReactNode;
  /** Optional footer content (typically action buttons) */
  footer?: React.ReactNode;
  /** Controlled open state */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Additional className for the content panel */
  contentClassName?: string;
  /** Additional className for the overlay */
  overlayClassName?: string;
}

export function Dialog({
  trigger,
  title,
  description,
  children,
  footer,
  open,
  onOpenChange,
  contentClassName = "",
  overlayClassName = "",
}: DialogProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        {/* Overlay - subtle black backdrop, no blur */}
        <DialogPrimitive.Overlay
          className={`
            fixed inset-0 bg-black/40
            data-[state=open]:animate-in data-[state=closed]:animate-out
            data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
            duration-150
            ${overlayClassName}
          `}
        />

        {/* Content - pure white, subtle border, minimal shadow for elevation */}
        <DialogPrimitive.Content
          className={`
            fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            w-full max-w-md
            bg-white border border-gray-200 rounded-md
            shadow-lg
            p-6
            font-['Inter',system-ui,sans-serif]
            focus:outline-none
            data-[state=open]:animate-in data-[state=closed]:animate-out
            data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
            data-[state=closed]:zoom-out-[0.98] data-[state=open]:zoom-in-[0.98]
            duration-150
            ${contentClassName}
          `}
        >
          {/* Close button - minimal, positioned precisely */}
          <DialogPrimitive.Close
            className="
              absolute top-5 right-5
              text-gray-400 hover:text-gray-900
              transition-colors duration-150
              focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-900 focus-visible:ring-offset-2
              rounded-sm
            "
            aria-label="Close"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </DialogPrimitive.Close>

          {/* Title - near-black, medium weight, clear hierarchy */}
          <DialogPrimitive.Title className="text-lg font-medium text-[#111] tracking-tight pr-8">
            {title}
          </DialogPrimitive.Title>

          {/* Description - gray, generous spacing */}
          {description && (
            <DialogPrimitive.Description className="mt-2 text-sm text-gray-500 leading-relaxed">
              {description}
            </DialogPrimitive.Description>
          )}

          {/* Body content - near-black text */}
          <div className="mt-5 text-sm text-[#111] leading-relaxed">
            {children}
          </div>

          {/* Footer - right-aligned with consistent spacing */}
          {footer && (
            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end gap-3">
              {footer}
            </div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export default Dialog;
