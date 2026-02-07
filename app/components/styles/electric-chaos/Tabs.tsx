/**
 * Tabs Component - Electric Chaos Style
 *
 * Tabbed navigation that PULSES with energy. Gradient backgrounds on active states,
 * glowing underlines, and bouncy transitions. Each tab switch feels like flipping
 * a power switch. Neon everything.
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
      className={`font-['Space_Grotesk',system-ui,sans-serif] ${className}`}
    >
      {/* Tab List - dark background with gradient border */}
      <TabsPrimitive.List
        className={`
          flex ${orientation === "vertical" ? "flex-col" : "flex-row"}
          ${orientation === "vertical" ? "border-r-2 border-purple-500/30" : "border-b-2 border-purple-500/30"}
          bg-gray-950
          ${orientation === "horizontal" ? "rounded-t-xl p-1 gap-1" : "rounded-l-xl p-1 gap-1"}
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
              px-5 py-3
              text-sm font-bold uppercase tracking-wider
              text-gray-400
              rounded-lg
              transition-all duration-300
              focus:outline-none
              focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black
              hover:text-white
              hover:bg-gray-800
              disabled:text-gray-700
              disabled:cursor-not-allowed
              data-[state=active]:text-white
              data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600
              data-[state=active]:shadow-[0_0_20px_rgba(139,92,246,0.5)]
              ${orientation === "vertical"
                ? "text-left w-full"
                : ""
              }
              ${triggerClassName}
            `}
            style={{
              transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            {tab.label}

            {/* Active indicator glow effect */}
            <span className="
              absolute inset-0 rounded-lg
              bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-pink-500/0
              data-[state=active]:from-purple-500/20 data-[state=active]:via-transparent data-[state=active]:to-pink-500/20
              pointer-events-none
              transition-all duration-300
            " />
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>

      {/* Tab Panels - dark with subtle glow */}
      {tabs.map((tab) => (
        <TabsPrimitive.Content
          key={tab.id}
          value={tab.id}
          className={`
            ${orientation === "vertical" ? "pl-6" : "pt-6"}
            text-sm text-white leading-relaxed
            focus:outline-none
            data-[state=inactive]:hidden
            data-[state=active]:animate-in
            data-[state=active]:fade-in-0
            data-[state=active]:slide-in-from-bottom-2
            duration-300
            ${panelClassName}
          `}
          style={{
            animationTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <div className="relative">
            {/* Subtle corner accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />
            {tab.content}
          </div>
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
}

export default Tabs;
