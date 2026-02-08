/**
 * Form Harness - Startup Modern Style
 *
 * Clean, approachable form design with clear labels and focus states.
 * Yellow-600 for focus rings and primary actions.
 * Rounded corners, comfortable padding.
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

  const inputBaseClasses = "block w-full px-4 py-2.5 border rounded-md bg-white text-gray-900 placeholder-gray-400 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600";

  return (
    <form
      className={`space-y-6 font-sans ${className}`}
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Standard Text Input */}
      <div className="space-y-2">
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
          className={`${inputBaseClasses} border-gray-300`}
        />
        <p className="text-sm text-gray-500">
          Your name as it appears on official documents.
        </p>
      </div>

      {/* Email Input */}
      <div className="space-y-2">
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
          className={`${inputBaseClasses} border-gray-300`}
        />
      </div>

      {/* Input with Error State */}
      <div className="space-y-2">
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
          className={`${inputBaseClasses} border-red-400 focus:ring-red-500 focus:border-red-500`}
        />
        <p id="username-error" className="text-sm text-red-600 flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Username cannot contain spaces.
        </p>
      </div>

      {/* Disabled Input */}
      <div className="space-y-2">
        <label
          htmlFor="form-readonly"
          className="block text-sm font-medium text-gray-400"
        >
          Account ID (read-only)
        </label>
        <input
          type="text"
          id="form-readonly"
          name="readonly"
          defaultValue="ACC-12345"
          disabled
          className="block w-full px-4 py-2.5 border border-gray-200 rounded-md bg-gray-100 text-gray-500 cursor-not-allowed"
        />
      </div>

      {/* Select Dropdown */}
      <div className="space-y-2">
        <label
          htmlFor="form-country"
          className="block text-sm font-medium text-gray-700"
        >
          Country
        </label>
        <select
          id="form-country"
          name="country"
          className={`${inputBaseClasses} border-gray-300`}
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
          className={`${inputBaseClasses} border-gray-300 resize-y`}
        />
        <p className="text-sm text-gray-500">
          Maximum 500 characters.
        </p>
      </div>

      {/* Checkbox */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="form-terms"
          name="terms"
          className="mt-1 h-4 w-4 rounded border-gray-300 text-yellow-600 focus:ring-yellow-600 focus:ring-2 focus:ring-offset-2 cursor-pointer"
        />
        <label htmlFor="form-terms" className="text-sm text-gray-700">
          I agree to the{" "}
          <a href="#" className="text-yellow-700 hover:text-yellow-800 underline underline-offset-2">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-yellow-700 hover:text-yellow-800 underline underline-offset-2">
            Privacy Policy
          </a>
        </label>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full px-6 py-3 bg-yellow-600 text-white font-medium rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 transition-all duration-150 shadow-sm hover:shadow-md"
        >
          Submit Form
        </button>
      </div>

      {children}
    </form>
  );
}

export type { FormProps as Props };
