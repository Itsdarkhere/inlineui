/**
 * Accordion - Editorial Style
 *
 * Expandable sections with publication-level refinement.
 * Thin borders, serif titles option, subtle transitions.
 * Chevron rotation, no bounce or playfulness.
 */

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  collapsible?: boolean;
  className?: string;
  itemClassName?: string;
  triggerClassName?: string;
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
      className="transition-transform duration-200 ease-out group-data-[state=open]:rotate-180"
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

/**
 * Accordion component with editorial styling.
 * Refined, restrained, lets content speak.
 */
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
      className={`w-full font-['Inter',system-ui,sans-serif] ${className}`}
    >
      {items.map((item) => (
        <AccordionPrimitive.Item
          key={item.id}
          value={item.id}
          disabled={item.disabled}
          className={`border-b border-zinc-200 ${itemClassName}`}
        >
          {/* Trigger */}
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
              className={`
                group
                flex flex-1 items-center justify-between
                py-5
                text-base font-medium text-zinc-900
                hover:text-zinc-600
                focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-2
                disabled:opacity-40 disabled:cursor-not-allowed
                transition-colors duration-150
                ${triggerClassName}
              `}
            >
              {item.title}
              <ChevronIcon />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>

          {/* Content */}
          <AccordionPrimitive.Content
            className={`
              overflow-hidden
              text-sm text-zinc-600 leading-relaxed
              data-[state=open]:animate-accordion-down
              data-[state=closed]:animate-accordion-up
              ${contentClassName}
            `}
          >
            <div className="pb-5">{item.content}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}

export default Accordion;
