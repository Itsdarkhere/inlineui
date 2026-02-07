import { NavLink } from "react-router";

const components = [
  { name: "Button", path: "/button" },
  { name: "Card", path: "/card" },
  { name: "Typography", path: "/typography" },
  { name: "Form", path: "/form" },
  { name: "Table", path: "/table" },
  { name: "Alert", path: "/alert" },
  { name: "Dialog", path: "/dialog" },
  { name: "Dropdown Menu", path: "/dropdown-menu" },
  { name: "Tabs", path: "/tabs" },
  { name: "Command Palette", path: "/command-palette" },
  { name: "Toast", path: "/toast" },
  { name: "Navigation Bar", path: "/navigation-bar" },
  { name: "Pricing Card", path: "/pricing-card" },
  { name: "Badge", path: "/badge" },
  { name: "Accordion", path: "/accordion" },
  { name: "Pagination", path: "/pagination" },
  { name: "Hero Section", path: "/hero-section" },
  { name: "Footer", path: "/footer" },
];

export function Sidebar() {
  return (
    <aside className="w-[220px] shrink-0 border-r border-[#e5e5e5] bg-white font-sans overflow-y-auto hide-scrollbar">
      <nav className="py-4">
        {/* Home link */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `block px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "bg-[#111] text-white"
                : "text-[#111] hover:bg-[#e5e5e5]"
            }`
          }
        >
          Overview
        </NavLink>

        {/* Separator */}
        <div className="my-3 mx-4 border-t border-[#e5e5e5]" />

        {/* Components */}
        <div className="px-4 py-1">
          <span className="text-xs font-medium text-[#999] uppercase tracking-wide">Components</span>
        </div>
        <ul className="space-y-0">
          {components.map((component) => (
            <li key={component.path}>
              <NavLink
                to={component.path}
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-[#111] text-white"
                      : "text-[#111] hover:bg-[#e5e5e5]"
                  }`
                }
              >
                {component.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
