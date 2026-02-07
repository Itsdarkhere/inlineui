/**
 * CommandPalette Component - Electric Chaos Style
 *
 * A power-user command interface that feels like hacking into the mainframe.
 * Neon green search, glowing selections, pulsing cursor. Every keystroke
 * sends ripples of electric energy through the interface.
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

/** Neon search icon with glow */
function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-lime-400 drop-shadow-[0_0_8px_rgba(132,204,22,0.5)]"
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

/** The command palette content */
function CommandPaletteContent({
  groups,
  placeholder = "TYPE COMMAND...",
  emptyMessage = "NO RESULTS FOUND.",
  onSelect,
  className = "",
  inputClassName = "",
  listClassName = "",
}: Omit<CommandPaletteProps, "open" | "onOpenChange" | "modal">) {
  return (
    <Command
      className={`
        w-full
        bg-black
        border-2 border-purple-500
        rounded-2xl
        shadow-[0_0_60px_rgba(139,92,246,0.4),0_0_120px_rgba(139,92,246,0.2)]
        overflow-hidden
        font-['Space_Grotesk',system-ui,sans-serif]
        ${className}
      `}
      loop
    >
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400" />

      {/* Search input - neon terminal style */}
      <div className="flex items-center gap-4 px-5 py-4 border-b-2 border-gray-800">
        <SearchIcon />
        <Command.Input
          placeholder={placeholder}
          className={`
            w-full
            text-base font-bold text-lime-400 uppercase tracking-widest
            bg-transparent
            border-0 outline-none
            placeholder:text-gray-600 placeholder:font-normal
            caret-lime-400
            ${inputClassName}
          `}
        />
        {/* Escape hint */}
        <kbd className="
          px-2 py-1
          text-xs font-mono font-bold
          text-gray-500
          bg-gray-900
          border border-gray-700
          rounded-lg
          tracking-wider
        ">
          ESC
        </kbd>
      </div>

      {/* Command list */}
      <Command.List
        className={`
          max-h-96 overflow-y-auto
          p-3
          ${listClassName}
        `}
      >
        {/* Empty state - glitchy feel */}
        <Command.Empty className="py-12 text-center text-sm text-gray-500 uppercase tracking-widest">
          <span className="block text-pink-500 font-bold">{emptyMessage}</span>
          <span className="block mt-2 text-xs text-gray-600">TRY A DIFFERENT QUERY</span>
        </Command.Empty>

        {/* Command groups */}
        {groups.map((group) => (
          <Command.Group
            key={group.heading}
            heading={group.heading}
            className="
              [&_[cmdk-group-heading]]:px-3
              [&_[cmdk-group-heading]]:py-2
              [&_[cmdk-group-heading]]:text-xs
              [&_[cmdk-group-heading]]:font-black
              [&_[cmdk-group-heading]]:text-purple-400
              [&_[cmdk-group-heading]]:uppercase
              [&_[cmdk-group-heading]]:tracking-[0.2em]
              mb-2
            "
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
                className="
                  group
                  flex items-center gap-4
                  px-4 py-3
                  text-sm text-white font-medium
                  rounded-xl
                  cursor-default
                  transition-all duration-300
                  aria-selected:bg-gradient-to-r aria-selected:from-purple-600 aria-selected:to-pink-600
                  aria-selected:shadow-[0_0_25px_rgba(139,92,246,0.5)]
                  aria-selected:scale-[1.02]
                  aria-disabled:text-gray-700
                  aria-disabled:pointer-events-none
                "
                style={{
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                {/* Optional icon - neon glow on select */}
                {item.icon && (
                  <span className="
                    text-cyan-400
                    group-aria-selected:text-white
                    group-aria-selected:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]
                    transition-all duration-300
                    [&>svg]:w-5 [&>svg]:h-5
                  ">
                    {item.icon}
                  </span>
                )}

                {/* Label - uppercase for that terminal feel */}
                <span className="flex-1 tracking-wide">{item.label}</span>

                {/* Keyboard shortcut - boxed neon style */}
                {item.shortcut && (
                  <kbd className="
                    px-2.5 py-1
                    text-xs font-mono font-bold
                    text-cyan-400 group-aria-selected:text-white
                    bg-gray-900 group-aria-selected:bg-white/10
                    border border-gray-700 group-aria-selected:border-white/20
                    rounded-lg
                    tracking-widest
                    transition-all duration-300
                  ">
                    {item.shortcut}
                  </kbd>
                )}

                {/* Selection indicator arrow */}
                <span className="
                  opacity-0 group-aria-selected:opacity-100
                  text-white
                  transition-opacity duration-300
                ">
                  <svg width="16" height="16" viewBox="0 0 15 15" fill="none">
                    <path
                      d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Command.Item>
            ))}
          </Command.Group>
        ))}
      </Command.List>

      {/* Bottom bar with hints */}
      <div className="flex items-center justify-between px-5 py-3 border-t-2 border-gray-800 bg-gray-950/50">
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-gray-800 rounded text-gray-400 font-mono">
              <svg width="10" height="10" viewBox="0 0 15 15" fill="currentColor" className="inline">
                <path d="M7.5 2C7.77614 2 8 2.22386 8 2.5V12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5V2.5C7 2.22386 7.22386 2 7.5 2Z"/>
                <path d="M4.5 5C4.22386 5 4 5.22386 4 5.5C4 5.77614 4.22386 6 4.5 6H10.5C10.7761 6 11 5.77614 11 5.5C11 5.22386 10.7761 5 10.5 5H4.5Z"/>
              </svg>
            </kbd>
            <kbd className="px-1.5 py-0.5 bg-gray-800 rounded text-gray-400 font-mono">
              <svg width="10" height="10" viewBox="0 0 15 15" fill="currentColor" className="inline rotate-180">
                <path d="M7.5 2C7.77614 2 8 2.22386 8 2.5V12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5V2.5C7 2.22386 7.22386 2 7.5 2Z"/>
                <path d="M4.5 5C4.22386 5 4 5.22386 4 5.5C4 5.77614 4.22386 6 4.5 6H10.5C10.7761 6 11 5.77614 11 5.5C11 5.22386 10.7761 5 10.5 5H4.5Z"/>
              </svg>
            </kbd>
            NAVIGATE
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-gray-800 rounded text-gray-400 font-mono text-[10px]">ENTER</kbd>
            SELECT
          </span>
        </div>
        <div className="text-xs text-purple-400 font-bold tracking-wider">
          ELECTRIC CHAOS
        </div>
      </div>
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
  // Non-modal: render content directly
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
      {/* Backdrop - deep black with blur */}
      <div
        className="
          fixed inset-0 bg-black/80 backdrop-blur-sm
          animate-in fade-in-0 duration-300
        "
        onClick={() => onOpenChange?.(false)}
      />

      {/* Dialog content - explosive entrance */}
      <div
        className="
          fixed left-1/2 top-[15%] -translate-x-1/2
          w-full max-w-xl
          animate-in fade-in-0 zoom-in-90 slide-in-from-bottom-8 duration-400
        "
        style={{
          animationTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <CommandPaletteContent {...contentProps} />
      </div>
    </Command.Dialog>
  );
}

export default CommandPalette;
