import { LogOut, User, UserCircle } from "lucide-react"
import { ComponentProps, useContext } from "react"
import { useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { AuthContext } from "@/providers/auth-provider"

export function UserMenu({
  buttonProps,
  contentProps
}: {
  buttonProps?: ComponentProps<typeof Button>
  contentProps?: ComponentProps<typeof DropdownMenuContent>
}) {
  const authContextValues = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" {...buttonProps}>
          <UserCircle />
          <span className="sr-only">User menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white dark:bg-black"
        {...contentProps}
      >
        <DropdownMenuItem
          onClick={() => navigate("/")}
          className="flex items-center gap-2"
        >
          <User />
          Profil
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => authContextValues?.setIsAuth(false)}
          className="flex items-center gap-2"
        >
          <LogOut />
          Chiqish
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
