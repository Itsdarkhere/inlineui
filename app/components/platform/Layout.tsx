import { TopNav } from './TopNav';

interface LayoutProps {
  sidebar?: React.ReactNode;
  children: React.ReactNode;
}

export function Layout({ sidebar, children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white font-sans">
      <TopNav />

      <div className="flex">
        {/* Sidebar */}
        {sidebar && (
          <aside className="w-64 border-r border-[#e5e5e5] min-h-[calc(100vh-3.5rem)] bg-white">
            {sidebar}
          </aside>
        )}

        {/* Main Content */}
        <main className={`flex-1 ${sidebar ? '' : 'w-full'}`}>
          {children}
        </main>
      </div>
    </div>
  );
}
