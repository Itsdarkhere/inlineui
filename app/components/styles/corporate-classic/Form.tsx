/**
 * Form - Corporate Classic Style
 *
 * Professional form layout with clean inputs and clear validation.
 * Yellow-600 focus rings, gray borders, Inter font labels.
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
 * Corporate Classic Form composition.
 * Professional styling with yellow-600 focus states and clear validation.
 */
export function Form({ className = "", onSubmit, children }: FormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(event);
  };

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
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          type="text"
          id="form-name"
          name="name"
          placeholder="Enter your full name"
          className="block w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-colors"
        />
        <p className="text-sm text-gray-500">
          Your name as it appears on official documents.
        </p>
      </div>

      {/* Email Input */}
      <div className="space-y-1.5">
        <label
          htmlFor="form-email"
          className="block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>
        <input
          type="email"
          id="form-email"
          name="email"
          placeholder="you@example.com"
          className="block w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-colors"
        />
      </div>

      {/* Input with Error State */}
      <div className="space-y-1.5">
        <label
          htmlFor="form-username"
          className="block text-sm font-medium text-gray-700"
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
          className="block w-full px-3 py-2 border border-red-500 rounded bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
        />
        <p id="username-error" className="text-sm text-red-600">
          Username cannot contain spaces.
        </p>
      </div>

      {/* Disabled Input */}
      <div className="space-y-1.5">
        <label
          htmlFor="form-readonly"
          className="block text-sm font-medium text-gray-500"
        >
          Account ID (read-only)
        </label>
        <input
          type="text"
          id="form-readonly"
          name="readonly"
          defaultValue="ACC-12345"
          disabled
          className="block w-full px-3 py-2 border border-gray-200 rounded bg-gray-100 text-gray-500 cursor-not-allowed"
        />
      </div>

      {/* Select Dropdown */}
      <div className="space-y-1.5">
        <label
          htmlFor="form-country"
          className="block text-sm font-medium text-gray-700"
        >
          Country
        </label>
        <select
          id="form-country"
          name="country"
          className="block w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-colors"
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
          className="block text-sm font-medium text-gray-700"
        >
          Bio
        </label>
        <textarea
          id="form-bio"
          name="bio"
          rows={4}
          placeholder="Tell us about yourself..."
          className="block w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-900 placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-colors"
        />
        <p className="text-sm text-gray-500">
          Maximum 500 characters.
        </p>
      </div>

      {/* Checkbox */}
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="form-terms"
          name="terms"
          className="mt-1 h-4 w-4 rounded border-gray-300 text-yellow-600 focus:ring-yellow-600"
        />
        <label htmlFor="form-terms" className="text-sm text-gray-700">
          I agree to the{" "}
          <a href="#" className="text-yellow-700 underline underline-offset-2 hover:text-yellow-800">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-yellow-700 underline underline-offset-2 hover:text-yellow-800">
            Privacy Policy
          </a>
        </label>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full px-4 py-2.5 bg-yellow-600 text-white font-medium rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 transition-colors"
        >
          Submit Form
        </button>
      </div>

      {children}
    </form>
  );
}

export type { FormProps as Props };
