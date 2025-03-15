import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../app-sidebar";
import SearchBar from "../search-bar";

const MainLayout = () => {
  return (
    <div className="dark bg-[#0B131E]">
      <SidebarProvider>
        <AppSidebar />

        <main className="px-2">
          <SidebarTrigger className="text-white" />
          <SearchBar />
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default MainLayout;
