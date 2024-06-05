import { PanelLeftClose, PanelRightClose } from "lucide-react"
import { useContext } from "react"
import { Outlet } from "react-router-dom"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { UserMenu } from "@/components/user-menu"
import { cn } from "@/lib/utils"
import { SidebarContext, SidebarProvider } from "@/providers/sidebar-provider"

import { Sidebar } from "./Sidebar"

function MainLayoutContent() {
  const contextValues = useContext(SidebarContext)
  const isExpanded = !!contextValues?.isExpanded

  const handleExpand = () => {
    contextValues?.setIsExpanded((p) => !p)
  }

  return (
    <div
      className={cn(
        "grid h-screen transition-all duration-300",
        isExpanded ? "grid-cols-[300px_1fr]" : "grid-cols-[70px_1fr]"
      )}
    >
      <Sidebar />
      <div className="border-l border-gray-200">
        <div className="border-b border-gray-200 h-[56px] flex items-center justify-between px-4">
          <Button variant="outline" className="px-2" onClick={handleExpand}>
            {isExpanded ? <PanelLeftClose /> : <PanelRightClose />}
          </Button>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <UserMenu />
          </div>
        </div>
        <div className="p-4 bg-[#f3f8ff] dark:bg-[#0F0E0E] h-[calc(100vh-56px)]">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export function MainLayout() {
  return (
    <SidebarProvider>
      <MainLayoutContent />
    </SidebarProvider>
  )
}
