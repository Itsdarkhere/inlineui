/**
 * Footer - Minimal Clean Style
 *
 * A quiet, well-organized footer with Swiss precision.
 * Clear hierarchy, restrained typography, borders for separation.
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
        bg-white
        border-t border-neutral-200
        font-['Inter',system-ui,sans-serif]
        ${className}
      `}
    >
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo and Tagline Column */}
          <div className="lg:col-span-4">
            <div className="text-lg font-medium tracking-tight text-[#111]">
              {logo}
            </div>
            {tagline && (
              <p className="mt-5 text-sm text-neutral-500 max-w-xs leading-relaxed">
                {tagline}
              </p>
            )}

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="flex gap-5 mt-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="
                      text-neutral-400
                      transition-colors duration-100 ease-out
                      hover:text-[#111]
                    "
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
              <h3 className="text-xs font-medium text-[#111] uppercase tracking-wider">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="
                        text-sm text-neutral-500
                        transition-colors duration-100 ease-out
                        hover:text-[#111]
                      "
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
        <div className="mt-16 pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-xs text-neutral-400">{copyrightText}</p>

            {/* Legal Links */}
            {legalLinks.length > 0 && (
              <ul className="flex flex-wrap gap-6">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="
                        text-xs text-neutral-400
                        transition-colors duration-100 ease-out
                        hover:text-[#111]
                      "
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
