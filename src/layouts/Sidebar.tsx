import { Dices } from "lucide-react"
import { useContext } from "react"
import { NavLink } from "react-router-dom"

import Typography from "@/components/ui/typography"
import { menuItems } from "@/lib/menuItems"
import { cn } from "@/lib/utils"
import { SidebarContext } from "@/providers/sidebar-provider"

export function Sidebar() {
  const contextValues = useContext(SidebarContext)
  const isExpanded = !!contextValues?.isExpanded

  return (
    <div>
      <div className="border-b border-gray-200 flex items-center gap-2 h-[56px] px-4">
        <NavLink to="/" className="flex items-center gap-2">
          {isExpanded && (
            <Typography className="font-semibold text-lg">UzChess</Typography>
          )}
          <Dices />
        </NavLink>
      </div>
      <ul className="space-y-2 px-4 pt-6">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className="flex items-center gap-2 whitespace-nowrap"
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                cn(
                  `${isActive ? "bg-blue-50 dark:bg-blue-950" : ""}`,
                  "p-2 rounded-md w-full"
                )
              }
            >
              <item.icon />
              {isExpanded && (
                <Typography className="whitespace-nowrap ml-2" tag="span">
                  {item.title}
                </Typography>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
