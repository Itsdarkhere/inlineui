/**
 * Dialog Component - Electric Chaos Style
 *
 * LOUD. BOLD. UNAPOLOGETIC. This dialog EXPLODES onto the screen with neon
 * borders, glowing shadows, and bouncy spring animations. Pure black background
 * with electric color accents that demand attention.
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
        {/* Overlay - deep black with purple tint, feels like entering another dimension */}
        <DialogPrimitive.Overlay
          className={`
            fixed inset-0 bg-black/80 backdrop-blur-sm
            data-[state=open]:animate-in data-[state=closed]:animate-out
            data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
            duration-300
            ${overlayClassName}
          `}
        />

        {/* Content - pure black with neon border and explosive entrance */}
        <DialogPrimitive.Content
          className={`
            fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            w-full max-w-md
            bg-black
            border-2 border-purple-500
            rounded-2xl
            shadow-[0_0_40px_rgba(139,92,246,0.5),0_0_80px_rgba(139,92,246,0.2)]
            p-6
            font-['Space_Grotesk',system-ui,sans-serif]
            focus:outline-none
            data-[state=open]:animate-in data-[state=closed]:animate-out
            data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
            data-[state=closed]:zoom-out-75 data-[state=open]:zoom-in-75
            data-[state=closed]:slide-out-to-bottom-4 data-[state=open]:slide-in-from-bottom-8
            duration-400
            ${contentClassName}
          `}
          style={{
            animationTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          {/* Decorative gradient line at top */}
          <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 rounded-b-full" />

          {/* Close button - neon with glow on hover */}
          <DialogPrimitive.Close
            className="
              absolute top-4 right-4
              w-8 h-8
              flex items-center justify-center
              text-gray-400 hover:text-white
              bg-gray-900 hover:bg-pink-600
              border border-gray-700 hover:border-pink-500
              rounded-xl
              transition-all duration-300
              hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]
              hover:scale-110
              focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black
            "
            aria-label="Close"
          >
            <svg
              width="14"
              height="14"
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

          {/* Title - BOLD, gradient text, uncomfortable large */}
          <DialogPrimitive.Title
            className="
              text-2xl font-black tracking-tight pr-10
              bg-gradient-to-r from-white via-purple-200 to-cyan-200
              bg-clip-text text-transparent
              font-['Unbounded',system-ui,sans-serif]
            "
          >
            {title}
          </DialogPrimitive.Title>

          {/* Description - acid green accent */}
          {description && (
            <DialogPrimitive.Description className="mt-3 text-sm text-gray-400 leading-relaxed">
              {description}
            </DialogPrimitive.Description>
          )}

          {/* Body content - white text that cuts through */}
          <div className="mt-5 text-sm text-white leading-relaxed">
            {children}
          </div>

          {/* Footer - gradient border separator */}
          {footer && (
            <div className="mt-6 pt-4 border-t border-gray-800 flex justify-end gap-3">
              {footer}
            </div>
          )}

          {/* Corner accent decorations */}
          <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden rounded-bl-2xl pointer-events-none">
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-xl" />
          </div>
          <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden rounded-br-2xl pointer-events-none">
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-tl from-pink-500/20 to-transparent rounded-full blur-xl" />
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export default Dialog;
