/**
 * Typography - Editorial Style
 *
 * Type is the entire personality. Treat it with reverence.
 * Playfair Display for headings, Inter for body.
 * Generous line-height, tight headline tracking, elegant links.
 */

import type { ReactNode } from "react";

export interface TypographyProps {
  className?: string;
  children?: ReactNode;
}

/**
 * Typography composition showcasing all text elements.
 * Editorial aesthetic: serif headings, sans-serif body, yellow accent links.
 */
export function Typography({ className = "", children }: TypographyProps) {
  return (
    <div className={`space-y-8 font-['Inter',system-ui,sans-serif] ${className}`}>
      {/* Headings Section */}
      <section className="space-y-6">
        <h1 className="font-['Playfair_Display',Georgia,serif] text-5xl font-bold text-zinc-900 tracking-tight leading-[1.1]">
          Heading Level 1
        </h1>
        <h2 className="font-['Playfair_Display',Georgia,serif] text-4xl font-bold text-zinc-900 tracking-tight leading-[1.15]">
          Heading Level 2
        </h2>
        <h3 className="font-['Playfair_Display',Georgia,serif] text-3xl font-semibold text-zinc-900 tracking-tight leading-[1.2]">
          Heading Level 3
        </h3>
        <h4 className="font-['Playfair_Display',Georgia,serif] text-2xl font-semibold text-zinc-800 leading-[1.25]">
          Heading Level 4
        </h4>
      </section>

      {/* Body Text Section */}
      <section className="space-y-5">
        <p className="text-lg text-zinc-700 leading-[1.8] max-w-prose">
          This is standard body text. It should be comfortable to read at length
          and work well for paragraphs of content. Good typography creates a
          pleasant reading experience through careful attention to line height,
          letter spacing, and font choice. The editorial style favors generous
          line-height and warm gray text for reading comfort.
        </p>
        <p className="text-sm text-zinc-500 leading-[1.7] max-w-prose">
          This is small text, useful for captions, footnotes, or secondary
          information. It maintains readability while taking up less visual
          space. Bylines and metadata often use this scale.
        </p>
      </section>

      {/* Links Section */}
      <section className="space-y-3">
        <p className="text-lg text-zinc-700 leading-[1.8]">
          Text with an{" "}
          <a
            href="#"
            className="text-zinc-900 underline decoration-yellow-600 decoration-2 underline-offset-2 hover:text-yellow-600 transition-colors duration-150"
          >
            inline link
          </a>{" "}
          demonstrates how links appear within content.
        </p>
        <p className="text-lg text-zinc-700">
          <a
            href="#"
            className="text-zinc-900 underline decoration-yellow-600 decoration-2 underline-offset-2 hover:text-yellow-600 transition-colors duration-150"
          >
            Standalone link example
          </a>
        </p>
      </section>

      {/* Inline Code Section */}
      <section className="space-y-3">
        <p className="text-lg text-zinc-700 leading-[1.8]">
          Inline code like{" "}
          <code className="bg-zinc-100 text-zinc-800 px-1.5 py-0.5 text-[0.9em] font-mono border border-zinc-200">
            const x = 42
          </code>{" "}
          should stand out clearly from surrounding text.
        </p>
      </section>

      {/* Blockquote Section - Pull quote style */}
      <section>
        <blockquote className="border-l-4 border-yellow-600 pl-6 py-2">
          <p className="font-['Playfair_Display',Georgia,serif] text-2xl italic text-zinc-700 leading-[1.5]">
            "This is a blockquote. It's used for quotes, callouts, or
            emphasized passages. The editorial style uses italic Playfair
            for pull quotes, with a yellow accent border."
          </p>
        </blockquote>
      </section>

      {/* Lists Section */}
      <section className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-3">
            Unordered List
          </h4>
          <ul className="space-y-2 text-zinc-700 leading-[1.7]">
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 mt-2">&#8226;</span>
              <span>First item in the list</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 mt-2">&#8226;</span>
              <span>Second item with more content to show wrapping behavior</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 mt-2">&#8226;</span>
              <span>Third item</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-3">
            Ordered List
          </h4>
          <ol className="space-y-2 text-zinc-700 leading-[1.7] list-decimal list-inside">
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
