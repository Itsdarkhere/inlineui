/**
 * Tabs Component Harness
 *
 * A tabbed interface component built on @radix-ui/react-tabs.
 * Provides accessible tab navigation with keyboard support and proper ARIA attributes.
 *
 * STRUCTURE:
 * - Tab list containing tab triggers
 * - Tab panels containing content for each tab
 * - Active indicator showing current selection
 *
 * STYLE .MD SHOULD CUSTOMIZE:
 * - Tab list: background, border, padding, gap between tabs
 * - Tab trigger: padding, font-size, color, hover state
 * - Active tab: underline, pill, enclosed box, background change
 * - Inactive tab: opacity, color
 * - Tab panel: padding, border, background
 * - Focus state: ring, outline, or other indicator
 * - Transition: animation between active states
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
        className={`flex ${orientation === "vertical" ? "flex-col" : "flex-row"} border-b border-gray-200 ${listClassName}`}
      >
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.id}
            value={tab.id}
            disabled={tab.disabled}
            className={`px-4 py-2 text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:text-gray-900 data-[state=active]:border-b-2 data-[state=active]:border-gray-900 data-[state=active]:-mb-px ${triggerClassName}`}
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
          className={`pt-4 focus:outline-none ${panelClassName}`}
        >
          {tab.content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
}

export default Tabs;
