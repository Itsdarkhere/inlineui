/**
 * CommandPalette - Fintech Precision Style
 *
 * Bloomberg terminal inspired command palette.
 * Dark panel, monospace shortcuts, yellow highlights, keyboard-first.
 */

import * as React from "react";
import { Command } from "cmdk";

/** Individual command item */
export interface CommandItem {
  /** Unique identifier */
  id: string;
  /** Display label */
  label: string;
  /** Optional icon */
  icon?: React.ReactNode;
  /** Optional keyboard shortcut hint (e.g., "Cmd+K") */
  shortcut?: string;
  /** Keywords for search matching (not displayed) */
  keywords?: string[];
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Callback when item is selected */
  onSelect?: () => void;
}

/** Group of related commands */
export interface CommandGroup {
  /** Group heading */
  heading: string;
  /** Items in this group */
  items: CommandItem[];
}

/** Props for the CommandPalette component */
export interface CommandPaletteProps {
  /** Array of command groups */
  groups: CommandGroup[];
  /** Placeholder text for search input */
  placeholder?: string;
  /** Text to show when no results found */
  emptyMessage?: string;
  /** Whether the palette is open (controlled) */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Whether to render as a modal dialog */
  modal?: boolean;
  /** Callback when any item is selected */
  onSelect?: (itemId: string) => void;
  /** Additional className for the root element */
  className?: string;
  /** Additional className for the input */
  inputClassName?: string;
  /** Additional className for the list */
  listClassName?: string;
}

/** Search icon for the input */
function SearchIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-neutral-500"
    >
      <path
        d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

/** The command palette content (can be used standalone or in a dialog) */
function CommandPaletteContent({
  groups,
  placeholder = "Search commands...",
  emptyMessage = "No results found.",
  onSelect,
  className = "",
  inputClassName = "",
  listClassName = "",
}: Omit<CommandPaletteProps, "open" | "onOpenChange" | "modal">) {
  return (
    <Command
      className={`w-full bg-neutral-900 border border-neutral-700 rounded shadow-xl shadow-black/50 overflow-hidden ${className}`}
      loop
    >
      {/* Search input */}
      <div className="flex items-center gap-2 px-3 border-b border-neutral-800">
        <SearchIcon />
        <Command.Input
          placeholder={placeholder}
          className={`w-full py-3 text-sm bg-transparent border-0 outline-none text-neutral-100 placeholder:text-neutral-500 ${inputClassName}`}
        />
      </div>

      {/* Command list */}
      <Command.List
        className={`max-h-80 overflow-y-auto p-2 ${listClassName}`}
      >
        {/* Empty state */}
        <Command.Empty className="py-6 text-center text-sm text-neutral-500 uppercase tracking-wider">
          {emptyMessage}
        </Command.Empty>

        {/* Command groups */}
        {groups.map((group) => (
          <Command.Group
            key={group.heading}
            heading={group.heading}
            className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-neutral-500 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider"
          >
            {group.items.map((item) => (
              <Command.Item
                key={item.id}
                value={`${item.label} ${item.keywords?.join(" ") || ""}`}
                disabled={item.disabled}
                onSelect={() => {
                  item.onSelect?.();
                  onSelect?.(item.id);
                }}
                className="flex items-center gap-2 px-2 py-2 text-sm text-neutral-300 rounded cursor-pointer aria-selected:bg-neutral-800 aria-selected:text-neutral-100 aria-disabled:opacity-50 aria-disabled:cursor-not-allowed transition-colors duration-75"
              >
                {/* Optional icon */}
                {item.icon && (
                  <span className="text-neutral-500">{item.icon}</span>
                )}

                {/* Label */}
                <span className="flex-1">{item.label}</span>

                {/* Keyboard shortcut */}
                {item.shortcut && (
                  <kbd className="px-1.5 py-0.5 text-[10px] font-mono text-neutral-500 bg-neutral-800 border border-neutral-700 rounded">
                    {item.shortcut}
                  </kbd>
                )}
              </Command.Item>
            ))}
          </Command.Group>
        ))}
      </Command.List>
    </Command>
  );
}

/** Main CommandPalette component - renders as modal dialog when modal=true */
export function CommandPalette({
  open,
  onOpenChange,
  modal = true,
  ...contentProps
}: CommandPaletteProps) {
  // If not modal, just render the content directly
  if (!modal) {
    return <CommandPaletteContent {...contentProps} />;
  }

  // Modal version with dialog
  return (
    <Command.Dialog
      open={open}
      onOpenChange={onOpenChange}
      className="fixed inset-0 z-50"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => onOpenChange?.(false)}
      />

      {/* Dialog content */}
      <div className="fixed left-1/2 top-1/4 -translate-x-1/2 w-full max-w-lg">
        <CommandPaletteContent {...contentProps} />
      </div>
    </Command.Dialog>
  );
}

export default CommandPalette;
