/**
 * ComponentRenderer - Platform Component
 *
 * Renders component demos based on the active style.
 * Dynamically selects between harness components (default) and styled components.
 */

"use client";

import * as React from "react";
import { useStyle } from "../../lib/style-context";

// Harness components (default style)
import * as Harnesses from "../harnesses";

// Styled components
import * as MinimalClean from "../styles/minimal-clean";
import * as ElectricChaos from "../styles/electric-chaos";
import * as CorporateClassic from "../styles/corporate-classic";
import * as StartupModern from "../styles/startup-modern";
import * as Editorial from "../styles/editorial";
import * as FintechPrecision from "../styles/fintech-precision";

export interface ComponentRendererProps {
  /** The name of the component to render (e.g., "Button", "Card") */
  componentName: string;
}

/**
 * ComponentRenderer dynamically renders component demos based on the active style.
 * For "default" style, it renders from harnesses.
 * For specific styles like "minimal-clean", it renders from the style's component library.
 */
export function ComponentRenderer({ componentName }: ComponentRendererProps) {
  const { activeStyle } = useStyle();
  const styleId = activeStyle?.id || "default";

  // Render based on active style
  if (styleId === "minimal-clean") {
    return <MinimalCleanDemo componentName={componentName} />;
  }

  if (styleId === "electric-chaos") {
    return <ElectricChaosDemo componentName={componentName} />;
  }

  if (styleId === "corporate-classic") {
    return <CorporateClassicDemo componentName={componentName} />;
  }

  if (styleId === "startup-modern") {
    return <StartupModernDemo componentName={componentName} />;
  }

  if (styleId === "editorial") {
    return <EditorialDemo componentName={componentName} />;
  }

  if (styleId === "fintech-precision") {
    return <FintechPrecisionDemo componentName={componentName} />;
  }

  // Default: render from harnesses
  return <HarnessDemo componentName={componentName} />;
}

/**
 * Renders demos using harness components (default style)
 */
