import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@radix-ui/react-tooltip"
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
      <div className="border-b border-gray-200 flex items-center gap-2 h-[56px] px-6">
        <NavLink to="/" className="flex items-center gap-2">
          {isExpanded && (
            <Typography className="font-semibold text-lg">UzChess</Typography>
          )}
          <Dices />
        </NavLink>
      </div>
      <ul className="space-y-2 px-4 pt-4">
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
                  "py-2 px-2 rounded-md w-full"
                )
              }
            >
              <TooltipProvider delayDuration={100}>
                <Tooltip disableHoverableContent>
                  <TooltipTrigger>
                    <item.icon />
                    {isExpanded && (
                      <Typography
                        className="whitespace-nowrap ml-2 font-medium"
                        tag="span"
                      >
                        {item.title}
                      </Typography>
                    )}
                  </TooltipTrigger>
                  {!isExpanded && (
                    <TooltipContent
                      side="right"
                      className="px-2 py-1 rounded-md text-sm bg-gray-700 text-white"
                    >
                      {item.title}
                      <TooltipArrow className="mb-2 fill-gray-700" />
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
