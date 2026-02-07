import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { loadFonts, parseFontsFromMarkdown } from './fonts';

export interface Style {
  /** Unique identifier (filename without .md) */
  id: string;
  /** Display name */
  name: string;
  /** The raw markdown content */
  content: string;
  /** Parsed font families */
  fonts: string[];
  /** Price in cents, 0 = free */
  price: number;
  /** Author info */
  author?: {
    name: string;
    url?: string;
  };
}

interface StyleContextValue {
  /** All available styles */
  styles: Style[];
  /** Currently active style */
  activeStyle: Style | null;
  /** Set the active style by id */
  setActiveStyle: (id: string) => void;
  /** Whether fonts are currently loading */
  fontsLoading: boolean;
}

const StyleContext = createContext<StyleContextValue | null>(null);

interface StyleProviderProps {
  children: React.ReactNode;
  /** Pre-loaded styles */
  styles: Style[];
  /** Initial active style id */
  defaultStyleId?: string;
}

export function StyleProvider({ children, styles, defaultStyleId }: StyleProviderProps) {
  const [activeStyle, setActiveStyleState] = useState<Style | null>(
    () => styles.find(s => s.id === defaultStyleId) || styles[0] || null
  );
  const [fontsLoading, setFontsLoading] = useState(false);

  const setActiveStyle = useCallback((id: string) => {
    const style = styles.find(s => s.id === id);
    if (style) {
      setActiveStyleState(style);
    }
  }, [styles]);

  // Load fonts when active style changes
  useEffect(() => {
    if (!activeStyle || activeStyle.fonts.length === 0) return;

    setFontsLoading(true);
    loadFonts(activeStyle.fonts)
      .catch(err => console.error('Failed to load fonts:', err))
      .finally(() => setFontsLoading(false));
  }, [activeStyle]);

  return (
    <StyleContext.Provider value={{ styles, activeStyle, setActiveStyle, fontsLoading }}>
      {children}
    </StyleContext.Provider>
  );
}

export function useStyle() {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error('useStyle must be used within a StyleProvider');
  }
  return context;
}

/**
 * Parse a style from markdown file content
 */
export function parseStyle(id: string, content: string): Style {
  const fonts = parseFontsFromMarkdown(content);

  // Parse name from first h1
  const nameMatch = content.match(/^#\s+(.+)$/m);
  const name = nameMatch ? nameMatch[1] : id;

  // Parse price from frontmatter (default free)
  const priceMatch = content.match(/^price:\s*(\d+)/m);
  const price = priceMatch ? parseInt(priceMatch[1], 10) : 0;

  // Parse author from frontmatter
  const authorNameMatch = content.match(/^author:\s*(.+)$/m);
  const authorUrlMatch = content.match(/^author_url:\s*(.+)$/m);
  const author = authorNameMatch
    ? { name: authorNameMatch[1], url: authorUrlMatch?.[1] }
    : undefined;

  return { id, name, content, fonts, price, author };
}
