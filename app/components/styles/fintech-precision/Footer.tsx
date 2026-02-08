/**
 * Footer - Fintech Precision Style
 *
 * Trading platform inspired footer.
 * Dark theme, structured columns, uppercase headings, subtle separators.
 */

import type { ReactNode } from "react";

/**
 * Single link item in a footer column
 */
export interface FooterLink {
  /** Link text */
  label: string;
  /** URL or route path */
  href: string;
}

/**
 * Column of links in the footer
 */
export interface FooterColumn {
  /** Column heading */
  title: string;
  /** Links within this column */
  links: FooterLink[];
}

/**
 * Social media link configuration
 */
export interface SocialLink {
  /** Platform name (for accessibility) */
  name: string;
  /** URL to social profile */
  href: string;
  /** Icon element to display */
  icon: ReactNode;
}

/**
 * Props for the Footer component
 */
export interface FooterProps {
  /** Logo content - can be text, image, or custom element */
  logo: ReactNode;
  /** Optional tagline or description below logo */
  tagline?: string;
  /** Array of link columns */
  columns: FooterColumn[];
  /** Social media links with icons */
  socialLinks?: SocialLink[];
  /** Copyright text (year and company will be displayed) */
  copyrightText: string;
  /** Additional legal links (Privacy, Terms, etc.) */
  legalLinks?: FooterLink[];
  /** Additional CSS classes for the container */
  className?: string;
}

/**
 * Fintech Precision Footer component.
 * Dark, authoritative, with clear structure and subtle accents.
 */
export function Footer({
  logo,
  tagline,
  columns,
  socialLinks = [],
  copyrightText,
  legalLinks = [],
  className = "",
}: FooterProps) {
  return (
    <footer
      className={`bg-neutral-950 border-t border-neutral-800 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Logo and Tagline Column */}
          <div className="lg:col-span-4">
            <div className="text-xl font-semibold text-neutral-100 tracking-tight">{logo}</div>
            {tagline && (
              <p className="mt-4 text-sm text-neutral-500 max-w-xs leading-relaxed">{tagline}</p>
            )}

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="text-neutral-600 hover:text-yellow-500 transition-colors duration-100"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Link Columns */}
          {columns.map((column) => (
            <div key={column.title} className="lg:col-span-2">
              <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-500 hover:text-neutral-200 transition-colors duration-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-xs text-neutral-600 font-mono">{copyrightText}</p>

            {/* Legal Links */}
            {legalLinks.length > 0 && (
              <ul className="flex flex-wrap gap-6">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors duration-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
