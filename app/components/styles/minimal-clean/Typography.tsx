/**
 * Typography Component - Minimal Clean Style
 *
 * A restrained, Swiss-inspired typography composition. Inter font family,
 * tight heading tracking, generous line heights, black/white/gray palette.
 * Every element earns its place through clarity, not decoration.
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
    <div className={`space-y-10 font-[Inter,system-ui,sans-serif] ${className}`}>
      {/* Headings Section */}
      <section className="space-y-6">
        <h1 className="text-5xl font-semibold tracking-tight text-[#111]">
          Heading Level 1
        </h1>
        <h2 className="text-3xl font-semibold tracking-tight text-[#111]">
          Heading Level 2
        </h2>
        <h3 className="text-2xl font-medium tracking-tight text-[#111]">
          Heading Level 3
        </h3>
        <h4 className="text-lg font-medium text-[#111]">
          Heading Level 4
        </h4>
      </section>

      {/* Body Text Section */}
      <section className="space-y-6">
        <p className="text-base text-[#111] leading-7 max-w-prose">
          This is standard body text. It should be comfortable to read at length
          and work well for paragraphs of content. Good typography creates a
          pleasant reading experience through careful attention to line height,
          letter spacing, and font choice.
        </p>
        <p className="text-sm text-gray-500 leading-6 max-w-prose">
          This is small text, useful for captions, footnotes, or secondary
          information. It maintains readability while taking up less visual
          space.
        </p>
      </section>

      {/* Links Section */}
      <section className="space-y-3">
        <p className="text-base text-[#111] leading-7">
          Text with an{" "}
          <a
            href="#"
            className="text-[#111] underline underline-offset-2 transition-opacity duration-100 hover:opacity-60"
          >
            inline link
          </a>{" "}
          demonstrates how links appear within content.
        </p>
        <p className="text-base">
          <a
            href="#"
            className="text-[#111] underline underline-offset-2 transition-opacity duration-100 hover:opacity-60"
          >
            Standalone link example
          </a>
        </p>
      </section>

      {/* Inline Code Section */}
      <section>
        <p className="text-base text-[#111] leading-7">
          Inline code like{" "}
          <code className="bg-gray-100 text-[#111] px-1.5 py-0.5 rounded text-[0.875em] font-mono border border-gray-200">
            const x = 42
          </code>{" "}
          should stand out clearly from surrounding text.
        </p>
      </section>

      {/* Blockquote Section */}
      <section>
        <blockquote className="border-l-2 border-[#111] pl-6 py-1">
          <p className="text-[#111] leading-7">
            "This is a blockquote. It's used for quotes, callouts, or
            emphasized passages. The styling should make it visually distinct
            while maintaining harmony with the overall design."
          </p>
        </blockquote>
      </section>

      {/* Lists Section */}
      <section className="space-y-8">
        <div>
          <h4 className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-4">
            Unordered List
          </h4>
          <ul className="space-y-2 text-[#111]">
            <li className="flex items-start gap-3">
              <span className="block w-1 h-1 rounded-full bg-[#111] mt-2.5 flex-shrink-0" />
              <span className="leading-7">First item in the list</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="block w-1 h-1 rounded-full bg-[#111] mt-2.5 flex-shrink-0" />
              <span className="leading-7">Second item with more content to show wrapping behavior</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="block w-1 h-1 rounded-full bg-[#111] mt-2.5 flex-shrink-0" />
              <span className="leading-7">Third item</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-4">
            Ordered List
          </h4>
          <ol className="space-y-2 text-[#111] counter-reset-list">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 tabular-nums w-4 flex-shrink-0 leading-7">1.</span>
              <span className="leading-7">First numbered item</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 tabular-nums w-4 flex-shrink-0 leading-7">2.</span>
              <span className="leading-7">Second numbered item</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 tabular-nums w-4 flex-shrink-0 leading-7">3.</span>
              <span className="leading-7">Third numbered item</span>
            </li>
          </ol>
        </div>
      </section>

      {children}
    </div>
  );
}

export type { TypographyProps as Props };
