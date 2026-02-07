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
            { platform: "twitter", href: "#" },
            { platform: "github", href: "#" },
          ]}
          copyright="2024 InlineUI. All rights reserved."
        />
      );

    case "PricingCard":
      return (
        <div className="max-w-sm">
          <Harnesses.PricingCard
            name="Pro"
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
            highlighted
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
            { platform: "twitter", href: "#" },
            { platform: "github", href: "#" },
          ]}
          copyright="2024 InlineUI. All rights reserved."
        />
      );

    case "PricingCard":
      return (
        <div className="max-w-sm">
          <MinimalClean.PricingCard
            name="Pro"
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
            highlighted
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
            { platform: "twitter", href: "#" },
            { platform: "github", href: "#" },
          ]}
          copyright="2024 InlineUI. All rights reserved."
        />
      );

    case "PricingCard":
      return (
        <div className="max-w-sm">
          <ElectricChaos.PricingCard
            name="Pro"
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
            highlighted
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

export default ComponentRenderer;
