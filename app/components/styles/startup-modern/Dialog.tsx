/**
 * Dialog - Startup Modern Style
 *
 * Clean modal dialog with rounded corners and subtle shadow.
 * Yellow-600 focus rings, smooth backdrop blur.
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
      {/* Trigger - the element that opens the dialog */}
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        {/* Overlay - the backdrop behind the dialog */}
        <DialogPrimitive.Overlay
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 ${overlayClassName}`}
        />

        {/* Content - the dialog panel itself */}
        <DialogPrimitive.Content
          className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-xl shadow-xl p-6 w-full max-w-md focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] ${contentClassName}`}
        >
          {/* Close button - positioned in the corner */}
          <DialogPrimitive.Close
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-2 rounded-md p-1 transition-colors duration-150"
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

          {/* Title - the dialog heading */}
          <DialogPrimitive.Title className="text-lg font-semibold text-gray-900 mb-2 pr-8">
            {title}
          </DialogPrimitive.Title>

          {/* Description - optional subheading */}
          {description && (
            <DialogPrimitive.Description className="text-sm text-gray-600 mb-4">
              {description}
            </DialogPrimitive.Description>
          )}

          {/* Body content */}
          <div className="text-gray-700 text-sm">{children}</div>

          {/* Footer - typically action buttons */}
          {footer && (
            <div className="mt-6 flex justify-end gap-3">{footer}</div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export default Dialog;
