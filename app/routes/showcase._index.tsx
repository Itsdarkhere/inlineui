import { Link } from "react-router";
import { useStyle } from "../lib";
import { ComponentRenderer } from "../components/platform/ComponentRenderer";

export function meta() {
  return [
    { title: "InlineUI - Style prompts for AI-generated components" },
    { name: "description", content: "Pick a style. Download the .md. Feed it to AI." },
  ];
}

export default function ShowcaseHome() {
  const { styles, activeStyle, setActiveStyle } = useStyle();

  return (
    <div className="p-8">
      {/* Hero */}
      <div className="mb-12">
        <h1 className="text-3xl font-semibold text-[#111] tracking-tight">
          Style prompts for AI-generated components
        </h1>
        <p className="mt-3 text-[#666] max-w-xl">
          Pick a style. Download the .md. Feed it to AI.
          <br />
          Get consistent, beautiful components in any framework.
        </p>

        {/* Style Toggle */}
        <div className="mt-6 flex items-center gap-3">
          <span className="text-sm text-[#666]">Active:</span>
          <div className="flex gap-1">
            {styles.map((style) => (
              <button
                key={style.id}
                onClick={() => setActiveStyle(style.id)}
                className={`px-3 py-1.5 text-sm border transition-colors ${
                  activeStyle?.id === style.id
                    ? "bg-[#111] text-white border-[#111]"
                    : "bg-white text-[#666] border-[#e5e5e5] hover:border-[#111]"
                }`}
              >
                {style.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Component Previews */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ComponentCard title="Button">
          <ComponentRenderer componentName="Button" />
        </ComponentCard>

        <ComponentCard title="Card">
          <ComponentRenderer componentName="Card" />
        </ComponentCard>

        <ComponentCard title="Badge">
          <ComponentRenderer componentName="Badge" />
        </ComponentCard>

        <ComponentCard title="Tabs">
          <ComponentRenderer componentName="Tabs" />
        </ComponentCard>
      </div>

      {/* Browse CTA */}
      <div className="mt-10">
        <p className="text-sm text-[#666]">
          ← Select a component from the sidebar to see the full preview
        </p>
      </div>
    </div>
  );
}

function ComponentCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-[#e5e5e5]">
      <div className="px-4 py-2 border-b border-[#e5e5e5] bg-[#fafafa]">
        <span className="text-xs font-medium text-[#666] uppercase tracking-wide">{title}</span>
      </div>
      <div className="p-6 min-h-[180px] overflow-auto">
        {children}
      </div>
    </div>
  );
}
