/**
 * Footer - Electric Chaos Style
 *
 * A footer that refuses to be an afterthought.
 * Neon borders, gradient text, glowing social links.
 * The party continues all the way down.
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
        relative
        bg-black
        border-t-2 border-purple-500/50
        font-['Space_Grotesk',system-ui,sans-serif]
        overflow-hidden
        ${className}
      `}
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute bottom-0 left-0
            w-1/3 h-1/2
            bg-purple-600/20
            rounded-full
            blur-[100px]
          "
        />
        <div
          className="
            absolute bottom-0 right-0
            w-1/3 h-1/2
            bg-pink-600/20
            rounded-full
            blur-[100px]
          "
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Logo and Tagline Column */}
          <div className="lg:col-span-4">
            <div
              className="
                text-3xl font-black tracking-tight
                text-transparent bg-clip-text
                bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400
                drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]
                font-['Unbounded',system-ui,sans-serif]
              "
            >
              {logo}
            </div>
            {tagline && (
              <p className="mt-6 text-base text-white/50 max-w-xs leading-relaxed">
                {tagline}
              </p>
            )}

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="flex gap-4 mt-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="
                      p-3
                      text-white/60
                      bg-white/5
                      border-2 border-white/10
                      rounded-xl
                      transition-all duration-300 ease-out
                      hover:text-purple-400
                      hover:border-purple-500/50
                      hover:bg-purple-500/10
                      hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]
                      hover:scale-110
                    "
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Link Columns */}
          {columns.map((column, columnIndex) => {
            const accentColors = [
              "from-purple-400 to-pink-500",
              "from-cyan-400 to-blue-500",
              "from-lime-400 to-green-500",
              "from-orange-400 to-red-500",
            ];
            const accent = accentColors[columnIndex % accentColors.length];

            return (
              <div key={column.title} className="lg:col-span-2">
                <h3
                  className={`
                    text-xs font-black uppercase tracking-[0.3em]
                    text-transparent bg-clip-text
                    bg-gradient-to-r ${accent}
                  `}
                >
                  {column.title}
                </h3>
                <ul className="mt-6 space-y-4">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="
                          text-sm text-white/50
                          transition-all duration-300 ease-out
                          hover:text-white
                          hover:pl-2
                        "
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div
          className="
            mt-20
            p-8
            bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10
            border-2 border-purple-500/30
            rounded-2xl
          "
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4
                className="
                  text-lg font-black uppercase tracking-wider
                  text-transparent bg-clip-text
                  bg-gradient-to-r from-purple-400 to-pink-500
                  font-['Unbounded',system-ui,sans-serif]
                "
              >
                JOIN THE CHAOS
              </h4>
              <p className="mt-2 text-sm text-white/50">
                Get updates, drops, and exclusive access.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="
                  flex-1 md:w-64
                  px-5 py-3
                  text-sm font-bold text-white uppercase tracking-wider
                  placeholder-white/30
                  bg-black/50
                  border-2 border-purple-500/50
                  rounded-xl
                  outline-none
                  transition-all duration-300
                  focus:border-purple-500
                  focus:shadow-[0_0_20px_rgba(139,92,246,0.5)]
                "
              />
              <button
                className="
                  px-6 py-3
                  text-sm font-black uppercase tracking-wider
                  text-black
                  bg-gradient-to-r from-lime-400 to-green-500
                  border-2 border-lime-400
                  rounded-xl
                  shadow-[0_0_20px_rgba(132,204,22,0.5)]
                  transition-all duration-300
                  hover:scale-105
                  hover:shadow-[0_0_30px_rgba(132,204,22,0.7)]
                "
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="
            mt-16 pt-8
            border-t border-white/10
          "
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-xs text-white/30 uppercase tracking-widest">
              {copyrightText}
            </p>

            {/* Legal Links */}
            {legalLinks.length > 0 && (
              <ul className="flex flex-wrap gap-8">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="
                        text-xs text-white/30 uppercase tracking-widest
                        transition-all duration-300
                        hover:text-purple-400
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
