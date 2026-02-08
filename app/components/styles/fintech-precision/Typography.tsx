/**
 * Typography - Fintech Precision Style
 *
 * IBM Plex Sans for headings and body, JetBrains Mono for code/numbers.
 * Strong hierarchy, tight line-height in data areas, tabular numerals.
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
    <div className={`space-y-8 ${className}`}>
      {/* Headings Section */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-neutral-100 tracking-tight leading-tight">
          Heading Level 1
        </h1>
        <h2 className="text-3xl font-semibold text-neutral-100 tracking-tight">
          Heading Level 2
        </h2>
        <h3 className="text-2xl font-semibold text-neutral-200">
          Heading Level 3
        </h3>
        <h4 className="text-xl font-medium text-neutral-300 uppercase tracking-wide">
          Heading Level 4
        </h4>
      </section>

      {/* Body Text Section */}
      <section className="space-y-4">
        <p className="text-base text-neutral-300 leading-relaxed">
          This is standard body text. It should be comfortable to read at length
          and work well for paragraphs of content. Good typography creates a
          pleasant reading experience through careful attention to line height,
          letter spacing, and font choice.
        </p>
        <p className="text-sm text-neutral-400 leading-relaxed">
          This is small text, useful for captions, footnotes, or secondary
          information. It maintains readability while taking up less visual
          space.
        </p>
      </section>

      {/* Data Display Section - Monospace numbers */}
      <section className="space-y-2">
        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">
          Data Values
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded p-3">
            <span className="text-xs text-neutral-500 uppercase tracking-wider">Portfolio Value</span>
            <p className="text-2xl font-mono font-semibold text-emerald-400 tabular-nums">
              $1,234,567.89
            </p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded p-3">
            <span className="text-xs text-neutral-500 uppercase tracking-wider">Daily Change</span>
            <p className="text-2xl font-mono font-semibold text-red-400 tabular-nums">
              -2.34%
            </p>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="space-y-2">
        <p className="text-base text-neutral-300">
          Text with an{" "}
          <a href="#" className="text-yellow-500 underline underline-offset-2 hover:text-yellow-400 transition-colors duration-100">
            inline link
          </a>{" "}
          demonstrates how links appear within content.
        </p>
        <p className="text-base text-neutral-300">
          <a href="#" className="text-yellow-500 underline underline-offset-2 hover:text-yellow-400 transition-colors duration-100">
            Standalone link example
          </a>
        </p>
      </section>

      {/* Inline Code Section */}
      <section className="space-y-2">
        <p className="text-base text-neutral-300">
          Inline code like{" "}
          <code className="bg-neutral-800 text-yellow-400 px-1.5 py-0.5 rounded text-sm font-mono border border-neutral-700">
            const x = 42
          </code>{" "}
          should stand out clearly from surrounding text.
        </p>
      </section>

      {/* Blockquote Section */}
      <section>
        <blockquote className="border-l-4 border-yellow-600 pl-4 py-2 text-neutral-400 bg-neutral-900/50 rounded-r">
          <p>
            "Information is currency. This style treats data with the respect it
            deserves - presenting it clearly, confidently, and without
            distraction."
          </p>
        </blockquote>
      </section>

      {/* Lists Section */}
      <section className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">
            Unordered List
          </h4>
          <ul className="space-y-2 text-neutral-300">
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1.5">
                <svg className="w-1.5 h-1.5 fill-current" viewBox="0 0 6 6"><rect width="6" height="6"/></svg>
              </span>
              First item in the list
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1.5">
                <svg className="w-1.5 h-1.5 fill-current" viewBox="0 0 6 6"><rect width="6" height="6"/></svg>
              </span>
              Second item with more content to show wrapping behavior
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1.5">
                <svg className="w-1.5 h-1.5 fill-current" viewBox="0 0 6 6"><rect width="6" height="6"/></svg>
              </span>
              Third item
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">
            Ordered List
          </h4>
          <ol className="space-y-2 text-neutral-300">
            <li className="flex items-start gap-3">
              <span className="font-mono text-yellow-600 text-sm">01</span>
              First numbered item
            </li>
            <li className="flex items-start gap-3">
              <span className="font-mono text-yellow-600 text-sm">02</span>
              Second numbered item
            </li>
            <li className="flex items-start gap-3">
              <span className="font-mono text-yellow-600 text-sm">03</span>
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
