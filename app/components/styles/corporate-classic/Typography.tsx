/**
 * Typography - Corporate Classic Style
 *
 * Professional typography showcase using Inter font.
 * Clear hierarchy with semibold/bold headings, tight letter-spacing.
 * Yellow-600 accent for links and highlights.
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
 * Corporate Classic Typography composition.
 * Demonstrates professional typography with Inter font and yellow-600 accents.
 */
export function Typography({ className = "", children }: TypographyProps) {
  return (
    <div className={`space-y-8 ${className}`}>
      {/* Headings Section */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Heading Level 1
        </h1>
        <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
          Heading Level 2
        </h2>
        <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">
          Heading Level 3
        </h3>
        <h4 className="text-xl font-medium text-gray-800">
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
          <a href="#" className="text-yellow-700 underline underline-offset-2 hover:text-yellow-800 transition-colors">
            inline link
          </a>{" "}
          demonstrates how links appear within content.
        </p>
        <p className="text-base text-gray-700">
          <a href="#" className="text-yellow-700 underline underline-offset-2 hover:text-yellow-800 transition-colors">
            Standalone link example
          </a>
        </p>
      </section>

      {/* Inline Code Section */}
      <section className="space-y-2">
        <p className="text-base text-gray-700">
          Inline code like{" "}
          <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono border border-gray-200">
            const x = 42
          </code>{" "}
          should stand out clearly from surrounding text.
        </p>
      </section>

      {/* Blockquote Section */}
      <section>
        <blockquote className="border-l-4 border-yellow-600 pl-4 py-2 text-gray-600 italic bg-gray-50">
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
          <h4 className="text-lg font-medium text-gray-900 mb-2">
            Unordered List
          </h4>
          <ul className="list-disc list-inside space-y-1.5 text-gray-700 marker:text-yellow-600">
            <li>First item in the list</li>
            <li>Second item with more content to show wrapping behavior</li>
            <li>Third item</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-2">
            Ordered List
          </h4>
          <ol className="list-decimal list-inside space-y-1.5 text-gray-700">
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
