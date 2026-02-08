/**
 * CommandPalette - Editorial Style
 *
 * Command palette with publication-level refinement.
 * Sharp corners, thin borders, serif group headings option.
 * Yellow-600 on selection, fast transitions.
 */

import * as React from "react";
import { Command } from "cmdk";

export interface CommandItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  shortcut?: string;
  keywords?: string[];
  disabled?: boolean;
  onSelect?: () => void;
}

export interface CommandGroup {
  heading: string;
  items: CommandItem[];
}

export interface CommandPaletteProps {
  groups: CommandGroup[];
  placeholder?: string;
  emptyMessage?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
  onSelect?: (itemId: string) => void;
  className?: string;
  inputClassName?: string;
  listClassName?: string;
}

/** Search icon */
function SearchIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-zinc-400"
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

/** Command palette content */
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
      className={`
        w-full
        bg-white
        border border-zinc-200
        rounded-none
        shadow-xl
        overflow-hidden
        font-['Inter',system-ui,sans-serif]
        ${className}
      `}
      loop
    >
      {/* Search input */}
      <div className="flex items-center gap-3 px-4 border-b border-zinc-200">
        <SearchIcon />
        <Command.Input
          placeholder={placeholder}
          className={`
            w-full py-4
            text-sm
            bg-transparent border-0 outline-none
            placeholder:text-zinc-400
            ${inputClassName}
          `}
        />
      </div>

      {/* Command list */}
      <Command.List
        className={`max-h-80 overflow-y-auto p-2 ${listClassName}`}
      >
        {/* Empty state */}
        <Command.Empty className="py-8 text-center text-sm text-zinc-400">
          {emptyMessage}
        </Command.Empty>

        {/* Command groups */}
        {groups.map((group) => (
          <Command.Group
            key={group.heading}
            heading={group.heading}
            className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-zinc-400"
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
                className={`
                  flex items-center gap-3
                  px-3 py-2.5
                  text-sm text-zinc-700
                  cursor-pointer
                  aria-selected:bg-zinc-100
                  aria-disabled:opacity-40 aria-disabled:cursor-not-allowed
                  transition-colors duration-100
                `}
              >
                {/* Optional icon */}
                {item.icon && (
                  <span className="text-zinc-400">{item.icon}</span>
                )}

                {/* Label */}
                <span className="flex-1">{item.label}</span>

                {/* Keyboard shortcut */}
                {item.shortcut && (
                  <kbd className="px-2 py-0.5 text-xs font-mono text-zinc-500 bg-zinc-100 border border-zinc-200">
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

/** Main CommandPalette component */
export function CommandPalette({
  open,
  onOpenChange,
  modal = true,
  ...contentProps
}: CommandPaletteProps) {
  // If not modal, render content directly
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
        className="fixed inset-0 bg-zinc-900/40"
        onClick={() => onOpenChange?.(false)}
      />

      {/* Dialog content */}
      <div className="fixed left-1/2 top-1/4 -translate-x-1/2 w-full max-w-xl">
        <CommandPaletteContent {...contentProps} />
      </div>
    </Command.Dialog>
  );
}

export default CommandPalette;
