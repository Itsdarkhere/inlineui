/**
 * Dialog - Editorial Style
 *
 * Modal dialogs with publication-level refinement.
 * Sharp corners, serif title, subtle overlay.
 * Fast fade transitions, no bounce or spring.
 */

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export interface DialogProps {
  trigger: React.ReactNode;
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  contentClassName?: string;
  overlayClassName?: string;
}

/**
 * Dialog component with editorial styling.
 * Sharp, refined, lets content speak.
 */
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
      {/* Trigger */}
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        {/* Overlay - subtle darkening */}
        <DialogPrimitive.Overlay
          className={`
            fixed inset-0
            bg-zinc-900/40
            data-[state=open]:animate-in data-[state=closed]:animate-out
            data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
            duration-150
            ${overlayClassName}
          `}
        />

        {/* Content - sharp, clean */}
        <DialogPrimitive.Content
          className={`
            fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            w-full max-w-lg
            bg-white
            border border-zinc-200
            rounded-none
            shadow-xl
            p-8
            font-['Inter',system-ui,sans-serif]
            focus:outline-none
            data-[state=open]:animate-in data-[state=closed]:animate-out
            data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
            data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
            duration-150
            ${contentClassName}
          `}
        >
          {/* Close button */}
          <DialogPrimitive.Close
            className={`
              absolute top-6 right-6
              text-zinc-400 hover:text-zinc-600
              focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-2
              transition-colors duration-150
            `}
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

          {/* Title - serif for editorial voice */}
          <DialogPrimitive.Title className="font-['Playfair_Display',Georgia,serif] text-2xl font-bold text-zinc-900 mb-2">
            {title}
          </DialogPrimitive.Title>

          {/* Description */}
          {description && (
            <DialogPrimitive.Description className="text-sm text-zinc-500 mb-6 leading-relaxed">
              {description}
            </DialogPrimitive.Description>
          )}

          {/* Body content */}
          <div className="text-zinc-700 leading-relaxed">{children}</div>

          {/* Footer */}
          {footer && (
            <div className="mt-8 pt-6 border-t border-zinc-100 flex justify-end gap-3">
              {footer}
            </div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export default Dialog;
