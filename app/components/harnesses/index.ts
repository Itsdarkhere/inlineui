/**
 * Component Harnesses Index
 *
 * These are structural component templates with neutral/minimal Tailwind styling.
 * Style .md files define the actual aesthetic.
 */

// Basic UI
export { Button } from "./Button";
export type { ButtonProps } from "./Button";

export { Card, CardHeader, CardBody, CardFooter } from "./Card";
export type { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps } from "./Card";

export { Badge } from "./Badge";
export type { BadgeProps } from "./Badge";

export { Alert } from "./Alert";
export type { AlertProps } from "./Alert";

// Content
export { Typography } from "./Typography";
export type { TypographyProps } from "./Typography";

export { Form } from "./Form";
export type { FormProps } from "./Form";

export { Table, TableExample } from "./Table";
export type { TableProps, TableColumn } from "./Table";

export { Pagination, PaginationExample } from "./Pagination";
export type { PaginationProps } from "./Pagination";

// Layout
export { NavigationBar } from "./NavigationBar";
export type { NavigationBarProps, NavLink } from "./NavigationBar";

export { HeroSection } from "./HeroSection";
export type { HeroSectionProps, HeroButton } from "./HeroSection";

export { Footer } from "./Footer";
export type { FooterProps, FooterColumn, FooterLink, SocialLink } from "./Footer";

export { PricingCard } from "./PricingCard";
export type { PricingCardProps, PricingFeature } from "./PricingCard";

// Interactive (Radix-based)
export { Dialog } from "./Dialog";
export type { DialogProps } from "./Dialog";

export { DropdownMenu } from "./DropdownMenu";
export type { DropdownMenuProps, DropdownMenuItem } from "./DropdownMenu";

export { Tabs } from "./Tabs";
export type { TabsProps, Tab } from "./Tabs";

export { Accordion } from "./Accordion";
export type { AccordionProps, AccordionItem } from "./Accordion";

export { Toast, ToastProvider, useToast } from "./Toast";
export type { ToastProps, ToastProviderProps } from "./Toast";

export { CommandPalette } from "./CommandPalette";
export type { CommandPaletteProps, CommandItem, CommandGroup } from "./CommandPalette";
