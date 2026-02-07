/**
 * Form Component - Electric Chaos Style
 *
 * AGGRESSIVE FORMS THAT DEMAND INPUT. Pure black backgrounds with neon
 * explosions. Electric purple, acid green, hot pink, cyan, orange. Thick
 * glowing borders, heavy border radius, bouncy 300-500ms animations.
 * All-caps labels. Shake on error. Pulse on focus. Nothing subtle.
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

  const inputBaseStyle = {
    boxShadow: "0 0 20px rgba(139, 92, 246, 0.3), inset 0 0 30px rgba(0, 0, 0, 0.5)",
    transition: "all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)",
  };

  const inputFocusClass =
    "focus:outline-none focus:border-[#EC4899] focus:scale-[1.02]";

  const labelClass =
    "block text-xs font-bold uppercase tracking-[0.3em] text-[#8B5CF6] mb-3";

  const helperClass = "text-xs uppercase tracking-wider text-[#06B6D4] mt-3 font-medium";

  return (
    <form
      className={`space-y-10 font-[Space_Grotesk,system-ui,sans-serif] p-8 rounded-3xl ${className}`}
      style={{
        background: "linear-gradient(180deg, #0a0a0a 0%, #1a0a2e 100%)",
        boxShadow: "0 0 60px rgba(139, 92, 246, 0.2), 0 0 120px rgba(236, 72, 153, 0.1)",
      }}
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Standard Text Input */}
      <div className="group">
        <label htmlFor="form-name" className={labelClass}>
          FULL NAME
        </label>
        <input
          type="text"
          id="form-name"
          name="name"
          placeholder="ENTER YOUR FULL NAME"
          className={`block w-full px-5 py-4 bg-black/50 text-white text-lg font-medium border-2 border-[#8B5CF6] rounded-2xl placeholder:text-[#8B5CF6]/40 placeholder:uppercase ${inputFocusClass}`}
          style={inputBaseStyle}
        />
        <p className={helperClass}>YOUR NAME AS IT APPEARS ON OFFICIAL DOCS</p>
      </div>

      {/* Email Input */}
      <div className="group">
        <label htmlFor="form-email" className={labelClass}>
          EMAIL ADDRESS
        </label>
        <input
          type="email"
          id="form-email"
          name="email"
          placeholder="YOU@EXAMPLE.COM"
          className={`block w-full px-5 py-4 bg-black/50 text-white text-lg font-medium border-2 border-[#06B6D4] rounded-2xl placeholder:text-[#06B6D4]/40 placeholder:uppercase ${inputFocusClass}`}
          style={{
            ...inputBaseStyle,
            boxShadow: "0 0 20px rgba(6, 182, 212, 0.3), inset 0 0 30px rgba(0, 0, 0, 0.5)",
          }}
        />
      </div>

      {/* Input with Error State */}
      <div className="group">
        <label htmlFor="form-username" className="block text-xs font-bold uppercase tracking-[0.3em] text-[#EC4899] mb-3">
          USERNAME
        </label>
        <input
          type="text"
          id="form-username"
          name="username"
          defaultValue="INVALID USER"
          aria-invalid="true"
          aria-describedby="username-error"
          className="block w-full px-5 py-4 bg-black/50 text-white text-lg font-medium border-3 border-[#EC4899] rounded-2xl focus:outline-none animate-[shake_0.5s_ease-in-out]"
          style={{
            boxShadow: "0 0 30px rgba(236, 72, 153, 0.5), inset 0 0 30px rgba(0, 0, 0, 0.5)",
            borderWidth: "3px",
          }}
        />
        <p
          id="username-error"
          className="text-sm font-bold uppercase tracking-wider text-[#EC4899] mt-3 flex items-center gap-2"
        >
          <span
            className="inline-block w-2 h-2 rounded-full bg-[#EC4899] animate-pulse"
            style={{ boxShadow: "0 0 10px #EC4899" }}
          />
          USERNAME CANNOT CONTAIN SPACES
        </p>
      </div>

      {/* Disabled Input */}
      <div className="group opacity-50">
        <label
          htmlFor="form-readonly"
          className="block text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-3"
        >
          ACCOUNT ID (READ-ONLY)
        </label>
        <input
          type="text"
          id="form-readonly"
          name="readonly"
          defaultValue="CHAOS-12345"
          disabled
          className="block w-full px-5 py-4 bg-black/30 text-gray-500 text-lg font-medium border-2 border-gray-700 rounded-2xl cursor-not-allowed"
        />
      </div>

      {/* Select Dropdown */}
      <div className="group">
        <label htmlFor="form-country" className={labelClass}>
          COUNTRY
        </label>
        <select
          id="form-country"
          name="country"
          className={`block w-full px-5 py-4 bg-black/50 text-white text-lg font-medium border-2 border-[#84CC16] rounded-2xl appearance-none ${inputFocusClass}`}
          style={{
            ...inputBaseStyle,
            boxShadow: "0 0 20px rgba(132, 204, 22, 0.3), inset 0 0 30px rgba(0, 0, 0, 0.5)",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2384CC16'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 1rem center",
            backgroundSize: "1.5rem",
            paddingRight: "3rem",
          }}
        >
          <option value="">SELECT A COUNTRY</option>
          <option value="us">UNITED STATES</option>
          <option value="uk">UNITED KINGDOM</option>
          <option value="ca">CANADA</option>
          <option value="au">AUSTRALIA</option>
        </select>
      </div>

      {/* Textarea */}
      <div className="group">
        <label htmlFor="form-bio" className={labelClass}>
          BIO
        </label>
        <textarea
          id="form-bio"
          name="bio"
          rows={4}
          placeholder="TELL US ABOUT YOURSELF..."
          className={`block w-full px-5 py-4 bg-black/50 text-white text-lg font-medium border-2 border-[#F97316] rounded-2xl resize-y placeholder:text-[#F97316]/40 placeholder:uppercase ${inputFocusClass}`}
          style={{
            ...inputBaseStyle,
            boxShadow: "0 0 20px rgba(249, 115, 22, 0.3), inset 0 0 30px rgba(0, 0, 0, 0.5)",
          }}
        />
        <p className="text-xs uppercase tracking-wider text-[#F97316] mt-3 font-medium">
          MAXIMUM 500 CHARACTERS
        </p>
      </div>

      {/* Checkbox */}
      <div className="flex items-start gap-4">
        <input
          type="checkbox"
          id="form-terms"
          name="terms"
          className="mt-1.5 h-6 w-6 rounded-lg border-2 border-[#8B5CF6] bg-black/50 cursor-pointer accent-[#8B5CF6] transition-transform duration-300 hover:scale-110"
          style={{
            boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)",
          }}
        />
        <label htmlFor="form-terms" className="text-base text-white leading-7 font-medium">
          I AGREE TO THE{" "}
          <a
            href="#"
            className="text-[#06B6D4] font-bold transition-all duration-300 hover:text-[#EC4899]"
            style={{ textShadow: "0 0 10px rgba(6, 182, 212, 0.5)" }}
          >
            TERMS OF SERVICE
          </a>{" "}
          AND{" "}
          <a
            href="#"
            className="text-[#84CC16] font-bold transition-all duration-300 hover:text-[#EC4899]"
            style={{ textShadow: "0 0 10px rgba(132, 204, 22, 0.5)" }}
          >
            PRIVACY POLICY
          </a>
        </label>
      </div>

      {/* Submit Button */}
      <div className="pt-6">
        <button
          type="submit"
          className="w-full px-8 py-5 text-lg font-bold uppercase tracking-widest text-black rounded-2xl transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] focus:outline-none"
          style={{
            background: "linear-gradient(135deg, #8B5CF6, #EC4899, #F97316)",
            boxShadow: "0 0 40px rgba(139, 92, 246, 0.5), 0 0 80px rgba(236, 72, 153, 0.3)",
          }}
        >
          SUBMIT FORM
        </button>
      </div>

      {children}

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
      `}</style>
    </form>
  );
}

export type { FormProps as Props };
