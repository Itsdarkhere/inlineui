/**
 * Accordion Component Harness
 *
 * An expandable/collapsible section component built on @radix-ui/react-accordion.
 * Provides accessible accordion functionality with keyboard navigation and animated transitions.
 *
 * STRUCTURE:
 * - Multiple accordion items, each with a trigger and content
 * - Chevron or plus/minus icon indicating open/closed state
 * - Smooth height animation when expanding/collapsing
 *
 * STYLE .MD SHOULD CUSTOMIZE:
 * - Item container: border, background, radius, spacing between items
 * - Trigger: padding, font-size, font-weight, color, hover state
 * - Icon: chevron vs plus/minus, size, color, rotation animation
 * - Content: padding, font-size, color
 * - Open state: background change, border highlight
 * - Animation: duration, easing for height transition
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

/** Chevron icon that rotates when open */
function ChevronIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-200 group-data-[state=open]:rotate-180"
    >
      <path
        d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
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
  // Handle the type-specific props
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
    <AccordionPrimitive.Root {...rootProps} className={`w-full ${className}`}>
      {items.map((item) => (
        <AccordionPrimitive.Item
          key={item.id}
          value={item.id}
          disabled={item.disabled}
          className={`border-b border-gray-200 ${itemClassName}`}
        >
          {/* Trigger - the clickable header */}
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
              className={`group flex flex-1 items-center justify-between py-4 text-sm font-medium text-gray-900 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${triggerClassName}`}
            >
              {item.title}
              <ChevronIcon />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>

          {/* Content - revealed when expanded */}
          <AccordionPrimitive.Content
            className={`overflow-hidden text-sm text-gray-600 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up ${contentClassName}`}
          >
            <div className="pb-4">{item.content}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}

export default Accordion;
