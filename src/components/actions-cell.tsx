import { Ellipsis, Eye, Pencil, Trash2 } from "lucide-react"
import { ComponentProps } from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

export function ActionsCell({
  buttonProps,
  contentProps
}: {
  buttonProps?: ComponentProps<typeof Button>
  contentProps?: ComponentProps<typeof DropdownMenuContent>
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="size-8"
          {...buttonProps}
        >
          <Ellipsis className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white dark:bg-black"
        {...contentProps}
      >
        <DropdownMenuItem>
          <Eye className="size-5 mr-2" />
          Ko&apos;rish
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Pencil className="size-[18px] mr-2" />
          O&apos;zgartirish
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-500">
          <Trash2 className="size-5 mr-2" />
          O&apos;chirish
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
