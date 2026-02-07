/**
 * DropdownMenu Component - Minimal Clean Style
 *
 * A restrained dropdown menu. Borders over shadows for separation,
 * subtle hover states, and precise alignment. Nothing screams.
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
  sideOffset = 4,
  contentClassName = "",
}: DropdownMenuProps) {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        {trigger}
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        {/* Content - white background, subtle border, minimal shadow */}
        <DropdownMenuPrimitive.Content
          align={align}
          sideOffset={sideOffset}
          className={`
            min-w-[180px]
            bg-white border border-gray-200 rounded-md
            shadow-sm
            py-1
            font-['Inter',system-ui,sans-serif]
            focus:outline-none
            data-[state=open]:animate-in data-[state=closed]:animate-out
            data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
            data-[state=closed]:zoom-out-[0.98] data-[state=open]:zoom-in-[0.98]
            data-[side=bottom]:slide-in-from-top-1
            data-[side=top]:slide-in-from-bottom-1
            duration-150
            ${contentClassName}
          `}
        >
          {items.map((item, index) => {
            if (isSeparator(item)) {
              return (
                <DropdownMenuPrimitive.Separator
                  key={`separator-${index}`}
                  className="h-px bg-gray-100 my-1 mx-2"
                />
              );
            }

            return (
              <DropdownMenuPrimitive.Item
                key={item.id}
                disabled={item.disabled}
                onSelect={item.onSelect}
                className="
                  flex items-center
                  mx-1 px-2 py-1.5
                  text-sm text-[#111]
                  rounded-sm
                  cursor-default
                  transition-colors duration-100
                  focus:outline-none
                  focus:bg-gray-100
                  data-[highlighted]:bg-gray-100
                  data-[disabled]:text-gray-400
                  data-[disabled]:pointer-events-none
                "
              >
                {/* Optional icon - subtle gray */}
                {item.icon && (
                  <span className="mr-2.5 text-gray-500 [&>svg]:w-4 [&>svg]:h-4">
                    {item.icon}
                  </span>
                )}

                {/* Item label */}
                <span className="flex-1">{item.label}</span>

                {/* Keyboard shortcut - monospace, muted */}
                {item.shortcut && (
                  <span className="ml-4 text-xs text-gray-400 font-mono tracking-wide">
                    {item.shortcut}
                  </span>
                )}
              </DropdownMenuPrimitive.Item>
            );
          })}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}

export default DropdownMenu;
