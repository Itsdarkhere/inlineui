import { Outlet } from "react-router";
import { Sidebar } from "../components/platform/Sidebar";
import { TopNav } from "../components/platform/TopNav";
import { StyleProvider, type Style } from "../lib";

// Hardcoded styles for now - in the future, parse from .md files
const availableStyles: Style[] = [
  {
    id: "default",
    name: "Default",
    content: "",
    fonts: [],
    price: 0,
  },
  {
    id: "minimal-clean",
    name: "Minimal Clean",
    content: "",
    fonts: ["Inter"],
    price: 0,
  },
  {
    id: "electric-chaos",
    name: "Electric Chaos",
    content: "",
    fonts: ["Space Grotesk", "Unbounded"],
    price: 0,
  },
];

export default function ShowcaseLayout() {
  return (
    <StyleProvider styles={availableStyles} defaultStyleId="default">
      <div className="h-screen flex flex-col bg-white overflow-hidden">
        <TopNav />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-auto hide-scrollbar">
            <Outlet />
          </main>
        </div>
      </div>
    </StyleProvider>
  );
}
