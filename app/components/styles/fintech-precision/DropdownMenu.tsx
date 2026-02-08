/**
 * DropdownMenu - Fintech Precision Style
 *
 * Trading platform inspired dropdown menu.
 * Dark panel, sharp edges, keyboard shortcuts, fast transitions.
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
      {/* Trigger - the element that opens the menu */}
      <DropdownMenuPrimitive.Trigger asChild>
        {trigger}
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        {/* Content - the floating menu panel */}
        <DropdownMenuPrimitive.Content
          align={align}
          sideOffset={sideOffset}
          className={`min-w-[180px] bg-neutral-900 border border-neutral-700 rounded shadow-xl shadow-black/50 py-1 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-100 ${contentClassName}`}
        >
          {items.map((item, index) => {
            if (isSeparator(item)) {
              // Separator between items
              return (
                <DropdownMenuPrimitive.Separator
                  key={`separator-${index}`}
                  className="h-px bg-neutral-800 my-1"
                />
              );
            }

            // Regular menu item
            return (
              <DropdownMenuPrimitive.Item
                key={item.id}
                disabled={item.disabled}
                onSelect={item.onSelect}
                className="flex items-center px-3 py-2 text-sm text-neutral-300 cursor-pointer focus:outline-none focus:bg-neutral-800 focus:text-neutral-100 hover:bg-neutral-800 hover:text-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-75"
              >
                {/* Optional icon */}
                {item.icon && (
                  <span className="mr-2 text-neutral-500">{item.icon}</span>
                )}

                {/* Item label */}
                <span className="flex-1">{item.label}</span>

                {/* Optional keyboard shortcut */}
                {item.shortcut && (
                  <kbd className="ml-auto text-[10px] font-mono text-neutral-500 bg-neutral-800 border border-neutral-700 px-1.5 py-0.5 rounded">
                    {item.shortcut}
                  </kbd>
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
