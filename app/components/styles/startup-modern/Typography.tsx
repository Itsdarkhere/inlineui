/**
 * Typography Harness - Startup Modern Style
 *
 * Clean, confident typography using Inter font.
 * Comfortable reading experience with proper line heights.
 * Yellow-600 for links and accents.
 */

import type { ReactNode } from "react";

/**
 * Props for the Typography composition component.
 */
export interface TypographyProps {
  /** Optional class name to apply to the root container */
  className?: string;
  /** Optional children to render after the composition */
  children?: ReactNode;
}

/**
 * Typography composition showcasing all text elements.
 * Demonstrates headings, body text, links, code, blockquotes, and lists.
 */
export function Typography({ className = "", children }: TypographyProps) {
  return (
    <div className={`space-y-8 font-sans ${className}`}>
      {/* Headings Section */}
      <section className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
          Heading Level 1
        </h1>
        <h2 className="text-3xl font-semibold text-gray-900 tracking-tight leading-snug">
          Heading Level 2
        </h2>
        <h3 className="text-2xl font-semibold text-gray-900 leading-snug">
          Heading Level 3
        </h3>
        <h4 className="text-xl font-medium text-gray-800 leading-normal">
          Heading Level 4
        </h4>
      </section>

      {/* Body Text Section */}
      <section className="space-y-4">
        <p className="text-base text-gray-700 leading-relaxed">
          This is standard body text. It should be comfortable to read at length
          and work well for paragraphs of content. Good typography creates a
          pleasant reading experience through careful attention to line height,
          letter spacing, and font choice.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          This is small text, useful for captions, footnotes, or secondary
          information. It maintains readability while taking up less visual
          space.
        </p>
      </section>

      {/* Links Section */}
      <section className="space-y-2">
        <p className="text-base text-gray-700">
          Text with an{" "}
          <a
            href="#"
            className="text-yellow-700 hover:text-yellow-800 underline underline-offset-2 decoration-yellow-600/40 hover:decoration-yellow-600 transition-colors duration-150"
          >
            inline link
          </a>{" "}
          demonstrates how links appear within content.
        </p>
        <p className="text-base text-gray-700">
          <a
            href="#"
            className="text-yellow-700 hover:text-yellow-800 underline underline-offset-2 decoration-yellow-600/40 hover:decoration-yellow-600 transition-colors duration-150"
          >
            Standalone link example
          </a>
        </p>
      </section>

      {/* Inline Code Section */}
      <section className="space-y-2">
        <p className="text-base text-gray-700">
          Inline code like{" "}
          <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded-md text-sm font-mono border border-gray-200">
            const x = 42
          </code>{" "}
          should stand out clearly from surrounding text.
        </p>
      </section>

      {/* Blockquote Section */}
      <section>
        <blockquote className="border-l-4 border-yellow-600 pl-4 py-2 text-gray-600 italic bg-gray-50 rounded-r-lg">
          <p>
            "This is a blockquote. It's used for quotes, callouts, or
            emphasized passages. The styling should make it visually distinct
            while maintaining harmony with the overall design."
          </p>
        </blockquote>
      </section>

      {/* Lists Section */}
      <section className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            Unordered List
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1.5 shrink-0">
                <svg className="w-1.5 h-1.5 fill-current" viewBox="0 0 6 6">
                  <circle cx="3" cy="3" r="3" />
                </svg>
              </span>
              First item in the list
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1.5 shrink-0">
                <svg className="w-1.5 h-1.5 fill-current" viewBox="0 0 6 6">
                  <circle cx="3" cy="3" r="3" />
                </svg>
              </span>
              Second item with more content to show wrapping behavior
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1.5 shrink-0">
                <svg className="w-1.5 h-1.5 fill-current" viewBox="0 0 6 6">
                  <circle cx="3" cy="3" r="3" />
                </svg>
              </span>
              Third item
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            Ordered List
          </h4>
          <ol className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-yellow-700 font-medium tabular-nums">1.</span>
              First numbered item
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-700 font-medium tabular-nums">2.</span>
              Second numbered item
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-700 font-medium tabular-nums">3.</span>
              Third numbered item
            </li>
          </ol>
        </div>
      </section>

      {children}
    </div>
  );
}

export type { TypographyProps as Props };
