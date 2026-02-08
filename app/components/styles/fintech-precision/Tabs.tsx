/**
 * Tabs - Fintech Precision Style
 *
 * Trading platform inspired tab navigation.
 * Yellow active indicator, dark background, fast transitions.
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
  // Use first tab as default if none specified
  const defaultValue = defaultTab || tabs[0]?.id;

  return (
    <TabsPrimitive.Root
      defaultValue={defaultValue}
      value={activeTab}
      onValueChange={onTabChange}
      orientation={orientation}
      className={`${className}`}
    >
      {/* Tab List - contains all tab triggers */}
      <TabsPrimitive.List
        className={`flex ${orientation === "vertical" ? "flex-col" : "flex-row"} border-b border-neutral-800 bg-neutral-900/50 ${listClassName}`}
      >
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.id}
            value={tab.id}
            disabled={tab.disabled}
            className={`
              px-4 py-2.5 text-xs font-semibold uppercase tracking-wider
              text-neutral-500 hover:text-neutral-300
              transition-all duration-100
              focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-inset
              disabled:opacity-50 disabled:cursor-not-allowed
              data-[state=active]:text-yellow-500
              data-[state=active]:border-b-2 data-[state=active]:border-yellow-600
              data-[state=active]:-mb-px
              ${triggerClassName}
            `}
          >
            {tab.label}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>

      {/* Tab Panels - content for each tab */}
      {tabs.map((tab) => (
        <TabsPrimitive.Content
          key={tab.id}
          value={tab.id}
          className={`pt-4 focus:outline-none text-neutral-300 ${panelClassName}`}
        >
          {tab.content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
}

export default Tabs;