function HarnessDemo({ componentName }: { componentName: string }) {
  switch (componentName) {
    case "Button":
      return (
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Variants</p>
            <div className="flex flex-wrap gap-3">
              <Harnesses.Button variant="primary">Primary</Harnesses.Button>
              <Harnesses.Button variant="secondary">Secondary</Harnesses.Button>
              <Harnesses.Button variant="outline">Outline</Harnesses.Button>
              <Harnesses.Button variant="ghost">Ghost</Harnesses.Button>
              <Harnesses.Button variant="destructive">Destructive</Harnesses.Button>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Sizes</p>
            <div className="flex flex-wrap items-center gap-3">
              <Harnesses.Button size="sm">Small</Harnesses.Button>
              <Harnesses.Button size="md">Medium</Harnesses.Button>
              <Harnesses.Button size="lg">Large</Harnesses.Button>
            </div>
          </div>
        </div>
      );

    case "Card":
      return (
        <div className="max-w-md">
          <Harnesses.Card>
            <Harnesses.CardHeader>
              <h3 className="text-lg font-medium">Card Title</h3>
              <p className="text-sm text-gray-500 mt-1">Card description</p>
            </Harnesses.CardHeader>
            <Harnesses.CardBody>
              <p className="text-gray-700">This is the card body content.</p>
            </Harnesses.CardBody>
            <Harnesses.CardFooter>
              <Harnesses.Button variant="outline" size="sm">Cancel</Harnesses.Button>
              <Harnesses.Button size="sm">Save</Harnesses.Button>
            </Harnesses.CardFooter>
          </Harnesses.Card>
        </div>
      );

    case "Badge":
      return (
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Variants</p>
            <div className="flex flex-wrap gap-2">
              <Harnesses.Badge variant="default">Default</Harnesses.Badge>
              <Harnesses.Badge variant="primary">Primary</Harnesses.Badge>
              <Harnesses.Badge variant="success">Success</Harnesses.Badge>
              <Harnesses.Badge variant="warning">Warning</Harnesses.Badge>
              <Harnesses.Badge variant="error">Error</Harnesses.Badge>
            </div>
          </div>
        </div>
      );

    case "Alert":
      return (
        <div className="space-y-4 max-w-lg">
          <Harnesses.Alert variant="info" title="Information">
            This is an informational message.
          </Harnesses.Alert>
          <Harnesses.Alert variant="success" title="Success">
            Your changes have been saved.
          </Harnesses.Alert>
          <Harnesses.Alert variant="warning" title="Warning">
            Please review before continuing.
          </Harnesses.Alert>
          <Harnesses.Alert variant="error" title="Error">
            Something went wrong.
          </Harnesses.Alert>
        </div>
      );

    case "Typography":
      return <Harnesses.Typography />;

    case "Form":
      return (
        <div className="max-w-md">
          <Harnesses.Form />
        </div>
      );

    case "Table":
      return <Harnesses.TableExample />;

    case "Pagination":
      return <Harnesses.PaginationExample />;

    case "Dialog":
      return (
        <Harnesses.Dialog
          trigger={<Harnesses.Button>Open Dialog</Harnesses.Button>}
          title="Dialog Title"
          description="This is a dialog description."
        >
          <p>Dialog content goes here.</p>
        </Harnesses.Dialog>
      );

    case "DropdownMenu":
      return (
        <Harnesses.DropdownMenu
          trigger={<Harnesses.Button variant="outline">Open Menu</Harnesses.Button>}
          items={[
            { id: "profile", label: "Profile" },
            { id: "settings", label: "Settings" },
            { type: "separator" },
            { id: "logout", label: "Log out" },
          ]}
        />
      );

    case "Tabs":
      return (
        <div className="max-w-lg">
          <Harnesses.Tabs
            tabs={[
              { id: "tab1", label: "Overview", content: <p>Overview content</p> },
              { id: "tab2", label: "Features", content: <p>Features content</p> },
              { id: "tab3", label: "Pricing", content: <p>Pricing content</p> },
            ]}
          />
        </div>
      );

    case "Accordion":
      return (
        <div className="max-w-lg">
          <Harnesses.Accordion
            items={[
              { id: "item-1", title: "What is InlineUI?", content: "InlineUI is a component library." },
              { id: "item-2", title: "How do I get started?", content: "Just browse and copy components." },
              { id: "item-3", title: "Can I customize?", content: "Yes, everything is customizable." },
            ]}
          />
        </div>
      );

    case "Toast":
      return (
        <Harnesses.ToastProvider>
          <HarnessToastDemo />
        </Harnesses.ToastProvider>
      );

    case "CommandPalette":
      return <HarnessCommandPaletteDemo />;

    case "NavigationBar":
      return (
        <Harnesses.NavigationBar
          logo="InlineUI"
          links={[
            { label: "Home", href: "#", isActive: true },
            { label: "Components", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Docs", href: "#" },
          ]}
          showSearch
          ctaText="Get Started"
        />
      );

    case "HeroSection":
      return (
        <Harnesses.HeroSection
          heading="Build beautiful interfaces faster"
          subheading="A collection of beautifully designed, production-ready components you can copy and paste into your apps."
          buttons={[
            { label: "Get Started", href: "#", variant: "primary" },
            { label: "View Components", href: "#", variant: "secondary" },
          ]}
        />
      );

    case "Footer":
      return (
        <Harnesses.Footer
          logo="InlineUI"
          tagline="Beautiful components for modern applications."
          columns={[
            {
              title: "Product",
              links: [
                { label: "Components", href: "#" },
                { label: "Pricing", href: "#" },
                { label: "Changelog", href: "#" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
              ],
            },
          ]}
          socialLinks={[
            { name: "Twitter", href: "#", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
            { name: "GitHub", href: "#", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
          ]}
          copyrightText="2024 InlineUI. All rights reserved."
        />
      );

    case "PricingCard":
      return (
        <div className="max-w-sm">
          <Harnesses.PricingCard
            planName="Pro"
            price="$29"
            period="month"
            description="For growing teams that need more power."
            features={[
              { text: "Unlimited components", included: true },
              { text: "Priority support", included: true },
              { text: "Custom theming", included: true },
              { text: "White-label license", included: false },
            ]}
            ctaText="Start Free Trial"
            featured
          />
        </div>
      );

    default:
      return (
        <div className="text-gray-500 text-sm">
          No harness demo available for "{componentName}"
        </div>
      );
  }
}

function HarnessToastDemo() {
  const { addToast } = Harnesses.useToast();
  return (
    <div className="flex flex-wrap gap-2">
      <Harnesses.Button variant="outline" size="sm" onClick={() => addToast({ title: "Info", description: "Informational message.", variant: "default" })}>
        Show Toast
      </Harnesses.Button>
      <Harnesses.Button variant="outline" size="sm" onClick={() => addToast({ title: "Success", description: "Action completed.", variant: "success" })}>
        Success Toast
      </Harnesses.Button>
    </div>
  );
}

function HarnessCommandPaletteDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="space-y-4">
      <Harnesses.Button variant="outline" onClick={() => setOpen(true)}>
        Open Command Palette
      </Harnesses.Button>
      <Harnesses.CommandPalette
        open={open}
        onOpenChange={setOpen}
        groups={[
          {
            heading: "Navigation",
            items: [
              { id: "home", label: "Go to Home" },
              { id: "components", label: "Go to Components" },
            ],
          },
        ]}
        onSelect={() => setOpen(false)}
      />
    </div>
  );
}

/**
 * Renders demos using minimal-clean styled components
 */
function MinimalCleanDemo({ componentName }: { componentName: string }) {
  switch (componentName) {
    // Basic UI Components
    case "Button":
      return (
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Variants
            </p>
            <div className="flex flex-wrap gap-3">
              <MinimalClean.Button variant="primary">Primary</MinimalClean.Button>
              <MinimalClean.Button variant="secondary">Secondary</MinimalClean.Button>
              <MinimalClean.Button variant="outline">Outline</MinimalClean.Button>
              <MinimalClean.Button variant="ghost">Ghost</MinimalClean.Button>
              <MinimalClean.Button variant="destructive">Destructive</MinimalClean.Button>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Sizes
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <MinimalClean.Button size="sm">Small</MinimalClean.Button>
              <MinimalClean.Button size="md">Medium</MinimalClean.Button>
              <MinimalClean.Button size="lg">Large</MinimalClean.Button>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              States
            </p>
            <div className="flex flex-wrap gap-3">
              <MinimalClean.Button disabled>Disabled</MinimalClean.Button>
              <MinimalClean.Button fullWidth>Full Width</MinimalClean.Button>
            </div>
          </div>
        </div>
      );

    case "Card":
      return (
        <div className="max-w-md">
          <MinimalClean.Card>
            <MinimalClean.CardHeader>
              <h3 className="text-lg font-medium text-neutral-900">Card Title</h3>
              <p className="text-sm text-neutral-500 mt-1">Card subtitle or description</p>
            </MinimalClean.CardHeader>
            <MinimalClean.CardBody>
              <p className="text-neutral-700">
                This is the main content area of the card. It can contain any type of
                content including text, images, forms, or other components.
              </p>
            </MinimalClean.CardBody>
            <MinimalClean.CardFooter>
              <div className="flex gap-2">
                <MinimalClean.Button variant="outline" size="sm">Cancel</MinimalClean.Button>
                <MinimalClean.Button size="sm">Save</MinimalClean.Button>
              </div>
            </MinimalClean.CardFooter>
          </MinimalClean.Card>
        </div>
      );

    case "Badge":
      return (
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Variants
            </p>
            <div className="flex flex-wrap gap-2">
              <MinimalClean.Badge variant="default">Default</MinimalClean.Badge>
              <MinimalClean.Badge variant="primary">Primary</MinimalClean.Badge>
              <MinimalClean.Badge variant="secondary">Secondary</MinimalClean.Badge>
              <MinimalClean.Badge variant="success">Success</MinimalClean.Badge>
              <MinimalClean.Badge variant="warning">Warning</MinimalClean.Badge>
              <MinimalClean.Badge variant="error">Error</MinimalClean.Badge>
              <MinimalClean.Badge variant="info">Info</MinimalClean.Badge>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              With Dot Indicator
            </p>
            <div className="flex flex-wrap gap-2">
              <MinimalClean.Badge variant="success" dot>Online</MinimalClean.Badge>
              <MinimalClean.Badge variant="warning" dot>Away</MinimalClean.Badge>
              <MinimalClean.Badge variant="error" dot>Offline</MinimalClean.Badge>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Sizes
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <MinimalClean.Badge size="sm">Small</MinimalClean.Badge>
              <MinimalClean.Badge size="md">Medium</MinimalClean.Badge>
              <MinimalClean.Badge size="lg">Large</MinimalClean.Badge>
            </div>
          </div>
        </div>
      );

    case "Alert":
      return (
        <div className="space-y-4 max-w-lg">
          <MinimalClean.Alert variant="info" title="Information">
            This is an informational alert for general messages.
          </MinimalClean.Alert>
          <MinimalClean.Alert variant="success" title="Success">
            Your changes have been saved successfully.
          </MinimalClean.Alert>
          <MinimalClean.Alert variant="warning" title="Warning">
            Please review your settings before continuing.
          </MinimalClean.Alert>
          <MinimalClean.Alert variant="error" title="Error" dismissible>
            Something went wrong. Please try again.
          </MinimalClean.Alert>
        </div>
      );

    case "Typography":
      return <MinimalClean.Typography />;

    case "Form":
      return (
        <div className="max-w-md">
          <MinimalClean.Form />
        </div>
      );

    // Data Display Components
    case "Table":
      return <MinimalClean.TableExample />;

    case "Pagination":
      return <MinimalClean.PaginationExample />;

    // Layout Components
    case "NavigationBar":
      return (
        <MinimalClean.NavigationBar
          logo="InlineUI"
          links={[
            { label: "Home", href: "#", isActive: true },
            { label: "Components", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Docs", href: "#" },
          ]}
          showSearch
          ctaText="Get Started"
        />
      );

    case "HeroSection":
      return (
        <MinimalClean.HeroSection
          heading="Build beautiful interfaces faster"
          subheading="A collection of beautifully designed, production-ready components you can copy and paste into your apps."
          buttons={[
            { label: "Get Started", href: "#", variant: "primary" },
            { label: "View Components", href: "#", variant: "secondary" },
          ]}
        />
      );

    case "Footer":
      return (
        <MinimalClean.Footer
          logo="InlineUI"
          tagline="Beautiful components for modern applications."
          columns={[
            {
              title: "Product",
              links: [
                { label: "Components", href: "#" },
                { label: "Pricing", href: "#" },
                { label: "Changelog", href: "#" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
              ],
            },
          ]}
          socialLinks={[
            { name: "Twitter", href: "#", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
            { name: "GitHub", href: "#", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
          ]}
          copyrightText="2024 InlineUI. All rights reserved."
        />
      );

    case "PricingCard":
      return (
        <div className="max-w-sm">
          <MinimalClean.PricingCard
            planName="Pro"
            price="$29"
            period="month"
            description="For growing teams that need more power."
            features={[
              { text: "Unlimited components", included: true },
              { text: "Priority support", included: true },
              { text: "Custom theming", included: true },
              { text: "White-label license", included: false },
            ]}
            ctaText="Start Free Trial"
            featured
          />
        </div>
      );

    // Interactive Components
    case "Dialog":
      return (
        <MinimalClean.Dialog
          trigger={<MinimalClean.Button>Open Dialog</MinimalClean.Button>}
          title="Dialog Title"
          description="This is a description of the dialog content and purpose."
          footer={
            <>
              <MinimalClean.Button variant="outline">Cancel</MinimalClean.Button>
              <MinimalClean.Button>Confirm</MinimalClean.Button>
            </>
          }
        >
          <p>
            This is the main content of the dialog. You can include any content here
            such as forms, information, or confirmations.
          </p>
        </MinimalClean.Dialog>
      );

    case "DropdownMenu":
      return (
        <MinimalClean.DropdownMenu
          trigger={<MinimalClean.Button variant="outline">Open Menu</MinimalClean.Button>}
          items={[
            { id: "profile", label: "Profile", shortcut: "Ctrl+P" },
            { id: "settings", label: "Settings", shortcut: "Ctrl+," },
            { type: "separator" },
            { id: "help", label: "Help" },
            { id: "logout", label: "Log out" },
          ]}
        />
      );

    case "Tabs":
      return (
        <div className="max-w-lg">
          <MinimalClean.Tabs
            tabs={[
              {
                id: "overview",
                label: "Overview",
                content: (
                  <p>
                    This is the overview tab content. Tabs are useful for organizing
                    related content into separate views.
                  </p>
                ),
              },
              {
                id: "features",
                label: "Features",
                content: (
                  <p>
                    Features tab showcases the key capabilities. Each tab panel can
                    contain any type of content.
                  </p>
                ),
              },
              {
                id: "pricing",
                label: "Pricing",
                content: (
                  <p>
                    Pricing information goes here. Tabs provide a clean way to
                    separate different sections of content.
                  </p>
                ),
              },
            ]}
          />
        </div>
      );

    case "Accordion":
      return (
        <div className="max-w-lg">
          <MinimalClean.Accordion
            items={[
              {
                id: "item-1",
                title: "What is InlineUI?",
                content:
                  "InlineUI is a collection of beautifully designed, production-ready components that you can copy and paste into your applications.",
              },
              {
                id: "item-2",
                title: "How do I get started?",
                content:
                  "Simply browse our component library, select the components you need, and copy the code into your project. Each component is self-contained and easy to customize.",
              },
              {
                id: "item-3",
                title: "Can I customize the styles?",
                content:
                  "Yes! All components are built with Tailwind CSS and are fully customizable. You can modify colors, spacing, typography, and more to match your brand.",
              },
            ]}
          />
        </div>
      );

    case "Toast":
      return (
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Toast notifications are displayed using the ToastProvider and useToast hook.
          </p>
          <MinimalClean.ToastProvider>
            <ToastDemo />
          </MinimalClean.ToastProvider>
        </div>
      );

    case "CommandPalette":
      return <CommandPaletteDemo />;

    default:
      return (
        <div className="text-gray-500 text-sm">
          No demo available for "{componentName}"
        </div>
      );
  }
}

/**
 * Toast demo component that uses the useToast hook
 */
function ToastDemo() {
  const { addToast } = MinimalClean.useToast();

  return (
    <div className="flex flex-wrap gap-2">
      <MinimalClean.Button
        variant="outline"
        size="sm"
        onClick={() =>
          addToast({
            title: "Info",
            description: "This is an informational message.",
            variant: "default",
          })
        }
      >
        Show Default Toast
      </MinimalClean.Button>
      <MinimalClean.Button
        variant="outline"
        size="sm"
        onClick={() =>
          addToast({
            title: "Success",
            description: "Your action was completed successfully.",
            variant: "success",
          })
        }
      >
        Show Success Toast
      </MinimalClean.Button>
      <MinimalClean.Button
        variant="outline"
        size="sm"
        onClick={() =>
          addToast({
            title: "Warning",
            description: "Please review before continuing.",
            variant: "warning",
          })
        }
      >
        Show Warning Toast
      </MinimalClean.Button>
      <MinimalClean.Button
        variant="outline"
        size="sm"
        onClick={() =>
          addToast({
            title: "Error",
            description: "Something went wrong. Please try again.",
            variant: "error",
          })
        }
      >
        Show Error Toast
      </MinimalClean.Button>
    </div>
  );
}

/**
 * CommandPalette demo component with controlled open state
 */
function CommandPaletteDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">
        Click the button below to open the command palette.
      </p>
      <MinimalClean.Button variant="outline" onClick={() => setOpen(true)}>
        Open Command Palette
      </MinimalClean.Button>
      <MinimalClean.CommandPalette
        open={open}
        onOpenChange={setOpen}
        groups={[
          {
            heading: "Navigation",
            items: [
              { id: "home", label: "Go to Home", shortcut: "G H" },
              { id: "components", label: "Go to Components", shortcut: "G C" },
              { id: "docs", label: "Go to Documentation", shortcut: "G D" },
            ],
          },
          {
            heading: "Actions",
            items: [
              { id: "new", label: "Create New Project", shortcut: "Ctrl+N" },
              { id: "search", label: "Search Components", shortcut: "Ctrl+K" },
            ],
          },
        ]}
        onSelect={(id) => {
          console.log("Selected:", id);
          setOpen(false);
        }}
      />
    </div>
  );
}

/**
 * Renders demos using electric-chaos styled components
 */
function ElectricChaosDemo({ componentName }: { componentName: string }) {
  switch (componentName) {
    case "Button":
      return (
        <div className="space-y-6 p-6 bg-black rounded-2xl">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-purple-400">Variants</p>
            <div className="flex flex-wrap gap-3">
              <ElectricChaos.Button variant="primary">Primary</ElectricChaos.Button>
              <ElectricChaos.Button variant="secondary">Secondary</ElectricChaos.Button>
              <ElectricChaos.Button variant="outline">Outline</ElectricChaos.Button>
              <ElectricChaos.Button variant="ghost">Ghost</ElectricChaos.Button>
              <ElectricChaos.Button variant="destructive">Destructive</ElectricChaos.Button>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-pink-400">Sizes</p>
            <div className="flex flex-wrap items-center gap-3">
              <ElectricChaos.Button size="sm">Small</ElectricChaos.Button>
              <ElectricChaos.Button size="md">Medium</ElectricChaos.Button>
              <ElectricChaos.Button size="lg">Large</ElectricChaos.Button>
            </div>
          </div>
        </div>
      );

    case "Card":
      return (
        <div className="max-w-md">
          <ElectricChaos.Card>
            <ElectricChaos.CardHeader>
              <h3 className="text-lg font-bold text-white">Card Title</h3>
              <p className="text-sm text-purple-300 mt-1">Card description</p>
            </ElectricChaos.CardHeader>
            <ElectricChaos.CardBody>
              <p className="text-gray-300">This is the card body content with electric chaos styling.</p>
            </ElectricChaos.CardBody>
            <ElectricChaos.CardFooter>
              <ElectricChaos.Button variant="outline" size="sm">Cancel</ElectricChaos.Button>
              <ElectricChaos.Button size="sm">Save</ElectricChaos.Button>
            </ElectricChaos.CardFooter>
          </ElectricChaos.Card>
        </div>
      );

    case "Badge":
      return (
        <div className="space-y-6 p-6 bg-black rounded-2xl">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">Variants</p>
            <div className="flex flex-wrap gap-2">
              <ElectricChaos.Badge variant="default">Default</ElectricChaos.Badge>
              <ElectricChaos.Badge variant="primary">Primary</ElectricChaos.Badge>
              <ElectricChaos.Badge variant="success">Success</ElectricChaos.Badge>
              <ElectricChaos.Badge variant="warning">Warning</ElectricChaos.Badge>
              <ElectricChaos.Badge variant="error">Error</ElectricChaos.Badge>
            </div>
          </div>
        </div>
      );

    case "Alert":
      return (
        <div className="space-y-4 max-w-lg">
          <ElectricChaos.Alert variant="info" title="Information">
            This is an informational message with chaos.
          </ElectricChaos.Alert>
          <ElectricChaos.Alert variant="success" title="Success">
            Your changes have been saved with style.
          </ElectricChaos.Alert>
          <ElectricChaos.Alert variant="warning" title="Warning">
            Please review before continuing.
          </ElectricChaos.Alert>
          <ElectricChaos.Alert variant="error" title="Error">
            Something went wrong spectacularly.
          </ElectricChaos.Alert>
        </div>
      );

    case "Typography":
      return <ElectricChaos.Typography />;

    case "Form":
      return (
        <div className="max-w-md">
          <ElectricChaos.Form />
        </div>
      );

    case "Table":
      return <ElectricChaos.TableExample />;

    case "Pagination":
      return <ElectricChaos.PaginationExample />;

    case "NavigationBar":
      return (
        <ElectricChaos.NavigationBar
          logo="InlineUI"
          links={[
            { label: "Home", href: "#", isActive: true },
            { label: "Components", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Docs", href: "#" },
          ]}
          showSearch
          ctaText="Get Started"
        />
      );

    case "HeroSection":
      return (
        <ElectricChaos.HeroSection
          heading="Build beautiful interfaces faster"
          subheading="A collection of beautifully designed, production-ready components you can copy and paste into your apps."
          buttons={[
            { label: "Get Started", href: "#", variant: "primary" },
            { label: "View Components", href: "#", variant: "secondary" },
          ]}
        />
      );

    case "Footer":
      return (
        <ElectricChaos.Footer
          logo="InlineUI"
          tagline="Beautiful components for modern applications."
          columns={[
            {
              title: "Product",
              links: [
                { label: "Components", href: "#" },
                { label: "Pricing", href: "#" },
                { label: "Changelog", href: "#" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
              ],
            },
          ]}
          socialLinks={[
            { name: "Twitter", href: "#", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
            { name: "GitHub", href: "#", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
          ]}
          copyrightText="2024 InlineUI. All rights reserved."
        />
      );

    case "PricingCard":
      return (
        <div className="max-w-sm">
          <ElectricChaos.PricingCard
            planName="Pro"
            price="$29"
            period="month"
            description="For growing teams that need more power."
            features={[
              { text: "Unlimited components", included: true },
              { text: "Priority support", included: true },
              { text: "Custom theming", included: true },
              { text: "White-label license", included: false },
            ]}
            ctaText="Start Free Trial"
            featured
          />
        </div>
      );

    case "Dialog":
      return (
        <div className="p-6 bg-black rounded-2xl">
          <ElectricChaos.Dialog
            trigger={<ElectricChaos.Button>Open Dialog</ElectricChaos.Button>}
            title="Dialog Title"
            description="This is a chaotic dialog description."
          >
            <p className="text-gray-300">Dialog content goes here with maximum chaos.</p>
          </ElectricChaos.Dialog>
        </div>
      );

    case "DropdownMenu":
      return (
        <div className="p-6 bg-black rounded-2xl">
          <ElectricChaos.DropdownMenu
            trigger={<ElectricChaos.Button variant="outline">Open Menu</ElectricChaos.Button>}
            items={[
              { id: "profile", label: "Profile", shortcut: "Ctrl+P" },
              { id: "settings", label: "Settings", shortcut: "Ctrl+," },
              { type: "separator" },
              { id: "logout", label: "Log out" },
            ]}
          />
        </div>
      );

    case "Tabs":
      return (
        <div className="max-w-lg">
          <ElectricChaos.Tabs
            tabs={[
              { id: "overview", label: "Overview", content: <p className="text-gray-300">Overview content with chaos.</p> },
              { id: "features", label: "Features", content: <p className="text-gray-300">Features content explodes here.</p> },
              { id: "pricing", label: "Pricing", content: <p className="text-gray-300">Pricing that pops.</p> },
            ]}
          />
        </div>
      );

    case "Accordion":
      return (
        <div className="max-w-lg">
          <ElectricChaos.Accordion
            items={[
              { id: "item-1", title: "What is InlineUI?", content: "InlineUI is chaos in component form." },
              { id: "item-2", title: "How do I get started?", content: "Just dive in headfirst." },
              { id: "item-3", title: "Can I customize?", content: "Everything explodes with possibility." },
            ]}
          />
        </div>
      );

    case "Toast":
      return (
        <div className="space-y-4 p-6 bg-black rounded-2xl">
          <p className="text-sm text-purple-300">Click to unleash chaos notifications.</p>
          <ElectricChaos.ToastProvider>
            <ElectricChaosToastDemo />
          </ElectricChaos.ToastProvider>
        </div>
      );

    case "CommandPalette":
      return <ElectricChaosCommandPaletteDemo />;

    default:
      return (
        <div className="text-purple-400 text-sm p-6 bg-black rounded-2xl">
          No demo available for "{componentName}"
        </div>
      );
  }
}

function ElectricChaosToastDemo() {
  const { addToast } = ElectricChaos.useToast();
  return (
    <div className="flex flex-wrap gap-2">
      <ElectricChaos.Button variant="outline" size="sm" onClick={() => addToast({ title: "CHAOS", description: "Maximum chaos achieved.", variant: "default" })}>
        Show Toast
      </ElectricChaos.Button>
      <ElectricChaos.Button variant="secondary" size="sm" onClick={() => addToast({ title: "SUCCESS", description: "Nailed it.", variant: "success" })}>
        Success Toast
      </ElectricChaos.Button>
    </div>
  );
}

function ElectricChaosCommandPaletteDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="space-y-4 p-6 bg-black rounded-2xl">
      <ElectricChaos.Button variant="primary" onClick={() => setOpen(true)}>
        Open Command Palette
      </ElectricChaos.Button>
      <ElectricChaos.CommandPalette
        open={open}
        onOpenChange={setOpen}
        groups={[
          {
            heading: "Navigation",
            items: [
              { id: "home", label: "Go to Home", shortcut: "G H" },
              { id: "components", label: "Go to Components", shortcut: "G C" },
            ],
          },
        ]}
        onSelect={() => setOpen(false)}
      />
    </div>
  );
}

/**
 * Renders demos using corporate-classic styled components
 */
function CorporateClassicDemo({ componentName }: { componentName: string }) {
  switch (componentName) {
    case "Button":
      return (
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Variants</p>
            <div className="flex flex-wrap gap-3">
              <CorporateClassic.Button variant="primary">Primary</CorporateClassic.Button>
              <CorporateClassic.Button variant="secondary">Secondary</CorporateClassic.Button>
              <CorporateClassic.Button variant="outline">Outline</CorporateClassic.Button>
              <CorporateClassic.Button variant="ghost">Ghost</CorporateClassic.Button>
              <CorporateClassic.Button variant="destructive">Destructive</CorporateClassic.Button>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Sizes</p>
            <div className="flex flex-wrap items-center gap-3">
              <CorporateClassic.Button size="sm">Small</CorporateClassic.Button>
              <CorporateClassic.Button size="md">Medium</CorporateClassic.Button>
              <CorporateClassic.Button size="lg">Large</CorporateClassic.Button>
            </div>
          </div>
        </div>
      );

    case "Card":
      return (
        <div className="max-w-md">
          <CorporateClassic.Card>
            <CorporateClassic.CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Card Title</h3>
              <p className="text-sm text-gray-500 mt-1">Card description</p>
            </CorporateClassic.CardHeader>
            <CorporateClassic.CardBody>
              <p className="text-gray-700">This is the card body content with corporate classic styling.</p>
            </CorporateClassic.CardBody>
            <CorporateClassic.CardFooter>
              <CorporateClassic.Button variant="outline" size="sm">Cancel</CorporateClassic.Button>
              <CorporateClassic.Button size="sm">Save</CorporateClassic.Button>
            </CorporateClassic.CardFooter>
          </CorporateClassic.Card>
        </div>
      );

    case "Badge":
      return (
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Variants</p>
            <div className="flex flex-wrap gap-2">
              <CorporateClassic.Badge variant="default">Default</CorporateClassic.Badge>
              <CorporateClassic.Badge variant="primary">Primary</CorporateClassic.Badge>
              <CorporateClassic.Badge variant="success">Success</CorporateClassic.Badge>
              <CorporateClassic.Badge variant="warning">Warning</CorporateClassic.Badge>
              <CorporateClassic.Badge variant="error">Error</CorporateClassic.Badge>
            </div>
          </div>
        </div>
      );

    case "Alert":
      return (
        <div className="space-y-4 max-w-lg">
          <CorporateClassic.Alert variant="info" title="Information">
            This is an informational message.
          </CorporateClassic.Alert>
          <CorporateClassic.Alert variant="success" title="Success">
            Your changes have been saved.
          </CorporateClassic.Alert>
          <CorporateClassic.Alert variant="warning" title="Warning">
            Please review before continuing.
          </CorporateClassic.Alert>
          <CorporateClassic.Alert variant="error" title="Error">
            Something went wrong.
          </CorporateClassic.Alert>
        </div>
      );

    case "Typography":
      return <CorporateClassic.Typography />;

    case "Form":
      return (
        <div className="max-w-md">
          <CorporateClassic.Form />
        </div>
      );

    case "Table":
      return <CorporateClassic.TableExample />;

    case "Pagination":
      return <CorporateClassic.PaginationExample />;

    case "NavigationBar":
      return (
        <CorporateClassic.NavigationBar
          logo="InlineUI"
          links={[
            { label: "Home", href: "#", isActive: true },
            { label: "Components", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Docs", href: "#" },
          ]}
          showSearch
          ctaText="Get Started"
        />
      );

    case "HeroSection":
      return (
        <CorporateClassic.HeroSection
          heading="Build beautiful interfaces faster"
          subheading="A collection of beautifully designed, production-ready components you can copy and paste into your apps."
          buttons={[
            { label: "Get Started", href: "#", variant: "primary" },
            { label: "View Components", href: "#", variant: "secondary" },
          ]}
        />
      );

    case "Footer":
      return (
        <CorporateClassic.Footer
          logo="InlineUI"
          tagline="Beautiful components for modern applications."
          columns={[
            {
              title: "Product",
              links: [
                { label: "Components", href: "#" },
                { label: "Pricing", href: "#" },
                { label: "Changelog", href: "#" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
              ],
            },
          ]}
          socialLinks={[
            { name: "Twitter", href: "#", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
            { name: "GitHub", href: "#", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
          ]}
          copyrightText="2024 InlineUI. All rights reserved."
        />
      );

    case "PricingCard":
      return (
        <div className="max-w-sm">
          <CorporateClassic.PricingCard
            planName="Pro"
            price="$29"
            period="month"
            description="For growing teams that need more power."
            features={[
              { text: "Unlimited components", included: true },
              { text: "Priority support", included: true },
              { text: "Custom theming", included: true },
              { text: "White-label license", included: false },
            ]}
            ctaText="Start Free Trial"
            featured
          />
        </div>
      );

    case "Dialog":
      return (
        <CorporateClassic.Dialog
          trigger={<CorporateClassic.Button>Open Dialog</CorporateClassic.Button>}
          title="Dialog Title"
          description="This is a dialog description."
        >
          <p>Dialog content goes here.</p>
        </CorporateClassic.Dialog>
      );

    case "DropdownMenu":
      return (
        <CorporateClassic.DropdownMenu
          trigger={<CorporateClassic.Button variant="outline">Open Menu</CorporateClassic.Button>}
          items={[
            { id: "profile", label: "Profile", shortcut: "Ctrl+P" },
            { id: "settings", label: "Settings", shortcut: "Ctrl+," },
            { type: "separator" },
            { id: "logout", label: "Log out" },
          ]}
        />
      );

    case "Tabs":
      return (
        <div className="max-w-lg">
          <CorporateClassic.Tabs
            tabs={[
              { id: "overview", label: "Overview", content: <p>Overview content</p> },
              { id: "features", label: "Features", content: <p>Features content</p> },
              { id: "pricing", label: "Pricing", content: <p>Pricing content</p> },
            ]}
          />
        </div>
      );

    case "Accordion":
      return (
        <div className="max-w-lg">
          <CorporateClassic.Accordion
            items={[
              { id: "item-1", title: "What is InlineUI?", content: "InlineUI is a component library." },
              { id: "item-2", title: "How do I get started?", content: "Just browse and copy components." },
              { id: "item-3", title: "Can I customize?", content: "Yes, everything is customizable." },
            ]}
          />
        </div>
      );

    case "Toast":
      return (
        <CorporateClassic.ToastProvider>
          <CorporateClassicToastDemo />
        </CorporateClassic.ToastProvider>
      );

    case "CommandPalette":
      return <CorporateClassicCommandPaletteDemo />;

    default:
      return (
        <div className="text-gray-500 text-sm">
          No demo available for "{componentName}"
        </div>
      );
  }
}

function CorporateClassicToastDemo() {
  const { addToast } = CorporateClassic.useToast();
  return (
    <div className="flex flex-wrap gap-2">
      <CorporateClassic.Button variant="outline" size="sm" onClick={() => addToast({ title: "Info", description: "Informational message.", variant: "default" })}>
        Show Toast
      </CorporateClassic.Button>
      <CorporateClassic.Button variant="outline" size="sm" onClick={() => addToast({ title: "Success", description: "Action completed.", variant: "success" })}>
        Success Toast
      </CorporateClassic.Button>
    </div>
  );
}

function CorporateClassicCommandPaletteDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="space-y-4">
      <CorporateClassic.Button variant="outline" onClick={() => setOpen(true)}>
        Open Command Palette
      </CorporateClassic.Button>
      <CorporateClassic.CommandPalette
        open={open}
        onOpenChange={setOpen}
        groups={[
          {
            heading: "Navigation",
            items: [
              { id: "home", label: "Go to Home" },
              { id: "components", label: "Go to Components" },
            ],
          },
        ]}
        onSelect={() => setOpen(false)}
      />
    </div>
  );
}

/**
 * Renders demos using startup-modern styled components
 */
function StartupModernDemo({ componentName }: { componentName: string }) {
  switch (componentName) {
    case "Button":
      return (
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Variants</p>
            <div className="flex flex-wrap gap-3">
              <StartupModern.Button variant="primary">Primary</StartupModern.Button>
              <StartupModern.Button variant="secondary">Secondary</StartupModern.Button>
              <StartupModern.Button variant="outline">Outline</StartupModern.Button>
              <StartupModern.Button variant="ghost">Ghost</StartupModern.Button>
              <StartupModern.Button variant="destructive">Destructive</StartupModern.Button>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Sizes</p>
            <div className="flex flex-wrap items-center gap-3">
              <StartupModern.Button size="sm">Small</StartupModern.Button>
              <StartupModern.Button size="md">Medium</StartupModern.Button>
              <StartupModern.Button size="lg">Large</StartupModern.Button>
            </div>
          </div>
        </div>
      );

    case "Card":
      return (
        <div className="max-w-md">
          <StartupModern.Card>
            <StartupModern.CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Card Title</h3>
              <p className="text-sm text-gray-500 mt-1">Card description</p>
            </StartupModern.CardHeader>
            <StartupModern.CardBody>
              <p className="text-gray-700">This is the card body content with startup modern styling.</p>
            </StartupModern.CardBody>
            <StartupModern.CardFooter>
              <StartupModern.Button variant="outline" size="sm">Cancel</StartupModern.Button>
              <StartupModern.Button size="sm">Save</StartupModern.Button>
            </StartupModern.CardFooter>
          </StartupModern.Card>
        </div>
      );

    case "Badge":
      return (
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Variants</p>
            <div className="flex flex-wrap gap-2">
              <StartupModern.Badge variant="default">Default</StartupModern.Badge>
              <StartupModern.Badge variant="primary">Primary</StartupModern.Badge>
              <StartupModern.Badge variant="success">Success</StartupModern.Badge>
              <StartupModern.Badge variant="warning">Warning</StartupModern.Badge>
              <StartupModern.Badge variant="error">Error</StartupModern.Badge>
            </div>
          </div>
        </div>
      );

    case "Alert":
      return (
        <div className="space-y-4 max-w-lg">
          <StartupModern.Alert variant="info" title="Information">
            This is an informational message.
          </StartupModern.Alert>
          <StartupModern.Alert variant="success" title="Success">
            Your changes have been saved.
          </StartupModern.Alert>
          <StartupModern.Alert variant="warning" title="Warning">
            Please review before continuing.
          </StartupModern.Alert>
          <StartupModern.Alert variant="error" title="Error">
            Something went wrong.
          </StartupModern.Alert>
        </div>
      );

    case "Typography":
      return <StartupModern.Typography />;

    case "Form":
      return (
        <div className="max-w-md">
          <StartupModern.Form />
        </div>
      );

    case "Table":
      return <StartupModern.TableExample />;

    case "Pagination":
      return <StartupModern.PaginationExample />;

    case "NavigationBar":
      return (
        <StartupModern.NavigationBar
          logo="InlineUI"
          links={[
            { label: "Home", href: "#", isActive: true },
            { label: "Components", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Docs", href: "#" },
          ]}
          showSearch
          ctaText="Get Started"
        />
      );

    case "HeroSection":
      return (
        <StartupModern.HeroSection
          heading="Build beautiful interfaces faster"
          subheading="A collection of beautifully designed, production-ready components you can copy and paste into your apps."
          buttons={[
            { label: "Get Started", href: "#", variant: "primary" },
            { label: "View Components", href: "#", variant: "secondary" },
          ]}
        />
      );

    case "Footer":
      return (
        <StartupModern.Footer
          logo="InlineUI"
          tagline="Beautiful components for modern applications."
          columns={[
            {
              title: "Product",
              links: [
                { label: "Components", href: "#" },
                { label: "Pricing", href: "#" },
                { label: "Changelog", href: "#" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
              ],
            },
          ]}
          socialLinks={[
            { name: "Twitter", href: "#", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
            { name: "GitHub", href: "#", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
          ]}
          copyrightText="2024 InlineUI. All rights reserved."
        />
      );

    case "PricingCard":
      return (
        <div className="max-w-sm">
          <StartupModern.PricingCard
            planName="Pro"
            price="$29"
            period="month"
            description="For growing teams that need more power."
            features={[
              { text: "Unlimited components", included: true },
              { text: "Priority support", included: true },
              { text: "Custom theming", included: true },
              { text: "White-label license", included: false },
            ]}
            ctaText="Start Free Trial"
            featured
          />
        </div>
      );

    case "Dialog":
      return (
        <StartupModern.Dialog
          trigger={<StartupModern.Button>Open Dialog</StartupModern.Button>}
          title="Dialog Title"
          description="This is a dialog description."
        >
          <p>Dialog content goes here.</p>
        </StartupModern.Dialog>
      );

    case "DropdownMenu":
      return (
        <StartupModern.DropdownMenu
          trigger={<StartupModern.Button variant="outline">Open Menu</StartupModern.Button>}
          items={[
            { id: "profile", label: "Profile", shortcut: "Ctrl+P" },
            { id: "settings", label: "Settings", shortcut: "Ctrl+," },
            { type: "separator" },
            { id: "logout", label: "Log out" },
          ]}
        />
      );

    case "Tabs":
      return (
        <div className="max-w-lg">
          <StartupModern.Tabs
            tabs={[
              { id: "overview", label: "Overview", content: <p>Overview content</p> },
              { id: "features", label: "Features", content: <p>Features content</p> },
              { id: "pricing", label: "Pricing", content: <p>Pricing content</p> },
            ]}
          />
        </div>
      );

    case "Accordion":
      return (
        <div className="max-w-lg">
          <StartupModern.Accordion
            items={[
              { id: "item-1", title: "What is InlineUI?", content: "InlineUI is a component library." },
              { id: "item-2", title: "How do I get started?", content: "Just browse and copy components." },
              { id: "item-3", title: "Can I customize?", content: "Yes, everything is customizable." },
            ]}
          />
        </div>
      );

    case "Toast":
      return (
        <StartupModern.ToastProvider>
          <StartupModernToastDemo />
        </StartupModern.ToastProvider>
      );

    case "CommandPalette":
      return <StartupModernCommandPaletteDemo />;

    default:
      return (
        <div className="text-gray-500 text-sm">
          No demo available for "{componentName}"
        </div>
      );
  }
}

function StartupModernToastDemo() {
  const { addToast } = StartupModern.useToast();
  return (
    <div className="flex flex-wrap gap-2">
      <StartupModern.Button variant="outline" size="sm" onClick={() => addToast({ title: "Info", description: "Informational message.", variant: "default" })}>
        Show Toast
      </StartupModern.Button>
      <StartupModern.Button variant="outline" size="sm" onClick={() => addToast({ title: "Success", description: "Action completed.", variant: "success" })}>
        Success Toast
      </StartupModern.Button>
    </div>
  );
}

function StartupModernCommandPaletteDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="space-y-4">
      <StartupModern.Button variant="outline" onClick={() => setOpen(true)}>
        Open Command Palette
      </StartupModern.Button>
      <StartupModern.CommandPalette
        open={open}
        onOpenChange={setOpen}
        groups={[
          {
            heading: "Navigation",
            items: [
              { id: "home", label: "Go to Home" },
              { id: "components", label: "Go to Components" },
            ],
          },
        ]}
        onSelect={() => setOpen(false)}
      />
    </div>
  );
}

/**
 * Renders demos using editorial styled components
 */
function EditorialDemo({ componentName }: { componentName: string }) {
  switch (componentName) {
    case "Button":
      return (
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Variants</p>
            <div className="flex flex-wrap gap-3">
              <Editorial.Button variant="primary">Primary</Editorial.Button>
              <Editorial.Button variant="secondary">Secondary</Editorial.Button>
              <Editorial.Button variant="outline">Outline</Editorial.Button>
              <Editorial.Button variant="ghost">Ghost</Editorial.Button>
              <Editorial.Button variant="destructive">Destructive</Editorial.Button>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Sizes</p>
            <div className="flex flex-wrap items-center gap-3">
              <Editorial.Button size="sm">Small</Editorial.Button>
              <Editorial.Button size="md">Medium</Editorial.Button>
              <Editorial.Button size="lg">Large</Editorial.Button>
            </div>
          </div>
        </div>
      );

    case "Card":
      return (
        <div className="max-w-md">
          <Editorial.Card>
            <Editorial.CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Card Title</h3>
              <p className="text-sm text-gray-500 mt-1">Card description</p>
            </Editorial.CardHeader>
            <Editorial.CardBody>
              <p className="text-gray-700">This is the card body content with editorial styling.</p>
            </Editorial.CardBody>
            <Editorial.CardFooter>
              <Editorial.Button variant="outline" size="sm">Cancel</Editorial.Button>
              <Editorial.Button size="sm">Save</Editorial.Button>
            </Editorial.CardFooter>
          </Editorial.Card>
        </div>
      );

    case "Badge":
      return (
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Variants</p>
            <div className="flex flex-wrap gap-2">
              <Editorial.Badge variant="default">Default</Editorial.Badge>
              <Editorial.Badge variant="primary">Primary</Editorial.Badge>
              <Editorial.Badge variant="success">Success</Editorial.Badge>
              <Editorial.Badge variant="warning">Warning</Editorial.Badge>
              <Editorial.Badge variant="error">Error</Editorial.Badge>
            </div>
          </div>
        </div>
      );

    case "Alert":
      return (
        <div className="space-y-4 max-w-lg">
          <Editorial.Alert variant="info" title="Information">
            This is an informational message.
          </Editorial.Alert>
          <Editorial.Alert variant="success" title="Success">
            Your changes have been saved.
          </Editorial.Alert>
          <Editorial.Alert variant="warning" title="Warning">
            Please review before continuing.
          </Editorial.Alert>
          <Editorial.Alert variant="error" title="Error">
            Something went wrong.
          </Editorial.Alert>
        </div>
      );

    case "Typography":
      return <Editorial.Typography />;

    case "Form":
      return (
        <div className="max-w-md">
          <Editorial.Form />
        </div>
      );

    case "Table":
      return <Editorial.TableExample />;

    case "Pagination":
      return <Editorial.PaginationExample />;

    case "NavigationBar":
      return (
        <Editorial.NavigationBar
          logo="InlineUI"
          links={[
            { label: "Home", href: "#", isActive: true },
            { label: "Components", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Docs", href: "#" },
          ]}
          showSearch
          ctaText="Get Started"
        />
      );

    case "HeroSection":
      return (
        <Editorial.HeroSection
          heading="Build beautiful interfaces faster"
          subheading="A collection of beautifully designed, production-ready components you can copy and paste into your apps."
          buttons={[
            { label: "Get Started", href: "#", variant: "primary" },
            { label: "View Components", href: "#", variant: "secondary" },
          ]}
        />
      );

    case "Footer":
      return (
        <Editorial.Footer
          logo="InlineUI"
          tagline="Beautiful components for modern applications."
          columns={[
            {
              title: "Product",
              links: [
                { label: "Components", href: "#" },
                { label: "Pricing", href: "#" },
                { label: "Changelog", href: "#" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
              ],
            },
          ]}
          socialLinks={[
            { name: "Twitter", href: "#", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
            { name: "GitHub", href: "#", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
          ]}
          copyrightText="2024 InlineUI. All rights reserved."
        />
      );

    case "PricingCard":
      return (
        <div className="max-w-sm">
          <Editorial.PricingCard
            planName="Pro"
            price="$29"
            period="month"
            description="For growing teams that need more power."
            features={[
              { text: "Unlimited components", included: true },
              { text: "Priority support", included: true },
              { text: "Custom theming", included: true },
              { text: "White-label license", included: false },
            ]}
            ctaText="Start Free Trial"
            featured
          />
        </div>
      );

    case "Dialog":
      return (
        <Editorial.Dialog
          trigger={<Editorial.Button>Open Dialog</Editorial.Button>}
          title="Dialog Title"
          description="This is a dialog description."
        >
          <p>Dialog content goes here.</p>
        </Editorial.Dialog>
      );

    case "DropdownMenu":
      return (
        <Editorial.DropdownMenu
          trigger={<Editorial.Button variant="outline">Open Menu</Editorial.Button>}
          items={[
            { id: "profile", label: "Profile", shortcut: "Ctrl+P" },
            { id: "settings", label: "Settings", shortcut: "Ctrl+," },
            { type: "separator" },
            { id: "logout", label: "Log out" },
          ]}
        />
      );

    case "Tabs":
      return (
        <div className="max-w-lg">
          <Editorial.Tabs
            tabs={[
              { id: "overview", label: "Overview", content: <p>Overview content</p> },
              { id: "features", label: "Features", content: <p>Features content</p> },
              { id: "pricing", label: "Pricing", content: <p>Pricing content</p> },
            ]}
          />
        </div>
      );

    case "Accordion":
      return (
        <div className="max-w-lg">
          <Editorial.Accordion
            items={[
              { id: "item-1", title: "What is InlineUI?", content: "InlineUI is a component library." },
              { id: "item-2", title: "How do I get started?", content: "Just browse and copy components." },
              { id: "item-3", title: "Can I customize?", content: "Yes, everything is customizable." },
            ]}
          />
        </div>
      );

    case "Toast":
      return (
        <Editorial.ToastProvider>
          <EditorialToastDemo />
        </Editorial.ToastProvider>
      );

    case "CommandPalette":
      return <EditorialCommandPaletteDemo />;

    default:
      return (
        <div className="text-gray-500 text-sm">
          No demo available for "{componentName}"
        </div>
      );
  }
}

function EditorialToastDemo() {
  const { addToast } = Editorial.useToast();
  return (
    <div className="flex flex-wrap gap-2">
      <Editorial.Button variant="outline" size="sm" onClick={() => addToast({ title: "Info", description: "Informational message.", variant: "default" })}>
        Show Toast
      </Editorial.Button>
      <Editorial.Button variant="outline" size="sm" onClick={() => addToast({ title: "Success", description: "Action completed.", variant: "success" })}>
        Success Toast
      </Editorial.Button>
    </div>
  );
}

function EditorialCommandPaletteDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="space-y-4">
      <Editorial.Button variant="outline" onClick={() => setOpen(true)}>
        Open Command Palette
      </Editorial.Button>
      <Editorial.CommandPalette
        open={open}
        onOpenChange={setOpen}
        groups={[
          {
            heading: "Navigation",
            items: [
              { id: "home", label: "Go to Home" },
              { id: "components", label: "Go to Components" },
            ],
          },
        ]}
        onSelect={() => setOpen(false)}
      />
    </div>
  );
}

/**
 * Renders demos using fintech-precision styled components
 */
function FintechPrecisionDemo({ componentName }: { componentName: string }) {
  switch (componentName) {
    case "Button":
      return (
        <div className="space-y-6 p-6 bg-neutral-950 rounded-lg">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">Variants</p>
            <div className="flex flex-wrap gap-3">
              <FintechPrecision.Button variant="primary">Primary</FintechPrecision.Button>
              <FintechPrecision.Button variant="secondary">Secondary</FintechPrecision.Button>
              <FintechPrecision.Button variant="outline">Outline</FintechPrecision.Button>
              <FintechPrecision.Button variant="ghost">Ghost</FintechPrecision.Button>
              <FintechPrecision.Button variant="destructive">Destructive</FintechPrecision.Button>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">Sizes</p>
            <div className="flex flex-wrap items-center gap-3">
              <FintechPrecision.Button size="sm">Small</FintechPrecision.Button>
              <FintechPrecision.Button size="md">Medium</FintechPrecision.Button>
              <FintechPrecision.Button size="lg">Large</FintechPrecision.Button>
            </div>
          </div>
        </div>
      );

    case "Card":
      return (
        <div className="max-w-md">
          <FintechPrecision.Card>
            <FintechPrecision.CardHeader>
              <h3 className="text-lg font-semibold text-white">Card Title</h3>
              <p className="text-sm text-neutral-400 mt-1">Card description</p>
            </FintechPrecision.CardHeader>
            <FintechPrecision.CardBody>
              <p className="text-neutral-300">This is the card body content with fintech precision styling.</p>
            </FintechPrecision.CardBody>
            <FintechPrecision.CardFooter>
              <FintechPrecision.Button variant="outline" size="sm">Cancel</FintechPrecision.Button>
              <FintechPrecision.Button size="sm">Save</FintechPrecision.Button>
            </FintechPrecision.CardFooter>
          </FintechPrecision.Card>
        </div>
      );

    case "Badge":
      return (
        <div className="space-y-6 p-6 bg-neutral-950 rounded-lg">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">Variants</p>
            <div className="flex flex-wrap gap-2">
              <FintechPrecision.Badge variant="default">Default</FintechPrecision.Badge>
              <FintechPrecision.Badge variant="primary">Primary</FintechPrecision.Badge>
              <FintechPrecision.Badge variant="success">Success</FintechPrecision.Badge>
              <FintechPrecision.Badge variant="warning">Warning</FintechPrecision.Badge>
              <FintechPrecision.Badge variant="error">Error</FintechPrecision.Badge>
            </div>
          </div>
        </div>
      );

    case "Alert":
      return (
        <div className="space-y-4 max-w-lg">
          <FintechPrecision.Alert variant="info" title="Information">
            This is an informational message.
          </FintechPrecision.Alert>
          <FintechPrecision.Alert variant="success" title="Success">
            Your changes have been saved.
          </FintechPrecision.Alert>
          <FintechPrecision.Alert variant="warning" title="Warning">
            Please review before continuing.
          </FintechPrecision.Alert>
          <FintechPrecision.Alert variant="error" title="Error">
            Something went wrong.
          </FintechPrecision.Alert>
        </div>
      );

    case "Typography":
      return <FintechPrecision.Typography />;

    case "Form":
      return (
        <div className="max-w-md">
          <FintechPrecision.Form />
        </div>
      );

    case "Table":
      return <FintechPrecision.TableExample />;

    case "Pagination":
      return <FintechPrecision.PaginationExample />;

    case "NavigationBar":
      return (
        <FintechPrecision.NavigationBar
          logo="InlineUI"
          links={[
            { label: "Home", href: "#", isActive: true },
            { label: "Components", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Docs", href: "#" },
          ]}
          showSearch
          ctaText="Get Started"
        />
      );

    case "HeroSection":
      return (
        <FintechPrecision.HeroSection
          heading="Build beautiful interfaces faster"
          subheading="A collection of beautifully designed, production-ready components you can copy and paste into your apps."
          buttons={[
            { label: "Get Started", href: "#", variant: "primary" },
            { label: "View Components", href: "#", variant: "secondary" },
          ]}
        />
      );

    case "Footer":
      return (
        <FintechPrecision.Footer
          logo="InlineUI"
          tagline="Beautiful components for modern applications."
          columns={[
            {
              title: "Product",
              links: [
                { label: "Components", href: "#" },
                { label: "Pricing", href: "#" },
                { label: "Changelog", href: "#" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
              ],
            },
          ]}
          socialLinks={[
            { name: "Twitter", href: "#", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
            { name: "GitHub", href: "#", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
          ]}
          copyrightText="2024 InlineUI. All rights reserved."
        />
      );

    case "PricingCard":
      return (
        <div className="max-w-sm">
          <FintechPrecision.PricingCard
            planName="Pro"
            price="$29"
            period="month"
            description="For growing teams that need more power."
            features={[
              { text: "Unlimited components", included: true },
              { text: "Priority support", included: true },
              { text: "Custom theming", included: true },
              { text: "White-label license", included: false },
            ]}
            ctaText="Start Free Trial"
            featured
          />
        </div>
      );

    case "Dialog":
      return (
        <div className="p-6 bg-neutral-950 rounded-lg">
          <FintechPrecision.Dialog
            trigger={<FintechPrecision.Button>Open Dialog</FintechPrecision.Button>}
            title="Dialog Title"
            description="This is a dialog description."
          >
            <p className="text-neutral-300">Dialog content goes here.</p>
          </FintechPrecision.Dialog>
        </div>
      );

    case "DropdownMenu":
      return (
        <div className="p-6 bg-neutral-950 rounded-lg">
          <FintechPrecision.DropdownMenu
            trigger={<FintechPrecision.Button variant="outline">Open Menu</FintechPrecision.Button>}
            items={[
              { id: "profile", label: "Profile", shortcut: "Ctrl+P" },
              { id: "settings", label: "Settings", shortcut: "Ctrl+," },
              { type: "separator" },
              { id: "logout", label: "Log out" },
            ]}
          />
        </div>
      );

    case "Tabs":
      return (
        <div className="max-w-lg">
          <FintechPrecision.Tabs
            tabs={[
              { id: "overview", label: "Overview", content: <p className="text-neutral-300">Overview content</p> },
              { id: "features", label: "Features", content: <p className="text-neutral-300">Features content</p> },
              { id: "pricing", label: "Pricing", content: <p className="text-neutral-300">Pricing content</p> },
            ]}
          />
        </div>
      );

    case "Accordion":
      return (
        <div className="max-w-lg">
          <FintechPrecision.Accordion
            items={[
              { id: "item-1", title: "What is InlineUI?", content: "InlineUI is a component library." },
              { id: "item-2", title: "How do I get started?", content: "Just browse and copy components." },
              { id: "item-3", title: "Can I customize?", content: "Yes, everything is customizable." },
            ]}
          />
        </div>
      );

    case "Toast":
      return (
        <div className="p-6 bg-neutral-950 rounded-lg">
          <FintechPrecision.ToastProvider>
            <FintechPrecisionToastDemo />
          </FintechPrecision.ToastProvider>
        </div>
      );

    case "CommandPalette":
      return <FintechPrecisionCommandPaletteDemo />;

    default:
      return (
        <div className="text-neutral-400 text-sm p-6 bg-neutral-950 rounded-lg">
          No demo available for "{componentName}"
        </div>
      );
  }
}

function FintechPrecisionToastDemo() {
  const { addToast } = FintechPrecision.useToast();
  return (
    <div className="flex flex-wrap gap-2">
      <FintechPrecision.Button variant="outline" size="sm" onClick={() => addToast({ title: "Info", description: "Informational message.", variant: "default" })}>
        Show Toast
      </FintechPrecision.Button>
      <FintechPrecision.Button variant="outline" size="sm" onClick={() => addToast({ title: "Success", description: "Action completed.", variant: "success" })}>
        Success Toast
      </FintechPrecision.Button>
    </div>
  );
}

function FintechPrecisionCommandPaletteDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="space-y-4 p-6 bg-neutral-950 rounded-lg">
      <FintechPrecision.Button variant="outline" onClick={() => setOpen(true)}>
        Open Command Palette
      </FintechPrecision.Button>
      <FintechPrecision.CommandPalette
        open={open}
        onOpenChange={setOpen}
        groups={[
          {
            heading: "Navigation",
            items: [
              { id: "home", label: "Go to Home" },
              { id: "components", label: "Go to Components" },
            ],
          },
        ]}
        onSelect={() => setOpen(false)}
      />
    </div>
  );
}

export default ComponentRenderer;
