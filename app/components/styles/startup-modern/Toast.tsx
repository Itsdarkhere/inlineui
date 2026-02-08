/**
 * Toast - Startup Modern Style
 *
 * Clean notification toasts with subtle shadows.
 * Semantic colors for variants, yellow-600 for actions.
 */

import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";

/** Toast variant types */
export type ToastVariant = "default" | "success" | "error" | "warning";

/** Props for individual toast */
export interface ToastProps {
  /** Unique identifier for the toast */
  id: string;
  /** Title of the toast */
  title: string;
  /** Optional description text */
  description?: string;
  /** Visual variant of the toast */
  variant?: ToastVariant;
  /** Duration in ms before auto-dismiss (0 = no auto-dismiss) */
  duration?: number;
  /** Optional action button */
  action?: {
    label: string;
    onClick: () => void;
  };
  /** Callback when toast is dismissed */
  onDismiss?: () => void;
}

/** Props for the ToastProvider wrapper */
export interface ToastProviderProps {
  /** Child components that can trigger toasts */
  children: React.ReactNode;
  /** Position of the toast viewport */
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

/** Context for managing toasts */
interface ToastContextType {
  toasts: ToastProps[];
  addToast: (toast: Omit<ToastProps, "id">) => string;
  removeToast: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextType | null>(null);

/** Hook to access toast functions */
export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

/** Get variant-specific styles */
function getVariantStyles(variant: ToastVariant): string {
  switch (variant) {
    case "success":
      return "border-green-200 bg-green-50";
    case "error":
      return "border-red-200 bg-red-50";
    case "warning":
      return "border-amber-200 bg-amber-50";
    default:
      return "border-gray-200 bg-white";
  }
}

/** Get variant-specific icon */
function getVariantIcon(variant: ToastVariant): React.ReactNode {
  const iconClass = "w-5 h-5";

  switch (variant) {
    case "success":
      return (
        <svg
          className={`${iconClass} text-green-500`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      );
    case "error":
      return (
        <svg
          className={`${iconClass} text-red-500`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      );
    case "warning":
      return (
        <svg
          className={`${iconClass} text-amber-500`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      );
    default:
      return (
        <svg
          className={`${iconClass} text-gray-500`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
  }
}

/** Get position styles for viewport */
function getPositionStyles(
  position: ToastProviderProps["position"]
): string {
  switch (position) {
    case "top-left":
      return "top-4 left-4";
    case "bottom-left":
      return "bottom-4 left-4";
    case "bottom-right":
      return "bottom-4 right-4";
    case "top-right":
    default:
      return "top-4 right-4";
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
      className={`flex items-start gap-3 p-4 border rounded-lg shadow-md ${getVariantStyles(variant)}`}
    >
      {/* Variant icon */}
      <div className="flex-shrink-0">{getVariantIcon(variant)}</div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <ToastPrimitive.Title className="text-sm font-medium text-gray-900">
          {title}
        </ToastPrimitive.Title>
        {description && (
          <ToastPrimitive.Description className="mt-1 text-sm text-gray-600">
            {description}
          </ToastPrimitive.Description>
        )}
      </div>

      {/* Action button */}
      {action && (
        <ToastPrimitive.Action altText={action.label} asChild>
          <button
            onClick={action.onClick}
            className="flex-shrink-0 text-sm font-medium text-yellow-700 hover:text-yellow-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-2 rounded transition-colors duration-150"
          >
            {action.label}
          </button>
        </ToastPrimitive.Action>
      )}

      {/* Close button */}
      <ToastPrimitive.Close
        className="flex-shrink-0 text-gray-400 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-2 rounded transition-colors duration-150"
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

/** Toast Provider - wraps app and provides toast context */
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

        {/* Viewport - container for toasts */}
        <ToastPrimitive.Viewport
          className={`fixed flex flex-col gap-3 w-96 max-w-[calc(100vw-2rem)] z-50 ${getPositionStyles(position)}`}
        />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
}

export { Toast };
export default ToastProvider;
