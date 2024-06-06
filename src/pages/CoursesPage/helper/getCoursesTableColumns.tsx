import { ColumnDef } from "@tanstack/react-table"
import { Play } from "lucide-react"

import { IActiveCourse } from "@/api/courses/getActiveCoursesRequest"
import { ActionsCell } from "@/components/actions-cell"
import { Skeleton } from "@/components/ui/skeleton"

export function getCoursesTableColumns(
  isLoading: boolean
): ColumnDef<IActiveCourse>[] {
  return [
    {
      accessorKey: "_id",
      header: "№",
      cell: ({ row }) => <span>{row.index + 1}</span>,
      size: 60
    },
    {
      accessorKey: "name",
      header: "Kurs nomi",
      accessorFn: (row) => row.name,
      cell(props) {
        if (isLoading) return <Skeleton className="w-full h-4" />
        const value = props.getValue() as string
        return <span>{value}</span>
      },
      size: 300
    },
    {
      accessorKey: "short_description",
      header: "Tavsifi",
      accessorFn: (row) => row.short_description,
      cell(props) {
        if (isLoading) return <Skeleton className="w-full h-4" />
        const value = props.getValue() as string
        return <span>{value}</span>
      },
      size: 400
    },
    {
      accessorKey: "lessons_count",
      header: "Darslar soni",
      accessorFn: (row) => row.lessons_count,
      cell(props) {
        if (isLoading) return <Skeleton className="w-full h-4" />
        const value = props.getValue() as string
        return <span>{value}</span>
      },
      size: 200
    },
    {
      accessorKey: "duration",
      header: "Darslar davomiyligi",
      accessorFn: (row) => row.duration,
      cell(props) {
        if (isLoading) return <Skeleton className="w-full h-4" />
        const value = props.getValue() as string
        return (
          <span className="flex items-center gap-1">
            <Play className="size-4" />
            <span>{value}</span>
          </span>
        )
      },
      size: 400
    },
    {
      accessorKey: "_id",
      header: "Tahrirlash",
      accessorFn: (row) => row.duration,
      cell() {
        return <ActionsCell />
      }
    }
  ]
}
