/**
 * Form - Fintech Precision Style
 *
 * Bloomberg/trading platform inspired form design.
 * Dark inputs with yellow focus states, sharp corners, uppercase labels.
 */

import type { FormEvent, ReactNode } from "react";

/**
 * Props for the Form composition component.
 */
export interface FormProps {
  /** Optional class name to apply to the form element */
  className?: string;
  /** Handler called when the form is submitted */
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  /** Optional children to render at the end of the form */
  children?: ReactNode;
}

/**
 * Form composition showcasing labels, inputs, selects, textareas, and validation states.
 * Demonstrates a realistic form layout with various field types.
 */
export function Form({ className = "", onSubmit, children }: FormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(event);
  };

  // Shared input classes for fintech precision style
  const inputBaseClasses = [
    "block w-full px-3 py-2",
    "bg-neutral-950 text-neutral-100",
    "border border-neutral-700 rounded",
    "placeholder-neutral-600",
    "transition-all duration-100",
    "focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600",
  ].join(" ");

  return (
    <form
      className={`space-y-6 ${className}`}
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Standard Text Input */}
      <div className="space-y-1.5">
        <label
          htmlFor="form-name"
          className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider"
        >
          Full Name
        </label>
        <input
          type="text"
          id="form-name"
          name="name"
          placeholder="Enter your full name"
          className={inputBaseClasses}
        />
        <p className="text-xs text-neutral-500">
          Your name as it appears on official documents.
        </p>
      </div>

      {/* Email Input */}
      <div className="space-y-1.5">
        <label
          htmlFor="form-email"
          className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider"
        >
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
      <div className="space-y-1.5">
        <label
          htmlFor="form-username"
          className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider"
        >
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
            "block w-full px-3 py-2",
            "bg-neutral-950 text-neutral-100",
            "border border-red-600 rounded",
            "placeholder-neutral-600",
            "transition-all duration-100",
            "focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600",
          ].join(" ")}
        />
        <p id="username-error" className="text-xs text-red-400 uppercase tracking-wide">
          Error: Username cannot contain spaces.
        </p>
      </div>

      {/* Disabled Input */}
      <div className="space-y-1.5">
        <label
          htmlFor="form-readonly"
          className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider"
        >
          Account ID (read-only)
        </label>
        <input
          type="text"
          id="form-readonly"
          name="readonly"
          defaultValue="ACC-12345"
          disabled
          className={[
            "block w-full px-3 py-2",
            "bg-neutral-900 text-neutral-500",
            "border border-neutral-800 rounded",
            "cursor-not-allowed font-mono",
          ].join(" ")}
        />
      </div>

      {/* Select Dropdown */}
      <div className="space-y-1.5">
        <label
          htmlFor="form-country"
          className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider"
        >
          Country
        </label>
        <select
          id="form-country"
          name="country"
          className={[
            inputBaseClasses,
            "cursor-pointer",
          ].join(" ")}
        >
          <option value="">Select a country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
          <option value="au">Australia</option>
        </select>
      </div>

      {/* Textarea */}
      <div className="space-y-1.5">
        <label
          htmlFor="form-bio"
          className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider"
        >
          Bio
        </label>
        <textarea
          id="form-bio"
          name="bio"
          rows={4}
          placeholder="Tell us about yourself..."
          className={[
            inputBaseClasses,
            "resize-y",
          ].join(" ")}
        />
        <p className="text-xs text-neutral-500">
          Maximum 500 characters.
        </p>
      </div>

      {/* Checkbox */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="form-terms"
          name="terms"
          className="mt-0.5 h-4 w-4 rounded border-neutral-600 bg-neutral-950 text-yellow-600 focus:ring-yellow-600 focus:ring-offset-neutral-950"
        />
        <label htmlFor="form-terms" className="text-sm text-neutral-300">
          I agree to the{" "}
          <a href="#" className="text-yellow-500 underline underline-offset-2 hover:text-yellow-400">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-yellow-500 underline underline-offset-2 hover:text-yellow-400">
            Privacy Policy
          </a>
        </label>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full px-4 py-2.5 bg-yellow-600 text-neutral-950 font-semibold uppercase tracking-wider rounded hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-neutral-950 transition-colors duration-100"
        >
          Submit Form
        </button>
      </div>

      {children}
    </form>
  );
}

export type { FormProps as Props };
