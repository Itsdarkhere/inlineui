/**
 * Dynamic Google Fonts loader
 *
 * Injects Google Fonts link tags on demand based on the active style.
 * Handles caching - fonts already loaded won't be re-requested.
 */

const GOOGLE_FONTS_BASE = 'https://fonts.googleapis.com/css2';
const loadedFonts = new Set<string>();

/**
 * Generates Google Fonts URL for given font families
 */
function buildGoogleFontsUrl(fonts: string[]): string {
  const families = fonts
    .map(font => `family=${encodeURIComponent(font)}:wght@400;500;600;700`)
    .join('&');
  return `${GOOGLE_FONTS_BASE}?${families}&display=swap`;
}

/**
 * Loads fonts dynamically by injecting a link tag
 * Returns a promise that resolves when fonts are loaded
 */
export async function loadFonts(fonts: string[]): Promise<void> {
  // Filter out already loaded fonts
  const newFonts = fonts.filter(font => !loadedFonts.has(font));

  if (newFonts.length === 0) {
    return; // All fonts already loaded
  }

  const url = buildGoogleFontsUrl(newFonts);

  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.onload = () => {
      newFonts.forEach(font => loadedFonts.add(font));
      resolve();
    };
    link.onerror = () => reject(new Error(`Failed to load fonts: ${newFonts.join(', ')}`));
    document.head.appendChild(link);
  });
}

/**
 * Preconnect to Google Fonts for faster loading
 * Call this once on app init
 */
export function preconnectGoogleFonts(): void {
  if (typeof document === 'undefined') return;

  const preconnects = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];

  preconnects.forEach(href => {
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = href;
      if (href.includes('gstatic')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    }
  });
}

/**
 * Parse fonts from style markdown frontmatter
 */
export function parseFontsFromMarkdown(content: string): string[] {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return [];

  const frontmatter = frontmatterMatch[1];
  const fontsMatch = frontmatter.match(/fonts:\n((?:\s+-\s+.+\n?)+)/);
  if (!fontsMatch) return [];

  return fontsMatch[1]
    .split('\n')
    .map(line => line.replace(/^\s*-\s*/, '').trim())
    .filter(Boolean);
}
