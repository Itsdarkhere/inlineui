/**
 * Component Harnesses Index
 *
 * These are layout/marketing components that demonstrate how a style
 * handles larger compositions and visual hierarchy.
 *
 * Each component uses neutral/minimal Tailwind styling so that
 * style .md files can define the actual aesthetic.
 */

export { NavigationBar } from "./NavigationBar";
export type { NavigationBarProps, NavLink } from "./NavigationBar";

export { HeroSection } from "./HeroSection";
export type { HeroSectionProps, HeroButton } from "./HeroSection";

export { Footer } from "./Footer";
export type {
  FooterProps,
  FooterColumn,
  FooterLink,
  SocialLink,
} from "./Footer";

export { PricingCard } from "./PricingCard";
export type { PricingCardProps, PricingFeature } from "./PricingCard";
