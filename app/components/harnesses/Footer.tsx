/**
 * Footer Component Harness
 *
 * The essential but often overlooked footer section.
 * Shows how a style handles low-priority but necessary UI.
 *
 * Style .md files should customize:
 * - Background color and top border treatment
 * - Logo/brand presentation in footer context
 * - Link column typography and spacing
 * - Social icon styling
 * - Copyright text styling
 * - Divider/separator treatment
 * - Overall density and padding
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
 * Footer - Multi-column footer section
 *
 * Demonstrates how a style handles:
 * - Secondary/tertiary typography
 * - Multi-column layouts
 * - Link styling in muted contexts
 * - Icon presentation
 * - Visual hierarchy in low-emphasis areas
 * - Border and separator treatment
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
      className={`bg-gray-50 border-t border-gray-200 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Logo and Tagline Column */}
          <div className="lg:col-span-4">
            <div className="text-xl font-semibold text-gray-900">{logo}</div>
            {tagline && (
              <p className="mt-4 text-sm text-gray-600 max-w-xs">{tagline}</p>
            )}

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
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
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
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
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-500">{copyrightText}</p>

            {/* Legal Links */}
            {legalLinks.length > 0 && (
              <ul className="flex flex-wrap gap-6">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
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
