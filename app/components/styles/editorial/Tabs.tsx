/**
 * Tabs - Editorial Style
 *
 * Tabbed interface with publication-inspired refinement.
 * Underline active indicator, yellow-600 accent.
 * Sharp, clean, no rounded corners.
 */

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
  listClassName?: string;
  triggerClassName?: string;
  panelClassName?: string;
}

/**
 * Tabs component with editorial styling.
 * Clean underline indicator, yellow accent on active.
 */
export function Tabs({
  tabs,
  defaultTab,
  activeTab,
  onTabChange,
  orientation = "horizontal",
  className = "",
  listClassName = "",
  triggerClassName = "",
  panelClassName = "",
}: TabsProps) {
  const defaultValue = defaultTab || tabs[0]?.id;

  return (
    <TabsPrimitive.Root
      defaultValue={defaultValue}
      value={activeTab}
      onValueChange={onTabChange}
      orientation={orientation}
      className={`font-['Inter',system-ui,sans-serif] ${className}`}
    >
      {/* Tab List */}
      <TabsPrimitive.List
        className={`
          flex
          ${orientation === "vertical" ? "flex-col border-r border-zinc-200" : "flex-row border-b border-zinc-200"}
          ${listClassName}
        `}
      >
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.id}
            value={tab.id}
            disabled={tab.disabled}
            className={`
              px-5 py-3
              text-sm tracking-wide
              text-zinc-500
              transition-colors duration-150
              focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-2
              disabled:opacity-40 disabled:cursor-not-allowed
              hover:text-zinc-900
              data-[state=active]:text-zinc-900
              data-[state=active]:font-medium
              data-[state=active]:border-b-2
              data-[state=active]:border-yellow-600
              data-[state=active]:-mb-px
              ${triggerClassName}
            `}
          >
            {tab.label}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>

      {/* Tab Panels */}
      {tabs.map((tab) => (
        <TabsPrimitive.Content
          key={tab.id}
          value={tab.id}
          className={`
            pt-6
            focus:outline-none
            text-zinc-700 leading-relaxed
            ${panelClassName}
          `}
        >
          {tab.content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
}

export default Tabs;
