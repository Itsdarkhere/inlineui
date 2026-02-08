/**
 * DropdownMenu - Editorial Style
 *
 * Dropdown menus with publication-level refinement.
 * Sharp corners, thin borders, subtle shadow.
 * Yellow-600 accent on selection, fast transitions.
 */

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

export interface DropdownMenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  shortcut?: string;
  disabled?: boolean;
  onSelect?: () => void;
}

export interface DropdownMenuSeparator {
  type: "separator";
}

export type DropdownMenuContent = DropdownMenuItem | DropdownMenuSeparator;

export interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: DropdownMenuContent[];
  align?: "start" | "center" | "end";
  sideOffset?: number;
  contentClassName?: string;
}

function isSeparator(
  content: DropdownMenuContent
): content is DropdownMenuSeparator {
  return "type" in content && content.type === "separator";
}

/**
 * DropdownMenu component with editorial styling.
 * Sharp, refined, subtle interactions.
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
      {/* Trigger */}
      <DropdownMenuPrimitive.Trigger asChild>
        {trigger}
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        {/* Content - sharp corners, subtle shadow */}
        <DropdownMenuPrimitive.Content
          align={align}
          sideOffset={sideOffset}
          className={`
            min-w-[200px]
            bg-white
            border border-zinc-200
            rounded-none
            shadow-lg
            py-1
            font-['Inter',system-ui,sans-serif]
            focus:outline-none
            data-[state=open]:animate-in data-[state=closed]:animate-out
            data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
            data-[side=bottom]:slide-in-from-top-2
            data-[side=top]:slide-in-from-bottom-2
            duration-100
            ${contentClassName}
          `}
        >
          {items.map((item, index) => {
            if (isSeparator(item)) {
              return (
                <DropdownMenuPrimitive.Separator
                  key={`separator-${index}`}
                  className="h-px bg-zinc-100 my-1"
                />
              );
            }

            return (
              <DropdownMenuPrimitive.Item
                key={item.id}
                disabled={item.disabled}
                onSelect={item.onSelect}
                className={`
                  flex items-center
                  px-4 py-2.5
                  text-sm text-zinc-700
                  cursor-pointer
                  focus:outline-none
                  focus:bg-zinc-50
                  hover:bg-zinc-50
                  data-[highlighted]:bg-zinc-50
                  disabled:opacity-40 disabled:cursor-not-allowed
                  transition-colors duration-100
                `}
              >
                {/* Optional icon */}
                {item.icon && (
                  <span className="mr-3 text-zinc-400">{item.icon}</span>
                )}

                {/* Item label */}
                <span className="flex-1">{item.label}</span>

                {/* Optional keyboard shortcut */}
                {item.shortcut && (
                  <span className="ml-auto text-xs text-zinc-400 font-mono">
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
