import { NavLink } from "react-router";

const components = [
  { name: "Button", path: "/showcase/button" },
  { name: "Card", path: "/showcase/card" },
  { name: "Typography", path: "/showcase/typography" },
  { name: "Form", path: "/showcase/form" },
  { name: "Table", path: "/showcase/table" },
  { name: "Alert", path: "/showcase/alert" },
  { name: "Dialog", path: "/showcase/dialog" },
  { name: "Dropdown Menu", path: "/showcase/dropdown-menu" },
  { name: "Tabs", path: "/showcase/tabs" },
  { name: "Command Palette", path: "/showcase/command-palette" },
  { name: "Toast", path: "/showcase/toast" },
  { name: "Navigation Bar", path: "/showcase/navigation-bar" },
  { name: "Pricing Card", path: "/showcase/pricing-card" },
  { name: "Badge", path: "/showcase/badge" },
  { name: "Accordion", path: "/showcase/accordion" },
  { name: "Pagination", path: "/showcase/pagination" },
  { name: "Hero Section", path: "/showcase/hero-section" },
  { name: "Footer", path: "/showcase/footer" },
];

export function Sidebar() {
  return (
    <aside
      className="w-[220px] h-full border-r border-[#e5e5e5] bg-white font-sans overflow-y-auto"
      style={{ minHeight: "calc(100vh - 49px)" }}
    >
      <nav className="py-4">
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
