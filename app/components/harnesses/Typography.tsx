/**
 * Typography Harness Component
 *
 * A composition component that displays all typography elements together to
 * demonstrate how a style handles text-based content. This is not a reusable
 * UI component but rather a showcase of typographic treatments.
 *
 * Style .md files should customize:
 * - Font families (heading vs body)
 * - Font sizes and line heights for each heading level
 * - Font weights and letter spacing
 * - Link colors and hover states
 * - Code/pre styling (background, border, font)
 * - Blockquote styling (border, background, italics)
 * - List marker styles (bullets, numbers, spacing)
 * - Overall spacing rhythm between elements
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
    <div className={`space-y-6 ${className}`}>
      {/* Headings Section */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Heading Level 1
        </h1>
        <h2 className="text-3xl font-semibold text-gray-800">
          Heading Level 2
        </h2>
        <h3 className="text-2xl font-semibold text-gray-800">
          Heading Level 3
        </h3>
        <h4 className="text-xl font-medium text-gray-700">
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
          <a href="#" className="text-blue-600 underline hover:text-blue-800">
            inline link
          </a>{" "}
          demonstrates how links appear within content.
        </p>
        <p className="text-base text-gray-700">
          <a href="#" className="text-blue-600 underline hover:text-blue-800">
            Standalone link example
          </a>
        </p>
      </section>

      {/* Inline Code Section */}
      <section className="space-y-2">
        <p className="text-base text-gray-700">
          Inline code like{" "}
          <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">
            const x = 42
          </code>{" "}
          should stand out clearly from surrounding text.
        </p>
      </section>

      {/* Blockquote Section */}
      <section>
        <blockquote className="border-l-4 border-gray-300 pl-4 py-2 text-gray-600 italic">
          <p>
            "This is a blockquote. It's used for quotes, callouts, or
            emphasized passages. The styling should make it visually distinct
            while maintaining harmony with the overall design."
          </p>
        </blockquote>
      </section>

      {/* Lists Section */}
      <section className="space-y-4">
        <div>
          <h4 className="text-lg font-medium text-gray-800 mb-2">
            Unordered List
          </h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>First item in the list</li>
            <li>Second item with more content to show wrapping behavior</li>
            <li>Third item</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium text-gray-800 mb-2">
            Ordered List
          </h4>
          <ol className="list-decimal list-inside space-y-1 text-gray-700">
            <li>First numbered item</li>
            <li>Second numbered item</li>
            <li>Third numbered item</li>
          </ol>
        </div>
      </section>

      {children}
    </div>
  );
}

export type { TypographyProps as Props };
