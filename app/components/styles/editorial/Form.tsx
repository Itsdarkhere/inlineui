/**
 * Form - Editorial Style
 *
 * Forms with editorial restraint and typographic care.
 * Sharp corners, thin borders, yellow-600 focus states.
 * Labels in small caps, generous spacing.
 */

import type { FormEvent, ReactNode } from "react";

export interface FormProps {
  className?: string;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  children?: ReactNode;
}

/**
 * Form composition with editorial styling.
 * Refined inputs, clear hierarchy, yellow accent on focus.
 */
export function Form({ className = "", onSubmit, children }: FormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(event);
  };

  // Common input classes
  const inputBaseClasses = [
    "block w-full",
    "px-4 py-2.5",
    "border border-zinc-300",
    "rounded-none",
    "bg-white text-zinc-900",
    "placeholder-zinc-400",
    "font-['Inter',system-ui,sans-serif]",
    "text-base",
    "transition-colors duration-150",
    "focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600",
  ].join(" ");

  const labelClasses = [
    "block",
    "text-xs font-semibold uppercase tracking-widest",
    "text-zinc-600",
    "font-['Inter',system-ui,sans-serif]",
  ].join(" ");

  const helperClasses = "text-sm text-zinc-500 leading-relaxed";

  return (
    <form
      className={`space-y-6 font-['Inter',system-ui,sans-serif] ${className}`}
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Standard Text Input */}
      <div className="space-y-2">
        <label htmlFor="form-name" className={labelClasses}>
          Full Name
        </label>
        <input
          type="text"
          id="form-name"
          name="name"
          placeholder="Enter your full name"
          className={inputBaseClasses}
        />
        <p className={helperClasses}>
          Your name as it appears on official documents.
        </p>
      </div>

      {/* Email Input */}
      <div className="space-y-2">
        <label htmlFor="form-email" className={labelClasses}>
          Email Address
        </label>
        <input
          type="email"
          id="form-email"
          name="email"
          placeholder="you@example.com"
          className={inputBaseClasses}
        />
      </div>

      {/* Input with Error State */}
      <div className="space-y-2">
        <label htmlFor="form-username" className={labelClasses}>
          Username
        </label>
        <input
          type="text"
          id="form-username"
          name="username"
          defaultValue="invalid user"
          aria-invalid="true"
          aria-describedby="username-error"
          className={[
            "block w-full",
            "px-4 py-2.5",
            "border-2 border-zinc-900",
            "rounded-none",
            "bg-white text-zinc-900",
            "font-['Inter',system-ui,sans-serif]",
            "text-base",
            "focus:outline-none focus:border-zinc-900",
          ].join(" ")}
        />
        <p id="username-error" className="text-sm text-zinc-900 font-medium">
          Username cannot contain spaces.
        </p>
      </div>

      {/* Disabled Input */}
      <div className="space-y-2">
        <label htmlFor="form-readonly" className={`${labelClasses} text-zinc-400`}>
          Account ID (read-only)
        </label>
        <input
          type="text"
          id="form-readonly"
          name="readonly"
          defaultValue="ACC-12345"
          disabled
          className={[
            "block w-full",
            "px-4 py-2.5",
            "border border-zinc-200",
            "rounded-none",
            "bg-zinc-100 text-zinc-400",
            "cursor-not-allowed",
            "font-['Inter',system-ui,sans-serif]",
          ].join(" ")}
        />
      </div>

      {/* Select Dropdown */}
      <div className="space-y-2">
        <label htmlFor="form-country" className={labelClasses}>
          Country
        </label>
        <select
          id="form-country"
          name="country"
          className={inputBaseClasses}
        >
          <option value="">Select a country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
          <option value="au">Australia</option>
        </select>
      </div>

      {/* Textarea */}
      <div className="space-y-2">
        <label htmlFor="form-bio" className={labelClasses}>
          Bio
        </label>
        <textarea
          id="form-bio"
          name="bio"
          rows={4}
          placeholder="Tell us about yourself..."
          className={`${inputBaseClasses} resize-y`}
        />
        <p className={helperClasses}>Maximum 500 characters.</p>
      </div>

      {/* Checkbox */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="form-terms"
          name="terms"
          className="mt-1 h-4 w-4 border-zinc-300 text-yellow-600 focus:ring-yellow-600 rounded-none"
        />
        <label htmlFor="form-terms" className="text-sm text-zinc-700 leading-relaxed">
          I agree to the{" "}
          <a
            href="#"
            className="text-zinc-900 underline decoration-yellow-600 decoration-2 underline-offset-2 hover:text-yellow-600 transition-colors"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-zinc-900 underline decoration-yellow-600 decoration-2 underline-offset-2 hover:text-yellow-600 transition-colors"
          >
            Privacy Policy
          </a>
        </label>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          className={[
            "w-full",
            "px-6 py-3",
            "bg-zinc-900 text-white",
            "text-sm font-medium uppercase tracking-widest",
            "rounded-none border border-zinc-900",
            "hover:bg-yellow-600 hover:border-yellow-600",
            "transition-colors duration-150",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-2",
          ].join(" ")}
        >
          Submit Form
        </button>
      </div>

      {children}
    </form>
  );
}

export type { FormProps as Props };
