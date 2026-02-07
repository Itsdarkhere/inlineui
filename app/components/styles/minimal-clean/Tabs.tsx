/**
 * Tabs Component - Minimal Clean Style
 *
 * Swiss-inspired tabbed interface. Clear hierarchy through weight and position,
 * not color. Precise underline indicator, generous spacing, fast transitions.
 */

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

/** Individual tab configuration */
export interface Tab {
  /** Unique identifier for the tab (used as value) */
  id: string;
  /** Display label for the tab trigger */
  label: string;
  /** Content to display when tab is active */
  content: React.ReactNode;
  /** Whether the tab is disabled */
  disabled?: boolean;
}

/** Props for the Tabs component */
export interface TabsProps {
  /** Array of tab configurations */
  tabs: Tab[];
  /** The id of the initially active tab (uncontrolled) */
  defaultTab?: string;
  /** Controlled active tab value */
  activeTab?: string;
  /** Callback when active tab changes */
  onTabChange?: (tabId: string) => void;
  /** Orientation of the tab list */
  orientation?: "horizontal" | "vertical";
  /** Additional className for the root element */
  className?: string;
  /** Additional className for the tab list */
  listClassName?: string;
  /** Additional className for tab triggers */
  triggerClassName?: string;
  /** Additional className for tab panels */
  panelClassName?: string;
}

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
      {/* Tab List - minimal border, precise alignment */}
      <TabsPrimitive.List
        className={`
          flex ${orientation === "vertical" ? "flex-col border-r" : "flex-row border-b"}
          border-gray-200
          ${listClassName}
        `}
      >
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.id}
            value={tab.id}
            disabled={tab.disabled}
            className={`
              relative
              px-4 py-2.5
              text-sm font-medium
              text-gray-500
              transition-colors duration-150
              focus:outline-none
              focus-visible:ring-1 focus-visible:ring-gray-900 focus-visible:ring-offset-2
              hover:text-[#111]
              disabled:text-gray-300
              disabled:cursor-not-allowed
              data-[state=active]:text-[#111]
              ${orientation === "vertical"
                ? "text-left border-r-2 border-transparent -mr-px data-[state=active]:border-[#111]"
                : "-mb-px data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-0.5 data-[state=active]:after:bg-[#111]"
              }
              ${triggerClassName}
            `}
          >
            {tab.label}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>

      {/* Tab Panels - generous top padding, clean content area */}
      {tabs.map((tab) => (
        <TabsPrimitive.Content
          key={tab.id}
          value={tab.id}
          className={`
            ${orientation === "vertical" ? "pl-6" : "pt-5"}
            text-sm text-[#111] leading-relaxed
            focus:outline-none
            data-[state=inactive]:hidden
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
