import type { Route } from "./+types/showcase.$component";
import { ComponentRenderer } from "../components/platform/ComponentRenderer";

// Map component slugs to display names and renderer keys
const componentMap: Record<string, { name: string; rendererKey: string }> = {
  button: { name: "Button", rendererKey: "Button" },
  card: { name: "Card", rendererKey: "Card" },
  typography: { name: "Typography", rendererKey: "Typography" },
  form: { name: "Form", rendererKey: "Form" },
  table: { name: "Table", rendererKey: "Table" },
  alert: { name: "Alert", rendererKey: "Alert" },
  dialog: { name: "Dialog", rendererKey: "Dialog" },
  "dropdown-menu": { name: "Dropdown Menu", rendererKey: "DropdownMenu" },
  tabs: { name: "Tabs", rendererKey: "Tabs" },
  "command-palette": { name: "Command Palette", rendererKey: "CommandPalette" },
  toast: { name: "Toast", rendererKey: "Toast" },
  "navigation-bar": { name: "Navigation Bar", rendererKey: "NavigationBar" },
  "pricing-card": { name: "Pricing Card", rendererKey: "PricingCard" },
  badge: { name: "Badge", rendererKey: "Badge" },
  accordion: { name: "Accordion", rendererKey: "Accordion" },
  pagination: { name: "Pagination", rendererKey: "Pagination" },
  "hero-section": { name: "Hero Section", rendererKey: "HeroSection" },
  footer: { name: "Footer", rendererKey: "Footer" },
};

export function meta({ params }: Route.MetaArgs) {
  const componentInfo = componentMap[params.component || ""];
  const title = componentInfo ? `${componentInfo.name} - InlineUI` : "Component - InlineUI";
  return [
    { title },
    { name: "description", content: `InlineUI ${componentInfo?.name || "Component"} showcase` },
  ];
}

export default function ShowcaseComponent({ params }: Route.ComponentProps) {
  const componentSlug = params.component || "";
  const componentInfo = componentMap[componentSlug];

  if (!componentInfo) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-semibold text-[#111] mb-4">Component Not Found</h1>
        <p className="text-[#666]">
          The component "{componentSlug}" does not exist.
        </p>
      </div>
    );
  }

  const { name, rendererKey } = componentInfo;

  return (
    <div className="p-8">
      {/* Component Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[#111] mb-2">{name}</h1>
        <p className="text-[#666]">
          Preview and customize the {name} component across different styles.
        </p>
      </div>

      {/* Preview Box */}
      <div className="border border-[#e5e5e5] bg-[#fafafa]">
        <div className="border-b border-[#e5e5e5] px-4 py-3 bg-white">
          <span className="text-sm font-medium text-[#111]">Preview</span>
        </div>
        <div className="p-8 min-h-[300px]">
          <ComponentRenderer componentName={rendererKey} />
        </div>
      </div>
    </div>
  );
}
