/**
 * Tabs - Corporate Classic Style
 *
 * Professional tabbed interface with yellow-600 active indicator.
 * Clean underline style, gray inactive tabs, generous spacing.
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

/**
 * Corporate Classic Tabs component.
 * Professional styling with yellow-600 active indicator.
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
        className={`flex ${orientation === "vertical" ? "flex-col" : "flex-row"} border-b border-gray-200 ${listClassName}`}
      >
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.id}
            value={tab.id}
            disabled={tab.disabled}
            className={`px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:text-gray-900 data-[state=active]:border-b-2 data-[state=active]:border-yellow-600 data-[state=active]:-mb-px transition-colors ${triggerClassName}`}
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
          className={`pt-5 focus:outline-none ${panelClassName}`}
        >
          {tab.content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
}

export default Tabs;
