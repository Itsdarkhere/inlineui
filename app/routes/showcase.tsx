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
];

export default function ShowcaseLayout() {
  return (
    <StyleProvider styles={availableStyles} defaultStyleId="default">
      <div className="min-h-screen bg-white">
        <TopNav />

        {/* Main Layout */}
        <div className="flex">
          <Sidebar />
          <main className="flex-1 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </StyleProvider>
  );
}
