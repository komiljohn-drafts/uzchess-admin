import { LogOut, User, UserCircle } from "lucide-react"
import { ComponentProps, useContext } from "react"

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

  const handleLogout = () => {
    authContextValues?.setIsAuth(false)
    localStorage.removeItem("token")
  }

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
        <DropdownMenuItem className="flex items-center gap-2">
          <User />
          Profil
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleLogout}
          className="flex items-center gap-2"
        >
          <LogOut />
          Chiqish
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
