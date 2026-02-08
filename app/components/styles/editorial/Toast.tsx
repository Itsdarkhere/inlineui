/**
 * Toast - Editorial Style
 *
 * Notification toasts with publication-level refinement.
 * Sharp corners, thin borders, left accent line.
 * Yellow-600 for info/warning, subtle animations.
 */

import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";

export type ToastVariant = "default" | "success" | "error" | "warning";

export interface ToastProps {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
  onDismiss?: () => void;
}

export interface ToastProviderProps {
  children: React.ReactNode;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

interface ToastContextType {
  toasts: ToastProps[];
  addToast: (toast: Omit<ToastProps, "id">) => string;
  removeToast: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextType | null>(null);

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

/** Get variant-specific styles - left border accent */
function getVariantStyles(variant: ToastVariant): string {
  switch (variant) {
    case "success":
      return "border-l-zinc-700 bg-white";
    case "error":
      return "border-l-zinc-900 bg-white";
    case "warning":
      return "border-l-yellow-600 bg-white";
    default:
      return "border-l-yellow-600 bg-white";
  }
}

/** Get variant-specific icon */
function getVariantIcon(variant: ToastVariant): React.ReactNode {
  const iconClass = "w-5 h-5";

  switch (variant) {
    case "success":
      return (
        <svg
          className={`${iconClass} text-zinc-700`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      );
    case "error":
      return (
        <svg
          className={`${iconClass} text-zinc-900`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      );
    case "warning":
      return (
        <svg
          className={`${iconClass} text-yellow-600`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      );
    default:
      return (
        <svg
          className={`${iconClass} text-yellow-600`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
  }
}

function getPositionStyles(
  position: ToastProviderProps["position"]
): string {
  switch (position) {
    case "top-left":
      return "top-6 left-6";
    case "bottom-left":
      return "bottom-6 left-6";
    case "bottom-right":
      return "bottom-6 right-6";
    case "top-right":
    default:
      return "top-6 right-6";
  }
}

/** Individual Toast component */
function Toast({
  id,
  title,
  description,
  variant = "default",
  duration = 5000,
  action,
  onDismiss,
}: ToastProps) {
  return (
    <ToastPrimitive.Root
      duration={duration || undefined}
      onOpenChange={(open) => {
        if (!open && onDismiss) {
          onDismiss();
        }
      }}
      className={`
        flex items-start gap-3 p-4
        border border-zinc-200 border-l-4
        rounded-none
        shadow-lg
        font-['Inter',system-ui,sans-serif]
        data-[state=open]:animate-in data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
        data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-right-full
        duration-150
        ${getVariantStyles(variant)}
      `}
    >
      {/* Variant icon */}
      <div className="flex-shrink-0">{getVariantIcon(variant)}</div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <ToastPrimitive.Title className="text-sm font-medium text-zinc-900">
          {title}
        </ToastPrimitive.Title>
        {description && (
          <ToastPrimitive.Description className="mt-1 text-sm text-zinc-500 leading-relaxed">
            {description}
          </ToastPrimitive.Description>
        )}
      </div>

      {/* Action button */}
      {action && (
        <ToastPrimitive.Action altText={action.label} asChild>
          <button
            onClick={action.onClick}
            className="flex-shrink-0 text-sm font-medium text-zinc-700 hover:text-zinc-900 underline decoration-yellow-600 underline-offset-2 focus:outline-none transition-colors duration-150"
          >
            {action.label}
          </button>
        </ToastPrimitive.Action>
      )}

      {/* Close button */}
      <ToastPrimitive.Close
        className="flex-shrink-0 text-zinc-400 hover:text-zinc-600 focus:outline-none transition-colors duration-150"
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
      </ToastPrimitive.Close>
    </ToastPrimitive.Root>
  );
}

/** Toast Provider */
export function ToastProvider({
  children,
  position = "top-right",
}: ToastProviderProps) {
  const [toasts, setToasts] = React.useState<ToastProps[]>([]);

  const addToast = React.useCallback((toast: Omit<ToastProps, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
    return id;
  }, []);

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      <ToastPrimitive.Provider>
        {children}

        {/* Render all active toasts */}
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onDismiss={() => removeToast(toast.id)}
          />
        ))}

        {/* Viewport */}
        <ToastPrimitive.Viewport
          className={`fixed flex flex-col gap-3 w-96 max-w-[calc(100vw-3rem)] z-50 ${getPositionStyles(position)}`}
        />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
}

export { Toast };
export default ToastProvider;
