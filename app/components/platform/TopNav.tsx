import { useState, useRef, useEffect } from 'react';
import { useStyle } from '../../lib/style-context';

export function TopNav() {
  const { styles, activeStyle, setActiveStyle } = useStyle();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="h-[49px] shrink-0 border-b border-[#e5e5e5] bg-white flex items-center justify-between px-6 font-sans">
      {/* Logo */}
      <div className="text-[#111] font-semibold text-lg tracking-tight">
        InlineUI
      </div>

      {/* Style Toggle Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-1.5 border border-[#e5e5e5] bg-white text-[#111] text-sm font-sans hover:border-[#111] transition-colors"
        >
          <span className="text-[#666]">Style:</span>
          <span>{activeStyle?.name || 'Select style'}</span>
          <svg
            className={`w-4 h-4 text-[#666] transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute right-0 top-full mt-1 min-w-[180px] border border-[#e5e5e5] bg-white z-50">
            {styles.map((style) => (
              <button
                key={style.id}
                onClick={() => {
                  setActiveStyle(style.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-sm font-sans hover:bg-[#f5f5f5] transition-colors ${
                  activeStyle?.id === style.id
                    ? 'text-[#111] bg-[#f5f5f5]'
                    : 'text-[#666]'
                }`}
              >
                {style.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
