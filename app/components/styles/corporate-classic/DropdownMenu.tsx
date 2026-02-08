/**
 * DropdownMenu - Corporate Classic Style
 *
 * Professional dropdown with clean borders and subtle shadows.
 * Yellow-600 focus states, gray hover backgrounds.
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

/**
 * Corporate Classic DropdownMenu component.
 * Professional styling with subtle shadows and yellow-600 focus.
 */
export function DropdownMenu({
  trigger,
  items,
  align = "start",
  sideOffset = 4,
  contentClassName = "",
}: DropdownMenuProps) {
  return (
    <DropdownMenuPrimitive.Root>
      {/* Trigger - the element that opens the menu */}
      <DropdownMenuPrimitive.Trigger asChild>
        {trigger}
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        {/* Content - the floating menu panel */}
        <DropdownMenuPrimitive.Content
          align={align}
          sideOffset={sideOffset}
          className={`min-w-[180px] bg-white border border-gray-200 rounded-lg shadow-md py-1.5 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ${contentClassName}`}
        >
          {items.map((item, index) => {
            if (isSeparator(item)) {
              // Separator between items
              return (
                <DropdownMenuPrimitive.Separator
                  key={`separator-${index}`}
                  className="h-px bg-gray-200 my-1.5 mx-2"
                />
              );
            }

            // Regular menu item
            return (
              <DropdownMenuPrimitive.Item
                key={item.id}
                disabled={item.disabled}
                onSelect={item.onSelect}
                className="flex items-center px-3 py-2 text-sm text-gray-700 cursor-pointer focus:outline-none focus:bg-gray-100 hover:bg-gray-50 data-[highlighted]:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed mx-1 rounded transition-colors"
              >
                {/* Optional icon */}
                {item.icon && (
                  <span className="mr-2.5 text-gray-500">{item.icon}</span>
                )}

                {/* Item label */}
                <span className="flex-1">{item.label}</span>

                {/* Optional keyboard shortcut */}
                {item.shortcut && (
                  <span className="ml-auto text-xs text-gray-400 font-mono">
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
