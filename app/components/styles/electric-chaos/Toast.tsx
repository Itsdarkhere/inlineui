/**
 * Toast Component - Electric Chaos Style
 *
 * Notifications that SCREAM for attention. Each variant has its own
 * neon signature. Bouncy entrance, glowing borders, gradient accents.
 * You WILL notice these toasts.
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

/** Get variant-specific styles - NEON colors that pop */
function getVariantStyles(variant: ToastVariant): {
  border: string;
  glow: string;
  icon: string;
  gradient: string;
} {
  switch (variant) {
    case "success":
      return {
        border: "border-lime-400",
        glow: "shadow-[0_0_30px_rgba(132,204,22,0.4)]",
        icon: "text-lime-400",
        gradient: "from-lime-400/20 to-transparent",
      };
    case "error":
      return {
        border: "border-pink-500",
        glow: "shadow-[0_0_30px_rgba(236,72,153,0.4)]",
        icon: "text-pink-500",
        gradient: "from-pink-500/20 to-transparent",
      };
    case "warning":
      return {
        border: "border-orange-500",
        glow: "shadow-[0_0_30px_rgba(249,115,22,0.4)]",
        icon: "text-orange-500",
        gradient: "from-orange-500/20 to-transparent",
      };
    default:
      return {
        border: "border-purple-500",
        glow: "shadow-[0_0_30px_rgba(139,92,246,0.4)]",
        icon: "text-purple-500",
        gradient: "from-purple-500/20 to-transparent",
      };
  }
}

/** Get variant-specific icon - bold, geometric */
function getVariantIcon(variant: ToastVariant): React.ReactNode {
  const baseClass = "w-5 h-5 flex-shrink-0";
  const styles = getVariantStyles(variant);

  switch (variant) {
    case "success":
      return (
        <svg
          className={`${baseClass} ${styles.icon}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
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
          className={`${baseClass} ${styles.icon}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
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
          className={`${baseClass} ${styles.icon}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M12 3l9 16H3L12 3z"
          />
        </svg>
      );
    default:
      return (
        <svg
          className={`${baseClass} ${styles.icon}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
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

/** Get position styles for viewport */
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
  const styles = getVariantStyles(variant);

  return (
    <ToastPrimitive.Root
      duration={duration || undefined}
      onOpenChange={(open) => {
        if (!open && onDismiss) {
          onDismiss();
        }
      }}
      className={`
        relative
        flex items-start gap-4
        p-4
        bg-black
        border-2 ${styles.border}
        rounded-xl
        ${styles.glow}
        font-['Space_Grotesk',system-ui,sans-serif]
        overflow-hidden
        data-[state=open]:animate-in data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
        data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-right-full
        data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
        duration-400
      `}
      style={{
        animationTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      {/* Background gradient accent */}
      <div className={`absolute inset-0 bg-gradient-to-r ${styles.gradient} pointer-events-none`} />

      {/* Icon container with glow */}
      <div className="relative mt-0.5">
        <div className="relative z-10">
          {getVariantIcon(variant)}
        </div>
      </div>

      {/* Content */}
      <div className="relative flex-1 min-w-0">
        <ToastPrimitive.Title className="text-sm font-bold text-white uppercase tracking-wide">
          {title}
        </ToastPrimitive.Title>
        {description && (
          <ToastPrimitive.Description className="mt-1 text-sm text-gray-400 leading-relaxed">
            {description}
          </ToastPrimitive.Description>
        )}
      </div>

      {/* Action button - neon outline style */}
      {action && (
        <ToastPrimitive.Action altText={action.label} asChild>
          <button
            onClick={action.onClick}
            className={`
              relative flex-shrink-0
              px-3 py-1.5
              text-xs font-bold uppercase tracking-wider
              ${styles.icon}
              bg-transparent
              border ${styles.border}
              rounded-lg
              hover:bg-white/10
              transition-all duration-300
              focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black
            `}
          >
            {action.label}
          </button>
        </ToastPrimitive.Action>
      )}

      {/* Close button - circular with hover glow */}
      <ToastPrimitive.Close
        className="
          relative flex-shrink-0
          w-7 h-7
          flex items-center justify-center
          text-gray-500 hover:text-white
          bg-gray-900 hover:bg-pink-600
          border border-gray-700 hover:border-pink-500
          rounded-lg
          transition-all duration-300
          hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]
          hover:scale-110
          focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black
        "
        aria-label="Close"
      >
        <svg
          width="12"
          height="12"
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

        {/* Viewport - positioned with generous spacing */}
        <ToastPrimitive.Viewport
          className={`
            fixed flex flex-col gap-3
            w-[400px] max-w-[calc(100vw-3rem)]
            z-50
            ${getPositionStyles(position)}
          `}
        />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
}

export { Toast };
export default ToastProvider;
