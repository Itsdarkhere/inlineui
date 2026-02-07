/**
 * DropdownMenu Component - Electric Chaos Style
 *
 * This menu EXPLODES onto the screen. Neon borders, glowing item hovers,
 * gradient selections. Every interaction feels like a power surge.
 * Pure black with electric color explosions.
 */

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

/** Individual menu item configuration */
export interface DropdownMenuItem {
  /** Unique identifier for the item */
  id: string;
  /** Display label for the item */
  label: string;
  /** Optional icon element to display before the label */
  icon?: React.ReactNode;
  /** Optional keyboard shortcut hint */
  shortcut?: string;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Callback when item is selected */
  onSelect?: () => void;
}

/** Separator between menu items */
export interface DropdownMenuSeparator {
  /** Type discriminator */
  type: "separator";
}

/** Union type for menu content */
export type DropdownMenuContent = DropdownMenuItem | DropdownMenuSeparator;

/** Props for the DropdownMenu component */
export interface DropdownMenuProps {
  /** The trigger element that opens the menu */
  trigger: React.ReactNode;
  /** Array of menu items and separators */
  items: DropdownMenuContent[];
  /** Alignment of the menu relative to the trigger */
  align?: "start" | "center" | "end";
  /** Side offset from the trigger */
  sideOffset?: number;
  /** Additional className for the menu content */
  contentClassName?: string;
}

/** Type guard to check if content is a separator */
function isSeparator(
  content: DropdownMenuContent
): content is DropdownMenuSeparator {
  return "type" in content && content.type === "separator";
}

export function DropdownMenu({
  trigger,
  items,
  align = "start",
  sideOffset = 8,
  contentClassName = "",
}: DropdownMenuProps) {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        {trigger}
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        {/* Content - black background, neon border, explosive shadow */}
        <DropdownMenuPrimitive.Content
          align={align}
          sideOffset={sideOffset}
          className={`
            min-w-[200px]
            bg-black
            border-2 border-purple-500
            rounded-xl
            shadow-[0_0_30px_rgba(139,92,246,0.4),0_0_60px_rgba(139,92,246,0.2)]
            py-2 px-1
            font-['Space_Grotesk',system-ui,sans-serif]
            focus:outline-none
            overflow-hidden
            data-[state=open]:animate-in data-[state=closed]:animate-out
            data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
            data-[state=closed]:zoom-out-90 data-[state=open]:zoom-in-90
            data-[state=closed]:scale-95 data-[state=open]:scale-100
            data-[side=bottom]:slide-in-from-top-4
            data-[side=top]:slide-in-from-bottom-4
            data-[side=left]:slide-in-from-right-4
            data-[side=right]:slide-in-from-left-4
            duration-300
            ${contentClassName}
          `}
          style={{
            animationTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          {/* Top gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          {items.map((item, index) => {
            if (isSeparator(item)) {
              return (
                <DropdownMenuPrimitive.Separator
                  key={`separator-${index}`}
                  className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-2 mx-2"
                />
              );
            }

            return (
              <DropdownMenuPrimitive.Item
                key={item.id}
                disabled={item.disabled}
                onSelect={item.onSelect}
                className="
                  group
                  flex items-center
                  mx-1 px-3 py-2.5
                  text-sm text-white font-medium
                  rounded-lg
                  cursor-default
                  transition-all duration-200
                  focus:outline-none
                  focus:bg-gradient-to-r focus:from-purple-600 focus:to-pink-600
                  focus:shadow-[0_0_20px_rgba(139,92,246,0.4)]
                  data-[highlighted]:bg-gradient-to-r data-[highlighted]:from-purple-600 data-[highlighted]:to-pink-600
                  data-[highlighted]:shadow-[0_0_20px_rgba(139,92,246,0.4)]
                  data-[highlighted]:scale-[1.02]
                  data-[disabled]:text-gray-600
                  data-[disabled]:pointer-events-none
                "
              >
                {/* Optional icon - neon on hover */}
                {item.icon && (
                  <span className="mr-3 text-purple-400 group-data-[highlighted]:text-white transition-colors duration-200 [&>svg]:w-4 [&>svg]:h-4">
                    {item.icon}
                  </span>
                )}

                {/* Item label - UPPERCASE for that bold feel */}
                <span className="flex-1 tracking-wide">{item.label}</span>

                {/* Keyboard shortcut - boxed, neon */}
                {item.shortcut && (
                  <kbd className="
                    ml-4 px-2 py-0.5
                    text-xs font-mono font-bold
                    text-cyan-400 group-data-[highlighted]:text-white
                    bg-gray-900 group-data-[highlighted]:bg-white/10
                    border border-gray-700 group-data-[highlighted]:border-white/20
                    rounded-md
                    tracking-widest
                    transition-all duration-200
                  ">
                    {item.shortcut}
                  </kbd>
                )}
              </DropdownMenuPrimitive.Item>
            );
          })}

          {/* Bottom gradient accent */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}

export default DropdownMenu;
