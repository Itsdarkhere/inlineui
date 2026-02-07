/**
 * Typography Component - Electric Chaos Style
 *
 * LOUD. BOLD. UNAPOLOGETIC. Typography that screams from across the room.
 * Unbounded for display, Space Grotesk for body. Electric purple, acid green,
 * hot pink, cyan, orange. Heavy border radius, glowing shadows, bouncy
 * animations. Nothing subtle. Everything fights for attention.
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
    <div
      className={`space-y-12 font-[Space_Grotesk,system-ui,sans-serif] ${className}`}
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #0a0a0a 100%)",
        padding: "2rem",
        borderRadius: "1.5rem",
      }}
    >
      {/* Headings Section */}
      <section className="space-y-8">
        <h1
          className="font-[Unbounded,system-ui,sans-serif] text-6xl font-black tracking-tighter text-white uppercase animate-pulse"
          style={{
            textShadow: "0 0 30px #8B5CF6, 0 0 60px #8B5CF6, 0 0 90px #EC4899",
            letterSpacing: "-0.05em",
          }}
        >
          HEADING LEVEL 1
        </h1>
        <h2
          className="font-[Unbounded,system-ui,sans-serif] text-4xl font-extrabold tracking-tight text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(90deg, #8B5CF6, #EC4899, #06B6D4)",
            letterSpacing: "-0.03em",
          }}
        >
          HEADING LEVEL 2
        </h2>
        <h3
          className="font-[Unbounded,system-ui,sans-serif] text-3xl font-bold text-[#84CC16]"
          style={{
            textShadow: "0 0 20px rgba(132, 204, 22, 0.5)",
          }}
        >
          HEADING LEVEL 3
        </h3>
        <h4
          className="font-[Unbounded,system-ui,sans-serif] text-xl font-bold text-[#F97316] uppercase tracking-wide"
          style={{
            textShadow: "0 0 15px rgba(249, 115, 22, 0.6)",
          }}
        >
          HEADING LEVEL 4
        </h4>
      </section>

      {/* Body Text Section */}
      <section className="space-y-6">
        <p className="text-lg text-white leading-7 max-w-prose font-medium">
          This is standard body text. It hits different with Space Grotesk and
          pure white on black. Good typography is more than readable—it should
          make you feel something. This text refuses to be ignored.
        </p>
        <p
          className="text-sm leading-6 max-w-prose uppercase tracking-widest"
          style={{ color: "#8B5CF6" }}
        >
          This is small text. Still loud. Still proud. Uppercase because labels
          don't whisper. Secondary information that still demands attention.
        </p>
      </section>

      {/* Links Section */}
      <section className="space-y-4">
        <p className="text-lg text-white leading-7">
          Text with an{" "}
          <a
            href="#"
            className="relative inline-block text-[#06B6D4] font-bold transition-all duration-300 hover:scale-110 hover:text-[#EC4899]"
            style={{
              textShadow: "0 0 10px rgba(6, 182, 212, 0.8)",
            }}
          >
            inline link
          </a>{" "}
          demonstrates how links demand attention within content.
        </p>
        <p className="text-lg">
          <a
            href="#"
            className="inline-block text-[#84CC16] font-bold uppercase tracking-wide px-4 py-2 rounded-xl border-2 border-[#84CC16] transition-all duration-300 hover:bg-[#84CC16] hover:text-black hover:scale-105 hover:shadow-lg"
            style={{
              boxShadow: "0 0 20px rgba(132, 204, 22, 0.3)",
            }}
          >
            STANDALONE LINK
          </a>
        </p>
      </section>

      {/* Inline Code Section */}
      <section>
        <p className="text-lg text-white leading-8">
          Inline code like{" "}
          <code
            className="px-3 py-1 rounded-xl text-[0.9em] font-mono font-bold text-[#84CC16] border-2 border-[#84CC16]"
            style={{
              backgroundColor: "rgba(132, 204, 22, 0.1)",
              boxShadow: "0 0 15px rgba(132, 204, 22, 0.3)",
            }}
          >
            const chaos = true
          </code>{" "}
          should punch you in the face. Not blend in.
        </p>
      </section>

      {/* Blockquote Section */}
      <section>
        <blockquote
          className="relative pl-8 py-4 rounded-2xl"
          style={{
            borderLeft: "4px solid #EC4899",
            background: "linear-gradient(90deg, rgba(236, 72, 153, 0.15), transparent)",
            boxShadow: "0 0 30px rgba(236, 72, 153, 0.2)",
          }}
        >
          <p className="text-xl text-white font-bold italic leading-8">
            "This is a blockquote. Subtlety is for cowards. If your design
            isn't making someone uncomfortable, you're not trying hard enough.
            MORE IS MORE."
          </p>
          <cite
            className="block mt-3 text-sm uppercase tracking-widest not-italic"
            style={{ color: "#EC4899" }}
          >
            — THE ELECTRIC CHAOS MANIFESTO
          </cite>
        </blockquote>
      </section>

      {/* Lists Section */}
      <section className="space-y-10">
        <div>
          <h4
            className="text-xs font-bold uppercase tracking-[0.3em] mb-6"
            style={{ color: "#F97316" }}
          >
            UNORDERED LIST
          </h4>
          <ul className="space-y-3 text-white">
            <li className="flex items-start gap-4">
              <span
                className="block w-3 h-3 rounded-full mt-1.5 flex-shrink-0 animate-pulse"
                style={{
                  backgroundColor: "#8B5CF6",
                  boxShadow: "0 0 10px #8B5CF6, 0 0 20px #8B5CF6",
                }}
              />
              <span className="text-lg font-medium leading-7">First item absolutely slaps</span>
            </li>
            <li className="flex items-start gap-4">
              <span
                className="block w-3 h-3 rounded-full mt-1.5 flex-shrink-0 animate-pulse"
                style={{
                  backgroundColor: "#EC4899",
                  boxShadow: "0 0 10px #EC4899, 0 0 20px #EC4899",
                  animationDelay: "0.2s",
                }}
              />
              <span className="text-lg font-medium leading-7">
                Second item with extra content to show this thing wrapping hard
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span
                className="block w-3 h-3 rounded-full mt-1.5 flex-shrink-0 animate-pulse"
                style={{
                  backgroundColor: "#06B6D4",
                  boxShadow: "0 0 10px #06B6D4, 0 0 20px #06B6D4",
                  animationDelay: "0.4s",
                }}
              />
              <span className="text-lg font-medium leading-7">Third item, still going strong</span>
            </li>
          </ul>
        </div>

        <div>
          <h4
            className="text-xs font-bold uppercase tracking-[0.3em] mb-6"
            style={{ color: "#06B6D4" }}
          >
            ORDERED LIST
          </h4>
          <ol className="space-y-3 text-white">
            <li className="flex items-start gap-4">
              <span
                className="font-[Unbounded,system-ui,sans-serif] text-xl font-black w-8 flex-shrink-0 leading-7"
                style={{
                  color: "#84CC16",
                  textShadow: "0 0 10px rgba(132, 204, 22, 0.5)",
                }}
              >
                01
              </span>
              <span className="text-lg font-medium leading-7">First numbered item hits different</span>
            </li>
            <li className="flex items-start gap-4">
              <span
                className="font-[Unbounded,system-ui,sans-serif] text-xl font-black w-8 flex-shrink-0 leading-7"
                style={{
                  color: "#F97316",
                  textShadow: "0 0 10px rgba(249, 115, 22, 0.5)",
                }}
              >
                02
              </span>
              <span className="text-lg font-medium leading-7">Second numbered item keeps the energy</span>
            </li>
            <li className="flex items-start gap-4">
              <span
                className="font-[Unbounded,system-ui,sans-serif] text-xl font-black w-8 flex-shrink-0 leading-7"
                style={{
                  color: "#8B5CF6",
                  textShadow: "0 0 10px rgba(139, 92, 246, 0.5)",
                }}
              >
                03
              </span>
              <span className="text-lg font-medium leading-7">Third numbered item goes hard</span>
            </li>
          </ol>
        </div>
      </section>

      {children}
    </div>
  );
}

export type { TypographyProps as Props };
