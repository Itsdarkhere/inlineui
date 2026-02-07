/**
 * Form Component - Minimal Clean Style
 *
 * Swiss-inspired form design with restrained styling. Pure white backgrounds,
 * subtle borders, near-black text. Borders over shadows. Fast 100ms transitions.
 * Every element earns its place through function, not decoration.
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

  const inputBaseClass =
    "block w-full px-3 py-2.5 bg-white text-[#111] border border-gray-200 rounded transition-colors duration-100 placeholder:text-gray-400 focus:outline-none focus:border-[#111]";

  const labelClass = "block text-sm font-medium text-[#111] mb-2";

  const helperClass = "text-xs text-gray-500 mt-2";

  return (
    <form
      className={`space-y-8 font-[Inter,system-ui,sans-serif] ${className}`}
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Standard Text Input */}
      <div>
        <label htmlFor="form-name" className={labelClass}>
          Full Name
        </label>
        <input
          type="text"
          id="form-name"
          name="name"
          placeholder="Enter your full name"
          className={inputBaseClass}
        />
        <p className={helperClass}>
          Your name as it appears on official documents.
        </p>
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="form-email" className={labelClass}>
          Email Address
        </label>
        <input
          type="email"
          id="form-email"
          name="email"
          placeholder="you@example.com"
          className={inputBaseClass}
        />
      </div>

      {/* Input with Error State */}
      <div>
        <label htmlFor="form-username" className={labelClass}>
          Username
        </label>
        <input
          type="text"
          id="form-username"
          name="username"
          defaultValue="invalid user"
          aria-invalid="true"
          aria-describedby="username-error"
          className="block w-full px-3 py-2.5 bg-white text-[#111] border border-red-600 rounded transition-colors duration-100 placeholder:text-gray-400 focus:outline-none focus:border-red-600"
        />
        <p id="username-error" className="text-xs text-red-600 mt-2">
          Username cannot contain spaces.
        </p>
      </div>

      {/* Disabled Input */}
      <div>
        <label htmlFor="form-readonly" className="block text-sm font-medium text-gray-400 mb-2">
          Account ID (read-only)
        </label>
        <input
          type="text"
          id="form-readonly"
          name="readonly"
          defaultValue="ACC-12345"
          disabled
          className="block w-full px-3 py-2.5 bg-gray-50 text-gray-400 border border-gray-100 rounded cursor-not-allowed"
        />
      </div>

      {/* Select Dropdown */}
      <div>
        <label htmlFor="form-country" className={labelClass}>
          Country
        </label>
        <select
          id="form-country"
          name="country"
          className={`${inputBaseClass} appearance-none bg-no-repeat bg-right pr-10`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23999'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
            backgroundSize: "1.25rem",
            backgroundPosition: "right 0.75rem center",
          }}
        >
          <option value="">Select a country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
          <option value="au">Australia</option>
        </select>
      </div>

      {/* Textarea */}
      <div>
        <label htmlFor="form-bio" className={labelClass}>
          Bio
        </label>
        <textarea
          id="form-bio"
          name="bio"
          rows={4}
          placeholder="Tell us about yourself..."
          className={`${inputBaseClass} resize-y`}
        />
        <p className={helperClass}>
          Maximum 500 characters.
        </p>
      </div>

      {/* Checkbox */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="form-terms"
          name="terms"
          className="mt-1 h-4 w-4 rounded border-gray-300 text-[#111] focus:ring-0 focus:ring-offset-0 accent-[#111]"
        />
        <label htmlFor="form-terms" className="text-sm text-[#111] leading-6">
          I agree to the{" "}
          <a
            href="#"
            className="underline underline-offset-2 transition-opacity duration-100 hover:opacity-60"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="underline underline-offset-2 transition-opacity duration-100 hover:opacity-60"
          >
            Privacy Policy
          </a>
        </label>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          className="w-full px-4 py-3 bg-[#111] text-white text-sm font-medium rounded transition-opacity duration-100 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#111] focus:ring-offset-2"
        >
          Submit Form
        </button>
      </div>

      {children}
    </form>
  );
}

export type { FormProps as Props };
