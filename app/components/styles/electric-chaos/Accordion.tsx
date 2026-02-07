/**
 * Accordion Component - Electric Chaos Style
 *
 * Expandable sections that BURST open with energy. Glowing borders,
 * rotating neon chevrons, bouncy spring animations. Each expansion
 * feels like unleashing contained power.
 */

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

/** Individual accordion item configuration */
export interface AccordionItem {
  /** Unique identifier for the item */
  id: string;
  /** Title displayed in the trigger */
  title: string;
  /** Content revealed when expanded */
  content: React.ReactNode;
  /** Whether the item is disabled */
  disabled?: boolean;
}

/** Props for the Accordion component */
export interface AccordionProps {
  /** Array of accordion item configurations */
  items: AccordionItem[];
  /** Whether multiple items can be open at once */
  type?: "single" | "multiple";
  /** Default expanded item(s) - string for single, string[] for multiple */
  defaultValue?: string | string[];
  /** Whether items can all be collapsed (only for type="single") */
  collapsible?: boolean;
  /** Additional className for the root element */
  className?: string;
  /** Additional className for each item */
  itemClassName?: string;
  /** Additional className for triggers */
  triggerClassName?: string;
  /** Additional className for content */
  contentClassName?: string;
}

/** Electric chevron icon with neon glow and bouncy rotation */
function ChevronIcon() {
  return (
    <div className="
      relative w-6 h-6 flex items-center justify-center
      bg-gray-900 rounded-lg
      border border-purple-500/50
      group-hover:border-purple-400
      group-data-[state=open]:border-cyan-400
      group-data-[state=open]:bg-cyan-500/20
      transition-all duration-300
      group-data-[state=open]:shadow-[0_0_15px_rgba(6,182,212,0.5)]
    ">
      <svg
        width="12"
        height="12"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="
          text-purple-400
          transition-all duration-400
          group-data-[state=open]:rotate-180
          group-data-[state=open]:text-cyan-400
        "
        style={{
          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <path
          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

export function Accordion({
  items,
  type = "single",
  defaultValue,
  collapsible = true,
  className = "",
  itemClassName = "",
  triggerClassName = "",
  contentClassName = "",
}: AccordionProps) {
  const rootProps =
    type === "single"
      ? {
          type: "single" as const,
          defaultValue: defaultValue as string | undefined,
          collapsible,
        }
      : {
          type: "multiple" as const,
          defaultValue: defaultValue as string[] | undefined,
        };

  return (
    <AccordionPrimitive.Root
      {...rootProps}
      className={`w-full font-['Space_Grotesk',system-ui,sans-serif] space-y-2 ${className}`}
    >
      {items.map((item) => (
        <AccordionPrimitive.Item
          key={item.id}
          value={item.id}
          disabled={item.disabled}
          className={`
            relative
            bg-gray-950
            border-2 border-gray-800
            rounded-xl
            overflow-hidden
            transition-all duration-300
            data-[state=open]:border-purple-500
            data-[state=open]:shadow-[0_0_30px_rgba(139,92,246,0.3)]
            ${itemClassName}
          `}
        >
          {/* Trigger - bold, electric */}
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
              className={`
                group
                flex flex-1 items-center justify-between
                px-5 py-4 text-left
                text-base font-bold text-white uppercase tracking-wide
                transition-all duration-300
                hover:bg-gray-900
                focus:outline-none
                focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                disabled:text-gray-600
                disabled:cursor-not-allowed
                ${triggerClassName}
              `}
            >
              <span className="
                relative
                group-data-[state=open]:text-transparent
                group-data-[state=open]:bg-gradient-to-r group-data-[state=open]:from-purple-400 group-data-[state=open]:to-cyan-400
                group-data-[state=open]:bg-clip-text
                transition-all duration-300
              ">
                {item.title}
              </span>
              <ChevronIcon />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>

          {/* Content - slides in with energy */}
          <AccordionPrimitive.Content
            className={`
              overflow-hidden
              text-sm text-gray-300 leading-relaxed
              data-[state=open]:animate-accordion-down
              data-[state=closed]:animate-accordion-up
              ${contentClassName}
            `}
          >
            <div className="relative px-5 pb-5 pt-0">
              {/* Top gradient line */}
              <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-cyan-500/50" />

              <div className="pt-4">
                {item.content}
              </div>

              {/* Corner glow effects */}
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}

export default Accordion;
