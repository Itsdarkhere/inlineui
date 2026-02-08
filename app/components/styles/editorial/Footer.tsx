/**
 * Footer - Editorial Style
 *
 * Footer with publication-inspired layout and typography.
 * Serif logo, uppercase column headings, thin dividers.
 * Yellow-600 accent on social icon hover.
 */

import type { ReactNode } from "react";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: ReactNode;
}

export interface FooterProps {
  logo: ReactNode;
  tagline?: string;
  columns: FooterColumn[];
  socialLinks?: SocialLink[];
  copyrightText: string;
  legalLinks?: FooterLink[];
  className?: string;
}

/**
 * Footer - Multi-column footer section
 * Editorial aesthetic: serif logo, refined links, restrained styling.
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
      className={`
        bg-zinc-50
        border-t border-zinc-200
        font-['Inter',system-ui,sans-serif]
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Logo and Tagline Column */}
          <div className="lg:col-span-4">
            <div className="font-['Playfair_Display',Georgia,serif] text-2xl font-bold text-zinc-900 tracking-tight">
              {logo}
            </div>
            {tagline && (
              <p className="mt-4 text-sm text-zinc-500 leading-relaxed max-w-xs">
                {tagline}
              </p>
            )}

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="text-zinc-400 hover:text-yellow-600 transition-colors duration-150"
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
              <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-150"
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
        <div className="mt-14 pt-8 border-t border-zinc-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-zinc-400">{copyrightText}</p>

            {/* Legal Links */}
            {legalLinks.length > 0 && (
              <ul className="flex flex-wrap gap-6">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-zinc-600 transition-colors duration-150"
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
